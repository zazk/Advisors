export class DetalleSeguro {
    compania: string;
    url: string;
    nroPoliza: string;
    riesgo: string;
    vehicular: VehicularSOAT[] = [];
    flagVehicular: boolean;
    soat: VehicularSOAT[] = [];
    flagSOAT: boolean;
    inmueble: Inmueble;
    flagInmueble: boolean;
    maquinaria: Maquinaria;
    flagMaquinaria: boolean;
    transporte: Transporte;
    flagTransporte: boolean;
    otros: Otros;
    flagOtros: boolean;
    accidenteEscolar: Otros;
    flagAccidenteEscolar: boolean;
    asistenciaMedica: AsistenciaMedica;
    flagAsistenciaMedica: boolean;
    sctrPensiones: SctrPensiones;
    flagSctrPenciones: boolean;
    seguroViaje: SeguroViaje;
    flagSeguroViaje: boolean;

    constructor() {
        this.flagInmueble = false;
        this.flagVehicular = false;
        this.flagSOAT = false;
        this.flagMaquinaria = false;
        this.flagTransporte = false;
        this.flagOtros = false;
        this.flagAccidenteEscolar = false;
        this.flagAsistenciaMedica = false;
        this.flagSctrPenciones = false;
        this.flagSeguroViaje = false;
    }
}


export class VehicularSOAT {

    tipoVehiculo: string;
    usoVehiculo: string;
    claseVehiculo: string;
    marcaVehiculo: string;
    motor: string;
    anio: string;
    chasis: string;
    placaTramite: string;
    constructor() {
    }
}

export class Inmueble {
    direccion: string;
    estructura: string;
    usoInmueble: string;
    anio: string;
    numPisos: number;
    numSotanos: number;

    constructor() {

    }

}

export class Maquinaria {
    descripcion: string;
    tipoMaquinaria: string;
    marca: string;
    modelo: string;
    serie: string;
    ceroKm: boolean;
    direccion: string;

    constructor() {

    }
}
export class Transporte {
    numAplicacion: number;
    descripcionCompleta: string;
    fechaEmbarque: Date;
    fechaLlegada: Date;
    medioTransporte: string;
    tipoMercaderia: string;
    embalaje: string;
    procedencia: string;
    destino: string;
    estado: string;
}

export class Otros {
    descripcion: string;

    constructor() {

    }
}

export class AccidenteEscolar {
    documento: string;
    nombre: string;
    condicion: string;
    sede: string;
    fechaIngreso: Date;
    fechaInicio: Date;
    fechaFin: Date;
    estado: string;

    constructor() {

    }
}


export class AsistenciaMedica {
    documento: string;
    nombre: string;
    direccion: string;
    dependientes: Dependiente[];

    constructor() {
        this.dependientes = []
    }
}

export class Dependiente {
    nombre: string;
    documento: string;
    parentesco: string;
    fechaNacimiento: Date;
    fechaIngreso: Date;
    estado: string;
}

export class SctrPensiones {
    documento: string;
    nombre: string;
    condicion: string;
    sede: string;
    fechaIngreso: Date;
    estado: string;
}

export class SeguroViaje {
    documento: string;
    nombre: string;
    condicion: string;
    sede: string;
    fechaInicio: Date;
    fechaFin: Date;
    fechaIngreso: Date;
    estado: string;
}