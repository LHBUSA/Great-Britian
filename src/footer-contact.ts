const footerContactPhone = '1-888-784-3881';
const footerContactEmail = 'sales@proptechusa.ai';

function addFooterContact() {
  const footer = document.querySelector<HTMLElement>('.footer-v2');
  if (!footer || footer.dataset.salesContact === 'true') return;

  const company = footer.querySelector<HTMLElement>('.footer-v2-grid > div:last-child');
  if (!company) return;

  const email = document.createElement('a');
  email.href = `mailto:${footerContactEmail}`;
  email.textContent = footerContactEmail;
  email.setAttribute('aria-label', `Email PropTechUSA sales at ${footerContactEmail}`);

  const phone = document.createElement('a');
  phone.href = 'tel:18887843881';
  phone.textContent = footerContactPhone;
  phone.setAttribute('aria-label', `Call PropTechUSA sales at ${footerContactPhone}`);

  company.append(email, phone);
  footer.dataset.salesContact = 'true';
}

addFooterContact();
