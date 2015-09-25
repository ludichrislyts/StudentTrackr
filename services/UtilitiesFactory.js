studentTrackr.factory('UtilitiesFactory', function() {
	return {
		findTeacher: function(collection, teach){
			var matched = null;
			for (var i = 0; i < collection.length; i++){
				if (collection[i] == teach){
					matched = collection[i];
					return matched;
				}
			}return null;			
		},
		findById: function(collection, id) {
			for (var i=0; i < collection.length; i++) {
				if( collection[i].id == id ) {
					return collection[i];
				}
			}
			return null;
		},
		findMatching: function(collection, name){
			var matching = [];
			for(var i = 0; i < collection.length; i++){
				if(collection[i].teacher == name){
					matching.push(collection[i]);
				}
			}return matching;
		}

	};

});
