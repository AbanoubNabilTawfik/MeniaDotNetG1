export class Tiers
{
 constructor(tiersNumber:any)
 {
     
 }
}
class Engine
{
 constructor(engineType:any)
 {
     
 }

}

class car
{
    engine:any;
    tiers:any
    constructor(engine:any,tiers:any)
    {
    //  this.engine= new Engine();
    //  this.tiers= new Tiers();
    this.engine=engine;
    this.tiers=tiers;
    }
}