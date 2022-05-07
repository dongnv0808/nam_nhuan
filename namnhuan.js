let year = parseInt(prompt("Nhập số năm"));

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year %400 == 0) {
//             alert(year + " là năm nhuận");
//         }
//         else {
//             alert (year + "không phải là năm nhuận");
//         } 
//     }
//         else { 
//             alert(year + " là năm nhuận");
//         }
//     }
//     else {
//         alert (year + "không phải là năm nhuận");
//     }

// let isLeapyear = false;

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             isLeapyear = true;
//         }
//     }
//     else {
//         isLeapyear = true;
//     }
// }

// if (isLeapyear) {
//     alert (year + "Là năm nhuận");
// }
// else
//     alert (year + "Không phải là năm nhuận");

let isLeapyear = false;
let isDivisibleby4 = year % 4 == 0;
if (isDivisibleby4) {
    let isDivisibleby100 = year % 100 == 0;
    if (isDivisibleby100) {
        let isDivisibleby400 = year % 400 == 0;
        if (isDivisibleby400) {
            isLeapyear = true;
        }
    }
    else 
    isLeapyear = true;
}

if (isLeapyear) {
    alert (year + "Là năm nhuận");
}
else alert (year + "Không phải là năm nhuận");