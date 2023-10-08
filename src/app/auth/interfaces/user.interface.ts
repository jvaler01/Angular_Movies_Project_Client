export interface User {
    _id: string,
    username: string,
    surname: string,
    email: string,
    password: string,
    bornDate: Date
}

export interface LoginUser {
    email: string,
    password: string
}