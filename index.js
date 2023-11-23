const loader = document.querySelector('.loader')
const container = document.querySelector('.container')
setTimeout(() => {
    loader.style.display = 'none'
    container.style.display = 'flex'
}, 3000)

const oranges = document.querySelectorAll('.orange')
setTimeout(() => {
    oranges.forEach((orange, index) => {
       setTimeout(() => {
            orange.classList.add('full')
       }, index * 150)
    })

}, 3000)

window.addEventListener('scroll', function() {
    console.log("Roma kakashka")
})