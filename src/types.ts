const x: number = 30;

const y: number = 50;

const res = x + y;

type ning = string & number; // esta operacion es solo para los types, me refiero al &
//no puedo redeclarar types, interfaces si 
//const sample: ning = "asd"; esto no va a pasar

interface Person {
    age: number;
    name:string;
    birthDate: Date;
    isMarried: boolean;
}

type PersonExtended = Person & {
    lastName: string;
}


type PersonShortened = Omit<PersonExtended, "age">


const personSample: PersonShortened = {
    //age:30, esto lo saco para que no me de error
    name: "Juancito",
    birthDate: new Date ('1995-10-30'),
    isMarried : false,
    lastName : "Doe"
}

type PersonPartial = Partial<Person>;

const personSample1: PersonPartial = {
    
    name: "Juancito",
    birthDate: new Date ('1995-10-30'),
    
}

type PersonPick = Pick<Person, "birthDate">;

const personSample2: PersonPick = {
    birthDate: new Date ('1995-10-30'),
}


interface PersonInterface {
    age: number;
    name:string;
    birthDate: Date;
    isMarried: boolean;
}

interface PersonInterfacExtended extends PersonInterface {
    lastName: string;
}

const personInterface: PersonInterfacExtended = {
    age: 29,
    name: "Jhon",
    birthDate: new Date ('1995-10-30'),
    isMarried: false,
    lastName: "Doe",
}

enum UserRole {
    ADMIN = 'Admin',
    CLIENT = 'Client',
    SUPER_ADMIN= 'SuperAdmin'
}

interface Client {
    userName: string;
    password: string;
    //role: 'Admin' | 'Client' | 'SuperAdmin' esto es lo mismo que la linea de abajo
    role: UserRole;
}

const clientSample: Client = {
    userName: 'client',
    password: '1234',
    role: UserRole.ADMIN
}

type MyFunction = (arg1:string,arg2:number) => string;
//el 1er argumento no puede ser opcional, los demás creo que si

interface args {
    arg1:string;
    arg2:number;
}

const functionSample: MyFunction = (arg1:string,arg2:number) => {
    return arg1 + arg2;
}

type MyFunction1 = (arg:args) => string;
const functionSample1: MyFunction1 = (args:args) => {
    return args.arg1 + args.arg2;
}