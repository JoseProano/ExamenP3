/**
 * Calcula la media móvil simple de una serie de números
 * @param {number[]} series - Arreglo de números
 * @param {number} window - Tamaño de la ventana (entero ≥ 2)
 * @returns {number[]} Arreglo con los valores de media móvil redondeados a 2 decimales
 * @throws {TypeError} Si la serie contiene valores no numéricos
 * @throws {RangeError} Si la ventana está fuera del rango válido
 */
function movingAverage(series, window) {
  // Validar que series sea un arreglo
  if (!Array.isArray(series)) {
    throw new TypeError('La serie debe ser un arreglo');
  }
  
  // Validar que todos los elementos sean números finitos
  for (let i = 0; i < series.length; i++) {
    if (!Number.isFinite(series[i])) {
      throw new TypeError('Todos los elementos de la serie deben ser números finitos');
    }
  }
  
  // Validar ventana
  if (!Number.isInteger(window) || window < 2 || window > series.length) {
    throw new RangeError('La ventana debe ser un entero entre 2 y la longitud de la serie');
  }
  
  const result = [];
  
  // Calcular media móvil
  for (let i = 0; i <= series.length - window; i++) {
    let sum = 0;
    for (let j = i; j < i + window; j++) {
      sum += series[j];
    }
    const average = sum / window;
    result.push(Math.round(average * 100) / 100);
  }
  
  return result;
}

module.exports = {
  movingAverage
};
