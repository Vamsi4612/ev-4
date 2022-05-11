// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,fetchnews,appenddata,getdata,appenddata2} from '../components/navbar.js'
document.querySelector("#navbar").innerHTML = navbar()



// document.querySelector("#search_input").addEventListener("input" , main)
document.querySelector("#search_input").addEventListener("keypress" , function(a){
    if(a.key === "Enter"){
        // console.log("Enter key is pressed")
        main()
    }
    
})

async function getnews(){
    console.log("asdygu")
    let process = await getdata()
    window.location.href = "search.html"
    // appenddata()
}
let id;
function main(){
    
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        getnews()
    },1000)
}

appenddata2()
var divs = document.querySelectorAll("#results>div")
// console.log(divs.length+"djfnaiwkf")
for(var i=0;i<divs.length;i++){
    let a = i
    divs[i].addEventListener("click" , function(){
        storedata(a)
    })
}


var nd = JSON.parse(localStorage.getItem("news"))
// console.log(nd)
async function storedata(i){
    console.log(i)
    let data = nd[i]
    console.log(data)
    
    localStorage.setItem("newsdata" , JSON.stringify( data))
    window.location.href="news.html"
}




