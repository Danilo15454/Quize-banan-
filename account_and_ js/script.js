// function press() {
//     const inpValue = inp.Value;
//     const li = document.createElement('li');
//     const list = document.getElementsByid('ul');
//     li.textContent = inpValue;
//     list.appendChild(li);
//     inp.Value = '';
// };

// const name = prompt('Whats your name?');
// alert(`Hello ${name}!`);

// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// };

// const obj = {
//     name: 'Jin',
//     age: 12,
//     weight: 73
// };
//     const name = prompt('Whats your name?');
//     const age = prompt('How old are you?');
//     const weight = prompt('Whats your weight?');
//     obj.name = {name};
//     obj.age = {age};
//     obj.weight = {weight};
//     console.log (obj);

// const numArr = [10,4,7,2,5];
// const numArr2 = [];
// for (let i = 0; i < numArr.length; i++) {
//     const element = numArr[i];
//     if (numArr >= 5 ) {
//         numArr2.push(element)
//     }
// };

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

// class Human{
//     bd = [];
//     constructor(name1,age1,weight1){
//         this.name = name1;
//         this.age = age1;
//     }
//     get(){
//         return this.bd;
//     }
//     toPush(obj){
//         this.bd.push(obj)
//     }
// }
// const a = new Human('Misha','17');
// a.toPush(a);
// console.log(a.get());



// Акаунт пошта і пароль з валідацією

// const login = document.getElementById('mail');
// const pass = document.getElementById('pass');
// function validatorPass(login, password) {
//     let alogin;
//     let apass;
//     if (login.length !== 0) {
//         const atsignindex = login.indexOf('@');
//         const pointindex = login.indexOf('.');
//         if (
//             atsignindex !== -1 &&
//             pointindex !== -1 &&
//             login.slice(0, atsignindex).length > 0
//             && login.slice(atsignindex + 1, pointindex).length > 0
//             && login.slice(pointindex + 1, login.length).length > 0
//         ){
//             alogin = true
//         } else alogin = false
//     };
//     const hasNum = /\d/.test(password);
//     const uppercase = /[A-Z]/.test(password);
//     const islengthcorrect = password.length >= 8;
//     const hasUnderscore = password.includes("_")
//     if (hasNum && uppercase && islengthcorrect && hasUnderscore) {
//         apass = true
//     }else apass = false

//     return alogin && apass ? true : false;
// };
// const submit = document.getElementById('sub')
// submit.addEventListener('click', validatorPass(login, pass));
// console.log(submit);


// class User {
//     UserDb = [];

//     constructor() {
//         // this.login = login;
//         // this.password = password;
//     }
//     pushToUserDb(log, pass) {
//         const user = {
//             login: log,
//             password: pass,
//         }
//         this.UserDb.push(user);
//     }
//     getUserdb() {
//         return this.UserDb;
//     }
// }

// const input = document.getElementById('mail');
// const newUser = new User();
// function clicker() {
//     const login = input.value;
//     const password = 123;

//     newUser.pushToUserDb(login, password);

//     console.log(newUser.getUserdb());
// }

// const humans = [{
//     name: 'Sasha1',
//     Age: 12,
//     family: ['mother','father','sister','brother'],
// },
// {
//     name: 'Sasha2',
//     Age: 12,
//     family: ['mother','father','sister','brother'],
// },
// {
//     name: 'Sasha3',
//     Age: 12,
//     family: ['mother','father','sister','brother'],
// },
// {
//     name: 'Sasha4',
//     Age: 12,
//     family: ['mother','father','brother'],
// },
// {
//     name: 'Sasha5',
//     Age: 12,
//     family: ['mother','father','brother'],
// },
// {
//     name: 'Sasha6',
//     Age: 12,
//     family: ['mother','father','brother'],
// },
// {
//     name: 'Sasha7',
//     Age: 12,
//     family: ['mother','father','brother'],
// }]

// for (const element of humans) {
//     if (element.family.length + 1 === 5) {
//         console.log(element);
//     }
// }

// let result = prompt('which number?');

// while (result > 0) {
//     console.log(`${result} - 7 = ${result - 7}`);

//     result -= 7;
// }

// let a = 'Hello World!'
// a = a.replaceAll('o','_');
// console.log(a);

// const star = '* ';
// const space = ' ';
// let s = 1;
// for (let i = 2; i >= 0; i--) {
//     const spaces = space.repeat(s);
//     const stars = star.repeat(s);
//     s++
//     console.log(spaces + stars);
// }

// const arr = [3,4,7,12,9,10];
// const odd = [];
// const a = [];
// for (const el of arr) {
//     if (el % 2 == 0) {
//         odd.push(el)
//     }else{
//         a.push(el)
//     }
// }
// console.log(odd,a);

// const numbers = [1,2,3,4];

// console.log(' ', numbers.join(' '));

// for (let i = 1; i < numbers.length + 1; i++) {
//     const el = numbers[i];
//     const line = [i];
//     numbers.map( (j) => {
//         line.push(i * j)
//     })
//     console.log(line.join(' '));
// }

// let num = prompt('which number?');

// let minus = prompt('minus');

// while (num > 0) {
//     console.log(`${num} - ${minus} = ${num - minus}`);

//     num -= minus;
// }
