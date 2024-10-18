function loadContent(file, containerId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

loadContent('../pages/header.html', 'header');
