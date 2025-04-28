const TotalCarbonEmission = localStorage.getItem("TotalCarbonEmission") ;
const TransCarbonEmission = localStorage.getItem("TransTotalEmission") ;
const EnergyTotalEmission = localStorage.getItem("EnergyTotalEmission") ;
const final_res = document.querySelector('.final-res') ;
const tips = document.querySelector('.tips')
const credits = document.querySelector('.credits')
final_res.innerHTML = `<h2>Your carbon footprint is ${(TotalCarbonEmission)}</h2>`

if(TransCarbonEmission>EnergyTotalEmission){
    tips.innerHTML =`  <h3>Tips to Reduce Your Transport Carbon Footprint:</h3>
    <ul>
        <li><strong>Use Public Transport or Cycle:</strong> Opt for buses, trains, or cycling to reduce emissions.</li>
        <li><strong>Carpool:</strong> Share rides with others to decrease the number of vehicles on the road.</li>
        <li><strong>Walk for Short Distances:</strong> Choose to walk instead of driving for nearby destinations.</li>
        <li><strong>Drive Efficiently:</strong> Maintain a steady speed, avoid rapid acceleration, and keep your vehicle well-maintained.</li>
        <li><strong>Consider Electric Vehicles:</strong> If possible, switch to electric or hybrid vehicles.</li>
        <li><strong>Plan Your Trips:</strong> Combine errands to minimize the number of trips you make.</li>
    </ul>
    <p>Making small changes can have a big impact on reducing your carbon footprint!</p>`
}
else{
    tips.innerHTML = ` <h3>Tips to Reduce Your Energy Carbon Footprint:</h3>
    <ul>
        <li><strong>Switch to Energy-Efficient Appliances:</strong> Use appliances with high energy efficiency ratings.</li>
        <li><strong>Unplug Unused Devices:</strong> Avoid standby power consumption by unplugging devices when not in use.</li>
        <li><strong>Optimize Heating and Cooling:</strong> Set thermostats efficiently and ensure proper insulation.</li>
        <li><strong>Use Renewable Energy Sources:</strong> Consider installing solar panels or opting for green energy plans.</li>
        <li><strong>Reduce Water Heating:</strong> Lower the water heater temperature or use energy-efficient water heaters.</li>
        <li><strong>Maximize Natural Light:</strong> Use daylight to reduce the need for artificial lighting.</li>
    </ul>
    <p>Implementing these practices can significantly reduce your energy-related carbon emissions!</p>`
}

credits.innerHTML = `Your Carbon Credit points are : ${150-TotalCarbonEmission}` ; 





