const fs = require("fs");

const myPromise = new Promise((resolve, reject) => {
    fs.readFile("./list/taco.json", "utf8", async function(err, data){
        if(err){
            console.log(err)
            reject(err)
        }else{
            resolve(await JSON.parse(data));
        }
    });
});

export default myPromise;