const form = document.querySelector("#registerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");
const submitBtn = document.querySelector("#submitBtn");
const nameStatus = document.querySelector("#nameStatus");
const emailError = document.querySelector("#emailError");
const confirmError = document.querySelector("#confirmError");
const phoneError = document.querySelector("#phoneError");
const strengthFill = document.querySelector("#strengthFill");
const strengthText = document.querySelector("#strengthText");
let validName = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;
let validPhone = false;

function updateSubmitButton() {
    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConfirm &&
        validPhone
    );
}

nameInput.addEventListener("input", () => {
    const len = nameInput.value.trim().length;
    validName = len >= 2 && len <= 50;
    nameStatus.textContent =
        validName ? "✅" : "❌";
    updateSubmitButton();
});

emailInput.addEventListener("input", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validEmail = regex.test(emailInput.value);
    emailError.textContent = validEmail ? "" : "Email không hợp lệ";
    updateSubmitButton();
});

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let strength = 0;
    if (password.length >= 8) {
        strength++;
    }

    if (/[A-Za-z]/.test(password)
        && /\d/.test(password)) {
        strength++;
    }

    if (
        /[a-z]/.test(password)
        &&
        /[A-Z]/.test(password)
        &&
        /\d/.test(password)
        &&
        /[^A-Za-z0-9]/.test(password)
    ) {
        strength++;
    }

    if (strength === 1) {
        strengthFill.style.width = "33%";
        strengthFill.style.background = "red";
        strengthText.textContent = "Yếu";
        validPassword = false;
    }

    else if (strength === 2) {
        strengthFill.style.width = "66%";
        strengthFill.style.background = "orange";
        strengthText.textContent = "Trung bình";
        validPassword = true;
    }

    else if (strength === 3) {
        strengthFill.style.width = "100%";
        strengthFill.style.background = "green";
        strengthText.textContent = "Mạnh";
        validPassword = true;
    }

    else {
        strengthFill.style.width = "0%";
        strengthText.textContent = "";
        validPassword = false;
    }

    checkConfirm();
    updateSubmitButton();
});

function checkConfirm() {
    validConfirm = passwordInput.value === confirmInput.value && confirmInput.value !== "";
    confirmError.textContent = validConfirm ? "" : "Mật khẩu không khớp";
}

confirmInput.addEventListener("input", () => {
    checkConfirm();
    updateSubmitButton();
});

phoneInput.addEventListener("input", () => {
    let value = phoneInput.value.replace(/\D/g, "");
    value = value.substring(0, 10);
    if (value.length > 4) {
        value = value.slice(0, 4) + "-" + value.slice(4);
    }

    if (value.length > 8) {
        value = value.slice(0, 8) + "-" + value.slice(8);
    }

    phoneInput.value = value;

    validPhone = value.replace(/-/g, "").length === 10;

    phoneError.textContent = validPhone ? "" : "Số điện thoại phải đủ 10 số";

    updateSubmitButton();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const modal = document.createElement("div");
    modal.className = "modal";
    const content = document.createElement("div");
    content.className = "modal-content";
    content.innerHTML = `<h2>Đăng ký thành công!</h2>
        <p><b>Tên:</b>
        ${nameInput.value}</p>
        <p><b>Email:</b>
        ${emailInput.value}</p>
        <p><b>Phone:</b>
        ${phoneInput.value}</p>
        <br>
        <button id="closeModal">Đóng</button>
    `;

    modal.append(content);
    document.body.append(modal);
    document
        .querySelector("#closeModal")
        .addEventListener("click", () => {
            modal.remove();
        });
});
