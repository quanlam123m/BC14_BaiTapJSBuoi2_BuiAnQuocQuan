function salary() {
    var day = document.getElementById("ngayLam").value
    var divContent = document.getElementById("Salary")
    var salary = day * 100000
    var pTitle = document.createElement("p")
    pTitle.innerHTML = "Tổng số lương: " + salary + "VND"
    divContent.appendChild(pTitle)
}

function soThuc() {
    var soThuc1 = document.getElementById("so1").value;
    var soThuc2 = document.getElementById("so2").value;
    var soThuc3 = document.getElementById("so3").value;
    var soThuc4 = document.getElementById("so4").value;
    var soThuc5 = document.getElementById("so5").value;
    var so1 = Number(parseFloat(soThuc1))
    var so2 = Number(parseFloat(soThuc2))
    var so3 = Number(parseFloat(soThuc3))
    var so4 = Number(parseFloat(soThuc4))
    var so5 = Number(parseFloat(soThuc5))
    var trungBinh = Math.floor((so1 + so2 + so3 + so4 + so5) / 5)
    var divAve = document.getElementById("soThuc")
    var pTitle = document.createElement("p")
    pTitle.innerHTML = "Giá trị trung bình: " + trungBinh
    divAve.appendChild(pTitle)
}

function doiTien() {
    var usd = document.getElementById("soTien").value
    var doi = usd * 23500
    var divUSD = document.getElementById("doiTien")
    var pTitle = document.createElement("p")
    pTitle.innerHTML = "Giá trị VND: " + doi + "VND"
    divUSD.appendChild(pTitle)
}

function congThuc() {
    var a = document.getElementById("chieuDai").value
    var b = document.getElementById("chieuRong").value
    var A = Number(parseFloat(a))
    var B = Number(parseFloat(b))
    var P = (A + B) * 2
    var S = A * B
    var divContent = document.getElementById("content")
    var pTitle = document.createElement("p")
    pTitle.innerHTML = "Chu vi: " + P + "Diện tích:" + S
    divContent.appendChild(pTitle)
}

function tongKySo() {
    var x = document.getElementById("number").value
    var y = x % 10
    var z = Math.floor(x / 10)
    var Y = Number(parseInt(y))
    var Z = Number(parseInt(z))
    var sum = Y + Z
    var number = document.getElementById("Number")
    var pTitle = document.createElement("p")
    pTitle.innerHTML = "Tổng 2 ký số của số vừa nhập: " + sum
    number.appendChild(pTitle)
}
