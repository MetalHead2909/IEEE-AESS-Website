const observer1 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".animate-card-1").classList.add("fadeInLeft");
            document.querySelector(".animate-card-1").classList.remove("visibility-div");
            document.querySelector(".animate-card-2").classList.add("fadeInLeft");
            document.querySelector(".animate-card-2").classList.remove("visibility-div");
            document.querySelector(".animate-card-3").classList.add("fadeInLeft");
            document.querySelector(".animate-card-3").classList.remove("visibility-div");
        }
    })
},{threshold:0.4})

observer1.observe(document.querySelector(".animate-events"))

const observer2 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".animate-card-4").classList.add("fadeInRight");
            document.querySelector(".animate-card-4").classList.remove("visibility-div");
            document.querySelector(".animate-card-5").classList.add("fadeInRight");
            document.querySelector(".animate-card-5").classList.remove("visibility-div");
            document.querySelector(".animate-card-6").classList.add("fadeInRight");
            document.querySelector(".animate-card-6").classList.remove("visibility-div");
        }
    })
},{threshold:0.4})

observer2.observe(document.querySelector(".animate-uevents"))

function infohover(){
    document.querySelector(".event-info").classList.remove("visibility-div");
}
function infodonehover(){
    document.querySelector(".event-info").style.transitionDelay = "0.8s";
    document.querySelector(".event-info").classList.add("visibility-div");
}