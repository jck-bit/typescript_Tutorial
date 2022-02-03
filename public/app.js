// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'webwork', 300 )
// docTwo = new Payment('mario', 'plumbing', 200)
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)
// const invOne = new Invoice('mario', 'work on website', 250)
// const invTwo = new Invoice('Luigi', 'work on website', 300)
// let invoices:Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach((inv) =>{
//     return console.log(inv.client,  inv.amount, inv.format());
// });
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
export {};
