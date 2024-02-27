const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
];

const prod_list = document.getElementById("product-list");
const category_fltr = document.getElementById("category");
const tag_fltrs = document.querySelectorAll("#tags input[type='checkbox']");

function render_prods(products){
    prod_list.innerHTML = "";
    products.forEach(product => {
        const product_item = document.createElement("div");
        product_item.textContent = `${product.name} - $${product.price}`;
        prod_list.appendChild(product_item);
    });
}

function fltr_prods() {
    const category = category_fltr.value;
    let select_tags = [...tag_fltrs].filter(tag => tag.checked).map(tag => tag.value);

    if(!Array.isArray(select_tags)){
        select_tags = [];
    }

    const filter_prods = products.filter(product => {
        if (category && product.category !== category) return false;
        if(select_tags.length > 0 && !select_tags.every(tag => product.tags.includes(tag))) return false;
        return true;
    });

    render_prods(filter_prods);
}

category_fltr.addEventListener("change", fltr_prods);
if(tag_fltrs && tag_fltrs.length > 0){
    tag_fltrs.forEach(tag => tag.addEventListener("change", fltr_prods));
}

render_prods(products);