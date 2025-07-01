// Funcionalidad para el checkbox "Ninguna"
document.getElementById('ninguna').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('input[name="discapacidades"]:not(#ninguna)');
    if (this.checked) {
        checkboxes.forEach(cb => {
            cb.checked = false;
            cb.disabled = true;
        });
    } else {
        checkboxes.forEach(cb => {
            cb.disabled = false;
        });
    }
});

// Desmarcar "Ninguna" si se selecciona otra opción
document.querySelectorAll('input[name="discapacidades"]:not(#ninguna)').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('ninguna').checked = false;
        }
    });
});

// Validación de contraseñas
document.getElementById('confirm-password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    
    if (password !== confirmPassword) {
        this.setCustomValidity('Las contraseñas no coinciden');
    } else {
        this.setCustomValidity('');
    }
});