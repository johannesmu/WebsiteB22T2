// javascript
function onPageLoad() {
    // create a reference to nav button
    const btn = document.querySelector('.navbutton')
    // create a reference to navigation
    const nav = document.querySelector('.navigation')
    // add a listener to the button 
    btn.addEventListener('click', () => {
        if( nav.classList.contains('open') ) {
            nav.classList.add('open')
        }
        else {
            nav.classList.remove('open')
        }
    })
}

window.addEventListener('load', onPageLoad )