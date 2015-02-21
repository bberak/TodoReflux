/** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var _ = require("lodash");

var TodoHeader = React.createClass({

	 propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    toggleAll: function(e) {
        TodoActions.toggleAllItems(e.target.checked);
    },

    render: function() {

        var allChecked = _.every(this.props.list, "isComplete", true );

        var checkbox = allChecked ?
            <input type="checkbox" onChange={this.toggleAll} checked /> :
            <input type="checkbox" onChange={this.toggleAll} />;

        return (
            <div className="todoHeader">
                <div className="toggleAll">
                    {checkbox}
                    <span>Toogle All</span>
                </div>
                <div className="newItem">
                    <input type="text" placeholder="What needs to be done?" />
                </div>
            </div>
        );
    }
});

module.exports = TodoHeader;