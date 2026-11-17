import type { Locale } from '../domain/routes';

export const contactCopy = {
  en: {
    call: 'Call',
    formHeading: 'Your request',
    formRequired: 'All fields are required.',
    social: 'Social media',
    comingSoon: 'Coming soon',
    whatsapp: 'Chat on WhatsApp',
    whatsappShort: 'WhatsApp',
    email: 'Email',
    send: 'Send quotation request',
    sending: 'Sending…',
    sent: 'Your quotation request was submitted.',
    retry: 'Try again',
    failed:
      'We couldn’t confirm that your request was submitted. Your details are still here. Please try again.',
    limited:
      'The form is receiving too many requests. Please wait a moment and try again.',
    invalid: 'Check the information in this field.',
    required: 'Please complete this field.',
    invalidPhone:
      'Enter a phone number with 7 to 15 digits. You can include the country code.',
    privacyTitle: 'How we use your details',
    privacyText:
      'We use your name, phone number and job details to review your request and contact you about a quotation. Formspree processes and stores the submission and forwards it to our company inbox. Please include only information needed to describe the work.',
    previewUnavailable:
      'Enable JavaScript to review a request on this preview.',
  },
  ar: {
    call: 'اتصل بنا',
    formHeading: 'تفاصيل طلبك',
    formRequired: 'جميع الحقول مطلوبة.',
    social: 'حسابات التواصل الاجتماعي',
    comingSoon: 'قريباً',
    whatsapp: 'راسلنا على واتساب',
    whatsappShort: 'واتساب',
    email: 'البريد الإلكتروني',
    send: 'أرسل طلب عرض السعر',
    sending: 'جارٍ الإرسال…',
    sent: 'تم إرسال طلب عرض السعر.',
    retry: 'حاول مرة أخرى',
    failed:
      'تعذّر التأكد من إرسال طلبك. بياناتك ما زالت في النموذج. يرجى المحاولة مرة أخرى.',
    limited:
      'يتلقى النموذج عدداً كبيراً من الطلبات. يرجى الانتظار قليلاً ثم المحاولة مرة أخرى.',
    invalid: 'يرجى التحقق من البيانات في هذه الخانة.',
    required: 'يرجى إكمال هذه الخانة.',
    invalidPhone: 'أدخل رقم هاتف من 7 إلى 15 رقماً. يمكنك إضافة رمز الدولة.',
    privacyTitle: 'كيف نستخدم بياناتك',
    privacyText:
      'نستخدم اسمك ورقم هاتفك وتفاصيل العمل لمراجعة طلبك والتواصل معك بشأن عرض السعر. تعالج خدمة Formspree الطلب وتخزّنه وترسله إلى بريد الشركة. يرجى إدخال المعلومات اللازمة لوصف العمل فقط.',
    previewUnavailable: 'فعّل جافاسكريبت لمراجعة طلبك في هذه المعاينة.',
  },
} satisfies Record<Locale, Record<string, string>>;
