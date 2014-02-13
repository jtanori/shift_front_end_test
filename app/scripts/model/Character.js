/* global Backbone */
define(function(require){
	return Backbone.Model.extend({
		url: '',
		defaults: {
			show: true
		},
		initialize: function(){
			console.log('initialize character model');
		}
	})
});