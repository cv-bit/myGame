var x = 0
var y = 0
let direction = "right"
let timeout;

const gravity = () => {
    y = 0
    hero.style.bottom = y + "px"
    clearTimeout()
}

const keyLeft = () => {
    if(x >= 0) {
        x -= 10
    }
    direction = "left"
    sword.style.right = null
    sword.style.borderLeft = 1 + "px solid skyblue"
    sword.style.borderRight = 0 + "px"
    hero.style.left = x + "px"
}

const keyRight = () => {
    if(x <= 330) {
        x += 10
    }
    direction = "right"
    sword.style.left = null
    sword.style.borderLeft = 0 + "px"
    sword.style.borderRight = 1 + "px solid skyblue"
    hero.style.left = x + "px"
}

const finishAttack = () => {
    hitbox.removeChild(sword)
    clearTimeout()
}

const attack = () => {
    sword.classList.add('sword')
    if(direction === "right") {
        sword.style.right = -20 + "px"
        hitbox.appendChild(sword)
    } else if (direction === "left") {
        sword.style.left = -20 + "px"
        hitbox.appendChild(sword)
    }
    timeout = setTimeout(finishAttack, 300)
    console.log(direction)
}

const keyUp = () => {
    y += 30
    timeout = setTimeout(gravity, 300)
    hero.style.bottom = y + "px"
}

function control(e) {
    if(e.keyCode === 37) {
        keyLeft()
    } else if (e.keyCode === 38) {
        keyUp()
    } else if (e.keyCode === 39) {
        keyRight()
    } else if (e.keyCode === 32) {
        attack()
    }
    // else if (e.keyCode === 40) {
    //     keyDown()
    // }
}
document.addEventListener('keydown', control)

