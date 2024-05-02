
let bagItemObject;
onLoad();
function onLoad(){
    loadBagItemsObject();
    displayBagItems();
}
function loadBagItemsObject(){
    console.log(bagItems);
}

function displayBagItems(){
    let containerElement = document.querySelector('.bag_items_container');
    containerElement.innerHTML = `
    <div class="bag_item_container">
        <div class="item_left_part">
        <img class="bag_item_img" src="../${item.image}">
    </div>
    <div class="item_right_part">
        <div class="company">${item.company}</div>
        <div class="item_name">${item.item_name}</div>
        <div class="price_container">
            <span class="current_price">Rs ${item.current_price}</span>
            <span class="original_price">Rs ${item.original_price}</span>
            <span class="discount_percentage">(${item.discount_percentage}% OFF)</span>
    </div>
    <div class="return-period">
        <span class="return_period_days">${item.return_period} days</span> return available
    </div>
    <div class="delivery_details">
        Delivery by
        <span class="delivery_details_days">${item.delivery_date}</span>
    </div>
    </div>

    <div class="remove_from_cart" onclick="removeFromBag(${item.id})">X</div>
</div>`;
}
function generateItemHTML (item){

}