window.addEventListener("load",()=>{
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");
    const real = document.querySelector("#real");
    console.log(input);
    input.addEventListener('input',event => {
        fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=INR`)
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            const value = data.rates.INR;
            real.innerHTML = "Current Rate: "+value.toFixed(2);
            output.value = (input.value/value*10).toFixed(2);        
        })
    })
})