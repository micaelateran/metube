export class Usuario{
    nombre_usuario: string;
    email: string;
    contraseña: string;
    genero: string;
    fecha_nacimiento: string;

    constructor(nombre_usuario: string, email: string, contraseña: string, genero: string, fecha_nacimiento: string){
        this.nombre_usuario = nombre_usuario;
        this.email = email;
        this.contraseña = contraseña;
        this.genero = genero;
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public get getNombre(): string{
        return this.nombre_usuario;
    }

    public set setNombre(value:string){
        this.nombre_usuario = value;
    }

    public get getEmail(): string{
        return this.email;
    }

    public set setEmail(value:string){
        this.email = value;
    }

    public get getContraseña(): string{
        return this.contraseña;
    }

    public set setContraseña(value:string){
        this.contraseña = value;
    }

    public get getGenero(): string{
        return this.genero;
    }

    public set setGenero(value:string){
        this.genero = value;
    }

    public get getFecha(): string{
        return this.fecha_nacimiento;
    }

    public set setFecha(value:string){
        this.fecha_nacimiento = value;
    }

    public toString():string{
        return "usuario: " + this.nombre_usuario + " correo electronico: " + this.email + " contraseña: " + this.contraseña + " genero: " + this.genero + " fecha de nacimiento: " + this.fecha_nacimiento;
    }
}