new Vue({
	el: '#app',
	data: {
		pokemons: null,
		scalar: null,
		pkm: 001,
		atk: 15,
		def: 15,
		stm: 15,
		level: 20,
	},
	created: function() {
		/* Stats */
		this.$http.get('stats.json').then(response => {
	    	this.pokemons = response.body;
	  	}, response => {
	    	alert('Stats Error!');
	  	});

		/* Scalar */
		this.$http.get('scalar.json').then(response => {
	    	this.scalar = response.body;
	  	}, response => {
	    	alert('Scalar Error!');
	  	});
	},
	computed: {
		result_cp: function() {
			return this.atk * this.def * this.stm * this.level;
		},
		result_hp: function() {
			return this.stm * this.level;
		}
	},
	watch: {
		pkm: function( val ) {
			alert( val );
		}
	}
});