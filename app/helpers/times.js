import Ember from 'ember';

export function times(params) {
    return Array(params[0]);
}

export default Ember.Helper.helper(times);