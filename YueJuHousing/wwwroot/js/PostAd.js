///選擇縣市下拉式選單
function updateTownships() {
        var cityDropdown = document.getElementById("city");
    var townshipDropdown = document.getElementById("township");

        // Clear existing options
        while (townshipDropdown.options.length > 0) {
        townshipDropdown.options.remove(0);
        }

    var selectedCity = cityDropdown.value;

    if (selectedCity !== "") {
        // Enable the township dropdown
        townshipDropdown.disabled = false;

    // Add townships based on the selected city
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
    // Add more townships for Taipei as needed
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
    // Add more townships for New Taipei as needed
    break;
                // Add more cases for other cities as needed
            }
        } else {
        // Disable the township dropdown if no city is selected
        townshipDropdown.disabled = true;
    // Add a placeholder option
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


///選擇廣告種類下拉式選單
function updateAdtypes() {
    var categoryDropdown = document.getElementById("category");
    var typeDropdown = document.getElementById("type");
    var usetypeDropdown = document.getElementById("usetype");

    // Clear existing options
    clearDropdown(typeDropdown);
    clearDropdown(usetypeDropdown);

    // Enable the type dropdown
    typeDropdown.disabled = false;

    // Add options to the type dropdown based on the selected category
    switch (categoryDropdown.value) {
        case "住宅":
            addOption(typeDropdown, "公寓");
            addOption(typeDropdown, "別墅");
            addOption(typeDropdown, "透天厝");
            addOption(typeDropdown, "電梯大樓");
            break;
        case "套房":
            addOption(typeDropdown, "公寓");
            addOption(typeDropdown, "別墅");
            addOption(typeDropdown, "透天厝");
            addOption(typeDropdown, "電梯大樓");
            break;
        case "車位":
            break;
        case "其他":
            addOption(typeDropdown, "公寓");
            addOption(typeDropdown, "別墅");
            addOption(typeDropdown, "透天厝");
            addOption(typeDropdown, "電梯大樓");
            break;
        case "店面":
            addOption(typeDropdown, "公寓");
            addOption(typeDropdown, "別墅");
            addOption(typeDropdown, "透天厝");
            addOption(typeDropdown, "電梯大樓");
            addOption(typeDropdown, "店面(店鋪)");
            break;
        case "辦公":
            addOption(typeDropdown, "公寓");
            addOption(typeDropdown, "別墅");
            addOption(typeDropdown, "透天厝");
            addOption(typeDropdown, "電梯大樓");
            addOption(typeDropdown, "店面(店鋪)");
            break;
        case "住辦":
            addOption(typeDropdown, "公寓");
            addOption(typeDropdown, "別墅");
            addOption(typeDropdown, "透天厝");
            addOption(typeDropdown, "電梯大樓");
            addOption(typeDropdown, "店面(店鋪)");
            break;
        case "廠房":
            addOption(typeDropdown, "工廠");
            addOption(typeDropdown, "廠辦");
            addOption(typeDropdown, "農舍");
            addOption(typeDropdown, "倉庫");
            break;
        case "土地":
            break;
        // Add more cases for other categories as needed
    }

    // Enable the usetype dropdown
    usetypeDropdown.disabled = false;

    // Add options to the usetype dropdown based on the selected category
    switch (categoryDropdown.value) {
        case "住宅":
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
        case "套房":
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
        case "車位":
            break;
        case "其他":
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
        case "店面":
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
        case "辦公":
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
        case "住辦":
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
        case "廠房":
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
        // Add more cases for other categories as needed
    }
}

function addOption(dropdown, optionText) {
    var option = document.createElement("option");
    option.text = optionText;
    option.value = optionText;
    dropdown.add(option);
}

function clearDropdown(dropdown) {
    while (dropdown.options.length > 0) {
        dropdown.options.remove(0);
    }
}

// JavaScript function to toggle display based on land use zone selection
document.addEventListener("DOMContentLoaded", function () {
    const urbanRadio = document.querySelector('input[value="都市土地"]');
    const nonUrbanRadio = document.querySelector('input[value="非都市土地"]');
    const urbanZonesDiv = document.getElementById('urbanZones');
    const nonUrbanZonesDiv = document.getElementById('nonUrbanZones');

    urbanRadio.addEventListener('change', function () {
        if (urbanRadio.checked) {
            urbanZonesDiv.style.display = 'flex';
            nonUrbanZonesDiv.style.display = 'none';
        }
    });

    nonUrbanRadio.addEventListener('change', function () {
        if (nonUrbanRadio.checked) {
            urbanZonesDiv.style.display = 'none';
            nonUrbanZonesDiv.style.display = 'flex';
        }
    });
});

// JavaScript function to ChooseAdType

$(function () {
    // 隱藏「房屋現況」的選單
    $('#houseCondition').hide();

    // 當「出售」被點選時
    $('#sellOption').on('click', function () {
        // 顯示「房屋現況」的選單
        $('#houseCondition').show();
    });
});