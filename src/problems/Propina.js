const tip = 275;
let propina = (tip > 300) ? 
(tip * 20 / 100) : 
(tip >= 50) ? 
(tip * 15 / 100) : 
(tip * 20 / 100);
let total = tip + propina;


let main = () =>{
    console.log(`La factura fue de ${tip}, la propina fue de ${propina} y el valor total ${total}`);
}
export default main;