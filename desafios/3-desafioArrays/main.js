//Fechas disponibles en un salon de eventos

let diaEnero = [14, 21 , 28]
let diaFebrero = [4,11, 18]
let diaMarzo = [5,12,19]
let diaAbril = [22,29]
let diaMayo = [21,28]
let diaJunio = [25,11]

// Tipos de salones

class salones {
    constructor(nombre,capacidad,aireLibre,accesoPersonasMovilidadReducida){
        this.nombre = nombre
        this.capacidad = capacidad
        this.aireLibre = aireLibre
        this.accesoPersonasMovilidadReducida = accesoPersonasMovilidadReducida
    }   
}
const salon1 = new salones ("Pervenche", 175 , true, false)
const salon2 = new salones ("Verditer", 200 , false, true)
const salon3 = new salones ("Incarnadine", 250 , true, true)


//Funciones para calcular precios y descuentos
function descuentoDebitoEfectivo(totalConDescuento){
return totalConDescuento - (totalConDescuento/10)
}

const precioMediodia = (x) =>  x * 1950
const precioNoche = (x) =>  x * 2500



do {
    let consultaInicial = prompt("Elija mes (Recuerde que solo tomamos reservas hasta junio inclusive): \n1 Enero \n2 Febrero \n3 Marzo \n4 Abril \n5 Mayo \n6 Junio").toLowerCase()
    switch (consultaInicial){
        // el codigo se repite para todos los meses posibles
        case "1":
        case "enero":
            // eleccion de turno que determinara el precio e ingreso de cantidad de invitados
            eleccionTurno = Number(prompt("Seleccione turno \n1 mediodia \n2 noche"))
            cantidadInvitados = Number(prompt("ingrese cantidad estimativa de invitados, maximo 250"))
            // si ambos datos ingresados coinciden con los parametros prosigue sino indica que los datos ingresados son incorrectos
            if (eleccionTurno === 1 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioMediodia(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioMediodia(cantidadInvitados)))
                    //Luego de mostrar precio y fechas disponibles pide confirmacion
                    if (confirm("Unico/s dia/s disponible/s: " + diaEnero + " Desea reservar alguna de estas fechas?") == true){
                            //Recorre el array y si confirma una fecha esta es eliminada del mismo
                            for (let index = 0; index < diaEnero.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaEnero[index]);
                                    if (fechaElegida == true){
                                    diaEnero.splice(index,1)
                                    index = diaEnero.length
                                    }
                            }
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaEnero + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaEnero.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaEnero[index]);
                                    if (fechaElegida == true){
                                    diaEnero.splice(index,1)
                                    index = diaEnero.length
                                    }
                            }
                        
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno > 2  || cantidadInvitados > 250 || eleccionTurno < 1 ){
                alert("Datos ingresados erroneos, intente nuevamente")
            }
        break;
        case "2":
        case "febrero":
            eleccionTurno = Number(prompt("Seleccione turno \n1 mediodia \n2 noche"))
            cantidadInvitados = Number(prompt("ingrese cantidad estimativa de invitados, maximo 250"))
            if (eleccionTurno === 1 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioMediodia(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioMediodia(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaFebrero + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaFebrero.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaFebrero[index]);
                                    if (fechaElegida == true){
                                    diaFebrero.splice(index,1)
                                    index = diaFebrero.length
                                    }
                            }
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaFebrero + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaFebrero.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaFebrero[index]);
                                    if (fechaElegida == true){
                                    diaFebrero.splice(index,1)
                                    index = diaFebrero.length
                                    }
                            }
                        
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno > 2  || cantidadInvitados > 250 || eleccionTurno < 1 ){
                alert("Datos ingresados erroneos, intente nuevamente")
            }         
        break;     
        case "3":
        case "marzo":
            eleccionTurno = Number(prompt("Seleccione turno \n1 mediodia \n2 noche"))
            cantidadInvitados = Number(prompt("ingrese cantidad estimativa de invitados, maximo 250"))
            if (eleccionTurno === 1 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioMediodia(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioMediodia(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaMarzo + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaMarzo.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaMarzo[index]);
                                    if (fechaElegida == true){
                                    diaMarzo.splice(index,1)
                                    index = diaMarzo.length
                                    }
                            }
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaMarzo + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaMarzo.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaMarzo[index]);
                                    if (fechaElegida == true){
                                    diaMarzo.splice(index,1)
                                    index = diaMarzo.length
                                    }
                            }
                        
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno > 2  || cantidadInvitados > 250 || eleccionTurno < 1 ){
                alert("Datos ingresados erroneos, intente nuevamente")
            }              
        break;
        case "4":
        case "abril":
            eleccionTurno = Number(prompt("Seleccione turno \n1 mediodia \n2 noche"))
            cantidadInvitados = Number(prompt("ingrese cantidad estimativa de invitados, maximo 250"))
            if (eleccionTurno === 1 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioMediodia(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioMediodia(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaAbril + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaAbril.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaAbril[index]);
                                    if (fechaElegida == true){
                                    diaAbril.splice(index,1)
                                    index = diaAbril.length
                                    }
                            }
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaAbril + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaAbril.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaAbril[index]);
                                    if (fechaElegida == true){
                                    diaAbril.splice(index,1)
                                    index = diaAbril.length
                                    }
                            }
                        
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno > 2  || cantidadInvitados > 250 || eleccionTurno < 1 ){
                alert("Datos ingresados erroneos, intente nuevamente")
            }              
        break;
        case "5":
        case "mayo":
            eleccionTurno = Number(prompt("Seleccione turno \n1 mediodia \n2 noche"))
            cantidadInvitados = Number(prompt("ingrese cantidad estimativa de invitados, maximo 250"))
            if (eleccionTurno === 1 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioMediodia(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioMediodia(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaMayo + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaMayo.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaMayo[index]);
                                    if (fechaElegida == true){
                                    diaMayo.splice(index,1)
                                    index = diaMayo.length
                                    }
                            }
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaMayo + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaMayo.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaMayo[index]);
                                    if (fechaElegida == true){
                                    diaMayo.splice(index,1)
                                    index = diaMayo.length
                                    }
                            }
                        
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno > 2  || cantidadInvitados > 250 || eleccionTurno < 1 ){
                alert("Datos ingresados erroneos, intente nuevamente")
            }          
        break;
        case "6":
        case "junio":
            eleccionTurno = Number(prompt("Seleccione turno \n1 mediodia \n2 noche"))
            cantidadInvitados = Number(prompt("ingrese cantidad estimativa de invitados, maximo 250"))
            if (eleccionTurno === 1 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioMediodia(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioMediodia(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaJunio + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaJunio.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaJunio[index]);
                                    if (fechaElegida == true){
                                    diaJunio.splice(index,1)
                                    index = diaJunio.length
                                    }
                            }
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico/s dia/s disponible/s: " + diaJunio + " Desea reservar alguna de estas fechas?") == true){
                            for (let index = 0; index < diaJunio.length; index++){
                                let fechaElegida = confirm("Fecha seleccionada: " + diaJunio[index]);
                                    if (fechaElegida == true){
                                    diaJunio.splice(index,1)
                                    index = diaJunio.length
                                    }
                            }
                        
                            alert("Le enviaremos un mail con los pasos a seguir teniendo en cuenta la fecha confirmada. Gracias!")
                    }else{
                    alert("Reserva cancelada")
                    }
                }
            if (eleccionTurno > 2  || cantidadInvitados > 250 || eleccionTurno < 1 ){
                alert("Datos ingresados erroneos, intente nuevamente")
            }        
        break;
        default:
            alert("Dato mes incompatible, vuelva a intentarlo")
        break;
    }
}while (confirm("Desea continuar viendo el calendario") == true);