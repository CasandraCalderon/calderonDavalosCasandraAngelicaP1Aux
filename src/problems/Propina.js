const calcTip = (tip) => {
    let propina = (tip > 300) ? 
    (tip * 20 / 100) : 
    (tip >= 50) ? 
    (tip * 15 / 100) : 
    (tip * 20 / 100);
    let total = tip + propina;
    return (`La factura fue de ${tip}, la propina fue de ${propina} y el valor total ${total}`);
};

let main = () =>{
    console.log(calcTip(120));
    console.log(calcTip(200));
    console.log(calcTip(275));
}
export default main;