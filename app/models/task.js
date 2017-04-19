import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    desc: DS.attr('string'),
    parent: DS.belongsTo('task', { inverse: 'children' }),
    children: DS.hasMany('task', { inverse: 'parent' }),
    agenda: DS.belongsTo('agenda')
});