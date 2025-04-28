const form = document.querySelector('#my_form')
form.addEventListener("submit",function(event){
event.preventDefault() ;
const date = document.querySelector('#me').value ;
const distance = parseFloat(document.querySelector('#DISTANCE').value);

const TypefTransport = document.querySelector('#TRAVEL_TYPE').value;
const FuelType = document.querySelector('#FUEL_TYPE').value ;
const electricity = parseFloat(document.querySelector('#electricity').value); 
const gas =parseFloat(document.querySelector('#gas').value) ;
const food = document.querySelector('#food').value ;
const waste = document.querySelector('#waste').value ;
const water = parseFloat(document.querySelector('#water').value);
const button = document.querySelector('#sub_button') ; 
const result = document.querySelector('.result-section') ;

let TotalCarbonEmission = 0 ; 
let TransTotalEmission = 0 ;
let EnergyTotalEmission = 0 ;
let FoodTotalEmission = 0 ;
let WasteTotalEmission = 0 ;
let WaterTotalEmission = 0 ;

// ---------------Transport--------------
if(TypefTransport==="car"){
    if(FuelType==="petrol"){
        TransTotalEmission+=distance*0.24 ;
    }
    else if(FuelType==="diesel"){
        TransTotalEmission+=distance*0.27;
    }
    else{
        TransTotalEmission+=distance*0.10;
    }
}
else if(TypefTransport==="bus"){
    TransTotalEmission+=distance*0.05;
}
else if(TypefTransport==="bike"){
    TransTotalEmission+=distance*0.1;
}
else{
    TransTotalEmission+=distance*0.05 ;
}
EnergyTotalEmission += electricity*0.85 ;
EnergyTotalEmission+=distance*2.34 ;

if(food==="non-veg"){
    FoodTotalEmission += 3.3;
}
else{
    FoodTotalEmission+= 1.5;
}

if(waste==="organic"){
    WasteTotalEmission += 0.1 ; 
}
else if(waste==="glass"){
    WasteTotalEmission += 0.2 ;
}
else{
    WasteTotalEmission += 0.5 ;
}

WaterTotalEmission += water*0.001;

TotalCarbonEmission = TransTotalEmission + EnergyTotalEmission +FoodTotalEmission+WasteTotalEmission +
 WaterTotalEmission;


 console.log(TotalCarbonEmission);

result.innerHTML = `<h3> the total carbon emitted on ${date} is ${TotalCarbonEmission}` ;
localStorage.setItem("TotalCarbonEmission",TotalCarbonEmission);
localStorage.setItem(" TransTotalEmission", TransTotalEmission);
localStorage.setItem("EnergyTotalEmission",EnergyTotalEmission);

window.location.href = "result.html"; 
})





