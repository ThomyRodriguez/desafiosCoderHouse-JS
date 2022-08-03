//Simulador para obtener fechas disponibles en un salon de eventos


/* Dias disponibles -- Queria incluir varios dias por variable e irlos borrando a medida que se reserven las fechas
pero me resulto imposible con lo visto hasta ahora */
let diaEnero = 14
let diaFebrero = 18
let diaMarzo = 4
let diaAbril = 22
let diaMayo = 6
let diaJunio = 24


//Funciones para calcular precios y descuentos
function descuentoDebitoEfectivo(totalConDescuento){
return totalConDescuento - (totalConDescuento/10)
}

const precioMediodia = (x) =>  x * 1950
const precioNoche = (x) =>  x * 2500



do {
    let consultaInicial = prompt("Elija mes (Recuerde que solo tomamos reservas hasta junio inclusive): \n1 Enero \n2 Febrero \n3 Marzo \n4 Abril \n5 Mayo \n6 Junio \n7 Finalizar").toLowerCase()
    switch (consultaInicial){
        case "1":
        case "enero":
            eleccionTurno = Number(prompt("Seleccione turno \n1 mediodia \n2 noche"))
            cantidadInvitados = Number(prompt("ingrese cantidad estimativa de invitados, maximo 250"))
            if (eleccionTurno === 1 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioMediodia(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioMediodia(cantidadInvitados)))
                    if (confirm("Unico dia disponible: " + diaEnero + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
                        // Aca la idea seria darle mas posibilidades al usuario y modificar la variable segun el mes
                        // El mismo codigo se repite para cada mes, modificando la variable
                            }else{
                            alert("Reserva cancelada")
                                }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico dia disponible: " + diaEnero + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
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
                    if (confirm("Unico dia disponible: " + diaFebrero + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
                            }else{
                            alert("Reserva cancelada")
                                }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico dia disponible: " + diaFebrero + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
                            }else{
                            alert("Reserva cancelada")
                        }
                }
            if (eleccionTurno > 2  || cantidadInvitados > 250 || eleccionTurno < 1 || eleccionTurno  ){
                    alert("Datos ingresados erroneos, intente nuevamente")
                }
        break;     
        case "3":
        case "marzo":
            eleccionTurno = Number(prompt("Seleccione turno \n1 mediodia \n2 noche"))
            cantidadInvitados = Number(prompt("ingrese cantidad estimativa de invitados, maximo 250"))
            if (eleccionTurno === 1 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioMediodia(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioMediodia(cantidadInvitados)))
                    if (confirm("Unico dia disponible: " + diaMarzo + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
                            }else{
                            alert("Reserva cancelada")
                                }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico dia disponible: " + diaMarzo + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
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
                    if (confirm("Unico dia disponible: " + diaAbril + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
                            }else{
                            alert("Reserva cancelada")
                                }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico dia disponible: " + diaAbril + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
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
                    if (confirm("Unico dia disponible: " + diaMayo + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
                            }else{
                            alert("Reserva cancelada")
                                }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico dia disponible: " + diaMayo + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
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
                    if (confirm("Unico dia disponible: " + diaJunio + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
                            }else{
                            alert("Reserva cancelada")
                                }
                }
            if (eleccionTurno === 2 && cantidadInvitados <= 250){
                alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
                    if (confirm("Unico dia disponible: " + diaJunio + " Desea reservar esta fecha?") == true){
                        alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
                            }else{
                            alert("Reserva cancelada")
                        }
                }
            if (eleccionTurno > 2  || cantidadInvitados > 250 || eleccionTurno < 1 ){
                    alert("Datos turnos o invitados ingresados erroneos, intente nuevamente")
                }
        break;
        default:
            alert("Dato mes incompatible, vuelva a intentarlo")
        break;
    }
}while (confirm("Desea continuar viendo el calendario") == true);


//Estaba pensando en optimizarlo, reemplazando cada if por una funcion, para no hacerlo menos pesado y no recurrir a tantos if



// function total(turno,invitados){
//     if (turno === 1 && invitados <= 250){
//     alert("Calculo estimativo: $" + precioMediodia(invitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioMediodia(invitados)))
//         if (confirm("Unico dia disponible: " + diaEnero + " Desea reservar esta fecha?") == true){
//         alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
//         }else{
//             alert("Reserva cancelada")
//         }
//     }
//     if (eleccionTurno === 2 && cantidadInvitados <= 250){
//     alert("Calculo estimativo: $" + precioNoche(cantidadInvitados) + " Abonando en efectivo/debito obtiene un 10% = $" + descuentoDebitoEfectivo(precioNoche(cantidadInvitados)))
//         if (confirm("Unico dia disponible: " + diaEnero + " Desea reservar esta fecha?") == true){
//         alert("Fecha confirmada temporalmente, le enviaremos un mail para efectuar el pago")
//         }else{
//             alert("Reserva cancelada")
//             }
//     }
//     if (eleccionTurno > 2  || cantidadInvitados > 250 || eleccionTurno < 1 ){
//     alert("Datos ingresados erroneos, intente nuevamente")
//     }
// }
