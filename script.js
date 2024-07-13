



function  tiendaProductos(){
    let compraVenta= Number(prompt("Ingrese 1 si desea vender su producto, Ingrese 2 si desea comprar un producto, Ingrese 0 si desea salir de la pagina"));
        while(compraVenta !==0){
            let producto =prompt("Ingrese el nombre del producto");
            let valorProducto =Number(prompt("Ingrese el valor del producto"));
            let bonoCompra= 2000;
            if (compraVenta=== 1){
            alert("El precio del producto " + producto + " que desea vender, es: " + (valorProducto-bonoCompra) + " con el valor del bono por venta incluido" );
             } else if (compraVenta=== 2){
            alert("El precio del producto " + producto + " que desea comprar, es " + (valorProducto+bonoCompra) + " con el valor de bono por compra incluido");
            } else {
            alert("Opcion incorrecta");
            }
             compraVenta= Number(prompt("Ingrese 1 si desea vender su producto, ingrese 2 si desea comprar un producto, ingrese 0 si desea salir de la pagina"));
    }
};

tiendaProductos();