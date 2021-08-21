/** Extra Memory And Extra SSD Storage **/
function extraMemoryandSSD(isUpdate, price, getId){
    const memoryCost = document.getElementById(getId);
    const memoryCostText =parseFloat (memoryCost.innerText);
    let updateMemoryCost = memoryCostText;
    if(isUpdate == false){
         updateMemoryCost = price*0;
    }
    else{

          updateMemoryCost = price * 1;
    }
    memoryCost.innerText = updateMemoryCost;
    totalPrice();
    chooseDelivery();
}
// fiexd memory
document.getElementById('8gb-memory').addEventListener('click', function (){
extraMemoryandSSD(false ,0, 'extra-memory');
})
// update memory
document.getElementById('16gb-memory').addEventListener('click', function (){
    extraMemoryandSSD(true, 180, 'extra-memory');
})
// fixed storage SSD
document.getElementById('fixed-storage').addEventListener('click', function (){
    extraMemoryandSSD(false, 0, 'extra-storage');
})
// update storage 512GB SSD
document.getElementById('update-storage1').addEventListener('click', function (){
    extraMemoryandSSD(true, 100, 'extra-storage');
})
// update storage 1TB SSD
document.getElementById('update-storage2').addEventListener('click', function (){
    extraMemoryandSSD(true, 180, 'extra-storage');
})
// Delivery optoin
function chooseDelivery(price){
    const deliveryCost = document.getElementById('delivery-charge');
    const deliveryCostText = deliveryCost.innerText;
    const deliveryCostNumber = parseFloat(deliveryCostText);
    let deliveryCarge = deliveryCostNumber;
    if(price == 20){
        deliveryCarge = 20;
    }
    else{
        deliveryCarge = 0;
    }
    deliveryCost.innerText = deliveryCarge;
}
document.getElementById('free-delivery').addEventListener('click', function (){
extraMemoryandSSD(false,0,'delivery-charge');
chooseDelivery(0);
})
document.getElementById('delivery-minCharge').addEventListener('click', function (){
extraMemoryandSSD(true,20,'delivery-charge');
chooseDelivery(20);
})
function getInput(inputId){
    const input = document.getElementById(inputId)
    const inputText = parseFloat(input.innerText);
    return inputText;
}
function totalPrice(){ 
    const bestParice = getInput('bese-price');  
    const memoryCost = getInput('extra-memory');
    const storageCost = getInput('extra-storage');
    const deliveryCost = getInput('delivery-charge');

    const total = bestParice + memoryCost + storageCost + deliveryCost;
    /*cheak
    console.log(bestParice+memoryCost+storageCost+deliveryCost);
    console.log(deliveryCost);
    */
    const updatePrice = document.getElementById('total-price1');
    updatePrice.innerText = total;
    const updateTotalPrice = document.getElementById('update-total-price');
    const updateTotalPriceText = parseFloat(updateTotalPrice.innerText);
    updateTotalPrice.innerText = total;
}
// promo code
function promoCode(){
    const inputFeild = document.getElementById('promo-input');
    const inputFeildValue = inputFeild.value;
    if(inputFeildValue == 'stevekaku'){
        const updateTotalPrice = document.getElementById('update-total-price');
        const updateTotalPriceText = updateTotalPrice.innerText;
        const updateTotalNumber = parseFloat(updateTotalPriceText);
        const cuponDiscount = updateTotalNumber * 0.2;
        const totalAmount = updateTotalPriceText - cuponDiscount;
        updateTotalPrice.innerText = totalAmount;
    }
    inputFeild.value = "";
}
document.getElementById('promo-button').addEventListener('click', function (){
promoCode();
})




