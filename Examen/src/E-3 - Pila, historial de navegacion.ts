// Ejercicio 3. Pila — Historial de Navegación


interface IPila<T> {
    agregar(elemento: T): void;
    eliminar(): T | undefined;
    obtener(): T | undefined;
    tamaño(): number;
    estaVacia(): boolean;
    imprimir(): void;
}

class PilaArreglo<T> implements IPila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento); 
    }

    eliminar(): T | undefined {
        return this.elementos.pop();
    }

    obtener(): T | undefined {
        if (this.estaVacia()) {
            return undefined;
        }
        return this.elementos[this.elementos.length - 1];
    }

    tamaño(): number {
        return this.elementos.length;
    }

    estaVacia(): boolean {
        return this.elementos.length === 0;
    }

    imprimir(): void {
        console.log(this.elementos.join(" -> "));
    }
}


const historial = new PilaArreglo<string>();

//urls
historial.agregar("google.com");
historial.agregar("unah.edu.hn");
historial.agregar("campus.unah.edu.hn");
historial.agregar("correo.unah.edu.hn");

// mostarr tope
console.log(`Página actual: ${historial.obtener()}`);

//simular el presionar 2 veces atras

console.log(`Saliendo: ${historial.eliminar()}`);
console.log(`Saliendo: ${historial.eliminar()}`);

// mostrar paginas restantes
console.log(`Páginas que quedan en el historial: ${historial.tamaño()}`);
console.log("Historial restante:");
historial.imprimir();