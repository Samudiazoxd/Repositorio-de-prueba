document.getElementById("registerForm").addEventListener("submit", 
    function(e) {
        e.preventDefault();

        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;

        const user = {name, email, password};
        localStorage.setItem(email, JSON.stringify(user));

        alert("Usuario registrado correctamente!");
        this.reset(); 
    });

    document.getElementById("loginForm").addEventListener("submit", function
        (e){
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const userData = localStorage.getItem(email);
        
        if(!userData) {
            alert("El usuario no existe!");
            return;

        }

        const user = JSON.parse(userData);
        if(user.password === password) {
            document.getElementById(welcomeMessage).textContent = `Bienvenido ${user.name}!`;
        } else {
            alert("Contraseña incorrecta!");
        } 
        });