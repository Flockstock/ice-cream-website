const topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click",function(){
    window.scrollTo({
        top:0 ,
        behavior: "smooth"
    });
});
let showingSet1 = true;
function flipCards() {
    const set1 = document.querySelectorAll(".set1");
    const set2 = document.querySelectorAll(".set2");

    if (showingSet1) {
        set1.forEach(card => {
            card.classList.add("animate__animated", "animate__flipOutY");
        });

        setTimeout(() => {

            // Hide set1 AFTER animation
            set1.forEach(card => {
                card.classList.add("hidden");
                card.classList.remove("animate__flipOutY", "animate__animated");
            });

            // Show + Flip IN set2
            set2.forEach(card => {
                card.classList.remove("hidden");

                // restart animation properly
                card.classList.remove("animate__flipInY");
                void card.offsetWidth;

                card.classList.add("animate__animated", "animate__flipInY");
            });

        }, 1000);
    } else {
        set2.forEach( card => {
            card.classList.add("animate__animated" , "animate__flipOutY");
        });
        setTimeout(() => {
            set2.forEach(card => {
                card.classList.add("hidden");
                card.classList.remove("animate__flipOutY", "animate__animated");
            });
            set1.forEach(card => {
                card.classList.remove("hidden");
                card.classList.remove("animate__flipInY");
                void card.offsetWidth;
                card.classList.add("animate__animated", "animate__flipInY");
            });
        },1000);
    }
showingSet1 = !showingSet1;
    }