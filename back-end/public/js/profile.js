const list=document.querySelector('.list-group-flush');

if(list)
document.querySelector('.list-group-flush').addEventListener('click',function(e){
    if(e.target.classList.contains('profile-list-item')){
        e.target.classList.add('active');
        [...e.target.parentElement.children].forEach(items=>{
           if(items!=e.target){
               items.classList.remove('active');
           }
        });
    }
});
