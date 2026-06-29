const translations = {
    ja: { title: "沖縄ハイボール酒場 三線", all: "すべて", recommended: "おすすめ", appetizer: "とりあえず", fried: "お肉料理", noodle: "炒めもん", rice: "ご飯・麺・ピザ", drinks: "ドリンク", total: "合計", order: "注文に進む", cart: "カート", emptyCart: "カートは空です", success: "注文が完了しました！合計金額：", wTitle: "ご注文前の確認", wBadge: "必須", wGuest: "ご来店人数を選択してください", wAge: "当店では、20歳未満の方及びこれからお車など酒気帯び運転を禁止されている車両を運転する予定がある方にアルコール提供はいたしません。", wBtn: "注文を始める", person: "人", personMore: "人以上", historyTitle: "ご注文履歴・お会計", historyEmpty: "履歴はありません。", backTop: "トップページへ戻る", wCharge: "※おひとり様 テーブルチャージ 330円(税込)を頂戴しております。", foodSectionTitle: "お料理メニュー", drinkSectionTitle: "お飲み物メニュー", navLogin: "会員IDでログイン", navHome: "トップページ・メニュー", navHistory: "注文履歴", navHelp: "ヘルプ", navHistoryBtn: "履歴/会計", modifyText: "内容を変更", deleteText: "削除", unitsText: "件", agreeTerms: "利用規約に同意する" },
    en: { title: "Okinawa Pub Sanshin", all: "All", recommended: "Recommended", appetizer: "Appetizers", fried: "Meat Dishes", noodle: "Stir-fry", rice: "Rice/Noodle/Pizza", drinks: "Drinks", total: "Total", order: "Proceed to Order", cart: "Cart", emptyCart: "Your cart is empty.", success: "Order Completed! Total Charge: ", wTitle: "Confirmation", wBadge: "Required", wGuest: "Please select number of guests", wAge: "We do not serve alcohol to anyone under 20 or to those driving after drinking.", wBtn: "Start Order", person: "Guest(s)", personMore: "or more", historyTitle: "Order History", historyEmpty: "No history found.", backTop: "Back to Top", wCharge: "* A table charge of 330 JPY (tax included) applies per person.", foodSectionTitle: "Food Items", drinkSectionTitle: "Drink Items", navLogin: "Member Login", navHome: "Home / Menu", navHistory: "Order History", navHelp: "Help", navHistoryBtn: "History", modifyText: "Modify", deleteText: "Delete", unitsText: " item(s)", agreeTerms: "Agree to Terms" },
    zh_tw: { title: "沖繩Highball居酒屋 三線", all: "全部", recommended: "推薦", appetizer: "開胃菜", fried: "肉類料理", noodle: "炒物", rice: "飯・麵・披薩", drinks: "飲料", total: "合計", order: "前往結帳", cart: "購物車", emptyCart: "購物車是空的", success: "訂單已完成！總金額：", wTitle: "點餐前確認", wBadge: "必須", wGuest: "請選擇用餐人數", wAge: "本店家不向未滿20歲及酒後駕車的人員提供酒精類飲料。", wBtn: "開始點餐", person: "人", personMore: "人以上", historyTitle: "歷史訂單・結帳", historyEmpty: "暫無歷史記錄。", backTop: "返回首頁", wCharge: "※每位顧客需加收 330日圓(含稅) 的桌費。", foodSectionTitle: "美味餐點", drinkSectionTitle: "酒水飲料", navLogin: "會員登入", navHome: "首頁 / 菜單", navHistory: "歷史訂單", navHelp: "說明", navSearch: "搜尋", navHistoryBtn: "歷史/結帳", modifyText: "修改數量", deleteText: "刪除", unitsText: "件", agreeTerms: "同意服務條款" },
    zh_cn: { title: "冲绳Highball居酒屋 三线", all: "全部", recommended: "推荐", appetizer: "开胃菜", fried: "肉类料理", noodle: "炒物", rice: "饭・面・披萨", drinks: "饮料", total: "合计", order: "前往结账", cart: "购物车", emptyCart: "购物车是空的", success: "订单已完成！总金额：", wTitle: "点餐前确认", wBadge: "必选", wGuest: "请选择用餐人数", wAge: "本店家不向未满20岁及酒后驾车的人员提供酒精类饮料。", wBtn: "开始点餐", person: "人", personMore: "人以上", historyTitle: "历史订单・结账", historyEmpty: "暂无历史记录。", backTop: "返回首页", wCharge: "※每位顾客需加收 330日元(含税) 的桌费。", foodSectionTitle: "美味餐点", drinkSectionTitle: "酒水饮料", navLogin: "会员登录", navHome: "首页 / 菜单", navHistory: "历史订单", navHelp: "帮助", navHistoryBtn: "历史/结账", modifyText: "修改数量", deleteText: "删除", unitsText: "件", agreeTerms: "同意服务条款" },
    ko: { title: "오키나와 하이볼 주점 산신", all: "전체", recommended: "추천", appetizer: "간단 안주", fried: "고기 요리", noodle: "볶음 요리", rice: "밥・면・피자", drinks: "드링크", total: "합계", order: "주문하기", cart: "장바구니", emptyCart: "장바구니가 비어 있습니다.", success: "주문이 완료되었습니다! 총 금액: ", wTitle: "주문 전 확인", wBadge: "필수", wGuest: "방문 인원을 선택해 주세요", wAge: "당점에서는 20세 미만 및 음주 운전이 금지된 차량을 운전하실 분에게는 주류를 판매하지 않습니다.", wBtn: "주문 시작하기", person: "명", personMore: "명 이상", historyTitle: "주문 이력・회계", historyEmpty: "이력이 없습니다.", backTop: "메인 화면으로", wCharge: "※1인당 테이블 차지 330엔(세금 포함)이 부과됩니다.", foodSectionTitle: "요리 메뉴", drinkSectionTitle: "음료 메뉴", navLogin: "회원 ID 로그인", navHome: "메인 / 메뉴", navHistory: "주문 이력", navHelp: "도움말", navHistoryBtn: "이력/회계", modifyText: "수정", deleteText: "삭제", unitsText: "개", agreeTerms: "이용약관에 동의합니다" },
    es: { title: "Taberna Okinawa Sanshin", all: "Todo", recommended: "Recomendado", appetizer: "Entrantes", fried: "Carnes", noodle: "Salteados", rice: "Arroz/Fideos/Pizza", drinks: "Bebidas", total: "Total", order: "Proceder al Pedido", cart: "Carrito", emptyCart: "El carrito está vacío.", success: "¡Pedido completado! Total: ", wTitle: "Confirmación obligatoria", wBadge: "Obligatorio", wGuest: "Seleccione el número de personas", wAge: "No servimos alcohol a menores de 20 años ni a conductores.", wBtn: "Iniciar Pedido", person: "Persona(s)", personMore: "o más", historyTitle: "Historial y Cuenta", historyEmpty: "No hay historial disponible.", backTop: "Volver al Inicio", wCharge: "* Se aplica un cargo de mesa of 330 JPY (impuestos incluidos) por persona.", foodSectionTitle: "Menú de Comida", drinkSectionTitle: "Menú de Bebidas", navLogin: "Iniciar Sesión", navHome: "Inicio / Menú", navHistory: "Historial", navHelp: "Ayuda", navHistoryBtn: "Historial", modifyText: "Modificar", deleteText: "Eliminar", unitsText: " artículo(s)", agreeTerms: "Acepto los Términos" }
};

