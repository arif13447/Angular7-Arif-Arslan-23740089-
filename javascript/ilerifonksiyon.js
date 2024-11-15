var selamFonksiyonu = function selam() {
    console.log("Merhaba");
}

selamFonksiyonu();

var selamFonksiyonu2 = () => console.log("Merhaba2");


selamFonksiyonu2();


var selamFonksiyonu3 = (mesaj) => {
    console.log(mesaj);
}


selamFonksiyonu3("merhaba dünya");

var topla = (sayi1, sayi2) => {
    return sayi1 + sayi2;
}
let toplam = topla(3, 4);

console.log = (toplam);