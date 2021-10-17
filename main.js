let mainBox = document.querySelector('div.main-box');
for(let i = 0; i< sellerList.length; i++){
    let sellerBox = document.createElement('div');

    let sellerHeading = document.createElement('h3');
    sellerHeading.innerHTML = sellerList[i].name;
    sellerHeading.setAttribute('class', 'seller-heading');

    let sellerPrice = document.createElement('h3');
    sellerPrice.innerHTML = sellerList[i].price;
    sellerPrice.setAttribute('class', 'seller-price');

    let visitButton = document.createElement('button');
    visitButton.innerHTML = "Visit Site";
    visitButton.websiteUrl = sellerList[i].url;
    visitButton.addEventListener('click', visitWebsite);

    sellerBox.appendChild(sellerHeading);
    sellerBox.appendChild(sellerPrice);
    sellerBox.appendChild(visitButton);

    sellerBox.setAttribute('class', 'seller-box');

    mainBox.appendChild(sellerBox);
}

function visitWebsite() {
    window.open(event.currentTarget.websiteUrl);
}