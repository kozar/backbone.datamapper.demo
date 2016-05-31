require.config
({
    baseUrl: 'js',
    paths:
    {
        'jquery':              '../bower_components/jquery/dist/jquery',
        'underscore':          '../bower_components/underscore/underscore',
        'backbone':            '../bower_components/backbone/backbone',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr':      '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.marionette': '../bower_components/backbone.marionette/lib/core/backbone.marionette',
        'bootstrap':           '../bower_components/bootstrap/dist'
    },
    shim:
    {
        underscore:
        {
            exports: '_'
        },
        backbone:
        {
            exports: 'Backbone',
            deps:
            [
                'jquery',
                'underscore'
            ]
        },
        'backbone.marionette':
        {
            exports: 'Backbone.Marionette',
            deps:
            [
                'backbone',
                'backbone.babysitter',
                'backbone.wreqr'
            ]
        }
    },
    map:
    {
        '*':
        {
            'css': '../bower_components/require-css/css'
        }
    }
});