function validateForm(event) {
    event.preventDefault();

    const agree = document.getElementById('agree');
    const captchaInput = document.getElementById('captchaAnswer');
    const downloadLink = document.getElementById('downloadLink');
    const emailValue = document.getElementById('email').value.trim();

    // التحقق من اختيار موافقة الخصوصية
    if (!agree.checked) {
        alert("You must agree");
        return false;
    }

   
    const captchaValue = captchaInput.value.trim();
    if (captchaValue === "6") {
        downloadLink.style.display = 'inline-block';
    } else {
        alert("Try again");
        downloadLink.style.display = 'none';
    }

    return false;
}