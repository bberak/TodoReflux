/** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var TodoToggle = require("./todoToggle.js");
var _ = require("lodash");
var ENTER = 13;
var ESCAPE = 27;

var TodoHeader = React.createClass({

	 propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    toggleAll: function(e) {
        TodoActions.toggleAllItems(e.target.checked);
    },

    onKeyDown: function (e) {
        if (e.keyCode === ENTER && e.target.value) {
            var label = e.target.value.trim()
            if (label.length > 0) {
                TodoActions.addItem(label)
                e.target.value = "";
            }
        }
        else if (e.keyCode === ESCAPE) {
            e.target.value = "";
        }
    },

    render: function() {
        var allChecked = _.every(this.props.list, "isComplete", true );

        var checkbox = allChecked ?
            <input type="checkbox" onChange={this.toggleAll} checked /> :
            <input type="checkbox" onChange={this.toggleAll} />;

        return (
            <div>
                <TodoToggle list={this.props.list} />
                <div>
                    <input type="text" placeholder="What needs to be done?" onKeyDown={this.onKeyDown} />
                </div>
            </div>
        );
    }
});

module.exports = TodoHeader;