import Ember from 'ember';
export default Ember.Route.extend({
    session: Ember.inject.service(),
    beforeModel: function() {
        this.get('session').open('firebase', {
            provider: 'password',
            email: 'gomen565@gmail.com',
            password: 'Loulou565'
        });
        return this.get('session').fetch().catch(function() {});
    },
    model() {
        return this.store.findAll('agenda');
    }
});