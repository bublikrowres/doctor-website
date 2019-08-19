function change() {
    var el = document.querySelector('#inputGroupSelect').value;
    var where = document.querySelector('#gogoLink').href = '#' + el;
}

function modalImgDisplay(elem) {
    var img = document.querySelector('#modalImgDisplayLocation');
    img.src = elem.src;
    $('.modalGallery').modal('show');
}

function closeWindow() {
    $('.modalGallery').modal('hide');
}