abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{
        console.log("kaydedildi")
    }
    abstract hesapla():void;
}

class TuketiciKredi extends KrediBase {
    constructor() {
        super();     
    }
    hesapla(): void {
        console.log("tüketici kredisine göre hesap yapildi")
    }
}

let tüketicikredisi = new TuketiciKredi()
tüketicikredisi.hesapla();
tüketicikredisi.kaydet();

let kredi : KrediBase
kredi = new TuketiciKredi()