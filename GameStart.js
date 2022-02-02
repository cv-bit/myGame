var gameWorld = document.querySelector(".game-container")
var hero = document.createElement('div')
hero.classList.add('hero')

var hitbox = document.createElement('div')
hitbox.classList.add('hitbox')
hero.appendChild(hitbox)

var sword = document.createElement('div')

gameWorld.appendChild(hero)