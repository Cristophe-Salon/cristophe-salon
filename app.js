// Cristophe.com custom JS
/* code hosted from GitHub(https://github.com/luukee/cristophe-salon) with https://www.jsdelivr.com/ */
// set aria attributes on all _blank anchors
let externalLink = document.querySelectorAll(`a[target="_blank"]`)
function addAria(el) {
	let linkName = el.textContent
	el.setAttribute(`aria-label`, linkName + ` (opens in a new tab)`)
}
externalLink.forEach(addAria)

// set alt text on background images
let img = document.querySelectorAll(`.section-background img`)
function imgAlt(ele) {
	ele.setAttribute(`alt`, `cristophe salon exterior`)
}
img.forEach(imgAlt)

// all figure elements used to display images add role="none"
let figureImg = document.querySelectorAll(`figure.gallery-reel-item`)
let carets = document.querySelectorAll(`[class^="caret"]`)

function figureImgAlt(ele) {
	ele.setAttribute(`role`, `none`)
}
figureImg.forEach(figureImgAlt)
carets.forEach(figureImgAlt)

// form fields should include an "aria-required" attribute that equals to "true"
let emailInput = document.querySelector(`.field-element`)
emailInput.setAttribute(`aria-required`, `true`)

// team fix alt text on images
let teamPhotoAlt = document.querySelectorAll(`.grid-image-inner-wrapper img`)
function teamPhotoAltStrip(ele) {
	let alt = ele.getAttribute(`alt`)
	alt = alt.substring(0, alt.indexOf("<"))
	ele.setAttribute(`alt`, `team member ${alt}`)
}
teamPhotoAlt.forEach(teamPhotoAltStrip)
// remove several hidden elements all together
let removeEle = document
	.querySelectorAll(
		".floating-cart, .newsletter-form-spinner, .newsletter-form-button-icon, .chevron"
	)
	.forEach((e) => e.remove())

// covid 19 page only
if (window.location.href.indexOf("covid-19-faq") > -1) {
	let iframe = document.querySelector(`iframe`)
	iframe.setAttribute(
		`title`,
		`Covid 19 Safety Protocols at Cristophe Salon in Beverly Hills video`
	)
}

let modalBtn = document.getElementById("modal_btn")
let modal = document.getElementsByClassName(
	"fe-block-yui_3_17_2_1_1671584836922_10372"
)[0]
modalBtn.onclick = function () {
	modal.style.display = "grid"
}
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none"
	}
}
