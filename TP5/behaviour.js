window.onload = (event) => {

var addButton = document.getElementById("add-new").getElementsByTagName('input')[1];

addButton.addEventListener('click', addNewTask);

var removeButton = document.getElementById("remove-all").getElementsByTagName("input")[0];

removeButton.addEventListener('click', removeCheckedTasks);

var createList = document.getElementById("new-list");

createList.addEventListener('click', getNewList);

}

function getNewList() {
    var lista = prompt("Insira o nome da nova lista");

    if(lista == null || lista == "") {
        alert("Não é possível criar uma lista sem nome");
    }
    else {
        createList(lista);
    }
}

function createList(lista) {
    
}

function addNewTask() {
    var text = " " + document.getElementById("add-new").getElementsByTagName("input")[0].value;

    const label = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.value = "value";
    checkbox.name = "name";
    checkbox.id = "id"

    const node = document.createTextNode(text);
    label.appendChild(checkbox);
    label.appendChild(node);

    var element = document.getElementById('list');
    element.appendChild(label);
}

function removeCheckedTasks() {
    var checkeds = document.querySelectorAll("input:checked");

    for (let i = 0; i < checkeds.length; i++) {
        checkeds[i].parentNode.remove();
        checkeds[i].remove();
    }
}

localStorage.setItem("Shopping list", )
localStorage.setItem("Homework", )
localStorage.setItem("Study materials", )