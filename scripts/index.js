// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,fetchnews,appenddata,getdata,appenddata2} from '../components/navbar.js'
document.querySelector("#navbar").innerHTML = navbar()


// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}


fetchnews("us")

var country = document.querySelector("#in").addEventListener("click" , function(){
    fetchnews("in")
})
var country = document.querySelector("#ch").addEventListener("click" , function(){
    fetchnews("ch")
})
var country = document.querySelector("#us").addEventListener("click" , function(){
    fetchnews("us")
})
var country = document.querySelector("#uk").addEventListener("click" , function(){
    fetchnews("uk")
})
var country = document.querySelector("#nz").addEventListener("click" , function(){
    fetchnews("nz")
})

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
    },500)
}
