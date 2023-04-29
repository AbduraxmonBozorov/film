

export default function slider(){

    function getZero(a){
        if(a<10){
            return `0${a}`
        }
        else{
            return a
        }
    }



    let offer__slider_wrapper=document.querySelector(".offer__slider-wrapper")

    fetch("http://localhost:3000/slider")
    .then(response=> response.json())
    .then(slides=> 
         slides.forEach(slide=>{
            let offer__slide=document.createElement("div")
            offer__slide.classList.add("offer__slide")
            let img=document.createElement("img")
            img.setAttribute("src", slide.img)
            offer__slide.append(img)

            let tabcontent__descr=document.createElement("div")
            tabcontent__descr.classList.add("tabcontent__descr")
            tabcontent__descr.innerHTML=slide.descr
            offer__slide.append(tabcontent__descr)

            offer__slider_wrapper.append(offer__slide)
        })
        )

      
        setTimeout(()=>{
            let slides=document.querySelectorAll(".offer__slide")

        // console.log(slides);

        slides.forEach(slide => {
            slide.classList.add('hidden')
        })

        let pre=document.querySelector(".offer__slider-prev")
        let next=document.querySelector(".offer__slider-next")
        let current=document.querySelector("#current")
        let total=document.querySelector('#total')

        total.innerHTML=getZero(slides.length)

        let slideInd=0

        current.innerHTML=getZero(slideInd+1)
        slides[slideInd].classList.remove('hidden')
        slides[slideInd].classList.remove('show')


        pre.addEventListener('click',()=>{
            console.log("pre");
            slides[slideInd].classList.remove('show')
            slides[slideInd].classList.add('hidden')

            slideInd--;
            if(slideInd<0){
                slideInd=slides.length-1
            }
            
            current.innerHTML=getZero(slideInd+1)
            // console.log(slides[slideInd]);
            slides[slideInd].classList.remove('hidden')
            slides[slideInd].classList.add('show')
        })

        next.addEventListener('click',()=>{
            console.log("pre");
            slides[slideInd].classList.remove('show')
            slides[slideInd].classList.add('hidden')

            slideInd++;
            if(slideInd>=slides.length){
                slideInd=0
            }

            current.innerHTML=getZero(slideInd+1)
            

            // console.log(slides[slideInd]);
            slides[slideInd].classList.remove('hidden')
            slides[slideInd].classList.add('show')
        })

    

       


        }, 1000)

       
    

        



}