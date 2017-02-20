import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
   toggleCardState: function() {
   		if(this.get('canCollapse')){
      		this.toggleProperty('isExpanded');
		}
    }
  },
  canCollapse:false,
  isExpanded: true,
});
