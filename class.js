class Sample
{
    constructor(){
        this.id=101;
        this.name="Rajkumar"
    }
    displayInfo() {
        console.log(this.id+" "+this.name);
    }      
}
let s=new Sample();
s.displayInfo();