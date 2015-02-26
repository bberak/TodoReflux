/** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var _ = require("lodash");
var TextInput = require("./textInput.js");
var ENTER = 13;

var TodoItem = React.createClass({

    propTypes: {
        label: React.PropTypes.string.isRequired,
        key: React.PropTypes.number,
    },

    getInitialState: function () {
        return {
            isEditing: false
        };
    },

    onDoubleClick: function (e) {
        this.setState({
            isEditing: true
        });
    },

    onEnter: function (e, value) {
        if (value && value.trim().length > 0)
            TodoActions.editItem(this.props.id, value.trim());

        this.setState({
            isEditing: false
        });
    },

    onEscape: function (e) {
        e.target.value = "";
    },

    onBlur: function (e, value) {
        if (value && value.trim().length > 0)
            TodoActions.editItem(this.props.id, value.trim());

        this.setState({
            isEditing: false
        });
    },

    onToggleItem: function(e) {
        TodoActions.toggleItem(this.props.id);
    },

    render: function() {
        var checkBox = this.props.isComplete ? 
            <input type="checkBox" checked onChange={this.onToggleItem} /> : 
            <input type="checkBox" onChange={this.onToggleItem} />

        if (this.state.isEditing) {
            return (
                <li>
                    {checkBox}
                    <TextInput value={this.props.label} onEnter={this.onEnter} onEscape={this.onEscape} onBlur={this.onBlur} autoFocus={true} placeholder={this.props.label} />
                </li>);
        }
        else {
            return (
                <li>
                    {checkBox}
                    <span onDoubleClick={this.onDoubleClick}>{this.props.label}</span>
                </li>);
        }
    }
});

module.exports = TodoItem;