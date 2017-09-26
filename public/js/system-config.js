SystemJS.config({
    // tell SystemJS which transpiler to use
    transpiler: 'plugin-babel',
    // tell SystemJS where to look for the dependencies
    map: {
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        // app start script
        'main': './js/main.js',
        'template-loader': './js/templates-loader.js'
    },
    packages: {
        '/': {
            defaultExtension: 'js' // remove '.js' from imports
        }
    }
});
