new Vue({
	el: '#app',
	data: {
		pokemons: null,
		currnet_pkm: "242",
		scalars: null,
		bonus_atk: 15,
		bonus_def: 15,
		bonus_sta: 15,
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
	    	this.scalars = response.body;
	  	}, response => {
	    	alert('Scalar Error!');
	  	});
	},
	computed: {
		stats: function() {
			if ( this.pokemons && this.currnet_pkm ) {
				var currnet_pkm = this.currnet_pkm;
				var pokemons = this.pokemons;

				return pokemons[currnet_pkm];				
			}
		},
		base_atk: function() {
			if ( this.stats ) {
				var stats = this.stats;
				return Number( stats.atk );
			}
		},
		base_def: function() {
			if ( this.stats ) {
				var stats = this.stats;
				return Number( stats.def );
			}
		},
		base_sta: function() {
			if ( this.stats ) {
				var stats = this.stats;
				return Number( stats.sta );
			}
		},
		cp_scalar: function() {
			if ( this.level && this.scalars ) {
				var level = this.level;
				var scalars = this.scalars;

				return Number( scalars[level] );				
			}
		},
		result_cp: function() {
			if ( this.cp_scalar ) {
				var atk = this.base_atk + Number(this.bonus_atk);
				var def = Math.sqrt( this.base_def + Number(this.bonus_def) );
				var sta = Math.sqrt( this.base_sta + Number(this.bonus_sta) );
				var oth = Math.pow( this.cp_scalar, 2) * 0.1;

				console.log( atk, def, sta, oth );
				return Math.floor( atk * def * sta * oth );
			}
		},
		result_hp: function() {
			if ( this.cp_scalar ) {
				return Math.floor( ( this.base_sta + Number(this.bonus_sta) ) * this.cp_scalar );
			}
		}
	}
});