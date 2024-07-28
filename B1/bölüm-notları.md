const tek kullanımlık bir keyword değiştirilemez.

= () => {}

export import için,
başka pageden const bilgisi alırken içeriye import {abc} şeklinde importlanır.
const almadığı sürece default olarakta exportlanabilir. 
sadece bir tane export default olabilir.


class Car() {
    constructor(renk){
        this.renk = renk;
    }
    hızlandır(){
        this.hız += 10;
    }
}
let Car = new Car("siyah");
şeklinde loglandığında arabanın rengi belirlenmiş, değiştirilmiş olur 
hızlandır gibi metodlar örnekteki gibi yazılır.



inheritance
class motorCar extends car(){
    constructor(renk, hız){
        super(renk)
        this.motor = motor;
    }
}
burada extends sayesinde car classından super metodu sayesinde rengi aldık. 

spread rest op.
dizi için [...number] object için ...user şeklinde tanımlanabilir

destructuring metoduna daha detaylı bak 

primitive tipler

let primiteNumb = 20;
let primiteNumb2 = primitiveNumb;

let primitiveNumb2 = 30;

console.log(primitiveNumb);
console.log(primitiveNumb2);
//ilk logda 20 son logda değiştirdiğimiz için 30 yazdırır

refference types

let object = {value : 20};
let object2 = object

object2.value = 30;

console log ile object ve object2 yi yazdırdığımızda iki değer içinde 30 yazdırır spread metodu ile bu sorun çözülebilir
let object2 = {...object} //spread

---------------

useEffect ve useRef ile alakalı çalışma yap