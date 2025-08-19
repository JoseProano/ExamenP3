/**
 * Convierte temperatura de Fahrenheit a Celsius
 * @param {number} f - Temperatura en Fahrenheit
 * @returns {number} Temperatura en Celsius redondeada a 1 decimal
 * @throws {TypeError} Si f no es un número finito
 */
function toCelsius(f) {
  if (!Number.isFinite(f)) {
    throw new TypeError('El valor debe ser un número finito');
  }
  
  const celsius = (f - 32) * 5 / 9;
  const rounded = Math.round(celsius * 10) / 10;
  return rounded === 0 ? 0 : rounded;
}

/**
 * Convierte temperatura de Celsius a Fahrenheit
 * @param {number} c - Temperatura en Celsius
 * @returns {number} Temperatura en Fahrenheit redondeada a 1 decimal
 * @throws {TypeError} Si c no es un número finito
 */
function toFahrenheit(c) {
  if (!Number.isFinite(c)) {
    throw new TypeError('El valor debe ser un número finito');
  }
  
  const fahrenheit = (c * 9 / 5) + 32;
  const rounded = Math.round(fahrenheit * 10) / 10;
  return rounded === 0 ? 0 : rounded;
}

module.exports = {
  toCelsius,
  toFahrenheit
};
