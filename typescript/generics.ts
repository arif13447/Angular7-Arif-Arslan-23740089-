function deger(x:number):number{
    return x;
}

let sayi = deger(10)
console.log(sayi)

function deger2<T>(x:T):T{
    return x;
}

let sayi2 = deger2<number>(2)
console.log(sayi2)

class GenericClass<T>{
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif = new GenericClass<number>()
sinif.fonksiyon(5)