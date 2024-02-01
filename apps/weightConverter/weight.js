

const convertToKg = document.querySelector('.kg');
const convertToPound = document.querySelector('.lbs');

const input = document.querySelector('#enterWeightInput');

const select = document.querySelector('#selectMenu');

const result = document.querySelector('.result');

convertToKg.addEventListener('click',() =>{
    if (select.value == 'Pounds'){
        if (input.value < 0){
            result.innerHTML = 'Enter a valid number!';
        }
        else{
            result.innerHTML = (input.value / 2.20462262).toFixed(1) + " kg";
        }
        
    }
    
    else if (select.value == "kg"){
        if (input.value < 0){
            result.innerHTML = 'Enter a valid number!';
        }
        else{
            result.innerHTML = (input.value * 2.20462262).toFixed(1) + " pounds";
        }
    }
    
})

convertToPound.addEventListener('click',() =>{
    if (select.value == 'Pounds'){
        if (input.value < 0){
            result.innerHTML = 'Enter a valid number!';
        }
        else{
           
        }
    }
    else if (select.value != "pounds"){
        if (input.value < 0){
            result.innerHTML = 'Enter a valid number!';
        }

        else{
            result.innerHTML = (input.value * 2.20462262).toFixed(1) + " pounds";
        }
        
    }
    
})