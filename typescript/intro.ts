function selamVer(isim:string){
    return "merhaba" + isim
}

let mesaj = selamVer('arif')

console.log(mesaj)

let sayi : number
sayi = 10
sayi = 10.4

let sehir : string
sehir = "samsun"

let doruMu : boolean
doruMu=true
doruMu=false

let sayilar:number[] = [1,2,3]
let sayilar2 : Array<number> =  [1,2,3]
let dizi:[number,string] = [1,"abuzer"]

enum Renk {Kirmizi=1,Sari,Siyah}
let renk : Renk = Renk.Kirmizi

let deger : any = "samsun"
deger=2
deger={}

let deger2 : void = undefined
function selamVer2():void{
    console.log("merhaba")
}