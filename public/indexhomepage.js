const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[2].classList.add("fadeInRight");
            document.querySelectorAll(".animated")[0].classList.remove("visibility-div");
            document.querySelectorAll(".animated")[1].classList.remove("visibility-div");
            document.querySelectorAll(".animated")[2].classList.remove("visibility-div");
        }
    })
},{threshold:0.3})

observer.observe(document.querySelector(".animate-div"))