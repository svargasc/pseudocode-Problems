const flavors = ['Natural', 'Coconut','Almond','Vanilla'];
const prices = [14000,14000,16000,16000];
const stocks = [5,5,2,0];

let selectFlavor = 'Natural';
let selectQuantity = 4;
let finalPrice = 0;

switch (selectFlavor) {
    case 'Natural':
        if (selectQuantity <= stocks[0]) { //valid if the quantity ordered is less than or equal to what is in stock
            console.log(flavors[0]+"is equal to:"+prices[0]);
            finalPrice = prices[0] * selectQuantity; //I operate the price by the quantity to give a final value
            console.log(`The final pricce of ${selectQuantity} yogurts is ${finalPrice}`);
        }else{
            console.log(`Only reaint quantity ${stocks[0]} flavors`);
        }
        break;
    case 'Coconut':
        if (selectQuantity <= stocks[1]) {
            console.log(flavors[1]+"is equal to:"+prices[1]);
            finalPrice = prices[1] * selectQuantity;
            console.log(`The final pricce is ${finalPrice}`);
        }else{
            console.log(`Only reaint quantity ${stocks[1]} flavors`);
        }
        break;
    case 'Almond':
        if (selectQuantity <= stocks[2]) {
            console.log(flavors[2]+"is equal to::"+prices[2]);
            finalPrice = prices[2] * selectQuantity;
            console.log(`The final pricce is ${finalPrice}`);
        }else{
            console.log(`Only reaint quantity ${stocks[2]} flavors`);
        }
        break;
    case 'Vanilla':
        if (selectQuantity <= stocks[3]) {
            console.log(flavors[3]+"is equal to:"+prices[3]);
            finalPrice = prices[3] * selectQuantity;
            console.log(`The final pricce is ${finalPrice}`);
        }else{
            console.log(`Only reaint quantity ${stocks[3]} flavors`);
        }
        break;
    default:
        console.log(`The flavor ${selectFlavor} is not avaible`);
        break;
}