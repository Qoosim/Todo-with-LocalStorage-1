let elements = [];
window.onload = function() {
    if(JSON.parse(localStorage.getItem('todos')) !== null) {
        elements = JSON.parse(localStorage.getItem('todos'));
        display();
    }
}

function addElement() {
    if (document.querySelector('.addTxt').value.trim() !== '') {
        elements.push(document.querySelector('.addTxt').value.trim())
        if(localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify(elements));
        } else {
            localStorage.setItem('todos', JSON.stringify(elements));
        }
        display();
    }
    document.querySelector('.addTxt').value = '';
    document.querySelector('.addTxt').focus();
}

function display() {
    document.querySelector('.list').innerHTML = '';
    for (let i = 0; i < elements.length; i++) {
        document.querySelector('.list').innerHTML += `
        <center>
        <div class="element">${elements[i]} 
        <img class='tick' src='images/tick_icon.png' onclick='strike(${i})'>
        <img class='trash' src='images/trash_icon.png' onclick='del(${i})'>
        </div>
        </center>
        `;
    }
}

function del(index) {
    elements.splice(index, 1);
    if(localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify(elements));
    } else {
        localStorage.setItem('todos', JSON.stringify(elements));
    }
    display();
}

function strike(index) {
    if (elements[index].includes('<strike>')) {
        elements[index] = elements[index].replace('<strike>','');
        elements[index] = elements[index].replace('</strike>','');
    } else {
        elements[index] = `<strike> ${elements[index]} </strike>`;
    }
    if(localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify(elements));
    } else {
        localStorage.setItem('todos', JSON.stringify(elements));
    }
    display();
}
