const captcha = document.getElementById('captcha');
var captchaclicked = 'undefined';

captcha.addEventListener('click', () => {
    if (captchaclicked == 'undefined') {
        captcha.src="./imgs/1.gif";
    } else {
        captchaclicked = 1;
    }
    
})