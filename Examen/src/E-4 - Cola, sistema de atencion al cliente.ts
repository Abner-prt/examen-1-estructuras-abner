// Ejercicio 4. Cola — Sistema de Atención al Cliente


interface ICola<T> {
    agregar(elemento: T): void;
    eliminar(): T | undefined;
    obtener(): T | undefined;
    tamaño(): number;
    estaVacia(): boolean;
}

class ColaArreglo<T> implements ICola<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento); 
    }

    eliminar(): T | undefined {
        return this.elementos.shift(); 
    }

    obtener(): T | undefined {
        if (this.estaVacia()) {
            return undefined;
        }
        return this.elementos[0]; 
    }

    tamaño(): number {
        return this.elementos.length;
    }

    estaVacia(): boolean {
        return this.elementos.length === 0;
    }
}

// pruebas

const cola = new ColaArreglo<string>();

// clientes
cola.agregar("Juan");
cola.agregar("María");
cola.agregar("Pedro");
cola.agregar("Ana");
cola.agregar("Carlos");

// mostrar frente
console.log(`Cliente al frente de la fila: ${cola.obtener()}`);

// atiende primeros 3
console.log(`Cliente atendido: ${cola.eliminar()}`);
console.log(`Cliente atendido: ${cola.eliminar()}`);
console.log(`Cliente atendido: ${cola.eliminar()}`);

// clientes pendientes
console.log(`\nClientes que quedan esperando: ${cola.tamaño()}`);
