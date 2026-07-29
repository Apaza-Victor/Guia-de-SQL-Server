document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.code-block').forEach(block => {
    const btn = document.createElement('button');
    btn.className = 'btn-copy';
    btn.textContent = 'Copiar';
    btn.setAttribute('aria-label', 'Copiar código al portapapeles');
    block.appendChild(btn);

    btn.addEventListener('click', async () => {
      const code = block.querySelector('code');
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.textContent);
        btn.textContent = '✓ Copiado';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copiar';
          btn.classList.remove('copied');
        }, 2000);
      } catch {
        btn.textContent = 'Error';
        setTimeout(() => { btn.textContent = 'Copiar'; }, 2000);
      }
    });
  });
});
