const txtareaElement = document.getElementById("textarea")
const totalCountElement = document.getElementById("total-counter")
const remainElement = document.getElementById("remaining-counter")


txtareaElement.addEventListener("keyup", ()=>{
    updateCounter()
});

updateCounter()

function updateCounter(){
    totalCountElement.innerText = txtareaElement.value.length;
    remainElement.innerText = txtareaElement.getAttribute("maxLength") - 
    txtareaElement.value.length; 
}