const menuItems = [
    { id: 1, category: "Appetizer", recommended: true, price: 580, imageUrl: "images/mimiga.jpg", names: { ja: "ミミガー (豚耳の和え物)", en: "Mimiga (Pork Ear Appetizer)", zh_tw: "涼拌豬耳", zh_cn: "凉拌猪耳", ko: "미미가 (돼지 귀 무침)", es: "Mimiga (Oreja de Cerdo)" } },
    { id: 2, category: "Appetizer", recommended: true, price: 450, imageUrl: "images/jimami-tofu.jpg", names: { ja: "ジーマーミ豆腐", en: "Jimami Tofu (Peanut Tofu)", zh_tw: "花生豆腐", zh_cn: "花生豆腐", ko: "지마미 두부", es: "Tofu de Cacahuete" } },
    { id: 3, category: "Appetizer", recommended: false, price: 528, imageUrl: "images/agu-pork-gyoza.jpg", names: { ja: "あぐー餃子", en: "Agu Pork Gyoza", zh_tw: "阿古豬煎餃", zh_cn: "阿古猪煎饺", ko: "아구 돼지고기 만두", es: "Gyoza de Cerdo Agu" } }, 
    { id: 4, category: "Noodle", recommended: true, price: 902, imageUrl: "images/okinawa-soba.jpg", names: { ja: "沖縄そば", en: "Okinawa Soba Noodles", zh_tw: "沖繩蕎麥麵", zh_cn: "冲绳麦面", ko: "오키나와 소바", es: "Soba de Okinawa" } },
    { id: 5, category: "Drinks", recommended: true, price: 350, imageUrl: "images/sanpin-tea.jpg", names: { ja: "さんぴん茶 (ジャスミン茶)", en: "Sanpin Jasmine Tea", zh_tw: "香片茶 (茉莉花茶)", zh_cn: "香片茶 (茉莉花茶)", ko: "산핀차 (자스민차)", es: "Té Jasmine Sanpin" } },
    { id: 6, category: "Drinks", recommended: true, price: 319, imageUrl: "images/orion-beer.jpg", names: { ja: "生ビール", en: "Draft Beer", zh_tw: "生啤酒", zh_cn: "生啤酒", ko: "생맥주", es: "Cerveza de Barril" } },
    { id: 7, category: "Drinks", recommended: true, price: 480, imageUrl: "images/shikuwasa-sour.jpg", names: { ja: "シークワーサーサワー", en: "Shikuwasa Citrus Sour", zh_tw: "沖繩扁實檸檬沙瓦", zh_cn: "冲绳扁实柠檬沙瓦", ko: "시콰사 사워", es: "Shikuwasa Sour" } }, 
    { id: 8, category: "Rice", recommended: true, price: 1518, imageUrl: "images/taco-rice.jpg", names: { ja: "タコライス", en: "Taco Rice", zh_tw: "塔可飯", zh_cn: "塔可饭", ko: "타코라이스", es: "Arroz Taco" } },
    { id: 9, category: "Appetizer", recommended: false, price: 680, imageUrl: "images/sea-grapes.jpg", names: { ja: "海ぶどう", en: "Umibudo (Sea Grapes)", zh_tw: "海葡萄", zh_cn: "海葡萄", ko: "우미부도 (바다포도)", es: "Umibudo (Uvas de Mar)" } },
    { id: 10, category: "Fried", recommended: false, price: 880, imageUrl: "images/rafute.jpg", names: { ja: "ラフテー", en: "Rafute (Okinawan Braised Pork Belly)", zh_tw: "沖繩燉東坡肉", zh_cn: "冲绳炖东坡肉", ko: "라프테 (돼지고기 장조림)", es: "Rafute" } }
];

