/** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var TodoToggle = require("./todoToggle.js");
var TextInput = require("./textInput.js");
var _ = require("lodash");

var TodoHeader = React.createClass({

	 propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    toggleAll: function(e) {
        TodoActions.toggleAllItems(e.target.checked);
    },

    onEnter: function (e) {
        if (e.target.value && e.target.value.trim() > 0) {
            var label = e.target.value.trim()
            TodoActions.addItem(label)
            e.target.value = "";
        }
    },

    onEscape: function (e) {
        e.target.value = "";
    },

    render: function() {
        var allChecked = _.every(this.props.list, "isComplete", true );

        var checkbox = allChecked ?
            <input type="checkbox" onChange={this.toggleAll} checked /> :
            <input type="checkbox" onChange={this.toggleAll} />;

            console.log("Rendering header");

        return (
            <div>
                <TodoToggle list={this.props.list} />
                <div>
                    <TextInput onEnter={this.onEnter} onEscape={this.onEscape} autoFocus={true} placeholder="What needs to be done?" />
                </div>
            </div>
        );
    }
});

module.exports = TodoHeader;