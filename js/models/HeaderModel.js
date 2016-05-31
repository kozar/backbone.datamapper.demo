define
([
    'backbone'
], function (Backbone)
{
    /**
     * @module
     * @class
     * @name HeaderModel
     */
    var HeaderModel = Backbone.Model.extend
    ({
        defaults:
        {
            title: 'Backbone.DataMapper Demo Application',
            sourceLinkTitle: 'See source code on GitHub',
            sourceLinkUrl: 'https://github.com/kozar/backbone.datamapper.demo',
            about:
                '<p>' +
                    'This is a demo single-page JS web application, that is intended to show ' +
                    'advantages of usage of the <b>Backbone.DataMapper</b> plugin, that is <b><mark>yet to be implemented</mark></b>. ' +
                '</p>' +
                '<p>' +
                    'Plugin should provide <a href="http://martinfowler.com/eaaCatalog/dataMapper.html">DataMapper</a> pattern ' +
                    'interface for synchronizing Backbone.js Models\' data with a server side, instead of built-in ' +
                    '<a href="http://www.martinfowler.com/eaaCatalog/activeRecord.html">ActiveRecord</a> interface. ' +
                '</p>' +
                '<p>' +
                    'This should be especially useful for JS applications, that have to deal ' +
                    'with non-RESTful data sources and legacy systems.' +
                '</p>'
        }
    });

    return HeaderModel;
});


