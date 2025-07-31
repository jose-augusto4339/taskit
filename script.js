const createColumnButton = document.querySelector('#create_column_button');
const mainElement = document.querySelector('main');

createColumnButton.addEventListener('click', () =>{
    mainElement.appendChild(createColumn());
});

function createColumn(){
    const column = document.createElement('div');
    column.classList.add("column");
    column.classList.add("sketchy-border-v");
    return column;
}