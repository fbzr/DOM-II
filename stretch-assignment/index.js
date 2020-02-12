// gsap.to(".block--red", 
//     {
//         duration: 1,
//         x: 100,
//         opacity: 0.5,
//         rotation: 350
//     }
// );

// gsap.from(".block--blue", 
//     {
//         duration: 5,
//         x: 1000,
//         opacity: 0,
//         scale: 0.1
//     }
// );

// Draggable.create(".block", {
//     type:"x,y",
//     bounds: document.querySelector("body"),
//     inertia: true,
// });

let left = 0;
let interval;

const moveBlockToTheTop = e => {
    document.querySelector('.blocks').prepend(e.target);
}


const moveBoxToTheRight = e => {
    interval = setInterval(() => {
        e.target.style.transform = `translateX(${left}px)`;
        left += 1;
    }, 10);
    
    console.log(e.target);
}

const stopBox = e => {
    clearInterval(interval);
    left = 0;
}


document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('click', moveBlockToTheTop);
    block.addEventListener('mousedown', moveBoxToTheRight);
    document.body.addEventListener('mouseup', stopBox);
});

