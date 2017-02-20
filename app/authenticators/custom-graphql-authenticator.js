import Base from 'ember-simple-auth/authenticators/base';
import ENV from '../config/environment';
import Ember from 'ember';

export default Base.extend({
    session: Ember.inject.service('session'),
    restore: function(data) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            console.log('Attempt to restore -> ', data);
             if (!Ember.isEmpty(data.token)) {
                resolve(data.token);
            }
            else {
                reject();
            }
        });
    },
    authenticate: function(options) {
  
       
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                type: "POST",
                url: ENV.backend + 'login',
                data: {
                    username: options.identification,
                    password: options.password
                }
            }).then(function(response) {
                if(!response.result){
                    Ember.run(function(){
                        reject(response.message);
                    });
                } else {
                    Ember.run(function() {
                        resolve(response.result);
                        
                    });
                }
            }, function(xhr, status, error) {
                Ember.run(function() {
                    reject(xhr.responseJSON || xhr.responseText);
                });
            });
        });
    },
    invalidate: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                type: "GET",
                url: ENV.backend + 'logout'
            }).then(function(response) {
                Ember.run(function() {
                    resolve(response.result);
                    
                });
            }, function(xhr, status, error) {
                Ember.run(function() {
                    reject(xhr.responseJSON || xhr.responseText);
                });
            });
        });
    }
});