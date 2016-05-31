define
([
    'backbone.marionette',

    './UserView'
], function (Marionette, UserView)
{
    var baseClass = Marionette.LayoutView;

    /**
     * @module
     * @class
     * @name PostView
     * @extends {Marionette.LayoutView}
     */
    var PostView = Marionette.LayoutView.extend
    ({
        /**
         * Extend method to support the automatic
         * rendering of child views for the nested models
         * basing on info, provided in this.nestedViews
         *
         * @override
         */
        render: function()
        {
            var result = baseClass.prototype.render.apply(this, arguments);

            var nestedViews = this.getOption('nestedViews');

            _.each(nestedViews, function(nestedViewDescription)
            {
                var childView = new nestedViewDescription.viewConstructor
                ({
                    model: this.model.get(nestedViewDescription.modelField)
                });

                this.showChildView(nestedViewDescription.region, childView);
            }, this);

            return result;
        },

        template: '#postViewTemplate',

        regions:
        {
            userInfo: '.userInfo'
        },

        /**
         * Description of the child views to be automatically rendered
         * using content of the composite field of the current model as data
         *
         * @type {Object[]}
         */
        nestedViews:
        [
            {
                region: 'userInfo',
                modelField: 'user',
                viewConstructor: UserView
            }
        ]
    });

    return PostView;
});