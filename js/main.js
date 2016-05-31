require
([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',
    'controllers/Router',
    'controllers/MainController',

    // Non-JS Requirements
    'css!bootstrap/css/bootstrap',
    'css!../css/style'
], function ($, _, Backbone, Marionette, Router, MainController)
{
    var RootLayout = Marionette.LayoutView.extend
    ({
        initialize: function(options)
        {
            this.el = options.container;
        },

        regions:
        {
            header: '#header',
            main:   '#main',
            footer: '#footer'
        }
    });

    var app = new Marionette.Application({ container: '#appContainer' });

    app.addInitializer(function()
    {
        Backbone.history.start();

        this.rootLayout = new RootLayout(this.getOption('container'));

        var controller = new MainController({ app: app });

        app.router = new Router({ controller: controller });

        app.router.navigate('');
    });

    app.start();
});