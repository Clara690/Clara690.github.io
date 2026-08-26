document.addEventListener('DOMContentLoaded', function(){
    const dropdown = document.querySelector('.dropdown');
    const trigger = document.querySelector('.dropdown-trigger');

    trigger.addEventListener('click', function(e){
        e.stopPropagation();
        dropdown.classList.toggle('open');
    })

    // close dropdown after clicking a link inside it
    document.querySelectorAll('.dropdown-menu a').forEach(function (link){
        link.addEventListener('click', function(){
            dropdown.classList.remove('open');
        });
    });

    // close dropdown when clicking anywhere else on the page
    document.addEventListener('click', function(e){
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });

    // close on Esp key
    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            dropdown.classList.remove('open');
        }
    });
});

