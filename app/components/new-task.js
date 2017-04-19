import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    actions: {
        showForm() {
            this.task = this.get('store').createRecord('task');
            this.toggleProperty('expandForm');
        },
        addTask() {
            let day = this.get('day');
            let parent = this.get('parent');
            this.task.set('agenda', day);
            if (parent) {
                this.task.set('parent', parent);
                parent.save();
            }
            if (day.changedAttributes())
                day.save();

            this.task.save();

        }
    }
});