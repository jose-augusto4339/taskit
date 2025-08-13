const createColumnButton = document.querySelector('#create_column_button');

const mainElement = document.querySelector('main');

const COLUMN_LIMIT = 4

const MAX_TITLE_LENGHT = 25;

createColumnButton.addEventListener('click', () =>{
    addColumn();
});

function addColumn(){
    const columnActualQnt = document.querySelectorAll(".column").length;

    if(columnActualQnt >= COLUMN_LIMIT) return;
    
    const newColumn = createColumn();

    mainElement.appendChild(newColumn);
    newColumn.querySelector('.column_title')?.focus();
}

function createColumn(){
    const column = document.createElement('div');

    column.classList.add("column");
    column.classList.add("sketchy-border-v");

    column.appendChild(createColumnTitle());
    column.appendChild(createColumnActionButtons(column));

    return column;
}

function createColumnTitle(){
    const columnTitle = document.createElement('input');

    columnTitle.type = "text";
    columnTitle.maxLength = MAX_TITLE_LENGHT;
    columnTitle.classList.add("column_title");

    return columnTitle;
}

function createColumnActionButtons(columnElement){
    const actionButtonsContainer = document.createElement('div');
    
    actionButtonsContainer.classList.add("action-buttons-container");

    actionButtonsContainer.appendChild(createDeleteColumnButton(columnElement));
    actionButtonsContainer.appendChild(createAddPostItButton(columnElement));

    return actionButtonsContainer;
}

function createDeleteColumnButton(columnElement){
    const deleteColumnButton = document.createElement('button');

    deleteColumnButton.innerHTML = 'X';
    deleteColumnButton.classList.add('column-button');

    deleteColumnButton.addEventListener('click', () =>{
        columnElement.remove();
    })

    return deleteColumnButton;
}

function createAddPostItButton(columnElement){
    const addPostItButton = document.createElement('button');

    addPostItButton.innerHTML = '+';
    addPostItButton.classList.add('column-button');

    addPostItButton.addEventListener('click', () =>{
        console.log(createPostIt());
        columnElement.appendChild(createPostIt());
    })

    return addPostItButton;
}

function createPostIt(){
    const postIt = document.createElement('div');

    postIt.classList.add('postit')

    return postIt;
}