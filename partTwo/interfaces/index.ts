// alias type

type PoetA = {
    born: number;
    name: string;
};

// Inteffaces
interface PoetC {
    born: number;
    name: string;
}

let valueLater: PoetC;
// Ok
valueLater = {
    born: 1935,
    name: 'Sara Teasdale',
};
valueLater = "Emily Dickinson";
// Error: Type 'string' is not assignable to 'PoetC'.
valueLater = {
    born: true,
    // Error: Type 'boolean' is not assignable to type 'number'.
    name: 'Sappho'
};