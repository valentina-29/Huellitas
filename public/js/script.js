let sign_in_btn = document.querySelector("#sign-in-btn");
let sign_up_btn = document.querySelector("#sign-up-btn");
let container = document.querySelector(".container");
let sign_in_btn2 = document.querySelector("#sign-in-btn2");
let sign_up_btn2 = document.querySelector("#sign-up-btn2");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});
sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});



function validateFormRegister() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username === "" || email === "" || password === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }
  if (!isValidEmail(email)) {
    alert("Ingrese un correo electrónico válido");
    return false;
  }
  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    return false;
  }
  alert("Usuario registrado correctamente!");
  return true;
}
function isValidEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

let usuarios = [];
function registrarUsuario(username, email, password) {
  let usuario = {
    username,
    email,
    password,
  };

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

window.onload = function() {
    const storedUsers = localStorage.getItem("usuarios");
    if (storedUsers) {
        usuarios = JSON.parse(storedUsers);
    }
}
function validarLogin() {
    let username = document.getElementById("username-sign-in").value;
    let password = document.getElementById("password-sign-in").value;
    
    const usuarioEncontrado = usuarios.find(usuario => usuario.username == username && usuario.password == password);

    if (usuarioEncontrado) {
        alert("Inicio de sesión exitoso!");
        window.location.href = "board.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
    return false; 
}

