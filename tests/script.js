// const emailInput = document.getElementById('mail')
// const passwordInput = document.getElementById('pass')
// const submit = document.getElementById('sub')
// submit.addEventListener('click' , () => {
//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();
//     const acheck = email.includes('@')
//     const dotcheck = email.includes('.')
//     if (!acheck || !dotcheck) {
//         alert('net @ ili .');
//         return
//     }
//     if (password.length < 8) {
//         alert('malo');
//         return
//     }
// })

// const login = 'fhbgfdjgh@ddd.hbgjk';
// const pass = '';
// function validatorPass(login, password) {
//     let login1;
//     let pass1;
//     if (login.length !== 0) {
//         const atsignindex = login.indexOf('@');
//         const pointindex = login.indexOf('.');
//         if (
//             atsignindex !== -1 &&
//             pointindex !== -1 &&
//             login.slice(0, atsignindex).length > 0
//             && login.slice(atsignindex + 1, pointindex).length > 0
//             && login.slice(pointindex + 1, login.length).length > 0
//         ) {
//             login1 = true
//         } else login1 = false
//     }
//     return login1 && pass1 ? true : false;
// }
// const result = validatorPass(login, pass);
// console.log(result);

