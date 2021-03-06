import DS from 'ember-data';

export default DS.Model.extend({
    day: DS.attr('dateOnly'),
    events: DS.hasMany('event'),
    tasks: DS.hasMany('task')
});