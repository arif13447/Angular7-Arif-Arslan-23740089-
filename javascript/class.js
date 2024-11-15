class Personel{

    constructor(ad,soyad) {
        this.ad = ad;
        this.soyad = soyad;

    }

    kaydet(){
        console.log("personel kaydedildi.");
    }
}

const personel = new Personel("Arif","Arslan")

personel.kaydet();
personel.ad="Arif"
console.log(personel.ad);