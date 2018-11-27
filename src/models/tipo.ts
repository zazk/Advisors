export class Tipo{
    public codigoTipo : string;
    public descripcion : string

    constructor(){
        
    }
}


export class CmbRegister {
    public tipoDocumento: Tipo[] = [];
    public tipoPregunta: Tipo[] = []; 

    constructor(){
        
    }
}