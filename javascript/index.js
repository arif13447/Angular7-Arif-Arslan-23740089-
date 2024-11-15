var kullanicilar =  [
    {email:"arifarslan@gmail.com",sifre:"1234"},
    {email:"abuzerarslan@gmail.com",sifre:"5678"}
]

var tivitler = [
    {email:"arifarslan@gmail.com",tivit:"bügün hava çok güzel"},
    {email:"abuzerarslan@gmail.com",tivit:"sen adam değilsin"},
    {email:"abuzerarslan@gmail.com",tivit:"köpüşsün köpüş"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)||
    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
        console.log(tivitler)
    }else{
        console.log("Kullanici Adi veya Şifre Hatali")
    }
}

giris(email,sifre)