class Ev{
    _odaSayisi:number;
    _pencereSayisi:number;
    _kat:number;
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    yemekYe(){
        console.log(this._kat + "katli evde" + "yemek yendi")
    }
}

let ev = new Ev(2,3,4)
ev.yemekYe();


class Kisi{
    kaydet(){
        console.log("kişi kaydedildi");
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("satis yapildi");
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("maas odendi");
    }
}

let musteri = new Musteri();
musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasOde();

