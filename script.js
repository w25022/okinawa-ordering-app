const translations = {
    ja: { title: "沖縄料理メニュー", all: "すべて", dishes: "沖縄料理", appetizers: "小鉢・おつまみ", drinks: "ドリンク", total: "合計", order: "注文する", cart: "カート", emptyCart: "カートは空です", success: "注文が完了しました！合計金額：" },
    en: { title: "Okinawa Dining Menu", all: "All", dishes: "Okinawa Dishes", appetizers: "Appetizers", drinks: "Drinks", total: "Total", order: "Order Now", cart: "Cart", emptyCart: "Your cart is empty.", success: "Order Success! Total Charge: " },
    zh_tw: { title: "沖繩料理菜單", all: "全部", dishes: "沖繩經典", appetizers: "精選小菜", drinks: "特色飲品", total: "總計", order: "現在下單", cart: "購物車", emptyCart: "購物車是空的。", success: "下單成功！總金額：" },
    zh_cn: { title: "冲绳料理菜单", all: "全部", dishes: "冲绳经典", appetizers: "精选小菜", drinks: "特色饮品", total: "总计", order: "现在下单", cart: "购物车", emptyCart: "购物车是空的。", success: "下单成功！总金额：" },
    ko: { title: "오키나와 요리 메뉴", all: "전체", dishes: "오키나와 요리", appetizers: "안주・소반", drinks: "음료・주류", total: "총액", order: "주문하기", cart: "장바구니", emptyCart: "장바구니가 비어 있습니다.", success: "주문이 완료되었습니다! 총 금액: " },
    es: { title: "Menú de Okinawa", all: "Todo", dishes: "Platos de Okinawa", appetizers: "Aperitivos", drinks: "Bebidas", total: "Total", order: "Pedir Ahora", cart: "Carrito", emptyCart: "Tu carrito está vacío.", success: "¡Pedido con éxito! Cargo total: " }
};

const menuItems = [
    { 
        id: 1, 
        category: "Okinawa Dishes",
        price: 850,
        imageUrl: "images/okinawa-soba.jpg",
        names: { ja: "沖縄そば", en: "Okinawa Soba", zh_tw: "沖繩蕎麥麵", zh_cn: "冲绳荞麦面", ko: "오키나와 소바", es: "Soba de Okinawa" }
    },
    { 
        id: 2, 
        category: "Okinawa Dishes",
        price: 780,
        imageUrl: "images/goya-chan.jpg",
        names: { ja: "ゴーヤーチャンプルー", en: "Goya Chanpuru (Bitter Melon)", zh_tw: "苦瓜炒豆腐", zh_cn: "苦瓜炒豆腐", ko: "고야 찬푸르 (여주 볶음)", es: "Goya Chanpuru" }
    },
    { 
        id: 3, 
        category: "Okinawa Dishes",
        price: 900,
        imageUrl: "images/rafute.jpg",
        names: { ja: "ラフテー (豚角煮)", en: "Rafute (Braised Pork Belly)", zh_tw: "琉球東坡肉", zh_cn: "琉球东坡肉", ko: "라프테 (돼지고기 장조림)", es: "Rafute (Panceta de Cerdo)" }
    },
    { 
        id: 4, 
        category: "Okinawa Dishes",
        price: 800,
        imageUrl: "images/taco-rice.jpg",
        names: { ja: "タコライス", en: "Taco Rice", zh_tw: "塔可飯", zh_cn: "塔可饭", ko: "타코 라이스", es: "Arroz Taco" }
    },

    { 
        id: 5, 
        category: "Appetizers",
        price: 580,
        imageUrl: "images/sea-grapes.jpg",
        names: { ja: "海ぶどう", en: "Umibudo (Sea Grapes)", zh_tw: "海葡萄", zh_cn: "海葡萄", ko: "우미부도 (바다포도)", es: "Umibudo (Uvas de Mar)" }
    },
    { 
        id: 6, 
        category: "Appetizers",
        price: 450,
        imageUrl: "images/jimami-tofu.jpg",
        names: { ja: "ジーマーミ豆腐", en: "Jimami Tofu (Peanut Tofu)", zh_tw: "花生豆腐", zh_cn: "花生豆腐", ko: "지마미 두부 (땅콩 두부)", es: "Tofu Jimami (Tofu de Cacahuete)" }
    },
    { 
        id: 7, 
        category: "Appetizers",
        price: 550,
        imageUrl: "images/agu-pork-gyoza.jpg",
        names: { ja: "アグー豚餃子", en: "Agu Pork Gyoza", zh_tw: "阿古豬煎餃", zh_cn: "阿古猪煎饺", ko: "아구 돼지고기 만두", es: "Gyoza de Cerdo Agu" }
    },
    { 
        id: 8, 
        category: "Appetizers",
        price: 420,
        imageUrl: "images/mimiga.jpg",
        names: { ja: "ミミガー (豚耳)", en: "Mimiga (Pork Ear)", zh_tw: "涼拌豬耳", zh_cn: "凉拌猪耳", ko: "미미가 (돼지 귀 요리)", es: "Mimiga (Oreja de Cerdo)" }
    },

    { 
        id: 9, 
        category: "Drinks",
        price: 350,
        imageUrl: "images/sanpin-tea.jpg",
        names: { ja: "さんぴん茶", en: "Sanpin Jasmine Tea", zh_tw: "香片茶 (茉莉花茶)", zh_cn: "香片茶 (茉莉花茶)", ko: "산핀차 (자스민차)", es: "Té Sanpin (Té de Jazmín)" }
    },
    { 
        id: 10, 
        category: "Drinks",
        price: 600,
        imageUrl: "images/orion-beer.jpg",
        names: { ja: "オリオン生ビール", en: "Orion Draft Beer", zh_tw: "Orion 生啤酒", zh_cn: "Orion 生啤酒", ko: "오리온 생맥주", es: "Cerveza de Barril Orion" }
    },
    { 
        id: 11, 
        category: "Drinks",
        price: 500,
        imageUrl: "images/okinawa-highball.jpg",
        names: { ja: "沖縄ハイボール", en: "Okinawa Highball", zh_tw: "沖繩 Highball", zh_cn: "冲绳 Highball", ko: "오키나와 하이볼", es: "Highball de Okinawa" }
    },
    { 
        id: 12, 
        category: "Drinks",
        price: 480,
        imageUrl: "images/shikuwasa-sour.jpg",
        names: { ja: "シークヮーサーサワー", en: "Shikuwasa Citrus Sour", zh_tw: "平實檸檬沙瓦", zh_cn: "平实柠檬沙瓦", ko: "시쿠와사 사워", es: "Shikuwasa Sour" }
    }
];

