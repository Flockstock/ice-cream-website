const topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click",function(){
    window.scrollTo({
        top:0 ,
        behavior: "smooth"
    });
});

function flipCards() {
    const set1 = document.querySelectorAll(".set1");
    const set2 = document.querySelectorAll(".set2");

    set1.forEach(card =>{
        card.classList.add("animate__animated","animate__flipOutY");
    });
setTimeout(() => {
    set1.forEach(card =>{
        card.classList.add("hidden");
        card.classList.remove("animate__flipOutY");
});
    set2.forEach(card => {
        card.classList.remove("hidden");
        card.classList.add("animate__animated","animate__flipInY");
    });    
},1000);
}