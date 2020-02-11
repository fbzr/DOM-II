gsap.to(".block--red", 
    {
        duration: 1,
        x: 100,
        opacity: 0.5,
        rotation: 350
    }
);

gsap.from(".block--blue", 
    {
        duration: 5,
        x: 1000,
        opacity: 0,
        scale: 0.1
    }
);

Draggable.create(".block", {
    type:"x,y",
    bounds: document.querySelector("body"),
    inertia: true,
});
