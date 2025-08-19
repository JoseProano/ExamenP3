const { toCelsius, toFahrenheit } = require('../src/utils/temperature');

describe('Conversión de Temperatura', () => {
  describe('toCelsius', () => {
    test('32°F debe convertirse a 0.0°C', () => {
      expect(toCelsius(32)).toBe(0.0);
    });

    test('-40°F debe convertirse a -40.0°C', () => {
      expect(toCelsius(-40)).toBe(-40.0);
    });

    test('debe lanzar TypeError para valores no numéricos', () => {
      expect(() => toCelsius('abc')).toThrow(TypeError);
    });
  });

  describe('toFahrenheit', () => {
    test('0°C debe convertirse a 32.0°F', () => {
      expect(toFahrenheit(0)).toBe(32.0);
    });

    test('100°C debe convertirse a 212.0°F', () => {
      expect(toFahrenheit(100)).toBe(212.0);
    });

    test('-40°C debe convertirse a -40.0°F', () => {
      expect(toFahrenheit(-40)).toBe(-40.0);
    });

    test('-17.8°C debe convertirse a 0.0°F', () => {
      expect(toFahrenheit(-17.8)).toBe(0.0);
    });

    test('debe lanzar TypeError para valores no numéricos', () => {
      expect(() => toFahrenheit('abc')).toThrow(TypeError);
    });
  });
});
