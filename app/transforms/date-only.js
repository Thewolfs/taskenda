import DS from 'ember-data';

export default DS.Transform.extend({
    deserialize(serialized) {
        let temp = serialized.split('/');
        serialized = new Date(temp[2], temp[1] - 1, temp[0]);
        return serialized;
    },

    serialize(deserialized) {
        if (typeof deserialized.constructor != "undefined" && deserialized.constructor.name === "Date")
            deserialized = deserialized.getDate() + '/' + (deserialized.getMonth() + 1) + '/' + deserialized.getFullYear();
        return deserialized;
    }
});