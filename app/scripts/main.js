require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash.min',
        aspect: '../bower_components/aspect.js/src/aspect',
        functional: '../bower_components/aspect.js/src/functional',
        jade: 'templates/jade',
        ListView: 'view/ListView'//App for some, ListView for me
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        ListView: {
            deps: ['backbone']
        }
    }
});

require(['jquery', 'underscore', 'backbone', 'ListView'], function ($, _, Backbone, ListView) {
    'use strict';
    // Renders on initialize and fetch collection
    var Characters = new ListView();
    
    //DOM it!
    $('#listview').html(Characters.$el);
});
