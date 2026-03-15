document.querySelectorAll(".copy-btn").forEach(button => {

button.addEventListener("click", () => {

const code = button.parentElement.nextElementSibling.innerText

navigator.clipboard.writeText(code)

button.innerText = "copied!"

setTimeout(() => {
button.innerText = "copy"
}, 2000)

})

})
