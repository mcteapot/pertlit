//**_'common'_ module should always be loaded first**
//this module sets up the require.js configuration and includes some project-wide boilerplate
requirejs.config({
    //baseUrl: 'javascripts/vendor',
    //shim tells require.js which global variables relate to modules
    shim: {
        'underscore': { deps: ['jquery'], exports: '_' },
        'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone' },
        'bootstrap': { deps: ['underscore', 'jquery'],  exports: '$'}

    }, 
    //paths tells require.js where to load modules from, dont add the .js
    paths: {
        'modernizr': 'vendor/modernizr-2.6.2',
        'jquery': [//'https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',
                'vendor/jquery-1.8.3'
        ],
        'bootstrap': 'vendor/bootstrap',
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone',
        'domReady': 'vendor/domReady'
    }
});