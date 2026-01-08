// Menü kattintásra a megfelelő fejezet megjelenítése
document.querySelectorAll('.menu').forEach(menu=>{
  menu.addEventListener('click',()=>{
    const target = menu.getAttribute('data-target');
    document.querySelectorAll('.era').forEach(sec=>sec.style.display='none');
    const el = document.querySelector('.'+target);
    if(el) el.style.display='grid';
    el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
