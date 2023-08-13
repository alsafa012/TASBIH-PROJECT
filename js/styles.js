const subhanAllahDisplay = document.getElementById('subhanAllahDisplay')
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn')
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn')

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay')
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn')
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn')
  
const allahAkberDisplay = document.getElementById('allahAkberDisplay')
const AllahAkberIncrimentBtn = document.getElementById('AllahAkberIncrimentBtn')
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn')
const resetBtn = document.getElementById('resetBtn')

let subhanAllahInitialValue = 0;
let AlhamdulillahInitialValue = 0;
let AllahuakbarInitialValue = 0;

 subhanAllahIncrimentBtn.addEventListener('click',function(){
     if (subhanAllahInitialValue === 33){
          return alert('Subhan Allah Complete. Please Fillup anoter one');
     }
     // if (subhanAllahInitialValue > 0){
     //      const y = document.getElementById('subhanAllahDecrimentBtn');
     //      y.removeAttribute('disabled');
     // }
     subhanAllahInitialValue += 1;
     subhanAllahDisplay.innerText = subhanAllahInitialValue;

 })
 subhanAllahDecrimentBtn.addEventListener('click',function(){
     if (subhanAllahInitialValue === 0){
          return alert('You cant added nagetive value');
     }
     subhanAllahInitialValue -= 1;
     subhanAllahDisplay.innerText = subhanAllahInitialValue;
 })
 alhamdulillahIncrimentBtn.addEventListener('click',function(){
     if (AlhamdulillahInitialValue === 33){
          return alert('Alhamdulillah Complete. Please Fillup anoter one');
     }
     AlhamdulillahInitialValue += 1;
     alhamdulillahDisplay.innerText = AlhamdulillahInitialValue;

 })
 alhamdulillahDecrimentBtn.addEventListener('click',function(){
     if (AlhamdulillahInitialValue === 0){
          return alert('You cant added nagetive value');
     }
     AlhamdulillahInitialValue -= 1;
     alhamdulillahDisplay.innerText = AlhamdulillahInitialValue;
 })

 AllahAkberIncrimentBtn.addEventListener('click',function(){
     if(AllahuakbarInitialValue === 33){
          return alert('Allahu Akbar Complete. Please Fillup anoter one')
     }
     AllahuakbarInitialValue += 1;
     allahAkberDisplay.innerText = AllahuakbarInitialValue;
 })
 allahAkberDecrimentBtn.addEventListener('click',function(){
     if(AllahuakbarInitialValue === 0){
          return alert('ff')
     }
     AllahuakbarInitialValue -= 1;
     allahAkberDisplay.innerText = AllahuakbarInitialValue;
 })

 resetBtn.addEventListener('click',function(){
     subhanAllahDisplay.innerText = 0;
     alhamdulillahDisplay.innerText=0;
     allahAkberDisplay.innerText=0;
     subhanAllahInitialValue =0;
     AlhamdulillahInitialValue = 0;    
     AllahuakbarInitialValue = 0;
 })



// .document.getElementById('subhanAllahDisplay').addEventListener('keyup',function(event){
//      const x =event.target.input;
//      const y = document.getElementById('subhanAllahDecrimentBtn');
//      if(x >= 0){
//           y.removeAttribute('disabled');

//      }
// })

// document.getElementById('subhanAllahDisplay').addEventListener('keyup', function(event) {
//      const x = event.target.value; // Corrected line
//      const y = document.getElementById('subhanAllahDecrimentBtn');
     
//      if (x >= 0) {
//          y.removeAttribute('disabled');
//      }
//  });
 


