class Figura {
    calcularPerimetro() {}
    calcularArea() {}
}

class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = parseFloat(base);
        this.altura = parseFloat(altura);
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = parseFloat(radio);
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = parseFloat(lado);
    }

    calcularPerimetro() {
        return 4 * this.lado;
    }

    calcularArea() {
        return Math.pow(this.lado, 2);
    }
}

class Triangulo extends Figura {
    constructor(base, altura, ladoA, ladoB) {
        super();
        this.base = parseFloat(base);
        this.altura = parseFloat(altura);
        this.ladoA = parseFloat(ladoA);
        this.ladoB = parseFloat(ladoB);
    }

    calcularPerimetro() {
        return this.base + this.ladoA + this.ladoB;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

function displayForm() {
    const shape = document.getElementById('shape-select').value;
    const form = document.getElementById('shape-form');
    form.innerHTML = '';

    if (shape === 'rectangulo' || shape === 'triangulo') {
        form.innerHTML += '<label for="base">Base:</label><input type="number" id="base" step="0.01" required>';
        form.innerHTML += '<label for="altura">Altura:</label><input type="number" id="altura" step="0.01" required>';
    }
    if (shape === 'triangulo') {
        form.innerHTML += '<label for="ladoA">Lado A:</label><input type="number" id="ladoA" step="0.01" required>';
        form.innerHTML += '<label for="ladoB">Lado B:</label><input type="number" id="ladoB" step="0.01" required>';
    }
    if (shape === 'circulo') {
        form.innerHTML += '<label for="radio">Radio:</label><input type="number" id="radio" step="0.01" required>';
    }
    if (shape === 'cuadrado') {
        form.innerHTML += '<label for="lado">Lado:</label><input type="number" id="lado" step="0.01" required>';
    }

    form.innerHTML += '<button type="submit">Calcular</button>';
}

function calculate(event) {
    event.preventDefault();
    const shape = document.getElementById('shape-select').value;
    let figura;

    if (shape === 'rectangulo') {
        const base = document.getElementById('base').value;
        const altura = document.getElementById('altura').value;
        figura = new Rectangulo(base, altura);
    } else if (shape === 'circulo') {
        const radio = document.getElementById('radio').value;
        figura = new Circulo(radio);
    } else if (shape === 'cuadrado') {
        const lado = document.getElementById('lado').value;
        figura = new Cuadrado(lado);
    } else if (shape === 'triangulo') {
        const base = document.getElementById('base').value;
        const altura = document.getElementById('altura').value;
        const ladoA = document.getElementById('ladoA').value;
        const ladoB = document.getElementById('ladoB').value;
        figura = new Triangulo(base, altura, ladoA, ladoB);
    }

    const perimetro = figura.calcularPerimetro();
    const area = figura.calcularArea();
    
    document.getElementById('result').innerHTML = `Perímetro: ${perimetro.toFixed(2)}<br>Área: ${area.toFixed(2)}`;
}

window.onload = displayForm;
