/** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var _ = require("lodash");
var ENTER = 13;

var TodoItem = React.createClass({

	 propTypes: {
        label: React.PropTypes.string.isRequired,
        key: React.PropTypes.number,
    },

    render: function() {

        return (
            <li>{this.props.label}</li>
        );
    }
});

module.exports = TodoItem;