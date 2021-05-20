/*1. write a function named "convertFahrToCelcius" that takes a single
parameter and converts it to celcius */
 
function convertFahrToCelcius(val) {
     
    if(typeof val === "string" || typeof val === "number") {
         var num = parseInt(val);
         //1F = 1.8C + 32 (e.g 0deg C = 32deg F)
         var result = ((num - 32) / 1.8);
         var resultDec = result.toFixed(4);
         return `'${resultDec}'`
    };
    if(Array.isArray(val)) {return `[${val}] is not a valid number but a/an array.`};
    if(typeof val === "boolean" )  {return `[${val}] is not a valid number but a/an boolean.`};
    if(typeof val === "undefined" )  {return `[${val}] is not a valid number but a/an undefined.`};
    if(typeof val === "object") {
        var value = JSON.stringify(val);
        return `${value} is not a valid number but a/an object.`}
    };

    console.log(convertFahrToCelcius(0));
    console.log(convertFahrToCelcius("0"));
    console.log(convertFahrToCelcius(true));
    console.log(convertFahrToCelcius(undefined));
    console.log(convertFahrToCelcius([1,2,3,4]));
    console.log(convertFahrToCelcius({obj:1, name: "Amanda"}));


/*
2.  write a function named "checkYuGiOh" that takes a number n, as an argument, create an array of numbers from 1 to n and replaces
factors of 2, 3, and 5, with "yu","gi" and "oh", log the resulting array tothe console then return the
resulting array   */

function checkYuGiOh(n) {
    if( typeof n === "number") {
    var result = able(n);
    return result;
    }

    if( typeof n === "string") {
        var num = parseInt(n);
        if(isNaN(num)) {
            return `invalid parameter: "${n}"`
        } 
        else if (!isNaN(num)) {
            var result = able(num);
            return result;
        }
    }

    if(typeof n === "boolean" || typeof n === "object" || typeof n === "undefined" ||
    Array.isArray(n) || typeof n === "function") {
        var content = JSON.stringify(n);
        return `invalid parameter: "${content}"`
    
        }
    };

    //end of the function checkyugioh
    //beggining of the function able

    function able(num){
        var arr = [];
        for(var i=1; i<= num; i++) {
            if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                arr.push("yu-gi-oh");
            } 
            else if(i % 2 === 0 && i & 3 === 0) {
                arr.push("yu-gi");
            }
            else if(i % 2 === 0 && i % 5 === 0) {
                arr.push("yu-oh");
            }
            else if(i % 3 === 0 && i % 5 === 0) {
                arr.push("gi-oh");
            }
            else if(i % 2 === 0) {
                arr.push("yu");
            }
            else if(i % 3 === 0) {
                arr.push("gi"); 
            }
            else if(i % 5 === 0) {
                arr.push("oh"); 
            }
            else {arr.push(i)}
    }
    return arr;
    }

    console.log(checkYuGiOh(29));
    console.log(checkYuGiOh("29"));
    console.log(checkYuGiOh("Judith"));
    console.log(checkYuGiOh(true));
    console.log(checkYuGiOh(undefined));
    console.log(checkYuGiOh([1,2,3,4]));
    console.log(checkYuGiOh({name: "Judith", age: 26}));

    


   
    

