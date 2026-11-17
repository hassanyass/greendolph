import { contactCopy } from '../config/contact-copy';
import { legacyServiceIds } from '../config/services';
import { sendQuotation } from './quotation-delivery';

type QuoteField = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export class QuoteFormController {
  private readonly copy =
    contactCopy[document.documentElement.lang === 'ar' ? 'ar' : 'en'];
  private pending = false;

  constructor(private readonly form: HTMLFormElement) {
    const button = form.querySelector<HTMLButtonElement>('button[type=submit]');
    if (!button) return;

    this.selectService();
    for (const field of this.fields()) {
      field.addEventListener('invalid', () => {
        if (field.validity.customError) return;
        field.setCustomValidity(
          field.validity.valueMissing
            ? this.copy.required
            : field.name === 'phone'
              ? this.copy.invalidPhone
              : this.copy.invalid,
        );
      });
      field.addEventListener('input', () => field.setCustomValidity(''));
      field.addEventListener('change', () => field.setCustomValidity(''));
    }

    const endpoint = form.getAttribute('action');
    const status = form.querySelector<HTMLElement>('.quote-status');
    const editor = form.querySelector<HTMLElement>('.quote-editor');
    const review = form.querySelector<HTMLElement>('.quote-review');
    const list = review?.querySelector('dl');
    if (!(endpoint && status) && !(review && list)) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this.pending || !this.validateText()) return;
      if (endpoint && status) {
        void this.deliver(endpoint, status, button);
      } else if (review && list) {
        if (editor) editor.hidden = true;
        this.showReview(review, list);
      }
    });
    button.disabled = false;

    review?.querySelector('#edit-request')?.addEventListener('click', () => {
      review.hidden = true;
      if (editor) editor.hidden = false;
      this.fields()[0]?.focus();
    });
  }

  private selectService() {
    const selected = new URLSearchParams(location.search).get('service');
    const alias = Object.entries(legacyServiceIds).find(
      ([id]) => id === selected,
    )?.[1];
    const select = this.form.querySelector<HTMLSelectElement>(
      'select[name=service]',
    );
    const option = [...(select?.options ?? [])].find(
      (entry) => entry.value === (alias ?? selected),
    );
    if (option) option.selected = true;
  }

  private fields() {
    return this.form.querySelectorAll<QuoteField>(
      '.form-grid input, .form-grid select, .form-grid textarea',
    );
  }

  private validateText() {
    for (const field of this.fields()) {
      if (
        (field.name === 'name' || field.name === 'details') &&
        !field.value.trim()
      ) {
        field.setCustomValidity(this.copy.required);
      }
    }
    return this.form.reportValidity();
  }

  private async deliver(
    endpoint: string,
    status: HTMLElement,
    button: HTMLButtonElement,
  ) {
    const groups =
      this.form.querySelectorAll<HTMLFieldSetElement>('.form-grid');
    const data = new FormData(this.form);
    for (const field of this.fields()) data.set(field.name, field.value.trim());

    this.pending = true;
    groups.forEach((group) => (group.disabled = true));
    button.setAttribute('aria-disabled', 'true');
    button.textContent = this.copy.sending;
    status.textContent = this.copy.sending;

    const outcome = await sendQuotation(endpoint, data);
    this.pending = false;
    groups.forEach((group) => (group.disabled = false));
    button.removeAttribute('aria-disabled');
    button.textContent =
      outcome === 'accepted' ? this.copy.send : this.copy.retry;
    status.textContent =
      outcome === 'accepted' ? this.copy.sent : this.copy[outcome];
    if (outcome === 'accepted') this.form.reset();
  }

  private showReview(review: HTMLElement, list: HTMLDListElement) {
    list.replaceChildren();
    for (const field of this.fields()) {
      const term = document.createElement('dt');
      term.textContent =
        field.closest('label')?.querySelector('span')?.textContent ??
        field.name;
      const value = document.createElement('dd');
      value.textContent =
        field instanceof HTMLSelectElement
          ? (field.selectedOptions[0]?.text ?? '')
          : field.value;
      if (field.name === 'phone') value.dir = 'ltr';
      list.append(term, value);
    }
    review.hidden = false;
    review.focus();
    review.scrollIntoView({ block: 'nearest' });
  }
}
