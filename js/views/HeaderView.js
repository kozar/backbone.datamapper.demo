define
([
    'backbone.marionette'
], function (Marionette)
{
    /**
     * @module
     * @class
     * @name HeaderView
     */
    var HeaderView = Marionette.ItemView.extend
    ({
        template: '#headerViewTemplate'
    });

    return HeaderView;
});