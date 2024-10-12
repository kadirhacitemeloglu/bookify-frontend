document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
        // Toggle the "active" class on the clicked question
        question.classList.toggle('active');

        // Get the associated answer (next element)
        const answer = question.nextElementSibling;

        // Toggle the visibility of the answer
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

function navigateHomepage(){
    setTimeout(function(){
        window.location.href="homepage.html";
    },2000);
}