class Sample {

  name:string;
  age:number;

  constructor() {
    this.name = "takashi";
    this.age = 20;
  }

  public echo():string {
    return "Hello " + this.name + " !!";
  }
}

