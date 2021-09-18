const calcTip = (bills) => {
    let tips = [];
    let totals = [];
    for ( let i = 0 ; i < bills.length ; i++) {
        tips.push((bills[i] > 300) ? 
        (bills[i] * 20 / 100) : 
        (bills[i] >= 50) ? 
        (bills[i] * 15 / 100) : 
        (bills[i] * 20 / 100));
        totals.push(tips [i] + bills[i]);
        console.log(`La factura fue de ${bills[i]}, la propina fue de ${tips[i]} y el valor total ${totals[i]}`);
    };
};
let main = () =>{
    console.log(calcTip([22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]));
}
export default main;