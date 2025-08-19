const { movingAverage } = require('../src/utils/statistics');

describe('Media Móvil', () => {
  describe('Casos de referencia especificados', () => {
    test('movingAverage([10,20,30,40], 2) debe devolver [15.00, 25.00, 35.00]', () => {
      const result = movingAverage([10, 20, 30, 40], 2);
      expect(result).toEqual([15.00, 25.00, 35.00]);
    });

    test('movingAverage([1,2,3], 3) debe devolver [2.00]', () => {
      const result = movingAverage([1, 2, 3], 3);
      expect(result).toEqual([2.00]);
    });
  });

  describe('Validaciones de entrada', () => {
    test('mensajes de error específicos', () => {
      expect(() => movingAverage('invalid', 2)).toThrow('La serie debe ser un arreglo');
      expect(() => movingAverage([1, 'invalid', 3], 2)).toThrow('Todos los elementos de la serie deben ser números finitos');
      expect(() => movingAverage([1, 2, 3], 1)).toThrow('La ventana debe ser un entero entre 2 y la longitud de la serie');
    });
  });
});
