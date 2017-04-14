import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('text'),
    desc: DS.attr('text'),
    parent: DS.belongsTo('task'),
    agenda: DS.belongsTo('agenda')
});