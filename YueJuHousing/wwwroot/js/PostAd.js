/// 選擇縣市下拉式選單
function updateTownships() {
    var cityDropdown = document.getElementById("city");
    var townshipDropdown = document.getElementById("township");

    // 清除現有的選項
    clearDropdown(townshipDropdown);

    var selectedCity = cityDropdown.value;

    if (selectedCity !== "") {
        // 啟用鄉鎮市區下拉選單
        townshipDropdown.disabled = false;

        // 根據所選縣市添加鄉鎮市區
        switch (selectedCity) {
            case "台北市":
                addTownshipOption("中正區");
                addTownshipOption("大同區");
                addTownshipOption("中山區");
                addTownshipOption("松山區");
                addTownshipOption("大安區");
                addTownshipOption("萬華區");
                addTownshipOption("信義區");
                addTownshipOption("士林區");
                addTownshipOption("北投區");
                addTownshipOption("內湖區");
                addTownshipOption("南港區");
                addTownshipOption("文山區");
                break;
            case "新北市":
                addTownshipOption("萬里區");
                addTownshipOption("金山區");
                addTownshipOption("板橋區");
                addTownshipOption("汐止區");
                addTownshipOption("深坑區");
                addTownshipOption("石碇區");
                addTownshipOption("瑞芳區");
                addTownshipOption("平溪區");
                addTownshipOption("雙溪區");
                addTownshipOption("貢寮區");
                addTownshipOption("新店區");
                addTownshipOption("坪林區");
                addTownshipOption("烏來區");
                addTownshipOption("永和區");
                addTownshipOption("中和區");
                addTownshipOption("土城區");
                addTownshipOption("三峽區");
                addTownshipOption("樹林區");
                addTownshipOption("鶯歌區");
                addTownshipOption("三重區");
                addTownshipOption("新莊區");
                addTownshipOption("泰山區");
                addTownshipOption("林口區");
                addTownshipOption("蘆洲區");
                addTownshipOption("五股區");
                addTownshipOption("八里區");
                addTownshipOption("淡水區");
                addTownshipOption("三芝區");
                addTownshipOption("石門區");
                break;
            case "桃園市":
                addTownshipOption("中壢區");
                addTownshipOption("平鎮區");
                addTownshipOption("龍潭區");
                addTownshipOption("楊梅區");
                addTownshipOption("新屋區");
                addTownshipOption("觀音區");
                addTownshipOption("桃園區");
                addTownshipOption("龜山區");
                addTownshipOption("八德區");
                addTownshipOption("大溪區");
                addTownshipOption("復興區");
                addTownshipOption("大園區");
                addTownshipOption("蘆竹區");
                break;
            case "台中市":
                addTownshipOption("中區");
                addTownshipOption("東區");
                addTownshipOption("南區");
                addTownshipOption("西區");
                addTownshipOption("北區");
                addTownshipOption("北屯區");
                addTownshipOption("西屯區");
                addTownshipOption("南屯區");
                addTownshipOption("太平區");
                addTownshipOption("大里區");
                addTownshipOption("霧峰區");
                addTownshipOption("烏日區");
                addTownshipOption("豐原區");
                addTownshipOption("后里區");
                addTownshipOption("石岡區");
                addTownshipOption("東勢區");
                addTownshipOption("和平區");
                addTownshipOption("新社區");
                addTownshipOption("潭子區");
                addTownshipOption("大雅區");
                addTownshipOption("神岡區");
                addTownshipOption("大肚區");
                addTownshipOption("沙鹿區");
                addTownshipOption("龍井區");
                addTownshipOption("梧棲區");
                addTownshipOption("清水區");
                addTownshipOption("大甲區");
                addTownshipOption("外埔區");
                addTownshipOption("大安區");
                break;
            case "台南市":
                addTownshipOption("中西區");
                addTownshipOption("東區");
                addTownshipOption("南區");
                addTownshipOption("北區");
                addTownshipOption("安平區");
                addTownshipOption("安南區");
                addTownshipOption("永康區");
                addTownshipOption("歸仁區");
                addTownshipOption("新化區");
                addTownshipOption("左鎮區");
                addTownshipOption("玉井區");
                addTownshipOption("楠西區");
                addTownshipOption("南化區");
                addTownshipOption("仁德區");
                addTownshipOption("關廟區");
                addTownshipOption("龍崎區");
                addTownshipOption("官田區");
                addTownshipOption("麻豆區");
                addTownshipOption("佳里區");
                addTownshipOption("西港區");
                addTownshipOption("七股區");
                addTownshipOption("將軍區");
                addTownshipOption("學甲區");
                addTownshipOption("北門區");
                addTownshipOption("新營區");
                addTownshipOption("後壁區");
                addTownshipOption("白河區");
                addTownshipOption("東山區");
                addTownshipOption("六甲區");
                addTownshipOption("下營區");
                addTownshipOption("柳營區");
                addTownshipOption("鹽水區");
                addTownshipOption("善化區");
                addTownshipOption("大內區");
                addTownshipOption("山上區");
                addTownshipOption("新市區");
                addTownshipOption("安定區");
                break;
            case "高雄市":
                addTownshipOption("新興區");
                addTownshipOption("前金區");
                addTownshipOption("苓雅區");
                addTownshipOption("鹽埕區");
                addTownshipOption("鼓山區");
                addTownshipOption("旗津區");
                addTownshipOption("前鎮區");
                addTownshipOption("三民區");
                addTownshipOption("楠梓區");
                addTownshipOption("小港區");
                addTownshipOption("左營區");
                addTownshipOption("仁武區");
                addTownshipOption("大社區");
                addTownshipOption("東沙群島");
                addTownshipOption("南沙群島");
                addTownshipOption("岡山區");
                addTownshipOption("路竹區");
                addTownshipOption("阿蓮區");
                addTownshipOption("田寮區");
                addTownshipOption("燕巢區");
                addTownshipOption("橋頭區");
                addTownshipOption("梓官區");
                addTownshipOption("彌陀區");
                addTownshipOption("永安區");
                addTownshipOption("湖內區");
                addTownshipOption("鳳山區");
                addTownshipOption("大寮區");
                addTownshipOption("林園區");
                addTownshipOption("鳥松區");
                addTownshipOption("大樹區");
                addTownshipOption("旗山區");
                addTownshipOption("美濃區");
                addTownshipOption("六龜區");
                addTownshipOption("內門區");
                addTownshipOption("杉林區");
                addTownshipOption("甲仙區");
                addTownshipOption("桃源區");
                addTownshipOption("那瑪夏區");
                addTownshipOption("茂林區");
                addTownshipOption("茄萣區");
                break;
            case "基隆市":
                addTownshipOption("仁愛區");
                addTownshipOption("信義區");
                addTownshipOption("中正區");
                addTownshipOption("中山區");
                addTownshipOption("安樂區");
                addTownshipOption("暖暖區");
                addTownshipOption("七堵區");
                break;
            case "新竹市":
                addTownshipOption("東區");
                addTownshipOption("北區");
                addTownshipOption("香山區");
                break;
            case "嘉義市":
                addTownshipOption("東區");
                addTownshipOption("西區");
                break;
            case "新竹縣":
                addTownshipOption("竹北市");
                addTownshipOption("湖口鄉");
                addTownshipOption("新豐鄉");
                addTownshipOption("新埔鎮");
                addTownshipOption("關西鎮");
                addTownshipOption("芎林鄉");
                addTownshipOption("寶山鄉");
                addTownshipOption("竹東鎮");
                addTownshipOption("五峰鄉");
                addTownshipOption("橫山鄉");
                addTownshipOption("尖石鄉");
                addTownshipOption("北埔鄉");
                addTownshipOption("峨眉鄉");
                break;
            case "苗栗縣":
                addTownshipOption("竹南鎮");
                addTownshipOption("頭份市");
                addTownshipOption("三灣鄉");
                addTownshipOption("南庄鄉");
                addTownshipOption("獅潭鄉");
                addTownshipOption("後龍鎮");
                addTownshipOption("通霄鎮");
                addTownshipOption("苑裡鎮");
                addTownshipOption("苗栗市");
                addTownshipOption("造橋鄉");
                addTownshipOption("頭屋鄉");
                addTownshipOption("公館鄉");
                addTownshipOption("大湖鄉");
                addTownshipOption("泰安鄉");
                addTownshipOption("銅鑼鄉");
                addTownshipOption("三義鄉");
                addTownshipOption("西湖鄉");
                addTownshipOption("卓蘭鎮");
                break;
            case "彰化縣":
                addTownshipOption("彰化市");
                addTownshipOption("芬園鄉");
                addTownshipOption("花壇鄉");
                addTownshipOption("秀水鄉");
                addTownshipOption("鹿港鎮");
                addTownshipOption("福興鄉");
                addTownshipOption("線西鄉");
                addTownshipOption("和美鎮");
                addTownshipOption("伸港鄉");
                addTownshipOption("員林市");
                addTownshipOption("社頭鄉");
                addTownshipOption("永靖鄉");
                addTownshipOption("埔心鄉");
                addTownshipOption("溪湖鎮");
                addTownshipOption("大村鄉");
                addTownshipOption("埔鹽鄉");
                addTownshipOption("田中鎮");
                addTownshipOption("北斗鎮");
                addTownshipOption("田尾鄉");
                addTownshipOption("埤頭鄉");
                addTownshipOption("溪州鄉");
                addTownshipOption("竹塘鄉");
                addTownshipOption("二林鎮");
                addTownshipOption("大城鄉");
                addTownshipOption("芳苑鄉");
                addTownshipOption("二水鄉");
                break;
            case "南投縣":
                addTownshipOption("南投市");
                addTownshipOption("中寮鄉");
                addTownshipOption("草屯鎮");
                addTownshipOption("國姓鄉");
                addTownshipOption("埔里鎮");
                addTownshipOption("仁愛鄉");
                addTownshipOption("名間鄉");
                addTownshipOption("集集鎮");
                addTownshipOption("水里鄉");
                addTownshipOption("魚池鄉");
                addTownshipOption("信義鄉");
                addTownshipOption("竹山鎮");
                addTownshipOption("鹿谷鄉");
                break;
            case "雲林縣":
                addTownshipOption("斗南鎮");
                addTownshipOption("大埤鄉");
                addTownshipOption("虎尾鎮");
                addTownshipOption("土庫鎮");
                addTownshipOption("褒忠鄉");
                addTownshipOption("東勢鄉");
                addTownshipOption("臺西鄉");
                addTownshipOption("崙背鄉");
                addTownshipOption("麥寮鄉");
                addTownshipOption("斗六市");
                addTownshipOption("林內鄉");
                addTownshipOption("古坑鄉");
                addTownshipOption("莿桐鄉");
                addTownshipOption("西螺鎮");
                addTownshipOption("二崙鄉");
                addTownshipOption("北港鎮");
                addTownshipOption("水林鄉");
                addTownshipOption("口湖鄉");
                addTownshipOption("四湖鄉");
                addTownshipOption("元長鄉");
                break;
            case "嘉義縣":
                addTownshipOption("番路鄉");
                addTownshipOption("梅山鄉");
                addTownshipOption("竹崎鄉");
                addTownshipOption("阿里山鄉");
                addTownshipOption("中埔鄉");
                addTownshipOption("大埔鄉");
                addTownshipOption("水上鄉");
                addTownshipOption("鹿草鄉");
                addTownshipOption("太保市");
                addTownshipOption("朴子市");
                addTownshipOption("東石鄉");
                addTownshipOption("六腳鄉");
                addTownshipOption("新港鄉");
                addTownshipOption("民雄鄉");
                addTownshipOption("大林鎮");
                addTownshipOption("溪口鄉");
                addTownshipOption("義竹鄉");
                addTownshipOption("布袋鎮");
                break;
            case "屏東縣":
                addTownshipOption("屏東市");
                addTownshipOption("三地門鄉");
                addTownshipOption("霧臺鄉");
                addTownshipOption("瑪家鄉");
                addTownshipOption("九如鄉");
                addTownshipOption("里港鄉");
                addTownshipOption("高樹鄉");
                addTownshipOption("鹽埔鄉");
                addTownshipOption("長治鄉");
                addTownshipOption("麟洛鄉");
                addTownshipOption("竹田鄉");
                addTownshipOption("內埔鄉");
                addTownshipOption("萬丹鄉");
                addTownshipOption("潮州鎮");
                addTownshipOption("泰武鄉");
                addTownshipOption("來義鄉");
                addTownshipOption("萬巒鄉");
                addTownshipOption("崁頂鄉");
                addTownshipOption("新埤鄉");
                addTownshipOption("南州鄉");
                addTownshipOption("林邊鄉");
                addTownshipOption("東港鎮");
                addTownshipOption("琉球鄉");
                addTownshipOption("佳冬鄉");
                addTownshipOption("新園鄉");
                addTownshipOption("枋寮鄉");
                addTownshipOption("枋山鄉");
                addTownshipOption("春日鄉");
                addTownshipOption("獅子鄉");
                addTownshipOption("車城鄉");
                addTownshipOption("牡丹鄉");
                addTownshipOption("恆春鎮");
                addTownshipOption("滿州鄉");
                break;
            case "宜蘭縣":
                addTownshipOption("宜蘭市");
                addTownshipOption("頭城鎮");
                addTownshipOption("礁溪鄉");
                addTownshipOption("壯圍鄉");
                addTownshipOption("員山鄉");
                addTownshipOption("羅東鎮");
                addTownshipOption("三星鄉");
                addTownshipOption("大同鄉");
                addTownshipOption("五結鄉");
                addTownshipOption("冬山鄉");
                addTownshipOption("蘇澳鎮");
                addTownshipOption("南澳鄉");
                addTownshipOption("釣魚台列嶼");
                break;
            case "花蓮縣":
                addTownshipOption("花蓮市");
                addTownshipOption("新城鄉");
                addTownshipOption("秀林鄉");
                addTownshipOption("吉安鄉");
                addTownshipOption("壽豐鄉");
                addTownshipOption("鳳林鎮");
                addTownshipOption("光復鄉");
                addTownshipOption("豐濱鄉");
                addTownshipOption("瑞穗鄉");
                addTownshipOption("萬榮鄉");
                addTownshipOption("玉里鎮");
                addTownshipOption("卓溪鄉");
                addTownshipOption("富里鄉");
                break;
            case "台東縣":
                addTownshipOption("台東市");
                addTownshipOption("綠島鄉");
                addTownshipOption("蘭嶼鄉");
                addTownshipOption("延平鄉");
                addTownshipOption("卑南鄉");
                addTownshipOption("鹿野鄉");
                addTownshipOption("關山鎮");
                addTownshipOption("海端鄉");
                addTownshipOption("池上鄉");
                addTownshipOption("東河鄉");
                addTownshipOption("成功鎮");
                addTownshipOption("長濱鄉");
                addTownshipOption("太麻里鄉");
                addTownshipOption("金峰鄉");
                addTownshipOption("大武鄉");
                addTownshipOption("達仁鄉");
                break;
            case "澎湖縣":
                addTownshipOption("馬公市");
                addTownshipOption("西嶼鄉");
                addTownshipOption("望安鄉");
                addTownshipOption("七美鄉");
                addTownshipOption("白沙鄉");
                addTownshipOption("湖西鄉");
                break;
            case "金門縣":
                addTownshipOption("金沙鎮");
                addTownshipOption("金湖鎮");
                addTownshipOption("金寧鄉");
                addTownshipOption("金城鎮");
                addTownshipOption("烈嶼鄉");
                addTownshipOption("烏坵鄉");
                break;
            case "連江縣":
                addTownshipOption("南竿鄉");
                addTownshipOption("北竿鄉");
                addTownshipOption("莒光鄉");
                addTownshipOption("東引鄉");
                break;
            // 其他地區可根據需求添加
        }
    } else {
        // 如果沒有選擇縣市，禁用鄉鎮市區下拉選單
        townshipDropdown.disabled = true;
        // 添加佔位符選項
        addTownshipOption("請先選擇縣市");
    }
}

