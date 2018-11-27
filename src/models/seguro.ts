export class Compania {
    codigoCompania: number;
    compania: string;
    url: string;
    polizas: Poliza[] = [];
    displayIt: boolean;

    constructor(){
        this.displayIt = true;
    }
}


export class Riesgo {
    codigoRiesgo: number;
    nomRiesgo: string;
    grupoSeguro: string;
    polizas: Poliza[] = [];
}

export class Poliza {
    codigoRiesgo: number;
    nomRiesgo: string;
    grupoSeguro: string;
    codigoPoliza: number;
    codigoContratante: number;
    numPoliza: string;
    sucursal: string;
    moneda: string;
    fecInicio: Date;
    fecFin: Date;
    estado: string;
    nroFinanciamiento: string;
    actualizado: Date
    cuotas: Cuota[] = []
    displayPAyment: boolean;
    displayCuotas: boolean;
    clienteDirecto: boolean;

    constructor() {
        this.displayPAyment = false
    }
}

export class Cuota {
    codigoCuota: number;
    nroCuota: string;
    fecha: Date;
    estado: string;
}