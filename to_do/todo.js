let sortIcon = document.querySelector('.sort-icon');
let inputXMark = document.querySelector('.input-box .x-mark');
let addButton = document.querySelector('.add-button');
let inputToDo = document.querySelector('.input-to-do');
let listDiv = document.querySelector('.list')
let listUl = document.querySelector('.list ul');

let sorted = false;

sortIcon.addEventListener('click', function (e) { sortList(); });
inputXMark.addEventListener('click', function (e) { cleanInput() });
addButton.addEventListener('click', function (e) { addToList() });
listUl.addEventListener('click', function (e) { removeLi(e) });

function addToList() {
    let trimmedValue = inputToDo.value.trim();
    if (trimmedValue.length === 0) return null;

    const newTaskHTML =
        `<li>
        <span>${trimmedValue}</span>
        <svg class="x-mark" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4" />
            <path d="M6 6L14 14" stroke="#C4C4C4" />
            <path d="M6 14L14 6" stroke="#C4C4C4" />
        </svg>
    </li>`;
    listUl.insertAdjacentHTML('beforeend', newTaskHTML);
    cleanInput();
    toggleListVisibility();
}

function sortList() {

}

function removeLi(e) {
    if (e.target && e.target.classList.contains('x-mark')) {
        const li = e.target.closest('li');
        li.remove();
    }
    toggleListVisibility();
}

function cleanInput() {
    inputToDo.value = '';
}

function toggleListVisibility() {
    if (listUl.children.length === 0) {
        listDiv.style.display = 'none';
    } else {
        listDiv.style.display = 'block';
    }
}


function sortList() {
    sorted = !sorted;
    console.log(sorted);
    let listItems = Array.from(listUl.children);
    listItems.reverse();
    listUl.innerHTML = '';
    listItems.forEach(item => listUl.appendChild(item));
    changeColor()

}


function getYellow() {
    let computedStyle = getComputedStyle(document.documentElement);
    let yellowColor = computedStyle.getPropertyValue('--yellow').trim();
    return yellowColor;
}

function changeColor() {
    let rects = sortIcon.querySelectorAll('rect');
    let paths = sortIcon.querySelectorAll('path');
    if (sorted) {
        rects.forEach(rect => rect.setAttribute('fill', getYellow()));
        paths.forEach(path => path.setAttribute('fill', getYellow()));
    } else {
        rects.forEach(rect => rect.setAttribute('fill', '#C4C4C4'));
        paths.forEach(path => path.setAttribute('fill', '#C4C4C4'));
    }

}