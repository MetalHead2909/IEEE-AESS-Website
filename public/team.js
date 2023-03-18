const observer1 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".animated").classList.add("fadeInTop");
            document.querySelector(".animated-2").classList.add("fadeInTop");
            document.querySelector(".animated").classList.remove("visibility-div");
            document.querySelector(".animated-2").classList.remove("visibility-div");
        }
    })
},{threshold:1})

observer1.observe(document.querySelector(".animate-div"))

const observer2 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".card-animate-1").classList.add("fadeInTop");
            // document.querySelector(".animated-2").classList.add("fadeInTop");
            document.querySelector(".card-animate-1").classList.remove("visibility-div");
            // document.querySelector(".animated-2").classList.remove("visibility-div");
            document.querySelector(".card-animate-2").classList.add("fadeInTop");
            // document.querySelector(".animated-2").classList.add("fadeInTop");
            document.querySelector(".card-animate-2").classList.remove("visibility-div");
            // document.querySelector(".animated-2").classList.remove("visibility-div");
            document.querySelector(".card-animate-3").classList.add("fadeInTop");
            // document.querySelector(".animated-2").classList.add("fadeInTop");
            document.querySelector(".card-animate-3").classList.remove("visibility-div");
            // document.querySelector(".animated-2").classList.remove("visibility-div");
        }
    })
},{threshold:1})

observer2.observe(document.querySelector(".card-animate-1"))
observer2.observe(document.querySelector(".card-animate-2"))
observer2.observe(document.querySelector(".card-animate-3"))

const observer3 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".card-animate-4").classList.add("fadeInTop");
            document.querySelector(".card-animate-4").classList.remove("visibility-div");
            document.querySelector(".card-animate-5").classList.add("fadeInTop");
            document.querySelector(".card-animate-5").classList.remove("visibility-div");
            document.querySelector(".card-animate-6").classList.add("fadeInTop");
            document.querySelector(".card-animate-6").classList.remove("visibility-div");
        }
    })
},{threshold:1})

observer3.observe(document.querySelector(".card-animate-4"))
observer3.observe(document.querySelector(".card-animate-5"))
observer3.observe(document.querySelector(".card-animate-6"))

const observer4 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".card-animate-7").classList.add("fadeInTop");
            document.querySelector(".card-animate-7").classList.remove("visibility-div");
            document.querySelector(".card-animate-8").classList.add("fadeInTop");
            document.querySelector(".card-animate-8").classList.remove("visibility-div");
            document.querySelector(".card-animate-9").classList.add("fadeInTop");
            document.querySelector(".card-animate-9").classList.remove("visibility-div");
        }
    })
},{threshold:1})

observer4.observe(document.querySelector(".card-animate-7"))
observer4.observe(document.querySelector(".card-animate-8"))
observer4.observe(document.querySelector(".card-animate-9"))

const observer5 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector(".card-animate-10").classList.add("fadeInTop");
            document.querySelector(".card-animate-10").classList.remove("visibility-div");
        }
    })
},{threshold:1})

observer5.observe(document.querySelector(".card-animate-10"))