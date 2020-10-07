
export class Persona {
    nombre : string;
    identificacion : string;
    capital : number;
    tasaInteres : number;
    tiempo : number;
    capitalFinal : number;

    calcularCapitalFinal ()
    {
        var tasa = this.tasaInteres /100;
        this.capitalFinal = this.capital * Math.pow((1 + tasa),this.tiempo);
    }
}
