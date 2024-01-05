let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){   //(checks if the current scroll postition is within the given range of the current section)
            navLinks.forEach(links => {
                links.classList.remove('active');   //(remove all the active class from all links)
                document.querySelector('header nav a[href*='+id+']').classList.add('active');   //(add active class to the current link)
            });

        }

    });
};