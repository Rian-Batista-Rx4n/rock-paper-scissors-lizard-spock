const bot_option = document.getElementById("bot-option")
const title = document.getElementById("title")

const option_btn_1 = document.getElementById("option-btn-1")
const option_btn_2 = document.getElementById("option-btn-2")
const option_btn_3 = document.getElementById("option-btn-3")
const option_btn_4 = document.getElementById("option-btn-4")
const option_btn_5 = document.getElementById("option-btn-5")

option_btn_1.addEventListener("click", btn_1)
option_btn_2.addEventListener("click", btn_2)
option_btn_3.addEventListener("click", btn_3)
option_btn_4.addEventListener("click", btn_4)
option_btn_5.addEventListener("click", btn_5)

let bot_choice = 0
let player_choice = 0
let player_win = 0
let bot_win = 0
let draw = 0

function btn_1() {
    player_choice = 1
    play()
}
function btn_2() {
    player_choice = 2
    play()
}
function btn_3() {
    player_choice = 3
    play()
}
function btn_4() {
    player_choice = 4
    play()
}
function btn_5() {
    player_choice = 5
    play()
}

function play() {
    bot_choice = Math.floor(Math.random() * 6)

    if (bot_choice == 1) {
        bot_option.innerHTML = `✊`
    } else if (bot_choice == 2) {
        bot_option.innerHTML = `✋`
    } else if (bot_choice == 3) {
        bot_option.innerHTML = `✌️`
    } else if (bot_choice == 4) {
        bot_option.innerHTML = `🤏`
    } else {
        bot_option.innerHTML = `🖖`
    }


// 1 = rock | 2 = paper | 3 = scissors | 4 = lizard | 5 = spock
    if (bot_choice == 1 && (player_choice == 3 || player_choice == 4)) {
        bot_win++
    } else if (bot_choice == 2 && (player_choice == 1 || player_choice == 5)) {
        bot_win++
    } else if (bot_choice == 3 && (player_choice == 2 || player_choice == 5)) {
        bot_win++
    } else if (bot_choice == 4 && (player_choice == 2 || player_choice == 5)) {
        bot_win++
    } else if (bot_choice == 5 && (player_choice == 1 || player_choice == 3)) {
        bot_win++
    } else if (bot_choice == player_choice){
        draw++
    } else {
        player_win++
    }
    
    title.innerHTML = `You ${player_win} | Bot ${bot_win}`
}
