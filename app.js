//jshint esversion:6

const bodyParser = require('body-parser');
const path = require('path')
const express = require('express');
const IntersectionObserver = require('intersection-observer');
// const nodemailer = require('nodemailer');
// const multiparty = require('multiparty');
// require("dotenv").config();
const app = express();

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/images"));

// const transporter = nodemailer.createTransport({
//     host:"gmail.com",
//     port:587,
//     auth:{
//         user: process.env.EMAIL,
//         pass: process.env.PASS,
//     },
// });
// transporter.verify(function(error,success){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Server is ready to take our message");
//     }
// })
// app.post("/app.js/send",(req,res)=>{
//     let form = new multiparty.Form();
//     let data = {};
//     form.parse(req,function(err,fields){
//         console.log(fields);
//         Object.keys(fields).forEach(function (property){
//             data[property] = fields[property].toString();
//         });

//     const mail = {
//         from:data.name,
//         to:process.env.EMAIL,
//         subject:data.subject,
//         text:'${data.name}<${data.email}> \n${data.message}',
//     };

//     transporter.sendMail(mail,(err,data)=>{
//         if(err){
//             console.log(err);
//             res.status(500).send("Something went wrong");
//         }else{
//             res.status(200).send("Email successfully sent to recipient!");
//         }
//         });
//     });
// });

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             document.querySelectorAll(".animated")[0].classList.add("fade-in-left");
//             document.querySelectorAll(".animated")[1].classList.add("fade-in-up");
//             document.querySelectorAll(".animated")[2].classList.add("fade-in-right");
//         }
//     })
// })

// let options={
//     root:document.querySelector("animate"),
//     rootMargin:"0px",
//     threshold:1.0,
// };

// let callback=(entries, observer)=>{
//     entries.forEach((entry)=>{
//         document.querySelectorAll(".animated")[0].classList.add("fade-in-left");
//         document.querySelectorAll(".animated")[1].classList.add("fade-in-up");
//         document.querySelectorAll(".animated")[2].classList.add("fade-in-right");
//     })
// }
// const observer = new IntersectionObserver(callback, options);
// observer.observe(document.querySelector(".animate-div"));

// GET REQUEST
// let options={
//     //root:document.querySelector("animate"),
//     rootMargin:"0px",
//     threshold:1.0,
// };
// let callback=(entries, observer)=>{
//     console.log("focus-intro entered");
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//         document.querySelectorAll(".animated")[0].classList.add("fade-in-left");
//         document.querySelectorAll(".animated")[1].classList.add("fade-in-up");
//         document.querySelectorAll(".animated")[2].classList.add("fade-in-right");
//         }
//     })
// }
// const observer = new IntersectionObserver(function 
//     (entries, observer)
//     {
//         console.log("focus-intro entered");
//         entries.forEach((entry)=>{
//             if(entry.isIntersecting){
//             document.querySelectorAll(".animated")[0].classList.add("fade-in-left");
//             document.querySelectorAll(".animated")[1].classList.add("fade-in-up");
//             document.querySelectorAll(".animated")[2].classList.add("fade-in-right");
//             }
//         })
//     },options);
// if(typeof window !== 'undefined'){
//     console.log("browser entered");
// window.addEventListener("load",(event)=>{
//     const observer = new IntersectionObserver(function 
//         (entries, observer)
//         {
//             console.log("focus-intro entered");
//             entries.forEach((entry)=>{
//                 if(entry.isIntersecting){
//                 document.querySelectorAll(".animated")[0].classList.add("fade-in-left");
//                 document.querySelectorAll(".animated")[1].classList.add("fade-in-up");
//                 document.querySelectorAll(".animated")[2].classList.add("fade-in-right");
//                 }
//             })
//         },options);
//         observer.observe(document.querySelector("#focus-intro"));
// })
// //observer.observe(document.querySelector("#focus-intro"));
// console.log("GET homepage");
// }
// else{
//     console.log("server");
// }
app.get("/",function(req,res){
    res.render("indexhomepage",{});
    console.log("GET homepage");
    //const observer = new IntersectionObserver(callback, options);
});

app.get("/app.js/about",function(req,res){
    res.render("about",{});
    console.log("GET about");
});

app.get("/app.js/team",function(req,res){
    res.render("team",{});
    console.log("GET team");
});

app.get("/app.js/events",function(req,res){
    res.render("events",{});
    console.log("GET events");
});

app.get("/app.js/contact",function(req,res){
    res.render("contact",{});
    console.log("GET contact");
});

// POST REQUEST
app.post("/app.js/about",function(req,res){
    res.render("about",{});
    console.log("POST about");
});

app.post("/app.js/team",function(req,res){
    res.render("team",{});
    console.log("POST team");
});

app.post("/app.js/events",function(req,res){
    res.render("events",{});
    console.log("POST events");
});

app.post("/app.js/contact",function(req,res){
    res.render("contact",{});
    console.log("POST contact");
    // const sendMail=(mail)=>{
    //     fetch("/app.js/send",{
    //         method:"post",
    //         body:mail,
    //     }).then((response)=>{
    //         return response.json();
    //     })
    // }
    // const form = document.getElementById("contact-form");
    // const formEvent = form.addEventListener("submit",(event)=>{
    //     event.preventDefault();
    //     let mail = new FormData(form);
    //     sendMail(mail);
    // })
});

// const sendMail = (mail)=>{
//     fetch("/send",{
//         method:"post",
//         body:"mail",
//     }).then((response)=>{
//         return response.json();
//     });
// }

app.listen(3000,function(){
    console.log("Server listening on port 3000");
})

// if(typeof window !== undefined){
// const form = document.getElementById("contact-form");
// const formEvent = form.addEventListener("Submit",(event)=>{
//     event.preventDefault();
//     let mail = new FormData(form);
//     sendMail(mail);
// })
// };