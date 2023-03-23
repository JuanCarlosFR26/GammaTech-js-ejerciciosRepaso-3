// Contadores:
const count1 = document.querySelector('.count-player1');
const count2 = document.querySelector('.count-player2');


// Buttons;
const button1 = document.querySelector('.player1');
const button2 = document.querySelector('.player2');
const reset = document.querySelector('.reset');

// Select
const select = document.querySelector('select');


// Winner
const winner = document.querySelector('.winner');

button1.addEventListener('click', function sum() {
    let count = parseInt(count1.innerText);
    count++;
    count1.innerText = count;

    let value = parseInt(select.value);
    if(count1.innerText === String(value)) {
        winner.style.display = 'flex'
        winner.innerText = 'Player 1 Wins'

        button1.removeEventListener('click', sum)
        button1.disabled = true;
        button2.disabled = true;
    }
})


button2.addEventListener('click', function sum() {
    let count = parseInt(count2.innerText);
    count++;
    count2.innerText = count;

    let value = parseInt(select.value);
    if(count2.innerText === String(value)) {
        winner.style.display = 'flex'
        winner.innerText = 'Player 2 Wins'

        button2.removeEventListener('click', sum)
        button1.disabled = true;
        button2.disabled = true;
    }
})


reset.addEventListener('click', () => {
    // count1.innerText = 0;
    // count2.innerText = 0;

    location.reload()
})