let cart = [];
let currentLang = 'ja';
let currentCategory = 'All';

function saveCart() { localStorage.setItem('okinawa-ordering-cart', JSON.stringify(cart)); }
function loadCart() { const saved = localStorage.getItem('okinawa-ordering-cart'); if (saved) { cart = JSON.parse(saved) || []; } }
function getCartTotal() { return cart.reduce((sum, item) => sum + item.price * item.quantity, 0); }
function getCartCount() { return cart.reduce((sum, item) => sum + item.quantity, 0); }

function updateCartBar() {
    if (document.getElementById("totalPrice")) document.getElementById("totalPrice").innerText = getCartTotal().toLocaleString();
    if (document.getElementById("cartCount")) document.getElementById("cartCount").innerText = getCartCount();
}


function navigateToHome() {
    document.getElementById('cartScreen').style.display = 'none';
    document.getElementById('historyScreen').style.display = 'none';
    document.getElementById('mainMenuScreen').style.display = 'block';
    
    if (cart.length >= 0) {
        document.getElementById('cartBar').style.display = 'flex';
    }
    updateCartBar();
    renderMenu();
}

function showCartPage() {
    document.getElementById('mainMenuScreen').style.display = 'none';
    document.getElementById('historyScreen').style.display = 'none';
    document.getElementById('cartScreen').style.display = 'block';
    document.getElementById('cartBar').style.display = 'none'; 
    if (document.getElementById('termsConfirm')) document.getElementById('termsConfirm').checked = false;
    validateCheckoutForm();
    renderCartView();
}

function showHistoryPage() {
    document.getElementById('mainMenuScreen').style.display = 'none';
    document.getElementById('cartScreen').style.display = 'none';
    document.getElementById('historyScreen').style.display = 'block';
    document.getElementById('cartBar').style.display = 'none'; 
    renderHistoryView();
}


