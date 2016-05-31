define
([
    'backbone.marionette'
], function (Marionette)
{
    /**
     * @module
     * @class
     * @name UserView
     */
    var UserView = Marionette.ItemView.extend
    ({
        template: '#userViewTemplate'
    });

    return UserView;
});