document.querySelector('#tip-form').onchange = function(){
  var bill = Number(document.getElementById('billTotal').value);
  var tip = document.getElementById('tipInput').value;
  
  document.getElementById('tipOutput').innerHTML = `${tip}%`;

  
  var tipValue = bill * (tip/100);
  var finalBill = bill + tipValue;
  var taxvalue = bill * 0.085;
  var leBill = finalBill + taxvalue;


  console.log(finalBill)
  var tipAmount = document.querySelector('#tipAmount');
  var totalBillWithTip = document.querySelector('#totalBillWithTip');
  var tax = document.querySelector('#tax')
  var totalBillWithTipAndTax = document.querySelector('#totalBillWithTipAndTax')

  tipAmount.value = tipValue.toFixed(2);
  totalBillWithTip.value = finalBill.toFixed(2);
  tax.value = taxvalue.toFixed(2);
  totalBillWithTipAndTax.value = leBill.toFixed(2);

 //Show Results

  document.getElementById('results').style.display='block'
}