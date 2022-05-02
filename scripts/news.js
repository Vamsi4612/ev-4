// Ude Import export (MANDATORY)

import {navbar,fetchnews,appenddata,getdata} from '../components/navbar.js'
document.querySelector("#navbar").innerHTML = navbar()

    let appendbox = document.querySelector("#detailed_news")
    appendbox.innerHTML = null;
    let data = JSON.parse(localStorage.getItem("newsdata"))
    
        let box = document.createElement("div")
        box.id = "box"
        let box1 = document.createElement("div")
        let image = document.createElement("img")
        image.src = data.image
        image.id = "img1"
        box1.append(image)
        let box2 = document.createElement("div")
        let name = document.createElement("p")
        name.innerText=data.title
        name.id = "title"
        let des = document.createElement("p")
        des.innerText=data.description
        des.id = "desc"
        box2.append(name,des)
        box.append(box1,box2)
        appendbox.append(box)
    