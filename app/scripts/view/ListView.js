/* global Backbone, _, $ */
define(function(require){
	// Let's go with something simple and lets the main view
	// act as controller
	var index = Backbone.View.extend(
		// Public ttributes and methods
		{
			dom: {},
			events: {
				'submit form': 'filter',
				'reset form': 'clear',
				'keyup input[type="text"]': 'toggleClear',
				'click .sort': 'sortBy'
			},
			initialize: function(options){
				//Setup
				this.template = this.constructor.template();
				this.render();

				this.collection = this.constructor.collection();

				//Listen for changes in the collection
				this.listenTo(this.collection, 'reset', this.addAll, this);
				this.listenTo(this.collection, 'add', this.addOne, this);
				this.listenTo(this.collection, 'sort', this.sort, this);

				if( options && _.isArray(options.models) ){
					this.collection.reset(options.models);	
				}else{
					this.collection.fetch();
				}

				return this;
			},

			// DOM stuff
			render: function(){
				this.$el.html( this.template() );
				//Cache DOM elements
				this.dom.listview = this.$el.find('#characters');
				this.dom.form = this.$el.find('form');
				this.dom.input = this.dom.form.find('input[type="text"]');
				this.dom.clear = this.dom.form.find('#clear');
			},
			//Add all models in collection
			addAll: function(){
				this.collection.each(this.addOne.bind(this));
			},
			//Add one model
			addOne: function(model){
				// This one renders on initialization
				var item = new (this.constructor.character())({
					model: model
				});

				this.dom.listview.append(item.$el);

				return this;
			},
			// Apply filter
			filter: function(e){
				try{
					e.preventDefault();

					var val = this.dom.input.val();
					if(val){
						this.collection.filterBy('house', val);
					}else{
						this.clear();
					}
				}catch(e){
					alert('An error occurred, please try again.');
					console.log(e, e.message, e.stack);
				}
			},
			// Force clearing filter
			clear: function(){
				this.dom.clear.addClass('hide');
				this.collection.clearFilter();
			},
			// Display the clear icon if needed
			toggleClear: function(){
				try{
					var val = this.dom.input.val();
					this.dom.clear.toggleClass('hide', _.isEmpty(val));
				}catch(e){
					console.log('An error occurred', e, e.message, e.stack);
				}
			},
			sortBy: function(e){
				try{
					//Clear filter and filter UI
					this.dom.form[0].reset();

					var sortBy = $(e.currentTarget).attr('data-sort-by');

					// Do initial sort on the collection models
					this.collection.setComparator(sortBy).sort();
				}catch(e){
					alert('Can not sort by using that option yet.')
					console.log(e, e.message, e.stack);
				}
			},
			// Sort
			sort: function(){
				this.dom.listview.empty();
				this.addAll();
			},
			// Dispose the view
			close: function(remove){
				this.unbind();
				this.stopListening(this.collection);

				if(remove === true){
					this.remove();
				}
			}
		}, 
		// "Class" methods
		{
			//Initialize collection
			collection: function(){
				var Characters = require('collection/Character');
				
				if( !(this._collection instanceof Characters) ){
					this._collection = new Characters();
				}

				return this._collection;
			},
			//Set the ListItem view
			character: function(){
				if( !this._item ){
					this._item = require('view/ListItem');
				}

				return this._item;
			},
			template: function(){
				if( !this._template ){
					this._template = require('templates/main');
				}

				return this._template;
			}
		}
	);

return index;
});