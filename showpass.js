const passwordField= document.getElementById('password');
        // const  ConfirmpasswordField= document.getElementById('Confirm password');
        const toggleButton= document.getElementById('togglePassword');

        toggleButton.addEventListener('click', ()=>{
            const type = passwordField.getAttribute('type');
            passwordField.setAttribute('type', type==='password'? 'text':'password');
            toggleButton.textContent= type==='password'?'Hide password':'Show password';
            
            // const enter = ConfirmpasswordField.getAttribute('type');
            // ConfirmpasswordField.setAttribute('type', type==='Confirm password'? 'text':'Confirm password');
            // toggleButton.textContent= type==='Confirm password'?'Hide password':'Show password';
        });


        const passwordFields= document.getElementById('passwords');
        // const  ConfirmpasswordField= document.getElementById('Confirm password');
        const toggleButtons= document.getElementById('togglePasswords');

        toggleButtons.addEventListener('click', ()=>{
            const type = passwordFields.getAttribute('type');
            passwordFields.setAttribute('type', type==='password'? 'text':'password');
            toggleButtons.textContent= type==='password'?'Hide password':'Show password';
            
            // const enter = ConfirmpasswordField.getAttribute('type');
            // ConfirmpasswordField.setAttribute('type', type==='Confirm password'? 'text':'Confirm password');
            // toggleButton.textContent= type==='Confirm password'?'Hide password':'Show password';
        });