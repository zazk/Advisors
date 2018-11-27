import { Tipo } from '../models/tipo'

export interface Usuario {
    id: number;
    nombre: string;
    estado: boolean;
    mensaje: string;
    icono: string;
    stringConexion: string;

    numDocumento: string;
    fec_nacimiento: Date;
    sexo: string;
    direccion: string;
    email: string;
    celular: string;
}


export class Entidad {
    status: number;
    codigoEntidad: number;
    tipoEntidad: string;
    tipoDocumento: string;
    numDocumento: string;
    nombres: string;
    razonSocial: string;
    apePaterno: string;
    apeMaterno: string;
    fecNacimiento: Date;
    sexo: string;
    ubigeo: string;
    tipoDireccion: string;
    detalleDireccion: string;
    telefonoMovil: string;
    email: string;
    fechaActualizacion: Date;

    constructor() { }
}

export class LoadDataActualizar {
    tipoDocumento: Tipo[] = [];
    tipoDireccion: Tipo[] = [];
    tipoDepartamento: Tipo[] = [];
    entidad: Entidad;

    constructor() {
        this.entidad = new Entidad();
    }
}
    

