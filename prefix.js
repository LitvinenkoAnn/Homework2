

function biggestCommonPrefix(arr) {
   
    let commonPrefix = arr[0];

    for (let str of arr) {
        let i = 0;

        while (i < commonPrefix.length && i < str.length && commonPrefix[i] === str[i]) {
            i++;
        }

        commonPrefix = commonPrefix.slice(0, i);

        if (commonPrefix === "") {
            break;
        }
    }

    return commonPrefix;
}

let arr = ["flower", "flow", "flight"];
let commonPrefix = biggestCommonPrefix(arr);
console.log("Biggest common prefix is: " + commonPrefix);