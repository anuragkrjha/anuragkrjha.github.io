
let progress = document.getElementById('progressbar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight = (window.pageYOffset/totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
const texts = ["webdeveloper","programmer","uxdesigner"];
let count = 0;
let index = 0;
let currentText = '';
let letter='';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText= texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);

}());





const sections = document.querySelectorAll("section");
const circle = document.querySelector(".circle");
const gradients = [ "linear-gradient(to right, #f46b45, #eea849)"];

const options = {
    threshold: 0.7
};
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left

        };
        if (entry.isIntersecting){
            circle.style.setProperty("left", `${directions.left}px`);
            circle.style.setProperty("top", `${directions.top}px`);
            circle.style.setProperty("width", `${directions.width}px`);
            circle.style.setProperty("height", `${directions.height}px`);
        }
        
    });

}
sections.forEach(section => {
    observer.observe(section);
    
});