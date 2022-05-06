function getDeviceData(callback) {
    const xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            nvsData = JSON.parse(this.responseText);
            console.log(nvsData.bitalinoInfo);
            callback();
        }
    };
    xmlHTTP.open("GET", "/nvs", true);
    xmlHTTP.send();
    return xmlHTTP.onreadystatechange();
}
