function calculateMoney(ticketSale) {
 if (ticketSale <= 0) {
     return "Please enter a Valid number here";
 }
 let earning = ticketSale * 120;
 let cost = 500 + (8 * 50);
 let dueMoney = earning - cost ;
 return dueMoney;
}

function checkName(name)  {
    if (typeof name === 'string') {
        name = name.toLowerCase();
        const endLetter= ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
        const Final= name.charAt(name.length - 1);
     for  ( let letter of endLetter) {
        if (letter===Final) {
        
            return "Good Name";
        }
    }
        return "Bad Name";
    }
  else{
    return "invalid"
  }
} 
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Please enter an array here";
    }
    return array.filter(element => typeof element === 'number' && !isNaN(element));
}

function password(obj) {
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') ||
obj.birthYear.toString().length !== 4) {
        return "invalid";
    }
    const primaryLetter = obj.siteName.trim().charAt(0).toUpperCase();
    const smallName = primaryLetter + obj.siteName.slice(1); 
    const password = smallName + '#' + obj.name + '@' + obj.birthYear;
  return password.charAt(0).toUpperCase() + password.slice(1);
}

function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) && typeof livingCost === "number") {
        let totalPayment = 0;
        for (let payment of arr) {
            if (payment >= 3000) {
                let amass = payment * 0.2;
                totalPayment += payment - amass;
            } else {
                totalPayment += payment;
            }
        }
        let taka = totalPayment - livingCost;
        if (taka >= 0) {
            return taka;
        } else {
            return "“earn more”";
        }
    } else {
        return "invalid input";
    }
}

