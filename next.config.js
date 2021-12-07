/**
 * Archivo de configuración para optimizar el tamaño de las imagenes
 */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

]);

module.exports = {
  images: {
      disableStaticImages: true
  }
}