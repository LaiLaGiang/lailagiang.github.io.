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
        const content = localStorage.getItem(fileName);
        const downloadLink = createDownloadLink(fileName, content);
        
        const listItem = document.createElement('div');
        listItem.innerHTML = `
            ${fileName} 
            ${downloadLink.outerHTML}
            <button onclick="initiateUpdate('${fileName}')">Update</button>
        `;
        fileList.appendChild(listItem);
    }
}

function createDownloadLink(fileName, content) {
    const link = document.createElement('a');
    link.href = content;
    link.download = fileName;
    link.innerText = 'Download';
    return link;
}

function initiateUpdate(fileName) {
    const fileInput = document.getElementById('fileInput');
    fileInput.setAttribute('data-update-file', fileName);
    fileInput.addEventListener('change', updateFile);
    fileInput.click();
}

function updateFile(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const fileName = fileInput.getAttribute('data-update-file');

    if (file && fileName) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            localStorage.setItem(fileName, content);
            loadFileList();
        };
        reader.readAsDataURL(file);
    }

    fileInput.removeAttribute('data-update-file');
    fileInput.removeEventListener('change', updateFile);
}
