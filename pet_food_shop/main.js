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