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