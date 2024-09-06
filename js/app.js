    document.getElementById('flashcard').addEventListener('click', function() {
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');

    if (question.style.display !== 'none') {
        question.style.display = 'none';
        answer.style.display = 'block';
    } else {
        question.style.display = 'block';
        answer.style.display = 'none';
    }
});