function scrollCategories(direction) {
    const container = document.getElementById('categoryBarContainer');
    if (container) {
        container.scrollBy({ left: direction, behavior: 'smooth' });
    }
}

function renderCartView() {
    const container = document.getElementById("cartItemsList");
    if (!container) return;
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding: 48px 16px; color: #666;">${translations[currentLang].emptyCart}</div>`;
        if (document.getElementById("cartSummaryCount")) document.getElementById("cartSummaryCount").innerText = `0 ${translations[currentLang].unitsText}`;
        if (document.getElementById("cartSummaryTotalPrice")) document.getElementById("cartSummaryTotalPrice").innerText = "¥0";
        return;
    }

    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        container.innerHTML += `
            <div class="cart-view-item">
                <div class="cart-view-item-top">
                    <div class="cart-view-item-title">${item.names[currentLang] || item.names['ja']}</div>
                    <img src="${item.imageUrl}" class="cart-view-item-img" alt="" onerror="showPlaceholderImg(this, '${item.names['ja'].substring(0,4)}');">
                </div>
                <div class="cart-view-item-metrics">
                    <div class="metrics-row-subtotal-formula">¥${item.price.toLocaleString()} × ${item.quantity}${translations[currentLang].unitsText}</div>
                    <div class="metrics-row-final-bold">¥${subtotal.toLocaleString()}</div>
                </div>
                <div class="cart-view-item-actions">
                    <button class="cart-action-btn delete-btn" style="background:#ff3b30; color:#fff;" onclick="removeCartItem(${item.id})">${translations[currentLang].deleteText}</button>
                    <div class="cart-quantity-inline-controls" style="display:flex; gap:8px; align-items:center;">
                        <button class="cart-inline-step-btn" style="width:28px; height:28px;" onclick="changeCartQuantity(${item.id}, -1)">−</button>
                        <span class="cart-inline-quantity-value">${item.quantity}</span>
                        <button class="cart-inline-step-btn" style="width:28px; height:28px;" onclick="changeCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    if (document.getElementById("cartSummaryCount")) document.getElementById("cartSummaryCount").innerText = `${getCartCount()} ${translations[currentLang].unitsText}`;
    if (document.getElementById("cartSummaryTotalPrice")) document.getElementById("cartSummaryTotalPrice").innerText = `¥${getCartTotal().toLocaleString()}`;
}

function changeCartQuantity(itemId, delta) {
    const item = menuItems.find(m => m.id === itemId);
    if (!item) return;

    const exist = cart.find(entry => entry.id === itemId);
    if (exist) {
        exist.quantity += delta;
        if (exist.quantity <= 0) {
            cart = cart.filter(entry => entry.id !== itemId);
        }
    } else if (delta > 0) {
        cart.push({ id: item.id, price: item.price, names: item.names, imageUrl: item.imageUrl, quantity: 1 });
    }

    updateCartBar();
    saveCart();
    renderMenu();
    validateCheckoutForm();

    if (document.getElementById('cartScreen') && document.getElementById('cartScreen').style.display === 'block') {
        renderCartView();
    }
}

function removeCartItem(itemId) {
    cart = cart.filter(entry => entry.id !== itemId);
    updateCartBar(); 
    saveCart(); 
    renderMenu(); 
    validateCheckoutForm();
    if (document.getElementById('cartScreen') && document.getElementById('cartScreen').style.display === 'block') {
        renderCartView();
    }
}

function validateCheckoutForm() {
    const check = document.getElementById('termsConfirm');
    const submitBtn = document.getElementById('btnSubmitOrder');
    if (!check || !submitBtn) return;
    if (check.checked && cart.length > 0) { 
        submitBtn.disabled = false; 
        submitBtn.classList.add('active-orange'); 
    } else { 
        submitBtn.disabled = true; 
        submitBtn.classList.remove('active-orange'); 
    }
}

function placeOrder() {
    if (cart.length === 0) return;

    let history = JSON.parse(localStorage.getItem('okinawa-ordering-history')) || [];
    const newOrder = {
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        items: [...cart],
        total: getCartTotal()
    };
    history.push(newOrder);
    localStorage.setItem('okinawa-ordering-history', JSON.stringify(history));

    alert(translations[currentLang].success + " ¥" + getCartTotal().toLocaleString());
    cart = []; 
    saveCart(); 
    updateCartBar(); 
    navigateToHome();
}

function changeWelcomeLanguage(lang) {
    currentLang = lang;
    if (document.getElementById("w-charge-note")) document.getElementById("w-charge-note").innerText = translations[lang].wCharge;
    if (document.getElementById("w-confirm-title")) document.getElementById("w-confirm-title").innerHTML = `${translations[lang].wTitle} <span class="required-badge">${translations[lang].wBadge}</span>`;
    if (document.getElementById("w-guest-label")) document.getElementById("w-guest-label").innerText = translations[lang].wGuest;
    if (document.getElementById("w-age-label")) document.getElementById("w-age-label").innerText = translations[lang].wAge;
    if (document.getElementById("btnStartOrder")) document.getElementById("btnStartOrder").innerText = translations[lang].wBtn;
    const gs = document.getElementById("guestCount");
    if (gs) {
        gs.options[0].text = `1 ${translations[lang].person}`;
        gs.options[1].text = `2 ${translations[lang].person}`;
        gs.options[2].text = `3 ${translations[lang].person}`;
        gs.options[3].text = `4 ${translations[lang].personMore}`;
    }
    if (document.getElementById("sidebarLangSelect")) document.getElementById("sidebarLangSelect").value = lang;
    changeLanguage(lang);
}

function changeLanguage(lang) {
    currentLang = lang;
    if (document.getElementById("appTitle")) document.getElementById("appTitle").innerText = translations[lang].title;
    if (document.getElementById("txtNavHistory")) document.getElementById("txtNavHistory").innerText = translations[lang].navHistoryBtn;
    if (document.getElementById("btnAll")) document.getElementById("btnAll").innerText = translations[lang].all;
    if (document.getElementById("btnRecommended")) document.getElementById("btnRecommended").innerText = translations[lang].recommended;
    if (document.getElementById("btnAppetizer")) document.getElementById("btnAppetizer").innerText = translations[lang].appetizer;
    if (document.getElementById("btnFried")) document.getElementById("btnFried").innerText = translations[lang].fried;
    if (document.getElementById("btnNoodle")) document.getElementById("btnNoodle").innerText = translations[lang].noodle;
    if (document.getElementById("btnRice")) document.getElementById("btnRice").innerText = translations[lang].rice;
    if (document.getElementById("btnDrinks")) document.getElementById("btnDrinks").innerText = translations[lang].drinks;
    if (document.getElementById("txtTotal")) document.getElementById("txtTotal").innerText = translations[lang].total;
    if (document.getElementById("btnOrder")) document.getElementById("btnOrder").innerText = translations[lang].order;
    if (document.getElementById("txtCartTitle")) document.getElementById("txtCartTitle").innerText = translations[lang].cart;
    if (document.getElementById("txtCartSummaryTotalLabel")) document.getElementById("txtCartSummaryTotalLabel").innerText = translations[lang].total;
    if (document.getElementById("navLogin")) document.getElementById("navLogin").innerText = translations[lang].navLogin;
    if (document.getElementById("navHome")) document.getElementById("navHome").innerText = translations[lang].navHome;
    if (document.getElementById("navHistory")) document.getElementById("navHistory").innerText = translations[lang].navHistory;
    if (document.getElementById("navHelp")) document.getElementById("navHelp").innerText = translations[lang].navHelp;
    
    if (document.getElementById("txtHistoryTitle")) document.getElementById("txtHistoryTitle").innerText = translations[lang].historyTitle;
    if (document.getElementById("historyEmptyText")) document.getElementById("historyEmptyText").innerText = translations[lang].historyEmpty;
    if (document.getElementById("btnBackToTop")) document.getElementById("btnBackToTop").innerText = translations[lang].backTop;
    if (document.getElementById("menuUnitText")) document.getElementById("menuUnitText").innerText = translations[lang].unitsText;
    if (document.getElementById("termsLabelText")) document.getElementById("termsLabelText").innerText = translations[lang].agreeTerms;
    if (document.getElementById("btnSubmitOrder")) {
        document.getElementById("btnSubmitOrder").innerText = lang === 'ja' ? "注文を送信する" : translations[lang].order;
    }

    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    const targetLangBtn = document.getElementById(`lang-${lang}`);
    if (targetLangBtn) targetLangBtn.classList.add('active');
    
    renderMenu();
    if (document.getElementById('cartScreen') && document.getElementById('cartScreen').style.display === 'block') renderCartView();
    if (document.getElementById('historyScreen') && document.getElementById('historyScreen').style.display === 'block') renderHistoryView();
}

function showPlaceholderImg(imgElement, shortName) {
    imgElement.onerror = null; 
    imgElement.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%23f5f6f7'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='8' font-weight='bold' fill='%23ff7a00'>${encodeURIComponent(shortName)}</text></svg>`;
}

