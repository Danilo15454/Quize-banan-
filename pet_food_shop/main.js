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