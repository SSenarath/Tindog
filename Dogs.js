class Dog {
    constructor(data) {
        Object.assign(this,data)
    }

    getDogProfileHtml(){
    const{name, avatar,age,bio, hasBeenSwiped,hasBeenLiked} = this
    return `
    <img class ="dog-pictures" src="${avatar}" alt="cute dog">
    <p id = "bio"><span class ="bold">${name}, ${age}</span><br>${bio}</p>`
    }

    setDogHasBeenSwiped(){
        this.hasBeenSwiped = true
    }

    setDogHasBeenLiked(){
        this.hasBeenLiked = true
    }

}

export default Dog
