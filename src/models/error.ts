export interface Error {
    error: String,
    error_description: String
}



export class BodyError {
    error: string;
    error_description: string;
}


export interface ModelError {
    message: string,
    modelState: string
}

export class ModelState {

}