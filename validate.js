let validationText, icon, input, form;

function init() {
    validationText = document.getElementById('invalid-text');
    icon = document.getElementById('icon');
    input = document.querySelector('input');
    form = document.querySelector('form');

    input.addEventListener('blur', checkValidity);
    input.addEventListener('change', resetValidity);
    form.addEventListener('submit', attemptSubmit);
}

function attemptSubmit(event) {
    event.preventDefault();
    if (checkValidity()) {
        event.target.submit();
    }
}

function checkValidity(event = null) {
    let field = input;
    text = field.value;
    if (text.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        field.setCustomValidity('');
        icon.style.visibility = 'hidden';
        validationText.style.visibility = 'hidden';
        return true;
    } else {
        field.setCustomValidity('Please provide a valid email');
        icon.style.visibility = 'visible';
        validationText.style.visibility = 'visible';
        return false;
    }
}

function resetValidity(event) {
    event.target.setCustomValidity('');
}

window.addEventListener("load", init);