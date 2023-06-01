const containerEl = document.querySelector(".container");
const careers = ["Jamicah", "Jamjam", "Micah", "Jameekah"];

const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imgContainerEl = document.querySelector(".image-container");
const imgsEl = document.querySelectorAll("img");

let careerIndex = 0;
let charIndex = 0;

let currImg = 1;

let timeout;

updateText();

function updateText(){
    charIndex++;
    containerEl.innerHTML = `
    <h1>Happy Birthday,  ${careers[careerIndex].slice(0, charIndex)}!</h1>
    `;

    if (charIndex === careers[careerIndex].length) {
        careerIndex++;
        charIndex = 0;
      }
    
    if (careerIndex === careers.length) {
        careerIndex = 0;
      }
    setTimeout(updateText, 300);
};

nextEl.addEventListener("click", ()=>{
    currImg++;
    clearTimeout(timeout);
    updateImg();
});

prevEl.addEventListener("click", () =>{
    currImg--;
    clearTimeout(timeout);
    updateImg();
})

updateImg();

function updateImg(){
    if(currImg > imgsEl.length){
        currImg = 1;
    } else if(currImg < 1){
        currImg = imgsEl.length;
    }
    imgContainerEl.style.transform = `translateX(-${(currImg - 1) * 700}px)`;

    timeout = setTimeout(()=>{
        currImg++;
        updateImg();
    }, 3000);
}
