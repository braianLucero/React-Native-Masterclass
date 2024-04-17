const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// para gestionar y transformar los archivos JavaScript de tu aplicación. Metro se encarga de compilar tu código, manejar las dependencias y preparar todo para que pueda ser ejecutado en un dispositivo móvil o en un emulador.
