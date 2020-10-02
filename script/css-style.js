
window.onload = function() {
    let realPercentage = 81.5;
    $('.main-div').find('.progress').css('width', String(realPercentage) + "%");
    let usedStorage = Math.round(realPercentage/100 * 1000);
    let storageLeft = 1000 - usedStorage;
    document.querySelector("body > div > div.right-div > div.container > p > b").textContent = String(usedStorage) + " GB ";
    document.querySelector("#number-left").textContent = storageLeft;
}
