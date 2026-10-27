// ========== Slideshow ==========
const posts = document.querySelectorAll('.login__post');
let currentIndex = 0;

function nextSlide() {
    posts.forEach(post => post.classList.remove('login__post--active'));
    currentIndex = (currentIndex + 1) % posts.length;
    posts[currentIndex].classList.add('login__post--active');
}

setInterval(nextSlide, 3000);

// ========== Formulário ==========
const loginForm = document.getElementById('loginForm');
const btnLogin = document.getElementById('btnLogin');
const alertBox = document.getElementById('loginAlert');

const loginFacebook = document.getElementById('loginFacebook');
const forgotPassword = document.getElementById('forgotPassword');
const signupLink = document.getElementById('signupLink');

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if(!username || !password){
        alertBox.textContent = 'Por favor, preencha todos os campos.';
        loginForm.classList.add('shake');
        setTimeout(() => loginForm.classList.remove('shake'), 300);
        return;
    }

    alertBox.textContent = '';
    btnLogin.disabled = true;
    btnLogin.textContent = 'Entrando...';

    // Simula login
    setTimeout(() => {
        alert(`Login efetuado com sucesso!\nUsuário: ${username}`);
        btnLogin.disabled = false;
        btnLogin.textContent = 'Entrar';
        loginForm.reset();
    }, 1000);
});

// ========== Botões adicionais ==========
loginFacebook.addEventListener('click', () => {
    alert("Login via Facebook (simulado)!");
});

forgotPassword.addEventListener('click', () => {
    const email = prompt("Digite seu email para recuperar a senha:");
    if(email){
        alert(`Instruções de recuperação enviadas para ${email}`);
    }
});

signupLink.addEventListener('click', () => {
    alert("Página de cadastro (simulada)!");
});