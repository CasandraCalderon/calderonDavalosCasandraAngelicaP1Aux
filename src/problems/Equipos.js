const Equipos = (Ricks, Mortys) =>{
    const sumatoriaRicks = Ricks.reduce(function(a, b){ return a + b;}, 0);
    const promedio1 = sumatoriaRicks / Ricks.length;
    const sumatoriaMortys = Mortys.reduce(function(a, b){ return a + b;}, 0);
    const promedio2 = sumatoriaMortys / Mortys.length;
    return[promedio1, promedio2];
};

let main = () =>{
    console.log(Equipos([96, 108, 89], [88, 91, 110]));
}
export default main;