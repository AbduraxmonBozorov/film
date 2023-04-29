import categoryOfSeries from "./categoryOfSeries"
import loaderClose from "./loader"
import slider from "./slider"
import promotion from "./promotion"

window.addEventListener('DOMContentLoaded', ()=>{

setTimeout(loaderClose, 1000)
categoryOfSeries()
slider()
promotion()


})