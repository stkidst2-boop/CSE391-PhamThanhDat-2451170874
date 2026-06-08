const products = [
    { id: 1, name: "iPhone 17", price: 25990000, category: "phone", image: "https://placehold.co/200x200", rating: 4.8, inStock: true },
    { id: 2, name: "Samsung S25", price: 22990000, category: "phone", image: "https://placehold.co/200x200", rating: 4.6, inStock: true },
    { id: 3, name: "Xiaomi 15", price: 15990000, category: "phone", image: "https://placehold.co/200x200", rating: 4.4, inStock: true },
    { id: 4, name: "MacBook Air M4", price: 28990000, category: "laptop", image: "https://placehold.co/200x200", rating: 4.9, inStock: true },
    { id: 5, name: "Dell XPS 15", price: 35990000, category: "laptop", image: "https://placehold.co/200x200", rating: 4.7, inStock: true },
    { id: 6, name: "Asus Vivobook", price: 17990000, category: "laptop", image: "https://placehold.co/200x200", rating: 4.3, inStock: true },
    { id: 7, name: "AirPods Pro", price: 5990000, category: "accessory", image: "https://placehold.co/200x200", rating: 4.7, inStock: true },
    { id: 8, name: "Sony WH1000XM5", price: 7990000, category: "accessory", image: "https://placehold.co/200x200", rating: 4.9, inStock: true },
    { id: 9, name: "Logitech MX Master", price: 2490000, category: "accessory", image: "https://placehold.co/200x200", rating: 4.6, inStock: true },
    { id: 10, name: "iPad Air", price: 16990000, category: "tablet", image: "https://placehold.co/200x200", rating: 4.8, inStock: true },
    { id: 11, name: "Galaxy Tab S10", price: 14990000, category: "tablet", image: "https://placehold.co/200x200", rating: 4.5, inStock: true },
    { id: 12, name: "Xiaomi Pad 7", price: 8990000, category: "tablet", image: "https://placehold.co/200x200", rating: 4.2, inStock: true }
];

let currentCategory = "Tất cả";
let currentKeyword = "";
let currentSort = "";
let cartCount = 0;

const app = document.createElement("div");
app.className = "container";
document.body.append(app);

const cart = document.createElement("div");
cart.className = "cart";
cart.innerHTML = "🛒";

const badge = document.createElement("span");
badge.className = "badge";
badge.textContent = "0";

cart.append(badge);
document.body.append(cart);

const topbar = document.createElement("div");
topbar.className = "topbar";

const searchInput = document.createElement("input");
searchInput.placeholder = "Tìm kiếm...";

const sortSelect = document.createElement("select");
sortSelect.innerHTML = `
<option value="">Sắp xếp</option>
<option value="priceAsc">Giá ↑</option>
<option value="priceDesc">Giá ↓</option>
<option value="name">Tên A-Z</option>
<option value="rating">Đánh giá</option>
`;

const darkBtn = document.createElement("button");
darkBtn.textContent = "🌙 Chế độ tối";

topbar.append(searchInput);

["Tất cả", "Điện thoại", "Laptop", "Tablet", "Phụ kiện"]
    .forEach(cat => {
        const btn = document.createElement("button");
        btn.textContent = cat;
        btn.addEventListener("click", () => {
            currentCategory = cat;
            renderProducts();
        });
        topbar.append(btn);
    });

topbar.append(sortSelect);
topbar.append(darkBtn);

app.append(topbar);

const productContainer = document.createElement("div");
productContainer.className = "products";
app.append(productContainer);

function searchProducts(productsList) {
    return productsList.filter(product =>
        product.name
            .toLowerCase()
            .includes(currentKeyword.toLowerCase())
    );
}

function filterByCategory(productsList) {

    if (currentCategory === "Tất cả") {
        return productsList;
    }

    return productsList.filter(
        p => p.category === currentCategory
    );
}

function sortProducts(productsList) {

    const arr = [...productsList];

    switch (currentSort) {

        case "priceAsc":
            arr.sort((a, b) => a.price - b.price);
            break;

        case "priceDesc":
            arr.sort((a, b) => b.price - a.price);
            break;

        case "name":
            arr.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
            break;

        case "rating":
            arr.sort((a, b) =>
                b.rating - a.rating
            );
            break;
    }

    return arr;
}

function renderProducts() {

    productContainer.innerHTML = "";

    let result = searchProducts(products);
    result = filterByCategory(result);
    result = sortProducts(result);

    result.forEach(product => {

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = product.image;

        const body = document.createElement("div");
        body.className = "card-body";

        const name = document.createElement("h3");
        name.textContent = product.name;

        const price = document.createElement("p");
        price.className = "price";
        price.textContent =
            product.price.toLocaleString() + " đ";

        const rating = document.createElement("p");
        rating.textContent =
            "⭐ " + product.rating;

        const btn = document.createElement("button");
        btn.textContent = "Thêm giỏ";

        btn.addEventListener("click", (e) => {
            e.stopPropagation();

            cartCount++;
            badge.textContent = cartCount;
        });

        body.append(
            name,
            price,
            rating,
            btn
        );

        card.append(
            img,
            body
        );

        card.addEventListener("click", () => {
            openModal(product);
        });

        productContainer.append(card);
    });
}

function openModal(product) {

    const modal = document.createElement("div");
    modal.className = "modal";

    const content = document.createElement("div");
    content.className = "modal-content";

    content.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price:
        ${product.price.toLocaleString()} đ</p>

        <p>Category:
        ${product.category}</p>

        <p>Rating:
        ${product.rating}</p>

        <p>In Stock:
        ${product.inStock}</p>
    `;

    modal.append(content);

    modal.addEventListener("click", () => {
        modal.remove();
    });

    document.body.append(modal);
}

searchInput.addEventListener("input", e => {
    currentKeyword = e.target.value;
    renderProducts();
});

sortSelect.addEventListener("change", e => {
    currentSort = e.target.value;
    renderProducts();
});

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

renderProducts();
