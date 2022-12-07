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

    // getCharacterHtml() {
    //     const { name, avatar, health, diceArray} = this
    //     const healthBar = this.getHealthBarHtml()
        

    //     return `<div class="character-card">
    //         <h4 class="name"> ${name} </h4>
    //         <img class="avatar" src="${avatar}" />
    //         <div class="health">health: <b> ${health} </b></div>
    //         ${healthBar}
    //         <div class="dice-container">    
    //             ${diceArray}
    //         </div>
    //     </div>`

    // }
}

export default Dog
