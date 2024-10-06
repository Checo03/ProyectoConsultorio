export interface Roles{
    admin?: boolean;
    user?: boolean;
}

export interface Usuario{
    uid: string;
    email: string;
    puesto: string;
    sucursal: string;
    rol: Roles;
}