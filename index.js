import dogs from "./data.js"
import Dog from "./Dogs.js"

// make "like" and "nope" badge come up when dislike and like are clicked
document.getElementById('dislike-btn').addEventListener('click', 
() => isWaiting ? '' :dislike())
document.getElementById('like-btn').addEventListener('click', 
() => isWaiting ? '' :like())

 // set variable to stop users from pressing like or dislike button while new profile is being rendered

 let isWaiting = false; 

 // create array for dogs that have been liked 
 let dogsLiked = []


let dogCount = -1
function getNewDog() {
    if (dogCount < dogs.length-1) {
        dogCount++
        return new Dog(dogs[dogCount])
    } else {
        return false
    }
}

let dog = getNewDog()
render()

function render() {
    if(dog){
        document.getElementById("badge").innerHTML = ``
        document.getElementById("profile-card").innerHTML = dog.getDogProfileHtml()
    } else {
        const list = endSummary()
        document.getElementById("badge").innerHTML = ``
        document.getElementById("profile-card").innerHTML = `<div id = end>You liked the following dogs:<br>${list}</div>`
    }
    
}

function endSummary(){
    return dogsLiked.join("<br>")
  
}


function dislike() {
    isWaiting = true
    dog.setDogHasBeenSwiped()
    console.log(dog.hasBeenSwiped)
    document.getElementById("badge").innerHTML = `<img src="images/badge-nope.png" alt ="like-badge">`
    setTimeout(() => {
        dog = getNewDog()
        render()
        isWaiting = false
    }, 2000)
}

function like() {
    isWaiting = true
    dog.setDogHasBeenSwiped()
    dog.setDogHasBeenLiked()
    dogsLiked.push(dog.name)
    document.getElementById("badge").innerHTML = `<img src="images/badge-like.png" alt ="like-badge">`
    setTimeout(() => {
        dog = getNewDog()
        render()
        isWaiting = false
    }, 2000)
}








