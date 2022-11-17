fetch("product.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {

    let productContainer = document.getElementById("productContainer");
    data.forEach(element => {
        let productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productContainer.appendChild(productItem);

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        productItem.appendChild(imgContainer);

        let img = document.createElement("img");
        img.src = element.img;
        imgContainer.appendChild(img);

        let discount = document.createElement("p");
        discount.innerHTML = element.discount;
        imgContainer.appendChild(discount);

        
        let title = document.createElement("h3");
        title.innerHTML = element.title;
        productItem.appendChild(title);


        let description = document.createElement("p");
        description.innerHTML = element.description;
        productItem.appendChild(description);

        let price = document.createElement("div")
        price.classList.add("price");
        productItem.appendChild(price);

        let div = document.createElement("div")
        price.appendChild(div);

        let discountPrice = document.createElement("p");
        discountPrice.innerHTML = element.discountPrice; 
        div.appendChild(discountPrice);

        let priceOrg = document.createElement("p");
        priceOrg.innerHTML = element.price;
        div.appendChild(priceOrg)

        let buyButton = document.createElement("button");
        buyButton.innerHTML ="Buy now";
        price.appendChild(buyButton);
    });
}

