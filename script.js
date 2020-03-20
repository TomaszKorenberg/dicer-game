let diceNumber = 0;

class DicerApi {

    constructor() {
        this.imageContainer = document.querySelector("#image-container");
    }

    post() {
        this.url = "https://api.random.org/json-rpc/1/invoke";
        this.jsonrpc = "2.0";
        this.method = "generateIntegers";
        this.id = "tomaszKorenberg";
        this.params = {
            "apiKey": "96b6bb22-88d6-485b-9491-3299309f9f80",  //api key to random.org
            "n": 1,    //number of draws
            "min": 1,  //from this number
            "max": 6   //to this number
        };

        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify({
                "jsonrpc": this.jsonrpc,
                "method": this.method,
                "params": this.params,
                "id": this.id,
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(response => diceNumber = response.result.random.data[0]);
    };

    diceImage(number) {
        return "img/dice" + number + ".png"
    };

    runDraw = function () {

        diceNumber = dicerApi.post();
        this.imageContainer.innerHTML = "Losowanie...";

        setTimeout(function () {
            this.imageContainer.innerHTML = "<img src=\"" + dicerApi.diceImage(diceNumber) + "\">";
        }.bind(this), 1000);

    };

}


const dicerApi = new DicerApi();


const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("OK");
    }, 1000)
});

promise.then(function (resp) {
    console.log(resp)
});


const button = document.querySelector("#draw-button");

button.addEventListener("click", function () {
    dicerApi.runDraw();


});
