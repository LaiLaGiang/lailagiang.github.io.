document.addEventListener('DOMContentLoaded', () => {
    loadFileList();
});

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            localStorage.setItem(file.name, content);
            loadFileList();
        };
        reader.readAsDataURL(file);
    }
}

function loadFileList() {
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const fileName = localStorage.key(i);
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            ${fileName} <button onclick="downloadFile('${fileName}')">Download</button>
            <button onclick="deleteFile('${fileName}')">Delete</button>
        `;
        fileList.appendChild(listItem);
    }
}

function downloadFile(fileName) {
    const content = localStorage.getItem(fileName);
    const link = document.createElement('a');
    link.href = content;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function deleteFile(fileName) {
    localStorage.removeItem(fileName);
    loadFileList();
}
