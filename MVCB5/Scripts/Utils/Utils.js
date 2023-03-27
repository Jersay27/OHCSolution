document.addEventListener("DOMContentLoaded", function (event) {
    console.log('Holas')
});
function ajaxPost(url, data, successCallback, errorCallback) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (successCallback) {
                    successCallback(xhr.responseText);
                }
            } else {
                if (errorCallback) {
                    errorCallback(xhr.status, xhr.statusText);
                }
            }
        }
    };
    xhr.send(JSON.stringify(data));
}
