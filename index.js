
let signup = document.getElementById('signup-form')
let signupBtn = document.getElementById("signup-hedding");
let loginBtn = document.getElementById("login-hedding")
let signupForm = document.getElementById("signup-form")
let loginForm = document.getElementById("login-form")
signupBtn.addEventListener("click", () => {
    signupForm.style.display = "grid"
    loginForm.style.display = "none"

    signupBtn.style.background = "rgb(129, 88, 88)"
    loginBtn.style.background = "white"

})
loginBtn.addEventListener("click", () => {
    signupForm.style.display = "none"
    loginForm.style.display = "grid"
    loginBtn.style.background = "rgb(129, 88, 88)"
    signupBtn.style.background = "white"
})

async function signupFormfun(event) {
    event.preventDefault();
    let email = document.getElementById("email-signup").value
    let password = document.getElementById("password-signup").value
    let name = document.getElementById("name-signup").value
    let obj = {
        email,
        name,
        password
    }


    let res = await fetch(`http://localhost:3000/signup`, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(obj)
    })
    let data = await res.json()

}

async function login(event) {
    event.preventDefault()

    let email = document.getElementById("email-login").value
    let password = document.getElementById("password-login").value;

    obj = {
        email,
        password
    }
    console.log(obj)

    let res = await fetch(`http://localhost:3000/signup?email=${email}`)
    data = await res.json();
    if (data[0] == undefined) {
        alert("user Not exisist");
    } else if (data[0].password == password) {
        alert("Login succesfull")
    } else {
        alert("login Failed")
    }
}




