document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.more-info');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId);
            
            if (targetDiv.classList.contains('hidden')) {
                targetDiv.classList.remove('hidden');
                this.textContent = 'Cerrar información';
            } else {
                targetDiv.classList.add('hidden');
                this.textContent = 'Más información';
            }
        });
    });
});
