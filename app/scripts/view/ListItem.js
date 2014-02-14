/* global Backbone, alert, console, define */
define(function(require){
	'use strict';

	//Load the template
	var template = require('templates/listItem');
	
	// Define item view for the Character collection to render on each record
	var listItem = Backbone.View.extend({
		tagName: 'li',
		className: 'character-card item col-sm-6 col-xs-12 col-md-4 col-lg-3',
		template: template,
		initialize: function(options){
			try{
				this.model = options.model;
				this.listenTo(this.model, 'change:show', this.toggle, this);
				this.render();
			}catch(e){
				alert(e.message);
				console.log(e, e.message, e.stack);
			}

			return this;
		},
		render: function(){
			// Undefined so we can detect in the template if any data was passed
			// this is just to make it less bloathed in the "controller" side
			var data;
			try{
				data = this.model.toJSON();
			}catch(e){
				console.log(e, e.messsge, e.stack);
			}finally{
				this.$el.html( this.template( data ) );
			}
			
			return this;
		},
		toggle: function(model){
			this.$el.toggleClass('hide', model.get('show') === false);
		}
	});

	return listItem;
});