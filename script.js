function calcular() {

    let valor = Number(
    document
        .getElementById("valor")
        .value
        .replace(/\D/g,'')
);
    let pegadores = Number(document.getElementById("pegadores").value);

    if (!valor || !pegadores) {
    return;
}

    let comision = calcularComision(valor);

    document.getElementById("comision").innerHTML =
        "$" + comision.toLocaleString("es-CO");

    let total2 = valor - comision;

let oficina = 0;

if(total2 >= 400000){

    oficina = total2 * 0.20;

}

let total3 = total2 - oficina;

let socio = total3 / 2;

let valorPegador = socio / pegadores;

document.getElementById("tituloPegador").innerHTML =
`Valor por Pegador (${pegadores} ${pegadores === 1 ? "persona" : "personas"})`;

document.getElementById("valorPegador").innerHTML =
"$" + Math.round(valorPegador).toLocaleString("es-CO");

}

function calcularComision(valor){

    const tabla = [

        {hasta:399999, comision:0},
        {hasta:3500000, comision:50000},
        {hasta:5400000, comision:100000},
        {hasta:7300000, comision:150000},
        {hasta:9100000, comision:200000},
        {hasta:10900000, comision:250000},
        {hasta:12750000, comision:300000},
        {hasta:14600000, comision:350000},
        {hasta:16450000, comision:400000},
        {hasta:18300000, comision:450000},
        {hasta:20100000, comision:500000},
        {hasta:21900000, comision:550000},
        {hasta:23750000, comision:600000},
        {hasta:25600000, comision:650000},
        {hasta:27400000, comision:700000},
        {hasta:29200000, comision:750000},
        {hasta:31050000, comision:800000},
        {hasta:32900000, comision:850000},
        {hasta:34750000, comision:900000},
        {hasta:36600000, comision:950000},
        {hasta:38400000, comision:1000000},
        {hasta:40200000, comision:1050000},
        {hasta:42050000, comision:1100000},
        {hasta:43900000, comision:1150000},
        {hasta:45700000, comision:1200000},
        {hasta:47500000, comision:1250000},
        {hasta:49350000, comision:1300000},
        {hasta:51200000, comision:1350000},
        {hasta:53050000, comision:1400000},
        {hasta:54900000, comision:1450000},
        {hasta:56700000, comision:1500000},
        {hasta:58500000, comision:1550000},
        {hasta:60350000, comision:1600000},
        {hasta:62200000, comision:1650000},
        {hasta:64000000, comision:1700000},
        {hasta:65800000, comision:1750000},
        {hasta:67650000, comision:1800000},
        {hasta:69500000, comision:1850000},
        {hasta:71350000, comision:1900000},
        {hasta:73200000, comision:1950000}

    ];

    for(let fila of tabla){

        if(valor <= fila.hasta){

            return fila.comision;

        }

    }

    alert("Valor fuera de los rangos definidos.");

    return 0;

}
function formatearMoneda(input){

    let valor = input.value.replace(/\D/g,'');

    if(valor===""){

        input.value="";
        return;

    }

    input.value = "$" + Number(valor).toLocaleString("es-CO");
    
calcularAutomatico();

} 
function seleccionarPegador(numero){

    document.getElementById("pegadores").value = numero;

    let botones = document.querySelectorAll(".pegador");

    botones.forEach(function(boton){
        boton.classList.remove("activo");
        
    });

    botones[numero - 1].classList.add("activo");

    document.getElementById("tituloPegador").innerHTML =
    `Valor por Pegador (${numero} ${numero === 1 ? "persona" : "personas"})`;
calcularAutomatico();
    

    }
function calcularAutomatico(){

    console.log("ENTRÉ A CALCULAR AUTOMÁTICO");

    const valor = document.getElementById("valor").value.replace(/\D/g,'');

    const pegadores = document.getElementById("pegadores").value;

    if(valor !== "" && pegadores !== ""){

        console.log("CALCULANDO");

        calcular();

    }

}
function nuevoCalculo(){

    // Limpiar valor
    document.getElementById("valor").value = "";

    // Limpiar pegadores
    document.getElementById("pegadores").value = "";

    // Quitar selección de botones
    document.querySelectorAll(".pegador").forEach(function(boton){

        boton.classList.remove("activo");

    });

    // Restablecer resultados
    document.getElementById("comision").innerHTML = "$0";

    document.getElementById("tituloPegador").innerHTML = "👷 Valor por Pegador";

    document.getElementById("valorPegador").innerHTML = "$0";

    // Volver al campo de valor
    document.getElementById("valor").focus();

}

function copiarResultados() {
    

    const comision = document.getElementById("comision").innerText;

    const tituloPegador = document.getElementById("tituloPegador").innerText;

    const valorPegador = document.getElementById("valorPegador").innerText;

    const texto =
`Comisión:
${comision}

${tituloPegador}:
${valorPegador}`;

    navigator.clipboard.writeText(texto)
.then(() => {
const toast = document.getElementById("toast");

toast.classList.add("mostrar");

setTimeout(function(){

    toast.classList.remove("mostrar");

}, 2000);
   

})
.catch(error => {

    console.error(error);

   

});


}
