// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar,fetchnews,appenddata,getdata,appenddata2} from '../components/navbar.js'
document.querySelector("#navbar").innerHTML = navbar()


// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}

var country = document.querySelector("#in").addEventListener("click" , country1)
var country = document.querySelector("#ch").addEventListener("click" , country2)
var country = document.querySelector("#us").addEventListener("click" , country3)
var country = document.querySelector("#uk").addEventListener("click" , country4)
var country = document.querySelector("#nz").addEventListener("click" , country5)

function country1(){
    let countrycode = "in"
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode}`
    fetchnews(url);
}
function country2(){
    let countrycode = "ch"
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode}`
    fetchnews(url);
}
function country3(){
    let countrycode = "us"
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode}`
    fetchnews(url);
}
function country4(){
    let countrycode = "uk"
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode}`
    fetchnews(url);
}
function country5(){
    let countrycode = "nz"
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode}`
    fetchnews(url);
}


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
