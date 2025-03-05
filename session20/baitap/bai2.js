let a = +prompt("Mời bạn nhập vào 1 số nguyên");
let b ="";
if((Number . isInteger(a)) && a>0){
    for(let i = 1; i<=a ; i++){
        if(i%5==0){
            b = b+i+""+"";
        }
    }
    document.write("các số chia hết cho 5 từ 1 - 5 là :")
}