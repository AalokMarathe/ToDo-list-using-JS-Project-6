//fetch and store
let todoInput = document.querySelector('#todoInput');
let todoButton = document.querySelector('#todoButton');
let todoCardlist = document.querySelector('#todoList');
//adding event listners

todoButton.addEventListener('click', addTodo);
todoCardlist.addEventListener('click', done__and__remove);
//function'
function addTodo() {
    if (todoInput.value === '') {
        alert('Please enter a task')
    } else {
        //list elements
        const li = document.createElement('li');
        li.classList.add('todoCard__List__item');
        li.innerText = todoInput.value;

        //complete btnn
        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.innerText='Done';
        //Trash btn
        const trashBtn = document.createElement('button');
        trashBtn.classList.add('trash-btn');
        trashBtn.innerText='Trash';
        //btnGrp

        const btnGrp = document.createElement('span');
        btnGrp.classList.add('btnGrp');

        //Add complete and trash button to btnGrp

        btnGrp.append(completeBtn);
        btnGrp.append(trashBtn);

        //add btnGrp to li

        li.append(btnGrp);

        //add li to ul
        
        todoCardlist.append(li);

        //clear
        todoInput.value='';

    }
}
function done__and__remove(e){
    const targetele = e.target;
    if(targetele.classList[0] === 'complete-btn'){
        const liitem = targetele.parentNode.parentNode;
        liitem.classList.add('completeele');
    }
    else if(targetele.classList[0] === 'trash-btn'){
        const liitem = targetele.parentNode.parentNode;
        liitem.remove();
    }
}