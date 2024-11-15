const dizi =[1,2,3,4]

const kareDizisi =[]

// dizi.forEach(sayi =>{
//     console.log(sayi);
// })

dizi.forEach(sayi =>{
    kareDizisi.push(sayi*sayi);
})


console.log(kareDizisi);

const mapDizi = dizi.map(sayi=> sayi * 3)

console.log(mapDizi);


const filtreliDizi = dizi.filter(sayi => sayi>2)

console.log(filtreliDizi);


const toplam = dizi.reduce((acc,sayi)=>{
    return acc + sayi;
},10)

console.log(toplam);