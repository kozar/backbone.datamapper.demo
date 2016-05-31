define
([
    'backbone.marionette'
], function (Marionette)
{
    /**
     * Router defines, which Controller's method
     * will be called when page URL is changed
     *
     * @module
     * @class
     * @name Router
     */
    var Router = Marionette.AppRouter.extend
    ({
        appRoutes:
        {
            'home': 'showHome'
        }
    });

    return Router;
});