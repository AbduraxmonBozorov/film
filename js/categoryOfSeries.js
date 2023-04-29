function categoryOfSeries(){
    
    let tabs=document.querySelectorAll('.tabheader__item')
    let tabcontent=document.querySelectorAll(".tabcontent")
    tabcontent.forEach((item)=>{
        item.style.display='none'
    })
    tabcontent[0].style.display='block'
    
    tabs.forEach((tab)=>{
        tab.addEventListener('click', ()=>{
            console.log(tab.innerHTML);
            tabcontent.forEach((item)=>{
                item.style.display='none'
            })
    
            tabcontent.forEach((item)=>{
                if(item.classList.contains(tab.innerHTML)){
                    item.style.display="block"
                }
    
                
            })
    
            tabs.forEach((item)=>{
                item.classList.remove('tabheader__item_active')
            })
            tab.classList.add("tabheader__item_active")
    
        })
    })
    }

export default categoryOfSeries