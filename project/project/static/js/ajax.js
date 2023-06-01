const idInput = document.getElementById('id');

idInput.addEventListener('blur', () => {
    const id = idInput.value;
    if (id) {
        // Send AJAX request to check if the ID exists
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/check_id/${id}`, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.exists) {
                    document.getElementById('id-error').textContent = 'ID already exists';
                    document.getElementById('id-error').style.display = 'block';
                } else {
                    document.getElementById('id-error').textContent = '';
                    document.getElementById('id-error').style.display = 'none';
                }
            }
        };
        xhr.send();
    }
});