/**
 * Inicializa etiquetas SEO dinámicas.
 * Agrega meta etiquetas Open Graph y JSON-LD para el negocio.
 * @module seo
 */
function initSEO() {
  const descTag = document.querySelector('meta[name="description"]');
  const ogTitle = document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.content = document.title;
  document.head.appendChild(ogTitle);

  const ogDesc = document.createElement('meta');
  ogDesc.setAttribute('property', 'og:description');
  ogDesc.content = descTag ? descTag.content : 'Tortillería Los Amigos';
  document.head.appendChild(ogDesc);

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tortillería Los Amigos",
    "image": "imagenes_scrap/000001.jpg",
    "telephone": "+52-55-1234-5678",
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Principal 123",
      "addressLocality": "Ciudad de México",
      "addressRegion": "CDMX",
      "postalCode": "01234",
      "addressCountry": "MX"
    }
  };
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify(data);
  document.head.appendChild(ld);
}

document.addEventListener('DOMContentLoaded', initSEO);
