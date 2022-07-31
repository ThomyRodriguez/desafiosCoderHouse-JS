

// Venta de entradas para un show

let entradas = 10 
let confirmacion = confirm("Desea adquirir entradas?") 

while (entradas != 0 && confirmacion == true) { 
    let cantidadEntradas = Number(prompt("Ingrese cantidad de entradas que desee comprar (Máximo 5 por compra)"))
    if(cantidadEntradas <= 5){ 
    entradas = entradas - cantidadEntradas
    alert("Entradas adquiridas: " + cantidadEntradas + " -- Entradas restantes " + entradas)
        if(confirm("desea continuar comprando entradas?") == true )
        alert("Redirigiendo, gracias por su compra! ")
        else{
            alert("Gracias por su compra, disfrute del show!")
            break
        }
    }else{
        alert("Supero el maximo de entradas por compra/No ingreso un numero -- Vuelva a intentarlo")
    }
    if (entradas == 0){
        alert("lo sentimos, entradas agotadas!")
    }
}


