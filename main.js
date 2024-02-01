"use strict"

let mostSalesWrapper = document.querySelector(".most-sales__wrapper");

for(let i = 1; i <= 10; i++) {
    let mostSalesCard = document.createElement('div');

    mostSalesCard.setAttribute('class', 'most-sales w-[230px] h-[377px] bg-white rounded-[10px] p-[10px] relative')

    mostSalesCard.innerHTML = `
    <img class="mx-auto" src="./assets/images/laptop2.png" alt="img">
    <img class="absolute top-[10px] right-[10px] cursor-pointer" src="./assets/images/favorite_border.svg" alt="icon">
    <div class="pl-[10px]">
        <div>
            <p class="text-[#0D63F3] text-[18px]">299 000 so’m</p>
            <p class="text-[14px] leading-4">Apple Airpods Pro simsiz quloqchin , Oq rangda   </p>
        </div>
        <div class="absolute bottom-[10px]">
            <p class="text-[14px] text-[#6C757D] mb-[25px]">1230 ta buyurtma</p>
            <div class="flex gap-x-[28px]">
                <button class="w-[130px] py-[10px] bg-[#0D63F3] text-white rounded-lg">Sotib olish</button>
                <img class="cursor-pointer" src="./assets/images/shopping_cart.svg" alt="icon">
            </div>
        </div>
    </div>
    `
    mostSalesWrapper.append(mostSalesCard)
}

let mostPopulationWrapper = document.querySelector(".most-population__wrapper");

for(let i = 1; i <= 10; i++) {
    let mostSalesCard = document.createElement('div');

    mostSalesCard.setAttribute('class', 'most-sales w-[230px] h-[377px] bg-white rounded-[10px] p-[10px] relative')

    mostSalesCard.innerHTML = `
    <img class="mx-auto" src="./assets/images/laptop2.png" alt="img">
    <img class="absolute top-[10px] right-[10px] cursor-pointer" src="./assets/images/favorite_border.svg" alt="icon">
    <div class="pl-[10px]">
        <div>
            <p class="text-[#0D63F3] text-[18px]">299 000 so’m</p>
            <p class="text-[14px] leading-4">Apple Airpods Pro simsiz quloqchin , Oq rangda   </p>
        </div>
        <div class="absolute bottom-[10px]">
            <p class="text-[14px] text-[#6C757D] mb-[25px]">1230 ta buyurtma</p>
            <div class="flex gap-x-[28px]">
                <button class="w-[130px] py-[10px] bg-[#0D63F3] text-white rounded-lg">Sotib olish</button>
                <img class="cursor-pointer" src="./assets/images/shopping_cart.svg" alt="icon">
            </div>
        </div>
    </div>
    `
    mostPopulationWrapper.append(mostSalesCard)
}

let katalogBtn = document.querySelector(".katalog-btn"),
katalogBar = document.querySelector(".katalog-bar", "scale"),
main = document.querySelector("main")

katalogBtn.addEventListener('click', () => {
    katalogBar.classList.toggle("block")
    katalogBar.classList.toggle("hidden")
})


let loginPanel = document.querySelector(".login-panel"),
loginBtn = document.querySelector(".login-btn"),
body = document.querySelector("body");


loginBtn.addEventListener('click', () => {
    loginPanel.classList.toggle("block")
    loginPanel.classList.toggle("hidden")
    body.setAttribute("class", "overflow-y-hidden")
})

let removeBtn = document.querySelector(".remove-btn")
    removeBtn.addEventListener('click', () => {
    loginPanel.classList.add("hidden")
    body.setAttribute("class", "overflow-y-scroll")
})
