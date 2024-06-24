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
