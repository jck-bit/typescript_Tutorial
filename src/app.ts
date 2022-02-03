
import {Payment} from './classes/Payment.js';
import {Invoice} from './classes/invoice.js';
import {HasFormatter} from './classes/interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';


//list template-instance


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit',(e: Event)=>{
  e.preventDefault();


  let doc:HasFormatter;
  if(type.value ==='invoice'){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  }else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

   list.render(doc, type.value, 'end')  

});
