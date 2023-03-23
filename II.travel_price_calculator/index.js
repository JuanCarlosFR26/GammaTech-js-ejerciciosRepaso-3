const form = document.getElementById('form');
const select = document.getElementById('select');
const inputNight = document.getElementById('nights');
const inputDays = document.getElementById('days');
const submitButton = document.getElementById('submit');
const count = document.getElementById('count');


const costeHotel = (numNights) => {

    let inputValue = inputNight.value;

    numNights = inputValue;

    return numNights * 140;
}

const costeAvion = (city, numNights) => {

    let cityValue = select.value;
    let inputValue = inputNight.value;

    city = cityValue;
    numNights = inputValue;

    let nightsCost = numNights * 140;

    if(city === 'barcelona' || city === 'madrid') {
        city = 90;
    } else if(city === 'sevilla') {
        city = 50;
    } else if(city === 'valencia') {
        city = 40;
    }

    let total = nightsCost + city;
    if(numNights > 3) {
        return (total - (total * 0.10));
    } else {
        return total;
    }

}

const costeCoche = (numDays) => {

    let inputValue = inputDays.value;
    numDays = inputValue;

    let priceDay = 40;

    if(numDays >= 3 && numDays < 7) {
        return (priceDay * numDays) - 20;
    } else if(numDays >= 7) {
        return (priceDay * numDays) - 50;
    } else {
        return numDays * priceDay;
    }
}

const calcularCoste = () => {
    let total = costeAvion() + costeHotel() + costeCoche();

    return total;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // calcularCoste();

    let total = calcularCoste();

    count.innerText = `${total}`


})







// submitButton.addEventListener('submit', (e) => {
//     e.preventDefault;
//     calcularCoste;
// })
