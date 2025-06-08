/**
 * Here we are going to learn about mocking in unit testing..
 * Not calling the actual third party api just moocking the function that returns the same data.
 * This is called side effects in unit testing and we have to maintian the isolation
 * 
 * 
 * We have to do Unit test on function processOrder ->  need Isolation -> need mocking.
 * 
 */

// here to solve the probelem i have used dependecy injection


export function processOrder(data: any, paymentFn = processPayment){
    //some logic -> initially
    const paymentInfo = paymentFn(data.amount);
    return paymentInfo;
}

function processPayment(amount: number){
    //API Call to other payment service to complete the payment

    console.log("I am origianl...")

    return {id: "123", amount: amount};
}