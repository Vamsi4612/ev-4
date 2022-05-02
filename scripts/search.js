// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,fetchnews,appenddata,getdata,appenddata2} from '../components/navbar.js'
document.querySelector("#navbar").innerHTML = navbar()



document.querySelector("#search_input").addEventListener("input" , main)

async function getnews(){
    console.log("asdygu")
    let process = await getdata()
    window.location.href = "search.html"
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

document.querySelector("#box").addEventListener("click" , storedata)

async function storedata(url){
    let arr = []
    let newsdata = {
        image : document.querySelector("#img1").src,
        title : document.querySelector("#title").innerHTML,
        description : document.querySelector("#desc").innerHTML

    }
    arr.push(newsdata)
    localStorage.setItem("newsdata" , JSON.stringify( arr))
    window.location.href="news.html"
}



