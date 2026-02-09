function logar(){

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    if(login === "admin" && senha === "admin"){
        location.href = "home.html";
    }else{
        alert("Login ou senha incorretos!");
    }

}

function toggleSenha() {

    const senhaInput = document.getElementById("senha");
    const toggleIcon = document.getElementById("toggleSenha");

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        toggleIcon.textContent = "🙈";
    } else {
        senhaInput.type = "password";
        toggleIcon.textContent = "👁️";
    }

    toggleIcon.classList.add('active');

    setTimeout(() => {
        toggleIcon.classList.remove('active');
    }, 150);
}
