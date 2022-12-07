import dogs from "./data.js"
import Dog from "./Dogs.js"

document.getElementById('dislike-btn').addEventListener('click', dislike)
document.getElementById('like-btn').addEventListener('click', like)
// make "like" and "nope" badge come up when dislike and like are clicked


let dogCount = -1
function getNewDog() {
    if (dogCount <= dogs.length) {
        dogCount++
        return new Dog(dogs[dogCount])
    } else {
        return {}
    }
}

let dog1 = getNewDog()
console.log(dog1)

function render() {
    document.getElementById("badge").innerHTML = ``
    document.getElementById("profile-card").innerHTML = dog1.getDogProfileHtml()
}

render()

function dislike() {
    document.getElementById("badge").innerHTML = `<img src="images/badge-nope.png" alt ="like-badge">`
    setTimeout(() => {
        dog1 = getNewDog()
        render()
    }, 2000)
}

function like() {
    document.getElementById("badge").innerHTML = `<img src="images/badge-like.png" alt ="like-badge">`
    setTimeout(() => {
        dog1 = getNewDog()
        render()
    }, 2000)
}








