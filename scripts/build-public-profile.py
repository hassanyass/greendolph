"""Prepare the website edition from the owner's approved profile and source bundle.

This is a manual editorial tool, not part of the static website build. Requires
the source bundle's Python dependencies plus pypdf and PyMuPDF for verification.
The internal PDF and its source files are never modified.
"""

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

import fitz
from pypdf import PdfReader, PdfWriter


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, required=True,
                        help='Approved company-profile/source directory')
    parser.add_argument('--original', type=Path, required=True)
    parser.add_argument('--output', type=Path,
                        default=Path('public/downloads/aldolphin-company-profile.pdf'))
    parser.add_argument('--review', type=Path,
                        default=Path('docs/previews/chunk-4'))
    args = parser.parse_args()
    original = args.original.resolve()
    output = args.output.resolve()
    review = args.review.resolve()
    if output == original:
        raise ValueError('The public edition must not overwrite the internal profile.')
    review.mkdir(parents=True, exist_ok=True)
    output.parent.mkdir(parents=True, exist_ok=True)
    before = digest(original)
    reader = PdfReader(original)
    if len(reader.pages) != 18:
        raise ValueError('Expected the approved 18-page final profile; review a changed source first.')
    for page in reader.pages[:17]:
        if re.search(r'x{3,}', page.extract_text() or '', re.I):
            raise ValueError('A placeholder exists before the closing page; editorial review is required.')

    # Reuse the approved fonts, Arabic shaping, logo and corrected house artwork.
    sys.path.insert(0, str(args.source.resolve()))
    from build_profile import Editorial
    from profile_document import Profile, WHITE, LIME

    class PublicClosing(Editorial):
        def __init__(self):
            Profile.__init__(self, str(review / 'public-closing.pdf'))
            self.review_dir = review / 'closing-layout'

    d = PublicClosing()
    d.new_page('Your next space', 'مساحتك القادمة', True, 'closing')
    d.logo('ar', 20, 22, 94, True)
    d.svg('journey-complete-outline.svg', 12, 76, 146, 110)
    d.text('خلّنا نبدأ،\nبمساحتك.', 165, 45, 110, 28,
           'ar', 'SemiBold', WHITE, leading=40)
    d.text('Let’s start with your space.', 165, 88, 110, 13,
           weight='SemiBold', color=LIME, leading=21, align='right')
    end = d.text('من التكييف والتمديدات الفنية إلى الأرضيات والدهانات، ننسّق التفاصيل حول احتياج المكان.',
                 165, 121, 110, 12, 'ar', color=WHITE, leading=20)
    d.text('From AC and technical installations to flooring and painting, we coordinate the details around your space.',
           165, end + 7, 110, 10.5, color=WHITE, leading=16, align='right')
    d.text('خدمات فنية · الإمارات العربية المتحدة', 165, 185, 110, 9,
           'ar', color=LIME)
    d.text('Technical services · United Arab Emirates', 165, 196, 110, 8,
           color=LIME, align='right')
    if any(box['bottom'] > 205 for box in d.text_boxes):
        raise ValueError('Closing text exceeds the page safe area.')
    d.save()

    writer = PdfWriter()
    writer.append(reader, pages=(0, 17), import_outline=True)
    writer.append(PdfReader(d.path), import_outline=True)
    writer.add_metadata({
        '/Title': 'Aldolphin Alakhthar | Company profile | الملف التعريفي',
        '/Author': reader.metadata.author or 'Aldolphin Alakhthar',
        '/Subject': 'English and Arabic company profile - public edition',
    })
    writer.write(output)

    public = PdfReader(output)
    if len(public.pages) != 18 or output.stat().st_size > 25 * 1024 * 1024:
        raise ValueError('Public PDF violates the page-count or static-host asset limit.')
    for page in public.pages:
        if re.search(r'x{3,}', page.extract_text() or '', re.I):
            raise ValueError('Public PDF still contains placeholder contact text.')
        for annotation in page.get('/Annots', []):
            action = annotation.get_object().get('/A', {})
            if re.search(r'x{3,}', str(action.get('/URI', '')), re.I):
                raise ValueError('Public PDF has a placeholder link.')

    # Compare actual page renders, not only extracted text or copied PDF objects.
    with fitz.open(original) as old, fitz.open(output) as new:
        unchanged = []
        for index in range(17):
            a = old[index].get_pixmap(matrix=fitz.Matrix(1, 1), alpha=False)
            b = new[index].get_pixmap(matrix=fitz.Matrix(1, 1), alpha=False)
            unchanged.append(a.width == b.width and a.height == b.height and a.samples == b.samples)
        if not all(unchanged):
            raise ValueError('One of the approved first seventeen pages changed visually.')
    if digest(original) != before:
        raise ValueError('The internal source PDF was unexpectedly modified.')
    result = {
        'pages': len(public.pages), 'bytes': output.stat().st_size,
        'sha256': digest(output), 'originalSha256': before,
        'originalUnchanged': True, 'first17RenderMatches': unchanged,
        'placeholderContacts': 0, 'bookmarks': len(public.outline),
    }
    (review / 'pdf-verification.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
    print(json.dumps(result, indent=2))


if __name__ == '__main__':
    main()
