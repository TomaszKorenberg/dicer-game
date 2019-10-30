let diceNumber = 0;

DicerApi = function () {
    this.url = "https://api.random.org/json-rpc/1/invoke";
    this.jsonrpc = "2.0";
    this.method = "generateIntegers";
    this.id = "tomaszKorenberg";
};


DicerApi.prototype.post = function (){
    const url = this.url;
    const jsonrpc = this.jsonrpc;
    const method = this.method;
    const id = this.id;
    const params = {
        "apiKey" : "96b6bb22-88d6-485b-9491-3299309f9f80",  //api key to random.org
        "n" : 1,    //number of numbers to draw
        "min" : 1,  //from this number
        "max" : 6   //to this number
    }

    return fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "jsonrpc" : jsonrpc,
            "method":method,
            "params":params,
            "id":id,}),
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        }}).then(response => response.json()).then(response => diceNumber = response.result.random.data[0]);
};


const dicerApi = new DicerApi();


//----------czekamy aż serwer zwróci odpowiedź i dopiero ją logujemy do konsoli
diceNumber = dicerApi.post();
setTimeout(function(){
    console.log(diceNumber);
}, 600);
//----------------------------------------
