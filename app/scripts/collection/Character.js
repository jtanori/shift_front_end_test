/* global Backbone */
define(function(require){
	var model = require('model/Character');
	return Backbone.Collection.extend({
		model: model,
		url: 'data/characters.json',
		
		initialize: function(){
			console.log('initialize characters collection');
		},

		//Clear filter attributes
		clearFilter: function(){
			this.each(function(model){
				model.set('show', true);
			});
		},

		//Set the sorting comparator
		setComparator: function(attribute){
			this.comparator = function(model){
				return model.get(attribute);
			}

			return this;
		},

		//Apply filter on models
		filterBy: function(attribute, value) {
			var filtered = [];
			//Try to filter
			try{
				var val = value.toLowerCase();

				filtered = this.filter(function(item) {
					if(item.get(attribute).toLowerCase().indexOf(val) >= 0){
						item.set('show', true);
						return true;
					}else{
						item.set('show', false);
						return false;
					}
				});
			}catch(e){
				alert('An error occurred while filtering, please try again.');
				console.log(e, e.message, e.stack);
			}finally{
				return filtered;
			}
		}
	})
});