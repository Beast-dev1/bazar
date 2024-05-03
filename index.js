// for data
const items = [
    {
        id: '001',
        image: 'images/a.jpg',
        company: 'Natural Earth',
        item_name: 'Exita virgin Coconut oil',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 4.5,
            count: 1400,
        },
    },
    {
        id: '002',
        image: 'images/b.jpg',
        company: 'JUAS',
        item_name: 'Sikajit Resin',
        original_price: 2599,
        current_price: 1507,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 4.3,
            count: 24,
        },
    },
    {
        id: '003',
        image: 'images/c.jpg',
        company: 'Derma',
        item_name: 'Vitamin C Face Serum',
        original_price: 1599,
        current_price: 495,
        discount_percentage: 69,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 4.1,
            count: 249,
        },
    },
    {
        id: '004',
        image: 'images/d.jpg',
        company: 'KUB',
        item_name: 'Rich Manture Erasure',
        original_price: 999,
        current_price: 999,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '005',
        image: 'images/e.jpg',
        company: 'Ultra',
        item_name: 'Smart Watch',
        original_price: 1399,
        current_price: 1089,
        discount_percentage: 65,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 4.2,
            count: 3500,
        },
    },
    {
        id: '006',
        image: 'images/f.jpg',
        company: 'MILLINIUM',
        item_name: 'Men Roxking Watch',
        original_price: 14995,
        current_price: 14995,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 0.0,
            count: 0,
        },
    },
    {
        id: '007',
        image: 'images/g.jpg',
        company: 'Mama Earth',
        item_name: 'Mineral based sunscreen for babies',
        original_price: 1599,
        current_price: 639,
        discount_percentage: 60,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 4.2,
            count: 388,
        },
    },
    {
        id: '008',
        image: 'images/h.jpg',
        company: 'Nivea',
        item_name: 'Water Bottle',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 4.5,
            count: 200,
        },
    },
    {
        id: '009',
        image: 'images/i.jpg',
        company: 'Trix',
        item_name: 'Razor',
        original_price: 985,
        current_price: 842,
        discount_percentage: 5,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 5.0,
            count: 10,
        },
    },
    {
        id: '0010',
        image: 'images/j.jpg',
        company: 'CZ',
        item_name: 'T-shirt',
        original_price: 485,
        current_price: 242,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 3.2,
            count: 1200,
        },
    },
    {
        id: '0011',
        image: 'images/k.jpg',
        company: 'Gangani',
        item_name: 'maroon Sari',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 4.2,
            count: 500,
        },
    },
    {
        id: '0012',
        image: 'images/l.jpg',
        company: 'Nivil',
        item_name: 'One piece',
        original_price: 1285,
        current_price: 642,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            stars: 4.2,
            count: 200,
        },
    },
    {
        id: '0013',
        image: 'images/m.jpg',
        company: 'Washter',
        item_name: 'Neck Test Pillow',
        original_price: 885,
        current_price: 742,
        discount_percentage: 5,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 5.0,
            count: 500,
        },
    },
    {
        id: '0014',
        image: 'images/n.jpg',
        company: 'Sitttles',
        item_name: 'Vacuum storage bags',
        original_price: 285,
        current_price: 142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 2.2,
            count: 1100,
        },
    },
    {
        id: '0015',
        image: 'images/o.jpg',
        company: 'NIKE',
        item_name: 'NIke shoe',
        original_price: 2285,
        current_price: 2142,
        discount_percentage: 5,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 4.2,
            count: 1200,
        },
    },
    {
        id: '0016',
        image: 'images/p.jpg',
        company: 'Rmapeter',
        item_name: 'Boobs Tape',
        original_price: 2851,
        current_price: 1142,
        discount_percentage: 50,
        return_period: 14,
        delivery_date: '10 May 2024',
        rating: {
            stars: 4.2,
            count: 200,
        },
    },
];


let innerHtml='';
let bagItems ;
const CONVENIENCE_FEES = 99;
let bagItemObjects;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr):[];
    displayItemOnHomePage();
    bagItemCount();
    // for bag items
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    bagItemCount();
}

function bagItemCount() {
    let bagItemCountElement = document.querySelector('.bag_item_count');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemOnHomePage(){
    let itemContainerElement = document.querySelector('.items_container');
    console.log(itemContainerElement);
    if(!itemContainerElement){
        return;
    }
    items.forEach(item => {
        innerHtml += 
        `
        <div class="item_container">
            <img class="item_image" src="${item.image}" alt="${item.item_name}">
            <div class="rating">
                ${item.rating.stars}⭐ ${item.rating.count}
            </div>
            <div class="company_name">${item.company}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price">
                <span class="current_price"> Rs ${item.current_price} </span>
                <span class="original_price"> Rs ${item.original_price} </span>
                <span class="discount"> (${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn_add_bag" onclick="addToBag(${item.id})"> Add to Bag</button>
        </div>
    `;
    });
    
    itemContainerElement.innerHTML= innerHtml;
}


// for bag 
//details about the price
function displayBagSummary() {
    let bagSummaryElement = document.querySelector('.bag_summary');
    let totalItem = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.original_price;
        totalDiscount += bagItem.original_price - bagItem.current_price;
    });

    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

    bagSummaryElement.innerHTML = `
        <div class="bag_details_container">
            <div class="price_header">PRICE DETAILS (${totalItem} Items) </div>
            <div class="price_item">
                <span class="price_item_tag">Total MRP</span>
                <span class="price_item_value">₹${totalMRP}</span>
            </div>
            <div class="price_item">
                <span class="price_item_tag">Discount on MRP</span>
                <span class="price_item_value priceDetail_base_discount">-₹${totalDiscount}</span>
            </div>
            <div class="price_item">
                <span class="price_item_tag">Convenience Fee</span>
                <span class="price_item_value">₹99</span>
            </div>
            <hr>
            <div class="price_footer">
                <span class="price_item_tag">Total Amount</span>
                <span class="price_item_value">₹${finalPayment}</span>
            </div>
        </div>
        <button class="btn_place_order">
            <div class="css_xjhrni">PLACE ORDER</div>
        </button>
    `;
}
//convert bag itms into objects with map()
function loadBagItemObjects() {
    console.log(bagItems);
    bagItemObjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(bagItemObjects);
}

function displayBagItems() {
    let containerElement = document.querySelector('.bag_items_container');
    let innerHTML = '';
    bagItemObjects.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
}
// Delete bag's items 
function removeFromBag(itemId) {
    bagItems = bagItems.filter(bagItemId => bagItemId !== (itemId)); 
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
}


function generateItemHTML(item) {
    return `<div class="bag_item_container">
        <div class="item_left_part">
            <img class="bag_item_img" src="${item.image}">
        </div>
        <div class="item_right_part">
            <div class="company">${item.company}</div>
            <div class="item_name">${item.item_name}</div>
            <div class="price_container">
                <span class="current_price">Rs ${item.current_price}</span>
                <span class="original_price">Rs ${item.original_price}</span>
                <span class="discount_percentage">(${item.discount_percentage}% OFF)</span>
            </div>
            <div class="return_period">
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
