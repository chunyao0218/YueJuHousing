document.getElementById('chooseImg').addEventListener('change', function () {
    const files = this.files;
    const imgPreview = document.getElementById('imgPreview');

    // 清空預覽區域
    imgPreview.innerHTML = '';

    // 處理每張圖片
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file) {
            const reader = new FileReader();
            reader.onload = function () {
                // 創建片元素並設置預覽圖片
                const imgElement = document.createElement('img');
                imgElement.src = reader.result;
                imgElement.style.maxWidth = '200px'; // 設置預覽圖片的最大宽度
                imgElement.style.maxHeight = '200px'; // 設置預覽圖片的最大高度
                imgElement.style.margin = '5px'; // 設置預覽圖片之間的間距
                imgPreview.appendChild(imgElement);
            }
            reader.readAsDataURL(file);
        }
    }
});


