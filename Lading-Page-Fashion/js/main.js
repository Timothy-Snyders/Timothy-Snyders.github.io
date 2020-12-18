let productIndex = 0
 
let productInfos = document.querySelectorAll('.product-info')

setTimeout(() => {
	productInfos[productIndex].classList.add('active')
}, 200);

// SLIDE

let isSliding = false

slide = () => {
	if(isSliding) return

	isSliding = true

	let currProduct = document.querySelector('.product-info.active')
	currProduct.classList.remove('active')

	productIndex = productIndex + 1 > productInfos.length - 1 ? 0 : productIndex + 1
	productInfos[productIndex].classList.add('active')

	// IMAGE SLIDE
	let listItems = document.querySelectorAll('.slide')

	let slider = document.querySelector('.slider')

	let reverseItems = Array.from(listItems).slice().reverse()

	left = reverseItems[0].offsetLeft + 'px'
	height = reverseItems[0].offsetHeight + 'px'
	width = reverseItems[0].offsetWidth + 'px'
	zIndex = reverseItems[0].style.zIndex

	reverseItems.forEach((el, index) => {
		if(index < listItems.length - 1) {
			el.style.left = reverseItems[index + 1].offsetLeft + 'px'
			el.style.height = reverseItems[index + 1].offsetHeight + 'px'
			el.style.width = reverseItems[index + 1].offsetWidth + 'px'
			el.style.zIndex = reverseItems[index + 1].style.zIndex
			el.style.transform = 'unset'
			el.style.opacity = 1
		}

		if( index === listItems.length - 1 ) {
			el.style.transform = 'scale(1.5)'
			el.style.opacity = '0'

			let cln = el.cloneNode(true)

			setTimeout(() => {
				el.remove()

				cln.style.transform = 'scale(0)'
				cln.style.left = left
				cln.style.height = height
				cln.style.width = width
				cln.style.opacity = '0'
				cln.style.zIndex = '0'
				cln.style.animation = 'unset'

				slider.appendChild(cln)

				isSliding = false
			}, 1000)
		}
	})

	// setTimout(() => {
	// 	isSliding = false
	// }, 1000);

	// isSliding = false

}

let slideControl = document.querySelector('.slide-control');

slideControl.onclick = () => {
	slide()
}

openNav = () => {
	let nav = document.querySelector('.nav-overlay')

	nav.classList.toggle('active')

	let hamb = document.querySelector('.hamburger')

	hamb.classList.toggle('active')
}