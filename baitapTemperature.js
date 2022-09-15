class Temperature{
     doC;
     constructor(doC) {
         this.doC;
     }
     getDoC(C){
         this.doC =doC;
     }
     setDoC(){
         return this.doC
     }
     getF(){
         return this.doC*1,8+32;
     }
     getKenvin(){
         return this.doC+273;
     }
}
let c = new Temperature(25)
let f= c.getF();
let k=c.getKenvin()