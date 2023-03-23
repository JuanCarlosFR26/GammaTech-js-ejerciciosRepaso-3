const input = document.getElementById('todo');
const buttonAdd = document.getElementById('add');
const buttonClear = document.getElementById('clear');
const div = document.getElementById('list');

console.log(div);


buttonAdd.addEventListener('click', () => {

    let inputValue = input.value;

    const buttonDelete = document.createElement('button');
    buttonDelete.innerText = 'Delete';
    buttonDelete.style.width = '70px';
    buttonDelete.style.height = '20px';
    buttonDelete.style.marginLeft = '80px';

    const li = document.createElement('li');

    li.innerText = inputValue;
    li.style.marginLeft = '60px';
    li.style.marginTop = '20px';

    if(inputValue.length === 0) {
        alert('Añade un valor');
    } else {
        li.appendChild(buttonDelete)
        div.appendChild(li)
    }

    buttonDelete.addEventListener('click', () => {
        li.remove();
        buttonDelete.remove();
    })

})

buttonClear.addEventListener('click', () => {
    div.innerText = '';
})