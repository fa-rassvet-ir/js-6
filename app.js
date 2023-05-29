// DOM

const form = document.getElementById("form")

const userData = {
    name: "USer",
    email: "test@gmail.com", 
    nickName: "venom_", 
    password: "123456" 
}
// ctrl + Alt + F
form.onsubmit = (e) => { 
    e.preventDefault()
    console.log(e.target,'----?----');
    const formData = e.target
    const formEmail = formData.email.value
    const formPassword = formData.password.value
    
    if (userData.email === formEmail && userData.password === formPassword) {
        alert("Welcome" + userData.name)
        window.location.href = "https://www.google.com/"
    }else{
        alert('Error email or password')
    }
}
// DOM ELEMENTY
const btnMinus = document.getElementById('minus')
const btnPlus = document.getElementById('plus')
const pText = document.getElementById('text-count')
const price = document.getElementById('price')

// onclick
btnPlus.onclick= () => {
    pText.innerText = parseInt(pText.innerText) + 1
    //                  500     *                  2,3,4
    price.innerText = 500 * parseInt(pText.innerText) + " $"
}

// onclick
btnMinus.onclick = () => {
    if(parseInt(pText.innerText) > 0){
        pText.innerText = parseInt(pText.innerText) - 1
    }
    const allTotal = parseInt(pText.innerText) //10 000

    price.innerText = allTotal - 500 + " $"
}

// simka oshka
const oDengi = {
    balance: 500
}