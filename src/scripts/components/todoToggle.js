/** @jsx React.DOM */

var React = require("react");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var _ = require("lodash");

var TodoToggle = React.createClass({

	 propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    checkAll: function(e) {
        TodoActions.toggleAllItems(true);
    },

    unCheckAll: function(e) {
        TodoActions.toggleAllItems(false);
    },

    render: function() {

        var any = this.props.list.length > 0;

        if (any) {
            var allChecked = _.every(this.props.list, "isComplete", true );

            var button = allChecked ?
                <input type="button" onClick={this.unCheckAll} value="Uncheck all" /> :
                <input type="button" onClick={this.checkAll} value="Check all" />;

            return (
                <div>
                    {button}
                </div>);
        }
        else {
            return <div></div>;
        }
    }
});

module.exports = TodoToggle;