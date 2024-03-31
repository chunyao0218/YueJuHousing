document.getElementById('chooseImg').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        debugger
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById('imgPreview').src = reader.result;
        }
        reader.readAsDataURL(file);
    }
});
