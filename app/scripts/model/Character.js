/* global Backbone, define, console */
define(function(){
	'use strict';

	return Backbone.Model.extend({
		url: '',
		defaults: {
			show: true
		},
		initialize: function(){
			console.log('initialize character model');
		}
	});
});