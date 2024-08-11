/*=============== SHOW HIDDEN - PASSWORD ===============*/
try {
    const showHiddenPass = (loginPass, loginEye) => {
        const input = document.getElementById(loginPass);
        const iconEye = document.getElementById(loginEye);

        iconEye.addEventListener('click', () => {
            // Change password to text
            if (input.type === 'password') {
                // Switch to text
                input.type = 'text'

                // Icon change
                iconEye.classList.add('ri-eye-line')
                iconEye.classList.remove('ri-eye-off-line')
            } else {
                // Change to password
                input.type = 'password'

                // Icon change
                iconEye.classList.remove('ri-eye-line')
                iconEye.classList.add('ri-eye-off-line')
            }
        })
    }

    showHiddenPass("signup-pass", "signup-eye");

    const alertContainer = document.getElementById('alert-container');
    const alertClose = document.getElementById('btn-closeid');


    alertClose.addEventListener('click', () => {
        alertContainer.remove();

    });
    if (alertContainer) {
        setInterval(() => alertContainer.remove(), 3000);
    }



}
catch (error) {
    console.error(error);
}
