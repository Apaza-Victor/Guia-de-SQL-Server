async function includeHTML(selector, path, targetHead) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch( path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    var text = await res.text();
    text = text.replace(/<script[\s\S]*?<\/script>/gi, '');
    if (targetHead) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      doc.querySelectorAll('link, meta').forEach(node => {
        document.head.appendChild(node.cloneNode());
      });
      el.innerHTML = doc.body.innerHTML;
    } else {
      el.innerHTML = text;
    }
  } catch (err) {
    el.innerHTML = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  includeHTML('#site-header', 'assets/partials/header.html', true);
  includeHTML('#site-footer', 'assets/partials/footer.html');
});
