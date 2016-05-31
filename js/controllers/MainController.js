define
([
    'jquery',
    'underscore',
    'backbone',
    'backbone.marionette',

    'models/HeaderModel',

    'views/LoadingView',
    'views/HeaderView',
    'views/PostsListView'
], function ($, _, Backbone, Marionette, HeaderModel, LoadingView, HeaderView, PostsListView)
{
    /**
     * @module
     * @class
     * @name MainController
     */
    var MainController = Marionette.Controller.extend
    ({
        /**
         * @var {Backbone.Collection} postsCollection
         */
        /**
         * @var {Backbone.Collection} usersCollection
         */

        /**
         * REST service URL for retrieving of Posts data
         *
         * @type {String}
         */
        postsUrl: 'http://jsonplaceholder.typicode.com/posts',

        /**
         * REST service URL for retrieving of Users data
         *
         * @type {String}
         */
        usersUrl: 'http://jsonplaceholder.typicode.com/users',

        /**
         * Start controller:
         * create models, views, load data and show the start page
         *
         * @param {Object} options
         */
        initialize: function (options)
        {
            this.app = options.app;

            this._initModels();
            this._initViews();

            this._showLoading();

            this._loadData()
            .done
            (
                function()
                {
                    this.app.router.navigate('home', { trigger: true });
                }.bind(this)
            )
            .fail
            (
                function()
                {
                    alert(JSON.stringify(arguments));
                }
            );
        },

        /**
         * Create empty models
         * before loading of the data
         *
         * @private
         */
        _initModels: function()
        {
            this.headerModel = new HeaderModel({});

            this.postsCollection = new Backbone.Collection();
            this.usersCollection = new Backbone.Collection();
        },

        /**
         * Create all views and bind them to the models
         * before data are loaded
         *
         * @private
         */
        _initViews: function()
        {
            this.loadingView = new LoadingView();
            this.headerView = new HeaderView({ model: this.headerModel });
            this.postsListView = new PostsListView({ collection: this.postsCollection });
        },

        /**
         * Load data from server and fill the collections
         *
         * @todo Use Backbone.DataMapper instead of ActiveRecord interface of Backbone models
         *
         * @return {jQuery.promise}
         * @private
         */
        _loadData: function()
        {
            var defer = $.Deferred();

            $.when
            (
                this.postsCollection.fetch({ url: 'http://jsonplaceholder.typicode.com/posts', reset: true }),
                this.usersCollection.fetch({ url: 'http://jsonplaceholder.typicode.com/users', reset: true })
            )
            .done
            (
                function()
                {
                    this._denormalizePosts();
                    defer.resolve();
                }.bind(this)
            )
            .fail
            (
                function()
                {
                    defer.reject(arguments);
                }
            );

            return defer.promise();
        },

        /**
         * Store User model as value of Post's field
         * to ease rendering and business logic
         *
         * @private
         */
        _denormalizePosts: function()
        {
            this.postsCollection.each(function(postModel)
            {
                postModel.set('user', this.usersCollection.get(postModel.get('userId')));
            }, this);
        },

        /**
         * Show loading bar before actual data are loaded
         */
        _showLoading: function()
        {
            this.app.rootLayout.showChildView('header', this.headerView);
            this.app.rootLayout.showChildView('main', this.loadingView);
        },

        /**
         * Start screen
         */
        showHome: function()
        {
            this.app.rootLayout.showChildView('header', this.headerView);
            this.app.rootLayout.showChildView('main', this.postsListView);
        }
    });

    return MainController;
});