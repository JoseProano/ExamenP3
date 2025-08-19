# Clima & Conversión

Proyecto de conversión de temperatura y cálculo de media móvil con CI/CD automatizado.

## 🚀 Características

- **Conversión de Temperatura**: Funciones para convertir entre Celsius y Fahrenheit
- **Media Móvil**: Cálculo de media móvil simple para series de datos
- **CI/CD Completo**: Pipeline automatizado con GitHub Actions
- **Cobertura de Pruebas**: Cobertura mínima del 80%
- **Despliegue Automático**: Deploy a GitHub Pages

## 📋 Funciones Implementadas

### `toCelsius(f)`
- Convierte temperatura de Fahrenheit a Celsius
- Fórmula: °C = (°F − 32) × 5/9
- Redondeo a 1 decimal
- Validación de entrada

### `toFahrenheit(c)`
- Convierte temperatura de Celsius a Fahrenheit  
- Fórmula: °F = (°C × 9/5) + 32
- Redondeo a 1 decimal
- Validación de entrada

### `movingAverage(series, window)`
- Calcula media móvil simple
- Redondeo a 2 decimales
- Validación completa de parámetros

## 🧪 Casos de Prueba

### Temperatura
- 32°F → 0.0°C
- 0°C → 32.0°F  
- 100°C → 212.0°F
- −40°C ↔ −40°F

### Media Móvil
- `movingAverage([10,20,30,40], 2)` → `[15.00, 25.00, 35.00]`
- `movingAverage([1,2,3], 3)` → `[2.00]`

## 🛠️ Instalación y Uso

```bash
# Clonar repositorio
git clone https://github.com/JoseProano/ExamenP3.git
cd ExamenP3

# Instalar dependencias
npm install

# Ejecutar pruebas
npm test

# Ejecutar linter
npm run lint

# Ver cobertura
npm test -- --coverage
```

## 🔧 Scripts Disponibles

- `npm test` - Ejecuta pruebas con cobertura
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige errores de linting automáticamente
- `npm start` - Ejecuta la aplicación
- `npm run deploy` - Despliega a GitHub Pages

## 📊 CI/CD Pipeline

### Integración Continua (CI)
- ✅ Pruebas automatizadas en Node.js 18.x y 20.x
- ✅ Linting con ESLint
- ✅ Cobertura mínima del 80%
- ✅ Bloqueo de PR si falla CI

### Despliegue Continuo (CD)
- ✅ Deploy automático a GitHub Pages
- ✅ Preview único para cada PR
- ✅ Comentarios automáticos con URL de preview

## 🌐 URLs del Proyecto

- **Repositorio**: https://github.com/JoseProano/ExamenP3
- **Sitio Principal**: https://joseproano.github.io/ExamenP3/
- **Preview PRs**: Se genera automáticamente para cada PR

## 👨‍💻 Autor

**José Proaño**
- Email: jose.proano@est.ups.edu.ec
- NRC: 12345

## 📝 Licencia

MIT License - ver archivo LICENSE para detalles.

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📈 Cobertura de Pruebas

El proyecto mantiene una cobertura mínima del 80% en:
- Líneas de código
- Ramas de ejecución
- Funciones
- Declaraciones

## 🔍 Estructura del Proyecto

```
ExamenP3/
├── src/
│   ├── utils/
│   │   ├── temperature.js
│   │   └── statistics.js
│   └── index.js
├── tests/
│   ├── temperature.test.js
│   ├── statistics.test.js
│   └── integration.test.js
├── public/
│   ├── index.html
│   └── styles.css
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── package.json
├── eslint.config.js
└── README.md
```
