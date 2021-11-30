let sidebar = document.querySelector(".p-sidebar");
let closeBtn = document.querySelector(".c-sidebar-button");
let search = document.querySelector(".p-sidebar-body");
let col = document.querySelector(".col-2");
let col_sc = document.querySelector(".col-10");


/* closeBtn.addEventListener('click', function() {
    if(col.classList.contains('col-3')) {
      col.classList.remove('col-3');
    } else {
      col.classList.add('col-1');
    }
}); */

if (closeBtn != null) {
closeBtn.addEventListener("click", ()=>{
  col.classList.toggle("col-1");
  col.classList.toggle("col-2");
});

closeBtn.addEventListener("click", ()=>{
  col_sc.classList.toggle("col-11");
  col_sc.classList.toggle("col-10");
});
}

if (closeBtn != null) {
closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("js-side--close");
});

closeBtn.addEventListener("click", ()=>{ 
    search.classList.toggle("js-search--close");
  });
}