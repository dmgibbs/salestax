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

function taxRates(){
// return an array of tax rates from the salesObject

}

  function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
    taxProvs = Object.keys(taxRates);
    console.log(taxProvs);

    for (var i=0; i <salesData.length;i++){
      subtotal = salesData[i]['sales'].reduce((acc, item) => acc+item,0);
      console.log('Company: '+ salesData[i]['name'] +"Sales Total:" + subtotal);

    }
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
