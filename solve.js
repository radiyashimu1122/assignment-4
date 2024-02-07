function calculateMoney(ticketSale) {
 if (isNaN(ticketSale) || ticketSale < 0) {
     return "Invalid Number";
 }
 var earning = ticketSale * 120;
 var cost = 500 + (8 * 50);
 var dueMoney = earning - cost ;
 return dueMoney;
}
// console.log(calculateMoney(-2));



