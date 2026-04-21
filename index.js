// ---- Theme toggle ----
(function() {
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem('metro-theme'); } catch(e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) root.classList.add('dark');
  var btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', function() {
    root.classList.toggle('dark');
    try { localStorage.setItem('metro-theme', root.classList.contains('dark') ? 'dark' : 'light'); } catch(e) {}
  });
})();

// ---- Mobile nav toggle ----
(function() {
  var btn = document.getElementById('mobileNavToggle');
  var panel = document.getElementById('mobileNav');
  var iconMenu = document.getElementById('iconMenu');
  var iconClose = document.getElementById('iconClose');
  if (!btn || !panel) return;
  var setOpen = function(open) {
    panel.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (iconMenu) iconMenu.classList.toggle('hidden', open);
    if (iconClose) iconClose.classList.toggle('hidden', !open);
  };
  btn.addEventListener('click', function() {
    setOpen(panel.classList.contains('hidden'));
  });
  // Close when a link is tapped
  panel.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() { setOpen(false); });
  });
  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();

// ---- Bulk enquiry form → WhatsApp ----
(function() {
  var form = document.getElementById('bulkForm');
  if (!form) return;
  var WA_NUMBER = '919971162517';
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var fd = new FormData(form);
    var get = function(k){ return (fd.get(k) || '').toString().trim(); };
    var name = get('name'), phone = get('phone'),
        product = get('product'), message = get('message');
    var err = document.getElementById('formErr');
   console.log(name,phone,message,product)
    if (!name || !phone || !product) {
      if (err) err.classList.remove('hidden');
      return;
    }
    if (err) err.classList.add('hidden');

    var lines = [
      '*Bulk Enquiry — Metro Safety Products*',
      'Name: ' + name,
      'Phone: ' + phone,
      'Product: ' + product,
      'Message: ' + (message || '-')
    ];
    var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));

    try { if (window.fbq) fbq('track', 'Lead', { content_name: product }); } catch(e) {}
    try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'bulk_enquiry_whatsapp', product: product }); } catch(e) {}

    window.open(url, '_blank', 'noopener');
  });
})();
