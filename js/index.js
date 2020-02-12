// Your code goes here

// Add popup when page loads
window.addEventListener('load', () => {
    alert('Welcome to Fun Bus!!');

    gsap.from('header img', {
        scale: 0.1,
        duration: 3
    });
});

// Add event listner to change nav background color when scroll
const changeNavColor = e => {    
    const nav = document.querySelector('header.main-navigation');
    const navHeight = 90;

    if ((document.body.scrollTop >= navHeight || document.documentElement.scrollTop >= navHeight)) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', changeNavColor);

// Animate nav-links on double click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('dblclick', () => {
        link.animate([
            { transform: 'scale(0)' }, 
            { transform: 'scale(1.1)' }
          ], { 
            duration: 500,
            iterations: 1
          });
    });    
});

// Disable context menu
document.body.addEventListener('contextmenu', e => {
    e.preventDefault();   
});

// Change background color on mouse move
const changeColorOnMouseMove = (e) => {
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 0`;
}

// Start crazy colors on background when auxclick on logo
document.querySelector('.logo-heading').addEventListener('auxclick', () => {
    document.body.addEventListener('mousemove', changeColorOnMouseMove);

    // Green sock Draggable to imgs
    Draggable.create(".img-content", {
        type:"x,y",
        bounds: document.querySelector("body"),
        inertia: true,
    });
});

// Stop the nav items from refreshing the page
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
});

// Add mouse over event listener to all content-section 
document.querySelectorAll('section.content-section').forEach(section => {
    console.log(section);
    section.addEventListener('mouseenter', e => section.classList.add('mouseOver'));
    section.addEventListener('mouseleave', e => section.classList.remove('mouseOver'));
});

const flipAnimation = e => {
    e.preventDefault();
    e.target.animate(
        [
            { transform: 'rotateX(0)' }, 
            { transform: 'rotateX(360deg)' }
        ], 
        { 
            duration: 500,
            iterations: 1
        }
    );
}

// Add animation on Content destination img when use wheel
document.querySelector('.content-destination img').addEventListener('wheel', flipAnimation);
document.querySelector('header img').addEventListener('wheel', flipAnimation);

// Change background color when click on body
document.body.addEventListener('click', e => {
    const body = e.target;
    console.log(body.style.backgroundColor);
    if(body.style.backgroundColor === 'rgb(238, 238, 238)') {
        body.style.backgroundColor = '#fff';
    } else 
    {
        body.style.backgroundColor = 'rgb(238,238,238)';
    }
});

// Use stopPropagation to avoid change bg color when click in a different element
document.querySelectorAll('*').forEach(element => {
    element.addEventListener('click', e => {
        e.stopPropagation();
    });
})

