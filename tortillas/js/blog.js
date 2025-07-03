/**
 * Muestra artículos del blog desde un arreglo local.
 * @module blog
 */
(function(){
  const posts=[
    {title:'Receta de tacos al pastor',img:'imagenes_scrap/000002.jpg',resumen:'Aprende a preparar tacos al pastor en casa.',contenido:'Paso 1: ...'},
    {title:'Consejos para conservar tortillas',img:'imagenes_scrap/000003.jpg',resumen:'Tips para mantenerlas frescas más tiempo.',contenido:'Guárdalas en...'},
    {title:'Noticias de la tortillería',img:'imagenes_scrap/000004.jpg',resumen:'Abrimos nueva sucursal este mes.',contenido:'Estamos felices de anunciar...'}
  ];
  const container=document.getElementById('blog-container');
  if(!container) return;
  posts.forEach((p,i)=>{
    const card=document.createElement('div');
    card.className='card mb-3';
    card.innerHTML=`<img src="${p.img}" class="card-img-top" alt="${p.title}">
      <div class="card-body">
        <h2 class="card-title">${p.title}</h2>
        <p class="card-text" id="res${i}">${p.resumen}</p>
        <p class="card-text d-none" id="full${i}">${p.contenido}</p>
        <button class="btn btn-link p-0" data-id="${i}">Leer más</button>
      </div>`;
    container.appendChild(card);
  });
  container.addEventListener('click',e=>{
    if(e.target.tagName==='BUTTON'){
      const id=e.target.dataset.id;
      document.getElementById('res'+id).classList.toggle('d-none');
      document.getElementById('full'+id).classList.toggle('d-none');
      e.target.textContent=e.target.textContent==='Leer más'?'Ocultar':'Leer más';
    }
  });
})();
