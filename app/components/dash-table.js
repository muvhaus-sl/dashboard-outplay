import Ember from 'ember';

export default Ember.Component.extend({
   didReceiveAttrs() {
	 	this._super(...arguments);
	    let headers = this.get('headers');
	    let properties = this.get('properties');
	    let headersArr=[];
	    if (typeof headers === 'string') {
			let cleanHeaders=headers.replace(" ","");
			headersArr=JSON.parse(headers);
	      	this.set('tableHeaders', headersArr);
	      	this.set('tableProperties', JSON.parse(cleanHeaders));
	    } 
		if (typeof properties === 'string') {
	      	this.set('tableProperties', JSON.parse(properties));
	    } 
	  
	}
});