function showDetails(sareeType) {
    let sareeName = "";
    let sareeDescription = "";

    if (sareeType === 'silk') {
        sareeName = "Silk Sarees";
        sareeDescription = "Silk sarees are perfect for traditional events and weddings. They are known for their elegance and shine.";
    } else if (sareeType === 'cotton') {
        sareeName = "Cotton Sarees";
        sareeDescription = "Cotton sarees are ideal for daily wear and summer seasons. They're breathable and comfortable.";
    } else if (sareeType === 'georgette') {
        sareeName = "Georgette Sarees";
        sareeDescription = "Georgette sarees are light and flowy, perfect for parties and events. They come in vibrant colors and designs.";
    }

    document.getElementById("saree-name").innerText = sareeName;
    document.getElementById("saree-description").innerText = sareeDescription;
    document.getElementById("saree-details").style.display = "block";
}

function closeDetails() {
    document.getElementById("saree-details").style.display = "none";
}

document.querySelector('footer a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});

