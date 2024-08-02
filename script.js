const topicArray = document.querySelectorAll(".topic");
const dialogStarted = document.querySelector(".dialog-started");
const dialogFinished = document.querySelector(".dialog-finished");
const close1 = document.querySelector(".close-dialog-s");
const yes1 = document.querySelector(".yes-btn-s");
const close2 = document.querySelector(".close-dialog-f");
const yes2 = document.querySelector(".yes-btn-f");
let currentTopic;
let topicExpanded;

topicArray.forEach(topic =>{
    
    topicExpanded = document.querySelector(".topic-expanded");
    topic.addEventListener("click", ()=>{
        currentTopic=topic;
        if (!currentTopic.classList.contains("topic-started") && !currentTopic.classList.contains("topic-finished")) {
            dialogStarted.showModal();
        } else if (currentTopic.classList.contains("topic-started") && !currentTopic.classList.contains("topic-finished")) {
            dialogFinished.showModal();
        }
        else if(currentTopic.classList.contains("topic-started") && currentTopic.classList.contains("topic-finished")){
            topicExpanded.classList.toggle("expanded")
        }
    })
})
yes1.addEventListener("click", () => {
    currentTopic.classList.add("topic-started");
    dialogStarted.close();
});

close1.addEventListener("click", () => {
    dialogStarted.close();
});

yes2.addEventListener("click", () => {
    currentTopic.classList.add("topic-finished");
    dialogFinished.close();
});

close2.addEventListener("click", () => {
    dialogFinished.close();
});
