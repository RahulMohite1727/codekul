
let nm: string = 'android';

function calc(num: number): void { 

}
calc(10)

let fn: (num: number) => void = function (num: number){

}
fn(10)

let obj: {} = {
    10: 'android',
    true: {
        45: 96
    }
}

let objV2: { [key: string]: string } = {
    'android': 'android',
    45: '9798'
}

let myVar: string | number |boolean = 'android'

let myFn = function () { console.log ('Hi ' + myVar) }
let arrFn = () => console.log(` hi ${myVar} `)