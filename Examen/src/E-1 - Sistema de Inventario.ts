// Ejercicio 1. Sistema de Inventario — Tipos, Tuplas y Enumeraciones

enum CategoriProducto {
    Herramienta,
    Material,
    Electrico,
    Plomeria
}

    let codigoProducto: number = 1001;
    let nombreProducto: string = "Perforador Electrico";
    let Stock: boolean = true;
    let precioUnitario: number = 15.75;
    let categoria: CategoriProducto = CategoriProducto.Herramienta;

        type RegistroProducto = [number, string, CategoriProducto, number, boolean];    
        let producto1: RegistroProducto;


        producto1 = [
            1002, 
            'Serrucho de Metal', 
            CategoriProducto.Herramienta, 
            350, 
            true
        ];
        console.log(producto1[0]);
        console.log(producto1[1].substring(0));
        console.log(producto1[2]);
        console.log(producto1[3]);
        console.log(producto1[4]);

    let nombreExtr: string = producto1[1];
    let precioExtr: number = producto1[3];

    console.log("El producto extraido es: " + nombreExtr);
    console.log("El precio extraido es: " + precioExtr); 

    