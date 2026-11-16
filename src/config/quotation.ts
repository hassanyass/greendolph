const formId = import.meta.env.FORMSPREE_FORM_ID?.trim();
if (formId && !/^[a-z0-9]+$/i.test(formId)) {
  throw new Error('FORMSPREE_FORM_ID must contain the form ID only.');
}

export const quotationEndpoint = formId
  ? `https://formspree.io/f/${formId}`
  : null;
