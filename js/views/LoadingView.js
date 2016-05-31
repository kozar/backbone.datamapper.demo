define
([
    'backbone.marionette'
], function (Marionette)
{
    /**
     * @module
     * @class
     * @name LoadingView
     */
    var LoadingView = Marionette.ItemView.extend
    ({
        template: '#loadingViewTemplate'
    });

    return LoadingView;
});