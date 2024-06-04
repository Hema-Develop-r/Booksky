var btns=document.getElementById("add-btn")
var overlay=document.querySelector(".pop-overlay")
var box=document.querySelector(".pop-box")
var cancel=document.getElementById("cancel-pop")

btns.addEventListener("click",function(){
     overlay.style.display="block"
     box.style.display="block"
})

cancel.addEventListener("click",function(event){
      event.preventDefault()
      overlay.style.display="none"
     box.style.display="none"

})
var Container=document.querySelector(".container")
var Title=document.getElementById("title")
var Author=document.getElementById("author")
var Add=document.getElementById("add-pop")
var Desc=document.getElementById("msg")

Add.addEventListener("click",function(event)
{
     event.preventDefault()
     var div1=document.createElement("div")
     div1.setAttribute("class","book-container")
     div1.innerHTML=`<h1>${Title.value}</h1>
     <h5>${Author.value}</h5>
     <p>${Desc.value}</p>
     <button onclick="deletebook(event)">Delete</button>`
     Container.append(div1)
     overlay.style.display="none"
     box.style.display="none"
})

function deletebook(event){
     event.target.parentElement.remove()
}