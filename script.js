const searchBar = document.getElementById("searchBar")
const projects = document.querySelectorAll(".project-link")

searchBar.addEventListener("keyup", function(){

let text = searchBar.value.toLowerCase()

projects.forEach(project => {

let content = project.textContent.toLowerCase()

if(content.includes(text)){

project.style.display="block"

}else{

project.style.display="none"

}

})

})
