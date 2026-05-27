const btn = document.querySelector('#Theme')
const currentTheme = localStorage.getItem('theme')
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme')
}
btn.addEventListener('click',function() {
    console.log('jjjj')
    document.body.classList.toggle('dark-theme')
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark'
    }
    localStorage.setItem('theme', theme)
} )


// const butn = document.getElementById('btn');
// const inp = document.getElementById('input');

// function press() {
//     const inpValue = inp.Value;
//     const li = document.createElement('li');
//     const list = document.getElementsByid('ul');
//     li.textContent = inpValue;
//     list.appendChild(li);
//     inp.Value = '';
// }

// const name = prompt('Whats your name?')
// alert(`Hello ${name}!`)

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// const obj = {
//     name: 'Jin',
//     age: 12,
//     weight: 73
// }
//     const name = prompt('Whats your name?')
//     const age = prompt('How old are you?')
//     const weight = prompt('Whats your weight?')
//     obj.name = {name}
//     obj.age = {age}
//     obj.weight = {weight}
//     console.log (obj)

// const numArr = [10,4,7,2,5];
// const numArr2 = []
// for (let i = 0; i < numArr.length; i++) {
//     const element = numArr[i];
//     if (numArr >= 5 ) {
//         numArr2.push(element)
//     }
// }

// const products = [{
//     type: 'Video',
//     price: '300 $'
// },
// {
//     type: 'Proc',
//     price: '200 $'
// },
// {
//     type: 'Video',
//     price: '250 $'
// },
// {
//     type: 'Proc',
//     price: '1500 $'
// },
// {
//     type: 'Video',
//     price: '100 $'
// },
// {
//     type: 'Proc',
//     price: '350 $'
// },
// ];

// const filtredProd = products.filter((el) => {
//     return el.type === 'Proc' && el.price < 300
// })
