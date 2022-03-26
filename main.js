/**
 * Bài tập 1
 * Input: 
 *  - Gán X = 1 (số nguyên dương)
 *  - Gán y = 0 (điều kiện)
 * Process:
 *  - Gán y cho tổng x + y để thỏa đk
 *  - cho x tăng 1 đơn đến khi x + y < 1000
 * Output
 *  - Xuất ra kết quả x;
 */
document.getElementById('btnBai1').onclick = function () {
    var x = 1;
    var y = 0;
    while (y < 1000) {
        y = x + y;
        x++;
    }
    document.getElementById('ketQuaBai1').innerHTML = "Số nguyên dương nhỏ nhất là: " + x;
}
/**
 * Bài tập 2:
 * Input
 *  - Nhập vào 2 số X, N
 * Process
 *  - Tính tổng S(n) = X + X^2 + X^3 + X^n;
 * Output
 *  - Xuất ra kết quả tổng S(n);
 */
document.getElementById('btnBai2').onclick = function () {
    var num2x = document.getElementById('txtNum2x').value * 1;
    var num2n = document.getElementById('txtNum2n').value * 1;
    var tich2 = 1;
    var tong2 = 0
    for (i = 1; i <= num2n; i++){
        tich2 = num2x * tich2;
        tong2 = tong2 + tich2;
    }
    document.getElementById('ketQuaBai2').innerHTML = "Tổng là: " + tong2;
}

/**
 * Bài tập 3
 * Input
 *  - Nhập số tính giai thừa
 * Process
 *  - Tính giai thừa theo công thức 1*2*3*...*n
 * Output
 *  - Xuất ra kết quả tính được
 */

document.getElementById('btn3').onclick = function () {
    var num3 = document.getElementById('txtNum3').value * 1;
    var giaiThua = 1;
        for (i = 1; i <= num3; i++){
            giaiThua = giaiThua * i;
        }
    document.getElementById('ketQua3').innerHTML = "Giai thừa của " + num3 + " là: " + giaiThua;
}
/**
 * Bài Tập 4
 * Process
 *  - tìm div chẳn => đỏ; div lẻ => xanh;
 * Output
 *  - xuấ ra 10 thẻ div
 */
document.getElementById('btn4').onclick = function (){
    var divCreate = '';
    for (i = 1; i <= 10; i++){
        if (i % 2 == 0){
            divCreate = divCreate + '<div style="background-color: red; height: 50px; width: 100%;">Div Chẳn</div>';
        } else {
            divCreate = divCreate + '<div style="background-color: blue; height: 50px; width: 100%;">Div Lẻ</div>'
        }
    }
    document.getElementById('div-bai4').innerHTML = divCreate;
}