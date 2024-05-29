document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định

        // Kiểm tra tên đăng nhập và mật khẩu
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username === 'admin123' && password === 'admin123') {
            // Nếu đúng, chuyển hướng đến trang upload file
            window.location.href = 'upload.html'; // Thay 'upload.html' bằng đường dẫn đến trang upload file của bạn
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không chính xác');
        }
    });
});
