define
([
    'backbone.marionette',

    './PostView'
], function (Marionette, PostView)
{
    /**
     * @module
     * @class
     * @name PostsListView
     */
    var PostsListView = Marionette.CollectionView.extend
    ({
        childView: PostView
    });

    return PostsListView;
});