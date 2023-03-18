// const observer = new IntersectionObserver(entries=>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
//             document.querySelectorAll(".animated")[1].classList.add("fadeInLeft");
//             // document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
//             document.querySelectorAll(".animated")[0].classList.remove("visibility-div");
//             document.querySelectorAll(".animated")[1].classList.remove("visibility-div");
//             // document.querySelectorAll(".animated")[2].classList.remove("visibility-div");
//         }
//         // else{
//         //     document.querySelectorAll(".animated")[0].classList.remove("fadeInLeft");
//         //     document.querySelectorAll(".animated")[1].classList.remove("fadeInTop");
//         //     document.querySelectorAll(".animated")[2].classList.remove("fadeInRight");
//         // }
//     })
// },{threshold:1})

// observer.observe(document.querySelector(".animate-div-target"))

const hrobserver1 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".animate-hr-1").classList.add("fadeInLeft");
            document.querySelector(".animate-hr-1").classList.remove("visibility-div");
        }
    })
},{threshold:1})

hrobserver1.observe(document.querySelector(".animate-hr-1"))

const observer1 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".animated-aim").classList.add("fadeInRight");
            document.querySelector(".animated-aim-para").classList.add("fadeInRight");
            document.querySelector(".animated-aim").classList.remove("visibility-div");
            document.querySelector(".animated-aim-para").classList.remove("visibility-div");
        }
    })
},{threshold:0.2})

observer1.observe(document.querySelector(".animate-div-aim"))

const hrobserver2 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".animate-hr-2").classList.add("fadeInRight");
            document.querySelector(".animate-hr-2").classList.remove("visibility-div");
        }
    })
},{threshold:1})

hrobserver2.observe(document.querySelector(".animate-hr-2"))

const observer2 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".animated-vision").classList.add("fadeInLeft");
            document.querySelector(".animated-vision-para").classList.add("fadeInLeft");
            document.querySelector(".animated-vision").classList.remove("visibility-div");
            document.querySelector(".animated-vision-para").classList.remove("visibility-div");
        }
    })
},{threshold:0.1})

observer2.observe(document.querySelector(".animate-div-vision"))

const hrobserver3 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".animate-hr-3").classList.add("fadeInLeft");
            document.querySelector(".animate-hr-3").classList.remove("visibility-div");
        }
    })
},{threshold:1})

hrobserver3.observe(document.querySelector(".animate-hr-3"))

const observer3 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".animated-team").classList.add("fadeInTop");
            document.querySelector(".animated-team").classList.remove("visibility-div");
        }
    })
},{threshold:1})

observer3.observe(document.querySelector(".animate-div-team"))