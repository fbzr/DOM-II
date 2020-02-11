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

const moveBlockToTheTop = e => {
    document.querySelector('.blocks').prepend(e.target);
}

document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('click', moveBlockToTheTop);
});

const moveBoxToTheRight = e => {
    console.log(e.target);
}

document.querySelector('.block').addEventListener('mousedown', moveBoxToTheRight);