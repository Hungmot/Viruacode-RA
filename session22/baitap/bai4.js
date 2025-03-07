let str = prompt("Mời bạn nhập : ");
let arr = [];
if (str > '0' &&  str < '99999999999'){
    arr = str.split("");
    arr.sort();
    console.log(arr[Element],"là số lớn nhất trong mảng");

}else{
    console.log("dãy nhập không hợp lệ");
}