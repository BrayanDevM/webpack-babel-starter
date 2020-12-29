# Webpack-babel-starter

Esta es mi plantilla configurada por defecto para construir aplicaciones con Webpack.

## Configuración por defecto 🔧

La configuración actual consta de la siguiente estructura:

- Archivo transpilado principal de JavaScript nombrado con hash para evitar caché.
- Archivo principal de CSS nombrado con hash para evitar caché.
- Transpilador de código moderno a ES2015 utilizado: **Babel**.
- Minificador de archivos JS, HTML y CSS.
- Archivo global e independientes de CSS.
- Compatibilidad de archivos en formato de imagen.
- Auto-eliminación de la carpeta `/dist` al generar nuevos builds.
- Copia de recursos estáticos en carpeta `/src/assets`.
- Servidor local para desarrollo.

## Preparación 🚀

Para iniciar con el desarrollo debemos instalar las dependencias necesarias con el comando:

```
npm install
```

Para iniciar con el servidor local para desarrollo debemos iniciar con el comando:

```
npm start
```

Para crear los archivos de producción que se desplegarán el el host usar el comando:

```
npm run build
```

### Créditos

- Brayan Devia Machado.
- Fernando Herrera (Instructor de curso).
