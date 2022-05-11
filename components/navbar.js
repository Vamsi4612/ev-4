function navbar(){
    return`<a href="index.html">
    <p>News Page</p>
  </a>
  <input type="text" id="search_input" placeholder="Search news">`
}


async function fetchnews(code){
    try{

    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`
    
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data.articles)
    let appendbox = document.querySelector("#news")
    appenddata(data.articles,appendbox)
    }
    catch(err){
        console.log(err)
    }
}

async function getdata(url){
    try{
    let query = document.querySelector("#search_input").value
    const url =    `https://masai-mock-api.herokuapp.com/news?q=${query}`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data.articles)
    
    localStorage.setItem("news" , JSON.stringify( data.articles))
    }
    catch(err){
        console.log(err)
    }
}


function appenddata(data,appendbox){
    appendbox.innerHTML = null;
    data.forEach(({urlToImage,title,description})=>{
        let box = document.createElement("div")
        box.id = "box"
        box.class = "news"
        let box1 = document.createElement("div")
        let image = document.createElement("img")
        image.src = urlToImage
        box1.append(image)
        let box2 = document.createElement("div")
        let name = document.createElement("p")
        name.innerText=title
        let des = document.createElement("p")
        des.innerText=description
        box2.append(name,des)
        box.append(box1,box2)
        appendbox.append(box)
    })
}
function appenddata2(){
    var appendbox = document.querySelector("#results")
    appendbox.innerHTML = null;
    var data = JSON.parse(localStorage.getItem("news"))
    
    data.forEach(({urlToImage,title,description})=>{
        var box = document.createElement("div")

        box.className = "news"
        
        let box1 = document.createElement("div")
        let image = document.createElement("img")
        image.src = urlToImage
        image.id = "img1"
        box1.append(image)
        let box2 = document.createElement("div")
        let name = document.createElement("p")
        name.innerText=title
        name.id = "title"
        let des = document.createElement("p")
        des.innerText=description
        des.id = "desc"
        box2.append(name,des)
        box.append(box1,box2)
        appendbox.append(box)
    })
}



export {navbar,fetchnews,appenddata,getdata,appenddata2}