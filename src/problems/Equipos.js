const Equipos = (Ricks, Mortys) =>{
    const sumatoriaRicks = Ricks.reduce(function(a, b){ return a + b;}, 0);
    const promedio1 = sumatoriaRicks / Ricks.length;
    const sumatoriaMortys = Mortys.reduce(function(a, b){ return a + b;}, 0);
    const promedio2 = sumatoriaMortys / Mortys.length;
    const resultado = promedio1 >= 100 || promedio2 >= 100? 
    promedio1 > promedio2 ? 
    `Ganador : Ricks (${promedio1})` : 
    promedio1 === promedio2 ?
    promedio1 >= 100 && promedio2 >= 100? 
    `EMPATE : Ricks (${promedio1}) - Mortys (${promedio2})` : 
    `NINGUN EQUIPO GANA` : 
    `Ganador : Mortys (${promedio2})` :
    `Puntuaciones menores a 100`


    return resultado;
};

let main = () =>{
    console.log(Equipos([96, 108, 89], [88, 91, 110]));
    console.log(Equipos([97, 112, 101], [109, 95, 123]));
    console.log(Equipos([97, 112, 101], [109, 95, 106]));
}
export default main;