# Instrucciones de Despliegue - Clima & Conversión

## 🚀 Configuración Inicial

### 1. Crear Repositorio en GitHub
```bash
# En el directorio ExamenP3
git init
git add .
git commit -m "Proyecto inicial Clima & Conversión"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/TuUsuario/clima-conversion.git
git branch -M main
git push -u origin main
```

### 2. Habilitar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: "GitHub Actions"
4. ¡Listo! El sitio se desplegará automáticamente

## 📋 Verificaciones Pre-Despliegue

### ✅ Checklist de CI
- [ ] `npm test` pasa todas las pruebas
- [ ] `npm run lint` no muestra errores
- [ ] Cobertura ≥ 80% en líneas y ramas
- [ ] Todas las funciones implementadas correctamente

### ✅ Casos de Prueba Obligatorios
- [ ] 32°F → 0.0°C
- [ ] 0°C → 32.0°F
- [ ] 100°C → 212.0°F
- [ ] −40°C ↔ −40°F
- [ ] movingAverage([10,20,30,40], 2) → [15.00, 25.00, 35.00]
- [ ] movingAverage([1,2,3], 3) → [2.00]

## 🔄 Flujo de CI/CD

### Push a `main`
1. ✅ Ejecuta pruebas en Node.js 18.x y 20.x
2. ✅ Verifica linting
3. ✅ Verifica cobertura ≥ 80%
4. ✅ Si todo pasa → Despliega a GitHub Pages
5. ✅ Sitio disponible en: `https://tuusuario.github.io/clima-conversion/`

### Pull Request
1. ✅ Ejecuta todas las verificaciones CI
2. ✅ Bloquea merge si falla alguna prueba
3. ✅ Crea preview único del PR
4. ✅ Comenta en PR con URL del preview

## 🌐 URLs Resultantes

- **Sitio Principal**: `https://tuusuario.github.io/clima-conversion/`
- **Preview PR**: `https://tuusuario.github.io/clima-conversion/preview/pr-{numero}/`

## 🔧 Comandos Locales

```bash
# Desarrollo
npm install          # Instalar dependencias
npm test            # Ejecutar pruebas
npm run test:watch  # Pruebas en modo watch
npm run lint        # Verificar estilo de código
npm run lint:fix    # Corregir errores automáticamente

# Verificación pre-commit
npm test && npm run lint
```

## 📊 Métricas de Calidad

### Cobertura Actual: 100%
- ✅ Líneas: 100%
- ✅ Ramas: 100%
- ✅ Funciones: 100%
- ✅ Declaraciones: 100%

### Pruebas: 37 tests pasando
- ✅ Conversión de temperatura: 16 tests
- ✅ Media móvil: 18 tests
- ✅ Integración: 3 tests

## 🐛 Solución de Problemas

### Error: "Tests failing"
```bash
npm test -- --verbose
# Revisar detalles del error y corregir
```

### Error: "Linting failed"
```bash
npm run lint:fix
# Corrige automáticamente errores de formato
```

### Error: "Coverage below threshold"
```bash
npm test -- --coverage
# Revisar reporte en coverage/lcov-report/index.html
```

## 📝 Notas Importantes

1. **GitHub Pages**: Se configura automáticamente con el workflow
2. **Cobertura**: Debe mantenerse ≥ 80% siempre
3. **Linting**: Obligatorio que pase sin errores
4. **Pruebas**: Todos los casos obligatorios deben pasar
5. **PR Blocking**: Los PR se bloquean si falla CI

## 🎯 Próximos Pasos

1. Hacer push del proyecto a GitHub
2. Verificar que CI/CD funciona correctamente
3. Crear un PR de prueba para verificar preview
4. Documentar URL final del sitio desplegado
