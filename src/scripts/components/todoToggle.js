/** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var _ = require("lodash");

var TodoToggle = React.createClass({

	 propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    toggleAll: function(e) {
        TodoActions.toggleAllItems(e.target.checked);
    },

    render: function() {

        var any = this.props.list.length > 0;

        if (any) {
            var allChecked = _.every(this.props.list, "isComplete", true );

            var checkbox = allChecked ?
                <input type="checkbox" onChange={this.toggleAll} checked /> :
                <input type="checkbox" onChange={this.toggleAll} />;

            return (
                <div>
                    {checkbox}
                    <span>Toogle All</span>
                </div>);
        }
        else {
            return <div></div>;
        }
    }
});

module.exports = TodoToggle;