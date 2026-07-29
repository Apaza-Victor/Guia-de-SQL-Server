async function includeHTML(selector, path) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch( path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    el.innerHTML = await res.text();
  } catch (err) {
    el.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  includeHTML('#site-header', 'assets/partials/header.html');
  includeHTML('#site-footer', 'assets/partials/footer.html');
});
