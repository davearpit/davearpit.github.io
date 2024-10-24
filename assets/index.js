function loadContent(file, containerId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error('Error loading content:', error));
}

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function loadHome() {
    const contentDiv = document.getElementById("intro");
    contentDiv.innerHTML = await fetchHtmlAsText("test.html");
}

loadContent('../pages/header.html', 'header');
loadContent('../pages/main.html', 'main');
