/*
    Cuando el cliente seleccione un pedido
    entonces deberia mostrarse el mismo en la pagina
    si el cliente vuelve a seleccionar otro pedido entonces
    este reemplaza al anterior
 */

const ORDEN_PIZZA = 1;
const ORDEN_MILA = 2;
const ORDEN_CAFE = 3;

const IMG_PIZZA = "https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w=";
const IMG_MILA = "https://cdn7.kiwilimon.com/recetaimagen/1654/13219.jpg";
const IMG_CAFE = "https://statics-cuidateplus.marca.com/cms/cafe-comida.jpg";

/**
 * Recibe el id del boton usado para la orden
 * y dependiendo del id se muestra el pedido
 * correspondiente
 */
function mandarOrden(id) {

    // ===
    switch (Number(id)) {
        case ORDEN_PIZZA:
            document.querySelector('#ordenRealizada').innerHTML = `
                    <h2> Orden de pizza </h2>
                    <img width="400px" src=${IMG_PIZZA} alt="imagen de pizza" title="opcion pizza">
                `;
            break;
        case ORDEN_MILA:
            document.querySelector('#ordenRealizada').innerHTML = `
                    <h2> Orden de mila </h2>
                    <img width="350px" src=${IMG_MILA} alt="imagen de mila" title="opcion mila">
                `;
            break;
        case ORDEN_CAFE:
            document.querySelector('#ordenRealizada').innerHTML = `
                    <h2> Orden de cafe </h2>
                    <img width="400px" src=${IMG_CAFE} alt="imagen de cafe" title="opcion cafe">
                `;

    }
}