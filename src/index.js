/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const API = 'https://platzi-avo.vercel.app/'
const app = document.querySelector('#app')
const division = document.querySelector('.division')
const heroContainer = document.querySelector('div.heroContainer')
const formatPrice = function(price){
    const newPrice = new window.Intl.NumberFormat("es", {
        style: "currency",
        currency : "USD",
    }).format(parseInt(price))
    return newPrice
}
async function fetchData(api){
    const response = await fetch(`${api}api/avo`)
    const data = await response.json()
    const allItems = []
    data.data.forEach(item => {
        const imagen = document.createElement('img')
        imagen.src = `${api}${item.image}`
        imagen.width = 300
        const title = document.createElement('h3')
        title.classList.add('productTitle')
        title.textContent = item.name
        const container = document.createElement('div')
        container.classList.add('productContainer')
        const price = document.createElement('div')
        price.classList.add('productPrice')
        price.textContent = formatPrice(item.price)
        const subMenu = document.createElement('div')
        subMenu.append(title, price)
        subMenu.classList.add('productSubMenu')
        container.append(imagen, subMenu)
        allItems.push(container)
    });
    app.append(...allItems)
    app.classList.add('appProductsContainer')

    // Haciendo un hero de la pagina
    const i = (Math.floor(Math.random()*8))
    const prota = data.data[i]
    const heroImagen = document.createElement('img')
    heroImagen.width = 320
    heroImagen.src = `${api}${prota.image}`
    const heroTitle = document.createElement('h3')
    heroTitle.classList.add('heroTitle')
    heroTitle.textContent = prota.name
    const heroPrice = document.createElement('div')
    heroPrice.textContent = `Price:   ${formatPrice(prota.price)}`
    heroPrice.classList.add('heroPrice')
    const heroDescription = document.createElement('div')
    heroDescription.classList.add('heroDescription')
    heroDescription.textContent = prota.attributes.description.slice(0,210)
    const moreInfo = document.createElement('button')
    const buyButton = document.createElement('button')
    buyButton.textContent = 'Buy'
    moreInfo.textContent = 'More Info'
    buyButton.classList.add('button', 'CTA')
    moreInfo.classList.add('button', 'moreInfo')
    const buttonsContainer = document.createElement('div')
    buttonsContainer.append(buyButton, moreInfo)
    const heroInfoContainer = document.createElement('div')
    heroInfoContainer.classList.add('heroInfoContainer')
    heroInfoContainer.append(heroTitle, heroPrice, heroDescription, buttonsContainer)
    heroContainer.append(heroInfoContainer, heroImagen)


}


fetchData(API)