require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone-min',
        lodash: '../bower_components/lodash/dist/lodash.min',
        aspect: '../bower_components/aspect.js/src/aspect',
        functional: '../bower_components/aspect.js/src/functional',
        jade: 'templates/jade',
        ListView: 'view/ListView'//App for some, ListView for me
    },
    shim: {
    	jquery: {
    		exports: '$'
    	},
    	lodash: {
    		exports: '_'
    	},
    	backbone: {
    		deps: ['jquery', 'lodash'],
    		exports: 'Backbone'
    	},
    	ListView: {
    		deps: ['backbone']
    	}
    }
});

require(['jquery', 'lodash', 'backbone', 'ListView'], function ($, _, Backbone, ListView) {
    'use strict';
    // Renders on initialize and fetch collection
    var Characters = new ListView();
    window.Characters = Characters;
    //DOM it!
    $('#listview').html(Characters.$el);
});
