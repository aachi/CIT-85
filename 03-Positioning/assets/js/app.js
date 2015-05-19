var listCollection = new Marionette.Application();

listCollection.addRegions({
    listItemView: '#listItemView',
    documentation: '#documentation'
});

var listItem = Marionette.ItemView.extend({
    template: _.template('<a href="#<%-path%>"><li><%-path%></li></a>')
});

var listView = Marionette.CollectionView.extend({
    childView: listItem
});

var listItems = new Backbone.Collection([
    {path: 'display-block'},
    {path: 'display-inline'},
    {path: 'display-none'},
    {path: 'margin-auto'},
    {path: 'max-width'},
    {path: 'box-model'},
    {path: 'box-sizing'},
    {path: 'position-static'},
    {path: 'positon-relative'},
    {path: 'positon-fixed'},
    {path: 'positon-absolute'},
    {path: 'float'},
    {path: 'clear'},
    {path: 'clearfix'},
    {path: 'float-layout-example'},
    {path: 'percent-width'},
    {path: 'percent-width-layout'},
    {path: 'inline-block'},
    {path: 'inline-block-layout'},
    {path: 'column'},
    {path: 'flexbox'},
    {path: 'fancy-flexbox'},
    {path: 'center-flexbox'}
]);

listCollection.on('start', function() {
    (new listView({
        collection: listItems,
        el: listItemView
    })).render();

    console.log('Marionette is a go!');
});

listCollection.start();