function renderMenu() {
    const container = document.getElementById("menuSectionsContainer");
    if (!container) return;
    container.innerHTML = ""; 

    const baseFiltered = currentCategory === 'All' 
        ? menuItems 
        : currentCategory === 'Recommended' 
        ? menuItems.filter(i => i.recommended) 
        : menuItems.filter(i => i.category === currentCategory);

    if (document.getElementById("menuCount")) document.getElementById("menuCount").innerText = baseFiltered.length;

    const foodItems = baseFiltered.filter(item => item.category !== "Drinks");
    const drinkItems = baseFiltered.filter(item => item.category === "Drinks");
    const sortedItems = [...foodItems, ...drinkItems];

    let htmlStr = `<div class="menu-grid">`;
    sortedItems.forEach(item => {
        const localizedName = item.names[currentLang] || item.names['ja'];
        const fallbackText = (item.names['ja'] || '').substring(0, 4);
        const cartEntry = cart.find(c => c.id === item.id);
        const quantity = cartEntry ? cartEntry.quantity : 0;

        htmlStr += `
            <div class="grid-card">
                <div class="grid-img-wrapper">
                    <img src="${item.imageUrl}" alt="${localizedName}" onerror="showPlaceholderImg(this, '${fallbackText}');">
                    <div class="grid-quantity-overlay-controls">
                        <button class="grid-step-btn" onclick="changeCartQuantity(${item.id}, -1)" ${quantity === 0 ? 'disabled' : ''}>−</button>
                        <span class="grid-quantity-value">${quantity}</span>
                        <button class="grid-step-btn" onclick="changeCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="grid-details">
                    <div class="grid-name">${localizedName}</div>
                    <div class="grid-price">¥${item.price.toLocaleString()} (税込)</div>
                </div>
            </div>
        `;
    });
    htmlStr += `</div>`;
    
    container.innerHTML = htmlStr;
}

