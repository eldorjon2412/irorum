// const loader = document.querySelector('.loader');


// setTimeout(() => {
//     loader.style.opacity = '0';
//     setTimeout(() =>{
//         loader.style.display = 'none';
        
//     }, 3000)
// }, 2500);

// const bars = document.querySelector('bars'),
// close = document.querySelector('.close'),
// box = document.querySelector('.box');


// bars.addEventListener('click', () => {
//    box.classList.add('click');
//    bars.style.display = 'none';
//    close.style.display = 'block';
// })

// close.addEventListener('click', () =>{
//     box.classList.remove('click');
//     close.style.display = 'none';
//     bars.style.display = 'block';
// })



// const box = document.querySelector('.box'),
// box1 = document.querySelector('.box1'),
// close = document.querySelector('.close');

// bars.addEventListener('click', () =>{
//     box.classList.toggle('click');
//     bars.style.display = 'none';
//     close.style.display = 'block';
// })
// close.addEventListener('click', () =>{
//     box.classList.remove('click');
//     close.style.display = 'none';
//     bars.style.display = 'block';



// let x = 10;
// let y = 5;

// let i = x / y;

// if(x %= y){
//     console.log('folse', i);
// }else{
//     console.log('true', i);
// }

// console.log(++x);
// console.log(x++);
// console.log(x);


// let nambers = [1,2,3,4,5,6,7,8,9];

// nambers.push(5);
// nambers.pop(1);
// nambers.unshift(2);
// nambers.shift(3);
// nambers.length;
// nambers.reverse()
// nambers.lastIndexOf(2);
// console.log(nambers);








let times = new Date();
let kun = times.getDate();
let yil = times.getFullYear();
let mons = times.getMonth();
let sana = times.getDate();
let hafta = times.getDay();
let day = ["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba",]

let oylar = ["yanvar","fevral","mart","ap","may","iy","iyl","avg","sent"," Oktyabr ","noy","dec"]
document.write( yil ,"-yil", oylar [ mons ]," -oyi " ,  kun ,"-sana ", day [hafta],);

// document.write(times);







function showTime(){
    let times = new Date();

    document.querySelector('.hour').textContent = times.getHours();
    document.querySelector('.minut').textContent = times.getMinutes();
    document.querySelector('.secont').textContent = times.getSeconds();
   
}
 showTime();

 setInterval(function (){
     showTime();
 }, 1000);


 let kasb = 'dastrurchi';
 let answer  = 'ismingiz nima';
 let age = 'yoshingiz nechada';

 const yosh = 25;
 console.log(kab,yosh);
 document.write(kasb);
 alert(kasb);
 prompt(kab);
 prompt(kab);
 prompt(age);
 prompt(answer);
