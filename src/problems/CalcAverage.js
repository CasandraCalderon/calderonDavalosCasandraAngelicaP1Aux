const CalcAverage = (Ricks, Mortys) => {
    const avgRicks = Ricks.reduce(function(a, b){ return a + b;}, 0) / Ricks.length;
    const avgMortys = Mortys.reduce(function(a, b){ return a + b;}, 0) / Mortys.length;
    
    const checkWinner = (avgRicks , avgMortys) => {
        const resultado = avgRicks >= 100 || avgMortys >= 100? 
        avgRicks > avgMortys ? 
        `Los Ricks ganan (${avgRicks} contra ${avgMortys})` : 
        avgRicks === avgMortys ?
        avgRicks >= 100 && avgMortys >= 100? 
        `EMPATE : Ricks (${avgRicks}) - Mortys (${avgMortys})` : 
        `NINGUN EQUIPO GANA` : 
        `Los Mortys ganan (${avgMortys} contra ${avgRicks})` :
        `Puntuaciones menores a 100: Ricks (${avgRicks}) Mortys (${avgMortys})`
        return resultado;
    };
    return checkWinner(avgRicks,avgMortys);
};
let main = () =>{
    console.log(CalcAverage([96, 108, 89], [88, 91, 110]));
    console.log(CalcAverage([97, 112, 101], [109, 95, 123]));
    console.log(CalcAverage([97, 112, 101], [109, 95, 106]));
}
export default main;