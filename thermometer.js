const loading = ()=> {
    let meter = document.getElementById('meter');
    meter.innerHTML="&#xf2cb"

    setTimeout(()=>{
        meter.innerHTML="&#xf2ca"
        meter.style.color="green"
    },1000)

    setTimeout(()=>{
        meter.innerHTML="&#xf2c9"
        meter.style.color="rgb(210, 108, 0)"
    },2000)

    setTimeout(()=>{
        meter.innerHTML="&#xf2c8"
        meter.style.color="rgb(255, 108, 3)"
    },3000)

    setTimeout(()=>{
        meter.innerHTML="&#xf2c7"
        meter.style.color="red"
    },4000)

    
    
}
loading();

setInterval(()=>{
    loading();
},5000)