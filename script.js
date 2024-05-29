document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple client-side validation
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hard-coded admin credentials for demonstration purposes
    const adminUsername = 'admin';
    const adminPassword = 'admin123';

    if (username === adminUsername && password === adminPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('upload-container').style.display = 'block';
    } else {
        alert('Incorrect username or password.');
    }
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];

    if (file) {
        const downloadLink = document.getElementById('download-link');
        downloadLink.href = URL.createObjectURL(file);
        downloadLink.download = file.name;

        document.getElementById('file-link').style.display = 'block';
    }
});
