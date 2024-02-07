function calculateMoney(ticketSale) {
 if (ticketSale <= 0) {
     return "Invalid Number";
 }
 let earning = ticketSale * 120;
 let cost = 500 + (8 * 50);
 let dueMoney = earning - cost ;
 return dueMoney;
}

// // task-2
function checkName(name) {
    
    if (typeof name === 'string') {
        name = name.toLowerCase();
        const rightEnd = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        const FinalChar = name.charAt(name.length - 1);
        if (rightEnd.includes(FinalChar )) {
            return "Good Name";
        }
        return "Bad Name";
    }
  else{
    return "invaild"
  }
} 
// task-3
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Please enter an array here";
    }
    return array.filter(element => typeof element === 'number' && !isNaN(element));
}
// task-4
function password(obj) {
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('placeName')
     || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }
    const firsDocument = obj.placeName.charAt(0).toUpperCase();
    const password = `${obj.placeName}#${obj.name}@${obj.birthYear}`;
    return password;
}
// task-5






