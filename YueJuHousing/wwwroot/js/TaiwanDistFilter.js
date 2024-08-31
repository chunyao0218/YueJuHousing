document.addEventListener('DOMContentLoaded', function () {
    const urbanButton = document.querySelector('.use-zone .categories .category:nth-child(2)');
    const nonUrbanButton = document.querySelector('.use-zone .categories .category:nth-child(3)');
    const optionsContainer = document.querySelector('.use-zone .category-content .options');
    const countySelect = document.getElementById('county-select');
    const districtOptions = document.getElementById('district-options');

    // 全台灣縣市及地區資料
    const taiwanDistricts = {
        '台北市': ['中正區', '大同區', '中山區', '松山區', '大安區', '萬華區', '信義區', '士林區', '北投區', '內湖區', '南港區', '文山區'],
        '新北市': ['板橋區', '三重區', '中和區', '永和區', '新莊區', '新店區', '樹林區', '鶯歌區', '三峽區', '淡水區', '瑞芳區', '土城區', '蘆洲區', '五股區', '泰山區', '林口區', '深坑區', '石碇區', '坪林區', '三芝區', '石門區', '八里區', '平溪區', '雙溪區', '貢寮區', '金山區', '萬里區', '烏來區'],
        '桃園市': ['桃園區', '中壢區', '平鎮區', '八德區', '楊梅區', '蘆竹區', '大溪區', '龍潭區', '龜山區', '大園區', '觀音區', '新屋區', '復興區'],
        '台中市': ['中區', '東區', '南區', '西區', '北區', '北屯區', '西屯區', '南屯區', '太平區', '大里區', '霧峰區', '烏日區', '豐原區', '后里區', '石岡區', '東勢區', '和平區', '新社區', '潭子區', '大雅區', '神岡區', '大肚區', '沙鹿區', '龍井區', '梧棲區', '清水區', '大甲區', '外埔區', '大安區'],
        '台南市': ['中西區', '東區', '南區', '北區', '安平區', '安南區', '永康區', '歸仁區', '新化區', '左鎮區', '玉井區', '楠西區', '南化區', '仁德區', '關廟區', '龍崎區', '官田區', '麻豆區', '佳里區', '西港區', '七股區', '將軍區', '學甲區', '北門區', '新營區', '後壁區', '白河區', '東山區', '六甲區', '下營區', '柳營區', '鹽水區', '善化區', '大內區', '山上區', '新市區', '安定區'],
        '高雄市': ['新興區', '前金區', '苓雅區', '鹽埕區', '鼓山區', '旗津區', '前鎮區', '三民區', '楠梓區', '小港區', '左營區', '仁武區', '大社區', '岡山區', '路竹區', '阿蓮區', '田寮區', '燕巢區', '橋頭區', '梓官區', '彌陀區', '永安區', '湖內區', '鳳山區', '大寮區', '林園區', '鳥松區', '大樹區', '旗山區', '美濃區', '六龜區', '內門區', '杉林區', '甲仙區', '桃源區', '那瑪夏區', '茂林區', '茄萣區'],
        '基隆市': ['中正區', '七堵區', '暖暖區', '仁愛區', '中山區', '安樂區', '信義區'],
        '新竹市': ['東區', '北區', '香山區'],
        '新竹縣': ['竹北市', '湖口鄉', '新豐鄉', '新埔鎮', '關西鎮', '芎林鄉', '寶山鄉', '竹東鎮', '五峰鄉', '橫山鄉', '尖石鄉', '北埔鄉', '峨眉鄉'],
        '苗栗縣': ['苗栗市', '苑裡鎮', '通霄鎮', '竹南鎮', '頭份市', '後龍鎮', '卓蘭鎮', '大湖鄉', '公館鄉', '銅鑼鄉', '南庄鄉', '頭屋鄉', '三義鄉', '西湖鄉', '造橋鄉', '三灣鄉', '獅潭鄉', '泰安鄉'],
        '彰化縣': ['彰化市', '鹿港鎮', '和美鎮', '線西鄉', '伸港鄉', '福興鄉', '秀水鄉', '花壇鄉', '芬園鄉', '員林市', '溪湖鎮', '田中鎮', '大村鄉', '埔鹽鄉', '埔心鄉', '永靖鄉', '社頭鄉', '二水鄉', '北斗鎮'],
        '南投縣': ['南投市', '埔里鎮', '草屯鎮', '竹山鎮', '集集鎮', '名間鄉', '鹿谷鄉', '中寮鄉', '魚池鄉', '國姓鄉', '水里鄉', '信義鄉', '仁愛鄉'],
        '雲林縣': ['斗六市', '斗南鎮', '虎尾鎮', '西螺鎮', '土庫鎮', '北港鎮', '古坑鄉', '大埤鄉', '莿桐鄉', '林內鄉', '二崙鄉', '崙背鄉', '麥寮鄉', '東勢鄉', '褒忠鄉', '臺西鄉', '元長鄉', '四湖鄉', '口湖鄉', '水林鄉'],
        '嘉義市': ['東區', '西區'],
        '嘉義縣': ['太保市', '朴子市', '布袋鎮', '大林鎮', '民雄鄉', '溪口鄉', '新港鄉', '六腳鄉', '東石鄉', '義竹鄉', '鹿草鄉', '水上鄉', '中埔鄉', '竹崎鄉', '梅山鄉', '番路鄉', '大埔鄉', '阿里山鄉'],
        '屏東縣': ['屏東市', '潮州鎮', '東港鎮', '恆春鎮', '萬丹鄉', '長治鄉', '麟洛鄉', '九如鄉', '里港鄉', '鹽埔鄉', '高樹鄉', '萬巒鄉', '內埔鄉', '竹田鄉', '新埤鄉', '枋寮鄉', '新園鄉', '崁頂鄉', '林邊鄉', '南州鄉', '佳冬鄉', '琉球鄉', '車城鄉', '滿州鄉', '枋山鄉', '三地門鄉', '霧臺鄉', '瑪家鄉', '泰武鄉', '來義鄉', '春日鄉', '獅子鄉', '牡丹鄉'],
        '宜蘭縣': ['宜蘭市', '頭城鎮', '羅東鎮', '蘇澳鎮', '礁溪鄉', '壯圍鄉', '員山鄉', '冬山鄉', '五結鄉', '三星鄉', '大同鄉', '南澳鄉'],
        '花蓮縣': ['花蓮市', '鳳林鎮', '玉里鎮', '新城鄉', '吉安鄉', '壽豐鄉', '光復鄉', '豐濱鄉', '瑞穗鄉', '富里鄉', '秀林鄉', '萬榮鄉', '卓溪鄉'],
        '台東縣': ['臺東市', '成功鎮', '關山鎮', '卑南鄉', '大武鄉', '太麻里鄉', '東河鄉', '長濱鄉', '鹿野鄉', '池上鄉', '綠島鄉', '延平鄉', '海端鄉', '達仁鄉', '金峰鄉', '蘭嶼鄉'],
        '澎湖縣': ['馬公市', '湖西鄉', '白沙鄉', '西嶼鄉', '望安鄉', '七美鄉'],
        '金門縣': ['金城鎮', '金湖鎮', '金沙鎮', '金寧鄉', '烈嶼鄉', '烏坵鄉'],
        '馬祖縣': ['南竿鄉', '北竿鄉', '莒光鄉', '東引鄉']
    };

    const landZones = {
        'urban': ['住宅區', '商業區', '工業區', '行政區', '文教區', '體育運動區', '風景區', '農業區', '特定專用區', '其他'],
        'non_urban': ['特定農業區', '一般農業區', '工業區', '鄉村區', '森林區', '山坡地保育區', '風景區', '其他']
    };

    function updateOptions(zoneType) {
        optionsContainer.innerHTML = ''; // 清空现有的选项

        landZones[zoneType].forEach(function (zone) {
            const div = document.createElement('div');
            div.className = 'urban_land_use_zone filter-item';
            div.innerHTML = `
                <label class="t5-checkbox t5-checkbox--housing">
                    <span class="t5-checkbox__inner">
                        <input class="t5-checkbox__input" type="checkbox" name="LandUseZoneType" value="${zone}">
                        <span class="t5-checkbox__icon">
                            <span class="t5-checkbox__check"></span>
                        </span>
                    </span>
                    <span class="t5-checkbox__text">${zone}</span>
                </label>`;
            optionsContainer.appendChild(div);
        });
    }

    function generateDistrictOptions(county) {
        // 若選擇 "不限"，隱藏地區選項並清空 name="City" 的值
        if (county === '不限') {
            districtOptions.innerHTML = '';
            countySelect.removeAttribute("name");
            return;
        } else {
            countySelect.setAttribute("name", "City");
        }

        districtOptions.innerHTML = ''; // 清空地區選項

        if (taiwanDistricts[county]) {
            taiwanDistricts[county].forEach(function (district) {
                const div = document.createElement('div');
                div.style.display = 'block'; // 確保每個選項換行顯示
                div.innerHTML = `
                    <label class="t5-checkbox t5-checkbox--housing">
                        <span class="t5-checkbox__inner">
                            <input class="t5-checkbox__input" type="checkbox" name="District" value="${district}">
                            <span class="t5-checkbox__icon">
                                <span class="t5-checkbox__check"></span>
                            </span>
                        </span>
                        <span class="t5-checkbox__text">${district}</span>
                    </label>`;
                districtOptions.appendChild(div);
            });
        }
    }

    // 初始化时显示当前选择的城市对应的地区
    if (countySelect.value) {
        generateDistrictOptions(countySelect.value);
    }

    // 初始化显示都市土地的选项
    if (urbanButton.classList.contains('active')) {
        updateOptions('urban');
    } else if (nonUrbanButton.classList.contains('active')) {
        updateOptions('non_urban');
    }

    urbanButton.addEventListener('click', function (event) {
        event.stopPropagation();
        updateOptions('urban');
        urbanButton.classList.add('active');
        nonUrbanButton.classList.remove('active');
    });

    nonUrbanButton.addEventListener('click', function (event) {
        event.stopPropagation();
        updateOptions('non_urban');
        nonUrbanButton.classList.add('active');
        urbanButton.classList.remove('active');
    });

    countySelect.addEventListener('change', function () {
        generateDistrictOptions(this.value);
    });

    // 清空篩選條件
    document.getElementById('clear-filters').addEventListener('click', function () {
        document.getElementById('filter-form').reset();
    });
});
