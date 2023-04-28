// create customer profile using an object
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
};

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills:5,
    subscription:true,
    coupon: true,
};

// build functions using arrow function to calculate two different types of discount

//function for subscription discount
const subscriptionDiscount = (pricePerRefill, refills) => {
    const discCalculation = refills * pricePerRefill * 0.75;
    return discCalculation;
}
// function for coupon discount
const couponDiscount = (pricePerRefill, refills) => {
    const discCalculation = refills * pricePerRefill - 10.00;
    return discCalculation;
}
// function for both subscription and coupon discount
const bothDiscount = (pricePerRefill, refills) => {
    const discCalculation = refills * pricePerRefill * 0.75 - 10.00;
    return discCalculation;
}

// 
const discounts = (customer) => {
    //check to see if customer has a subscription
    if (customer.subscription === true && customer.coupon === true) {
        const discCalculation = customer.refills * customer.pricePerRefill * 0.75 - 10.00;
        return discCalculation;
    } else if(customer.subscription === true) {
        const discCalculation = customer.refills * customer.pricePerRefill * 0.75;
        return discCalculation;
        
    // check to see if customer has a coupon
    } else if (customer.coupon == true) {
        const discCalculation = customer.refills * customer.pricePerRefill - 10.00;
        return discCalculation;
    // check to see if customer has coupon and subscription
    } else
        return customer.refills * customer.pricePerRefill;

}

//console.log( "Your grand total is $");
const grandMessage = "Your grand total is $";
console.log('Timmy =>', grandMessage, discounts(timmy));
console.log('Sarah =>', grandMessage, discounts(sarah));
console.log('Rocky =>', grandMessage, discounts(rocky));



// console.log(sarah.subscription == false);
//         const customer1 = subscriptionDiscount(50,1);
//         console.log('Timmy => Your grand total is $', customer1);  
//         const customer2 = couponDiscount(25,3);
//         console.log('Sarah => your grand total is $', customer2); 
//         const customer3 = bothDiscount(30,5);
//         console.log('Rocky => your grand total is $', customer3);