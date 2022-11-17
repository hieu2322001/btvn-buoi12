const handleSubmit = () => {
    const email = document.getElementById("emailInput")
    const password = document.getElementById("passwordInput")
    const regexEmail = /\w+@\w+.com/;
    const regexPasswords = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    if (!email.value) {
        document.getElementById("error-email").style.display = "block";
    }
    else if (!regexEmail.test(email.value)) {
        document.getElementById("error-email").style.display = "block";
    }
    else {
        document.getElementById("error-email").style.display = "none";
    }

    if (!password.value) {
        document.getElementById("error-password").style.display = "block"
    }
    else if (!regexPasswords.test(password.value)) {
        document.getElementById("error-password").style.display = "block";
    }
    else {
        document.getElementById("error-password").style.display = "none";

    }

    if (email.value === "admin" && password.value === "admin") {
        location.href = "/index.html"
    }
};

