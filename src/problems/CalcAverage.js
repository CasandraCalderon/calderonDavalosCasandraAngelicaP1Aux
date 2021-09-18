const CalcAverage = (Ricks, Mortys) => {
    const promedio1 = Ricks.reduce(function(a, b){ return a + b;}, 0) / Ricks.length;
    const promedio2 = Mortys.reduce(function(a, b){ return a + b;}, 0) / Mortys.length;
    return [promedio1, promedio2];
};
let main = () =>{
    console.log(CalcAverage([96, 108, 89], [88, 91, 110]));
    console.log(CalcAverage([97, 112, 101], [109, 95, 123]));
    console.log(CalcAverage([97, 112, 101], [109, 95, 106]));
}
export default main;