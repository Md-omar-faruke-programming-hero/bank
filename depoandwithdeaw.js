// deposite button//

document.getElementById('depositButton').addEventListener('click',function(){
// capture depo input value and value atore in depoAmount variable .....(1)
var depo= document.getElementById('depoField');
var depoAmount= parseInt(depo.value);

// capture default depo value and set as previous
 var amount=document.getElementById('deposhow');
 var previousDepo=parseInt(amount.innerText) ;
 

//  new value form depo input set as current
 var currentDepo= parseInt(depoAmount);

//  sum previousDepo and currentDepo
 var totalDepo= previousDepo+currentDepo;

//  set total depo as previousDepo default value
 amount.innerText=totalDepo;

 
// clear input field
 depo.value="";


// for balance over view after deposite//
 var balance = document.getElementById('balance');
 var previousBalance= parseInt(balance.innerText);
 var total=previousBalance+depoAmount;
 balance.innerText=total;

});


// withdrae button//

document.getElementById('withdrawbutton').addEventListener('click',function(){
    var withdraw= document.getElementById('witdrwField');
    var withdrawAmount= parseInt(withdraw.value);
    
    var inputWithdraw= document.getElementById('withdrawshow');
    var previousWithdraw= parseInt(inputWithdraw.innerText);

    var currentWithdraw= parseInt(withdrawAmount);

    var totalWithdraw = previousWithdraw+ currentWithdraw;

    withdrawshow.innerText= totalWithdraw;

    witdrwField.value="";



    // for balance over view after deposite//

    var balance1= document.getElementById('balance');
    var preblance= parseInt(balance1.innerText);
    var newbalance= preblance-withdrawAmount;

    balance.innerText= newbalance;
    if(balance.innerText==500){
        console.log(alert(",,,,"));
    }



    

})

