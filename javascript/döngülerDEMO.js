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

function kullaniciVarmi(email,sifre){
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email==email && kullaniciler[i].sifre==sifre){
            return true;
        }
    }
    return false;
}

function giris(){
    if(kullaniciVarmi(email,sifre)){
        console.log(tivitler)
    }else{
        console.log("Kullanici Adi veya Şifre Hatali")
    }
}

giris(email,sifre)