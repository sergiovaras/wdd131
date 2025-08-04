const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const errorMessage = document.querySelector('#errorMessage');
let chaptersArray = getChapterList() || [];

function showErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

function hideErrorMessage() {
    errorMessage.style.display = 'none';
}

button.addEventListener('click', function() {
    const chapterText = input.value.trim();
    if (chapterText !== '') { 
        
        hideErrorMessage();
        const listItem = document.createElement('li');
        const chapterSpan = document.createElement('span');
        chapterSpan.textContent = chapterText;
        chapterSpan.classList.add('chapter-text'); 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌'; 
        deleteButton.classList.add('delete-btn'); 

        listItem.appendChild(chapterSpan);
        listItem.appendChild(deleteButton);

        
        list.appendChild(listItem);
        input.value = '';


        } else {
            showErrorMessage('The field cannot be blank.');
        }
        input.focus();
    });

list.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const listItemToRemove = e.target.parentNode;
        list.removeChild(listItemToRemove);
        input.focus();
    }
});

window.onload = function() {
    input.focus();
};

