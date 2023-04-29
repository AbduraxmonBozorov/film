

export default function promotion(){
    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let time=setInterval(() => {
        let d=new Date(2023, 12, 31, 23, 59)
        let dm=d.getMonth()
        dm=months[dm]

        document.querySelector(".dedlineHour").innerHTML=d.toLocaleTimeString()

        document.querySelector(".dedlineMonth").innerHTML=dm

        let dd=d.getDate()

        document.querySelector(".dedlineDay").innerHTML=dd
        let naw=new Date()

        let f=d.getTime() - naw.getTime()

       

        let kun=Math.floor(f/(24*60*60*1000))
        document.querySelector("#days").innerHTML=kun

        let soat=f-(kun*24*60*60*1000)
        soat=Math.floor(soat/(60*60*1000))
        document.querySelector("#hours").innerHTML=soat


        let minut=f-(kun*24*60*60*1000)-(soat*60*60*1000)
        minut=Math.floor(minut/(60*1000))
        document.querySelector("#minutes").innerHTML=minut

        let sekund=f-(kun*24*60*60*1000)-(soat*60*60*1000)-(minut*60*1000)
        sekund=Math.floor(sekund/1000)
        document.querySelector("#seconds").innerHTML=sekund
        }, 1000);

}