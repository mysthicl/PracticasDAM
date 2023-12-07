//INICIO CLASE CALCULADORA
class Calculadora {
    constructor(valorPrevioTextElement, valorActualTextElement) {
        this.valorPrevioTextElement = valorPrevioTextElement
        this.valorActualTextElement = valorActualTextElement
        this.borrarTodo()
    }

    borrarTodo() {
        this.valorActual = ''
        this.valorPrevio = ''
        this.operacion = undefined
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1)
    }

    agregarNumero(numero) {
        //this.valorActual = numero
        if (numero === '.' && this.valorActual.includes('.')) return
        if (this.valorActual.length >= 11) return
        if(this.valorPrevioTextElement.innerText === `${this.obtenerNumero(this.valorPrevio)}${this.operacion}${this.valorPrevio}`){
            this.valorActual=''
            this.valorPrevio=''
            this.operacion=undefined
           this.actualizarPantalla()
        }else{
            
            
        this.valorActual = this.valorActual.toString() + numero.toString();
        }
    }

    elejirOperacion(operacion) {
        if (this.valorActual === '') return
        if (this.valorPrevio !== '') {
            this.calcular()
        }
        this.operacion = operacion
        this.valorPrevio = this.valorActual
        if (this.operacion === '%') {
            var aux = parseFloat(this.valorActual);
            var replace = aux.toString().replace(",")
            this.valorActual = parseFloat(replace)
            console.log("Valor actual desde elegir: " + replace)
        } else {
            this.valorActual = ''
        }
    }

    calcular() {
        let resultado
        const valor_1 = parseFloat(this.valorPrevio)
        const valor_2 = parseFloat(this.valorActual)
        if (isNaN(valor_1) || isNaN(valor_2)) return

        switch (this.operacion) {
            case '+':
                resultado = valor_1 + valor_2
                break
            case '-':
                resultado = valor_1 - valor_2
                break
            case 'x':
                resultado = valor_1 * valor_2
                break
            case '/':
                resultado = valor_1 / valor_2
                break
            default:
                return
        }
        this.operacion = this.valorPrevio+this.operacion+this.valorActual;
        this.valorActual = resultado
        this.valorPrevio = ''
    }

    mostrarPorcentaje() {
        var resultado = parseFloat(this.valorActual) / 100
        this.valorActualTextElement.innerText = parseFloat(resultado);
        this.valorActual = resultado;
        this.valorPrevioTextElement.innerText = `${this.obtenerNumero(this.valorActual)} ${this.operacion}`
        
    }

    obtenerNumero(numero) {
        const cadena = numero.toString()
        const enteros = parseFloat(cadena.split('.')[0])
        const decimales = cadena.split('.')[1]
        let mostrarEnteros
        if (isNaN(enteros)) {
            mostrarEnteros = ''
        } else {
            mostrarEnteros = enteros.toLocaleString('en', { maximumFractionDigits: 0 })
        }

        if (decimales != null) {
            return `${mostrarEnteros}.${decimales}`
        } else {
            return mostrarEnteros
        }
    }

    actualizarPantalla() {
        if (this.operacion === '%') {
            this.mostrarPorcentaje();
        } else {
            this.valorActualTextElement.innerText = this.obtenerNumero(this.valorActual)
            if (this.operacion != null) {
                this.valorPrevioTextElement.innerText = `${this.obtenerNumero(this.valorPrevio)} ${this.operacion}`
            } else {
                this.valorPrevioTextElement.innerText = ''
            }
        }
    } 
}
//FIN CLASE CALCULADORA

//Captura de datos del DOM
const numeroButtons = document.querySelectorAll('[data-numero]')
const operacionButtons = document.querySelectorAll('[data-operacion]')
const igualButton = document.querySelector('[data-igual]')
const porcentajeButton = document.querySelector('[data-operador]')
const borrarButton = document.querySelector('[data-borrar]')
const borrarTodoButton = document.querySelector('[data-borrar-todo]')
const valorPrevioTextElement = document.querySelector('[data-valor-previo]')
const valorActualTextElement = document.querySelector('[data-valor-actual]')

// Instanciar un nueo objeto de tipo calculadora
const calculator = new Calculadora(valorPrevioTextElement, valorActualTextElement)

numeroButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.agregarNumero(button.innerText)
        calculator.actualizarPantalla()
    })
})

operacionButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.elejirOperacion(button.innerText)
        calculator.actualizarPantalla()
    })
})

igualButton.addEventListener('click', _button => {
    calculator.calcular()
    calculator.actualizarPantalla()
})

borrarTodoButton.addEventListener('click', _button => {
    calculator.borrarTodo()
    calculator.actualizarPantalla()
})

borrarButton.addEventListener('click', _button => {
    calculator.borrar()
    calculator.actualizarPantalla()
})