function addTownshipOption(township) {
    var townshipDropdown = document.getElementById("township");
    var option = document.createElement("option");
    option.text = township;
    option.value = township;
    townshipDropdown.add(option);
}

function clearDropdown(dropdown) {
    while (dropdown.options.length > 0) {
        dropdown.options.remove(0);
    }
}

/// 選擇廣告種類下拉式選單
function updateAdtypes() {
    var categoryDropdown = document.getElementById("category");
    var typeDropdown = document.getElementById("type");
    var usetypeDropdown = document.getElementById("usetype");

    // 清除現有選項
    clearDropdown(typeDropdown);
    clearDropdown(usetypeDropdown);

    // 根據所選類別添加選項
    switch (categoryDropdown.value) {
        case "住宅":
        case "套房":
        case "其他":
        case "店面":
        case "辦公":
        case "住辦":
            addOption(typeDropdown, "公寓");
            addOption(typeDropdown, "別墅");
            addOption(typeDropdown, "透天厝");
            addOption(typeDropdown, "電梯大樓");
            if (categoryDropdown.value === "店面" || categoryDropdown.value === "辦公" || categoryDropdown.value === "住辦") {
                addOption(typeDropdown, "店面(店鋪)");
            }
            break;
        case "廠房":
            addOption(typeDropdown, "工廠");
            addOption(typeDropdown, "廠辦");
            addOption(typeDropdown, "農舍");
            addOption(typeDropdown, "倉庫");
            break;
        // 其他類別可根據需求添加
    }

    // 根據所選類別啟用並添加使用類型選項
    switch (categoryDropdown.value) {
        case "住宅":
        case "套房":
        case "其他":
        case "店面":
        case "辦公":
        case "住辦":
        case "廠房":
        case "土地":
            addOption(usetypeDropdown, "住家用");
            addOption(usetypeDropdown, "住商用");
            addOption(usetypeDropdown, "住工用");
            addOption(usetypeDropdown, "商業用");
            addOption(usetypeDropdown, "工業用");
            addOption(usetypeDropdown, "農業用");
            addOption(usetypeDropdown, "一般事務所");
            addOption(usetypeDropdown, "集合住宅");
            addOption(usetypeDropdown, "其他");
            break;
        // 其他類別可根據需求添加
    }

    // 啟用使用類型下拉選單
    usetypeDropdown.disabled = false;
}

