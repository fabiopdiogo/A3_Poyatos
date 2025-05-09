// Classe que representa um calculador de áreas para diferentes formas
class ShapeCalculator {
    constructor() {
        // Array para armazenar as formas e suas dimensões
        this.shapes = [];
    }

    // Método para adicionar uma nova forma ao array
    addShape(shapeType, ...dimensions) {
        const shape = { type: shapeType, dimensions };
        this.shapes.push(shape);
    }

    // Método para calcular a área da forma com base no tipo
    calculateArea(shape) {
        switch (shape.type) {
            case 'square':
                return Math.pow(shape.dimensions[0], 2); // Área do quadrado
            case 'rectangle':
                return shape.dimensions[0] * shape.dimensions[1]; // Área do retângulo
            case 'circle':
                return Math.PI * Math.pow(shape.dimensions[0], 2); // Área do círculo
            case 'triangle':
                return (shape.dimensions[0] * shape.dimensions[1]) / 2; // Área do triângulo
            default:
                return 0; // Retorna 0 para tipos não reconhecidos
        }
    }

    // Método para imprimir as áreas de todas as formas armazenadas
    printAreas() {
        this.shapes.forEach(shape => {
            console.log(Area of ${shape.type}: ${this.calculateArea(shape)});
        });
    }
}

// Exemplo de uso da classe ShapeCalculator
const calculator = new ShapeCalculator();
calculator.addShape('square', 4);
calculator.addShape('rectangle', 4, 5);
calculator.addShape('circle', 3);
calculator.addShape('triangle', 4, 5);
calculator.printAreas();