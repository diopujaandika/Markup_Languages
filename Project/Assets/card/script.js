const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.querySelector(".progress");

let current = 0;

nextBtn.addEventListener("click", () => {

    if(current < steps.length - 1){
        current++;
        updateTimeline();
    }

});

prevBtn.addEventListener("click", () => {

    if(current > 0){
        current--;
        updateTimeline();
    }

});

function updateTimeline(){

    steps.forEach((step, index) => {

        if(index <= current){
            step.classList.add("active");
        }else{
            step.classList.remove("active");
        }

    });

    const percent = (current / (steps.length - 1)) * 100;

    progress.style.width = percent + "%";

}