function addOption(dropdown, optionText) {
    var option = document.createElement("option");
    option.text = optionText;
    option.value = optionText;
    dropdown.add(option);
}

// 根據土地使用分區選擇顯示相關選項
document.addEventListener("DOMContentLoaded", function () {
    const urbanRadio = document.querySelector('input[value="都市土地"]');
    const nonUrbanRadio = document.querySelector('input[value="非都市土地"]');
    const urbanZonesDiv = document.getElementById('urbanZones');
    const urbanZones1Div = document.getElementById('urbanZones1');
    const nonUrbanZonesDiv = document.getElementById('nonUrbanZones');
    const landUseZoneTypeDetail = document.querySelectorAll('[asp-for="Land.LandUseZoneTypeDetail"]');

    if (urbanRadio && nonUrbanRadio) {
        urbanRadio.addEventListener('change', function () {
            if (urbanRadio.checked) {
                urbanZonesDiv.style.display = 'flex';
                urbanZones1Div.style.display = 'flex';
                nonUrbanZonesDiv.style.display = 'none';
                landUseZoneTypeDetail.forEach(element => element.style.display = 'inline-block');
            }
        });

        nonUrbanRadio.addEventListener('change', function () {
            if (nonUrbanRadio.checked) {
                urbanZonesDiv.style.display = 'none';
                urbanZones1Div.style.display = 'none';
                nonUrbanZonesDiv.style.display = 'flex';
                landUseZoneTypeDetail.forEach(element => element.style.display = 'none');
            }
        });
    }
});



// 切換顯示"房屋現況"選單
$(function () {
    $('#houseCondition').hide();

    $('#sellOption').on('click', function () {
        $('#houseCondition').show();
    });
});
