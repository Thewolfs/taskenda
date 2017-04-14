import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('text'),
    place: DS.attr('text'),
    desc: DS.attr('text'),
    begin: DS.attr('datetime'),
    end: DS.attr('datetime'),
    dayevent: DS.attr('boolean'),
    agenda: DS.belongsTo('agenda')
});