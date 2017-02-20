import Base from 'ember-simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({
    authorize: function(jqXHR, requestOptions) {
        requestOptions.contentType = 'application/json;charset=utf-8';

        var token = this.get('session.secure.token');
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(token)) {
            jqXHR.setRequestHeader('X-ApiToken', token);
        }
    }
});