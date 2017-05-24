Vue.component('pokemon', {
	template: "<div class='pokemon'>Select Pokemon</div>"
});

Vue.component('ivnumber', {
	template: "<div class='pokemon'>Select ivnumber</div>"
});

Vue.component('results', {
	template: "<div class='pokemon'>CP results</div>"
});

Vue.component('levels', {
	template: "<div class='pokemon'>Select Levels</div>"
});

new Vue({
	el: '#app'
})