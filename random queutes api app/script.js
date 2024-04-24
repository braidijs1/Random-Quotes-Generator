const myApi = "IU0HpeLkeXPAxsVfXmqIcQ==H5lTXzfRBfEBFQGP";
const myUrl ="";




var category =  document.getElementById("cat").textContent;
function getQueates() {$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': `${myApi}`},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);

        console.log(document.getElementById("cat").textContent);
console.log(JSON.stringify(result));

    document.getElementById("myQuote").textContent = JSON.stringify(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
}
