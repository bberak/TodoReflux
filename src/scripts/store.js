var _ = require("lodash");
var Reflux = require("reflux");
var TodoActions = require("actions.js");

var todoCounter = 0;
var localStorageKey = "todos-20150222-0010";

function getItemByKey (list, itemKey) {
	return _.find(list, function(item) {
		return item.key === itemKey;
	})
}

var TodoListStore = Reflux.createStore({

	// this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
	listenables: [TodoActions],
	onEditItem: function(itemKey, newLabel) {
		var foudItem = getItemByKey(this.list, itemKey);
		if (!foudItem) {
			return;
		}
		foudItem.label = newLabel;
		this.updateList(this.list);
	},

	onAddItem: function(label) {
		this.list.push({
			key: todoCounter++,
            created: new Date(),
            isComplete: false,
            label: label
		});
		this.updateList(this.list);
	},

	onRemoveItem: function(itemKey) {
		var newList = _.filter(this.list, function(item) {
			return item.key !== itemKey;
		});
		this.updateList(newList);
	},

	onToggleItem: function(itemKey) {
        var foundItem = getItemByKey(this.list, itemKey);
        if (foundItem) {
            foundItem.isComplete = !foundItem.isComplete;
            this.updateList(this.list);
        }
    },

    onToggleAllItems: function(checked) {
    	var newList = _.map(this.list, function(item) {
    		item.isComplete = checked;
    		return item;
    	});
    	this.updateList(newList);
    },

    onClearCompleted: function() {
    	var newList = _.filter(this.list, function(item) {
    		return item.isComplete == false;
    	});
    	this.updateList(newList);
    },

	// called whenever we change a list. normally this would mean a database API call
    updateList: function(list){
        localStorage.setItem(localStorageKey, JSON.stringify(list));
        // if we used a real database, we would likely do the below in a callback
        this.list = list;
        this.trigger(list); // sends the updated list to all listening components (TodoApp)
    },

  	// this will be called by all listening components as they register their listeners
    getInitialState: function() {
        var loadedList = localStorage.getItem(localStorageKey);
        if (!loadedList) {
            // If no list is in localstorage, start out with a default one
            this.list = [{
                key: todoCounter++,
                created: new Date(),
                isComplete: false,
                label: "Rule the web"
            }];
        } else {
            this.list = _.map(JSON.parse(loadedList), function(item) {
                // just resetting the key property for each todo item
                item.key = todoCounter++;
                return item;
            });
        }
        console.log("List length: " + this.list.length);
        return this.list;
    }
});

module.exports = TodoListStore;