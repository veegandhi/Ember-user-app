import Ember from 'ember';
export default Ember.Controller.extend({
    loading : true,
    checkboxOptions: {
        three_state: false,
        cascade: 'down = false'
    },
    typesOptions: {
        "default": {
            "icon": "fa fa-tachometer"
        },
        "parent": {
            "icon": "fa fa-folder-o"
        },
        "firstChild": {
            "icon": "fa fa-fire"
        }
    },
    plugins: 'checkbox,types',
    actions: {
        handleTreeDidBecomeReady(node) {
        },
        selectAccount(node) {
        },
        deselectAccount(node) {
        }
    }
});
