




let bigImg = document.querySelector("div.full img");
let images = document.querySelectorAll("div.thumb img");
// console.log(img);
//
//
for (let img of images) {
    img.onclick = function () {
        let src = this.getAttribute("src");
        bigImg.setAttribute("src", src);
        // console.log(img.getAttribute("src"));
    }

//
//     }
// }




// Write Your Script Code
// For Javascript Class (js_22)


//
// let arr = ["sana", true, 3.14];
// console.log(arr.length);

// for (let i=0 ; i<arr.length; i++) {
    // console.log(arr[i]);
}
//
// FOR-OF
// for (let harchi of arr) {
//     console.log(harchi);
// }
//
//
//
//
// let arr= ["apple", "microsoft", "IBM", "sumsung"];
//

// let a = arr.push("HP");
// console.log(a);
// console.log(arr);

// let pop = arr.pop();
// console.log(arr);


// let shift = arr.shift();
// console.log(arr);


// let unshift = arr.unshift("amazon");
// console.log(arr);


// console.log(arr.splice(1, 0, "harchi"));
// console.log(arr);


// console.log(arr.slice(2,3));
// console.log(typeof arr);
//
//

