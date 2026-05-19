document.documentElement.classList.remove('no-js');

const updateHeaderState = () => {
  document.documentElement.classList.toggle('is-scrolled', window.scrollY > 12);
};

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-menu-toggle]');
  if (!toggle) return;

  const nav = document.querySelector('[data-site-nav]');
  if (!nav) return;

  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.product-form').forEach((form) => {
  const variantData = form.querySelector('[data-product-variants]');
  const idInput = form.querySelector('input[name="id"]');
  const submit = form.querySelector('button[type="submit"]');
  if (!variantData || !idInput || !submit) return;

  const variants = JSON.parse(variantData.textContent);
  const selects = [...form.querySelectorAll('[data-option-index]')];

  const updateVariant = () => {
    const selected = selects.map((select) => select.value);
    const variant = variants.find((item) => selected.every((value, index) => item.options[index] === value));
    if (!variant) return;

    idInput.value = variant.id;
    submit.disabled = !variant.available;
    submit.textContent = variant.available ? 'Add to cart' : 'Sold out';
  };

  selects.forEach((select) => select.addEventListener('change', updateVariant));
});
