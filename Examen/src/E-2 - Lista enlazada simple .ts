// Ejercicio 2. Lista Enlazada Simple


class Nodo<T> {
    public valor: T;
    public siguiente: Nodo<T> | null;

    constructor(valor: T) {
        this.valor = valor;
        this.siguiente = null;
    }
}

interface ILista<T> {
    insertarAlFinal(valor: T): void;
    eliminarPrimero(): T | null;
    buscar(valor: T): boolean; 
    tamaño(): number;
    imprimir(): void;
}

//implementacion

class ListaEnlazada<T> implements ILista<T> {
    private cabeza: Nodo<T> | null = null;

    insertarAlFinal(valor: T): void {
        const nuevoNodo = new Nodo(valor);
        
        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;

        } else {
            let actual = this.cabeza;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;

            }
            actual.siguiente = nuevoNodo;
        }
    }

    eliminarPrimero(): T | null {
        if (this.cabeza === null) {
            return null;
        }
        
        const valorEliminado = this.cabeza.valor;
        this.cabeza = this.cabeza.siguiente;
        
        return valorEliminado;
    }

    buscar(valor: T): boolean {
        let actual = this.cabeza;
        while (actual !== null) {
            if (actual.valor === valor) {
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    tamaño(): number {
        let contador = 0;
        let actual = this.cabeza;
        while (actual !== null) {
            contador++;
            actual = actual.siguiente;
        }
        return contador;
    }

    imprimir(): void {
            let actual = this.cabeza;
        const valores: T[] = [];
        
        while (actual !== null) {
            valores.push(actual.valor);
            actual = actual.siguiente;
        }
        
        console.log("Contenido de la lista: ", valores.join(" --- "));
    }
}


//Lista
const lista = new ListaEnlazada<string>();

lista.insertarAlFinal("Abner");
lista.insertarAlFinal("Calanoglu");
lista.insertarAlFinal("José");
lista.insertarAlFinal("Octaviano");

console.log("Lista original:");
lista.imprimir()
console.log("El tamaño de la lista es: " + lista.tamaño() );
console.log("\nBuscando  Calanoglu: " + lista.buscar("Calanoglu"));
console.log("Buscando Alex: " + lista.buscar("Alex"));

const eliminado = lista.eliminarPrimero();
console.log(`Valor eliminado: ${eliminado}`);

console.log("\nLista despues de eliminar el primeor");
lista.imprimir();
console.log("Nuevo tamaño:", lista.tamaño());
