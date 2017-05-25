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
			// if ( this.pokemons && this.pkm ) {
			// 	var index = this.pkm;
			// 	var data_all = this.pokemons;
			// 	var data_this = data_all[index];
			// }
			
			return this.atk * this.level;
		},
		result_hp: function() {
			// if ( this.pokemons && this.pkm ) {
			// 	var index = this.pkm;
			// 	var data_all = this.pokemons;
			// 	var data_this = data_all[index];
			// }
			
			return this.stm * this.level;
		}
	}
});