function renderHistoryView() {
    const container = document.getElementById("historyOrdersList");
    const emptyText = document.getElementById("historyEmptyText");
    if (!container) return;

    const history = JSON.parse(localStorage.getItem('okinawa-ordering-history')) || [];

    if (history.length === 0) {
        if (emptyText) emptyText.style.display = "block";
        container.innerHTML = "";
        return;
    }

    if (emptyText) emptyText.style.display = "none";
    container.innerHTML = "";

    history.forEach((order, index) => {
        let itemsHtml = order.items.map(item => 
            `<div style="display:flex; justify-content:space-between; margin-bottom: 6px; font-size: 14px; color: #333;">
                <span>• ${item.names[currentLang] || item.names['ja']} × ${item.quantity}</span>
                <span style="font-weight: 500;">¥${(item.price * item.quantity).toLocaleString()}</span>
             </div>`
        ).join('');

        container.innerHTML += `
            <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 14px; margin-bottom: 14px; background: #fafafa; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #ccc; padding-bottom: 6px; margin-bottom: 10px; font-weight: bold; color: #555; font-size: 13px;">
                    <span>注文 #${index + 1}</span>
                    <span>${order.date}</span>
                </div>
                <div style="padding: 2px 0;">${itemsHtml}</div>
                <div style="text-align: right; margin-top: 10px; font-weight: bold; color: #ff7a00; border-top: 1px solid #eee; padding-top: 8px; font-size: 16px;">
                    ${translations[currentLang].total}: ¥${order.total.toLocaleString()}
                </div>
            </div>
        `;
    });
}

function filterMenu(category, button) {
    currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    if (button) button.classList.add('active');
    changeLanguage(currentLang);
}

function validateWelcomeForm() {
    const check = document.getElementById('ageConfirm');
    if (document.getElementById('btnStartOrder')) document.getElementById('btnStartOrder').disabled = !check.checked;
}

function startOrdering() { if (document.getElementById('welcomeScreen')) document.getElementById('welcomeScreen').style.display = 'none'; }
function toggleSidebar() {
    document.getElementById('sidebarMenu').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('active');
}

function init() { loadCart(); changeLanguage('ja'); updateCartBar(); }
window.addEventListener('DOMContentLoaded', init);