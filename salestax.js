var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function getRates(where){
// returns the specific tax rate for a given province (abbreviated)
  //console.log()
  return  salesTaxRates[where];
}

  function calculateSalesTax(salesData, taxRates) {


  // Implement your code here
    taxProvs = Object.keys(taxRates);
    salesObj = {};
    console.log(taxProvs);

    for (var i=0; i <salesData.length;i++){
      subtotal = salesData[i]['sales'].reduce((acc, item) => acc+item,0);

      taxTotal = subtotal * getRates(salesData[i]['province']);
      console.log('Company: '+ salesData[i]['name'] +"Sales Total: $" + subtotal +" Tax Total: "+taxTotal);
      if (salesObj[salesData[i]['name']] === undefined)
        salesObj[salesData[i]['name']] = { "TotalSales": subtotal,  "TotalTaxes": taxTotal};
      else {
        salesObj[salesData[i]['name']]['TotalSales'] +=  subtotal;
        salesObj[salesData[i]['name']]['TotalTaxes'] +=  taxTotal;
      }
    }
    return salesObj;
  }
  var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
console.log(results);
