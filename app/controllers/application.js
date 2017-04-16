import Ember from 'ember';

export default Ember.Controller.extend({
    init() {
        this._super(...arguments);
        this.today = new Date();
        if (this.today.getDay() == 0) {
            this.beggining = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - 6);
            this.ending = this.today;
        } else {
            this.beggining = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - this.today.getDay() + 1);
            this.ending = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() - this.today.getDay() + 7);
        }
    },
    weekDays: Ember.computed('model', function() {
        let savedDays = this.get('model').filter(function(record) {
            return (record.get('day') >= this.beggining && record.get('day') <= this.ending);
        }.bind(this));
        let j = 0;
        let arrayDays = [];
        for (let i = 0; i < 7; i++) {
            let compareDay = new Date(this.beggining.getFullYear(), this.beggining.getMonth(), this.beggining.getDate() + i)
            if (savedDays.objectAt(j) && savedDays.objectAt(j).get('day').getDate() == compareDay.getDate()) {
                arrayDays[i] = savedDays.objectAt(j);
                j++;
            } else {
                arrayDays[i] = this.get('store').createRecord('agenda', {
                    day: compareDay
                });
            }
        }
        return arrayDays;
    })
});