let cart = [];
let currentLang = 'ja';

let currentCategory = 'All';

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartBar() {
    const total = getCartTotal();
    const count = getCartCount();
    document.getElementById("totalPrice").innerText = total;
    document.getElementById("cartCount").innerText = count;
    document.getElementById("cartCountDrawer").innerText = count;
    document.getElementById("drawerTotalPrice").innerText = total;
    document.getElementById("cartBar").style.display = "flex";
}

function toggleCart() {
    const overlay = document.getElementById("cartOverlay");
    const drawer = document.getElementById("cartDrawer");
    const isOpen = drawer.classList.contains("open");

    if (isOpen) {
        drawer.classList.remove("open");
        overlay.classList.remove("active");
    } else {
        renderCart();
        drawer.classList.add("open");
        overlay.classList.add("active");
    }
}

function renderCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<div class="empty-cart">${translations[currentLang].emptyCart}</div>`;
        return;
    }

    cart.forEach(item => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.names[currentLang]}</div>
                    <div class="cart-item-price">${item.price} JPY</div>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-control">
                        <button onclick="changeQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeCartItem(${item.id})">Delete</button>
                </div>
            </div>
        `;
    });
}

function addToCart(itemId) {
    const item = menuItems.find(menuItem => menuItem.id === itemId);
    if (!item) return;

    const cartItem = cart.find(entry => entry.id === itemId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ id: item.id, price: item.price, names: item.names, quantity: 1 });
    }

    updateCartBar();
    renderCart();
}

function changeQuantity(itemId, delta) {
    const cartItem = cart.find(entry => entry.id === itemId);
    if (!cartItem) return;

    cartItem.quantity += delta;
    if (cartItem.quantity <= 0) {
        cart = cart.filter(entry => entry.id !== itemId);
    }

    updateCartBar();
    renderCart();
}

function removeCartItem(itemId) {
    cart = cart.filter(entry => entry.id !== itemId);
    updateCartBar();
    renderCart();
}

function closeCart() {
    const overlay = document.getElementById("cartOverlay");
    const drawer = document.getElementById("cartDrawer");
    drawer.classList.remove("open");
    overlay.classList.remove("active");
}

function changeLanguage(lang) {
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    currentLang = lang;
    setText("appTitle", translations[lang].title);
    setText("btnAll", translations[lang].all);
    setText("btnDishes", translations[lang].dishes);
    setText("btnAppetizers", translations[lang].appetizers);
    setText("btnDrinks", translations[lang].drinks);
    setText("txtTotal", translations[lang].total);
    setText("drawerTotalLabel", translations[lang].total);
    setText("btnOrder", translations[lang].order);
    setText("btnOrderDrawer", translations[lang].order);
    setText("drawerTitle", translations[lang].cart);
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const langBtn = document.getElementById(`lang-${lang}`);
    if (langBtn) langBtn.classList.add('active');
    renderMenu();
    renderCart();
}

function renderMenu() {
    const menuContainer = document.getElementById("menuDisplay");
    menuContainer.innerHTML = ""; 

    const filteredItems = currentCategory === 'All' 
        ? menuItems 
        : menuItems.filter(item => item.category === currentCategory);

    filteredItems.forEach(item => {
        const itemName = item.names[currentLang]; 

        menuContainer.innerHTML += `
            <div class="item-card">
                <div class="item-img">
                    <img src="${item.imageUrl}" alt="${itemName}" />
                </div>
                <div class="item-info">
                    <div class="item-name">${itemName}</div>
                    <div class="item-price">${item.price} JPY</div>
                </div>
                <button class="add-btn" onclick="addToCart(${item.id})">+</button>
            </div>
        `;
    });
}

function filterMenu(category, button) {
    currentCategory = category;
    
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    renderMenu();
}

function placeOrder() {
    const total = getCartTotal();
    alert(translations[currentLang].success + total + " JPY");
    cart = [];
    updateCartBar();
    renderCart();
    closeCart();
}

function init() {
    changeLanguage('ja');
    updateCartBar();
}

window.addEventListener('DOMContentLoaded', init);