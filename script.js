DicerApi = function () {
    this.url = "https://api.random.org/json-rpc/1/invoke";
};


DicerApi.prototype.post = function (){
    const url = this.url;
    const jsonrpc = "2.0";
    const method = "generateIntegers";
    const id = "tomaszKorenberg";
    const params = {
        "apiKey" : "96b6bb22-88d6-485b-9491-3299309f9f80",
        "n" : 1,
        "min" : 1,
        "max" : 6
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
        }}).then(response => response.json()).then( response => console.log(response.result.random.data[0])
    );
};


const dicerApi = new DicerApi();

;

dicerApi.post();
