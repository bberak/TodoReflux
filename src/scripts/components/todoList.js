/** @jsx React.DOM */

var React = require("react");
var ReactRouter = require("react-router");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var TodoItem = require("./todoItem.js");
var _ = require("lodash");
var ENTER = 13;

var TodoList = React.createClass({

    mixins: [ ReactRouter.State ],

	 propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    render: function() {
        var filteredList;

        switch(this.getPath()){
            case '/completed':
                filteredList = _.filter(this.props.list, function(item){ return item.isComplete; });
                break;

            case '/active':
                filteredList = _.filter(this.props.list, function(item){ return !item.isComplete; });
                break;

            default:
                filteredList = this.props.list;
        }

        var todoItems = _.map(filteredList, function (item) {
            return <TodoItem label={item.label} key={item.key} isComplete={item.isComplete} />;
        });

        return (
            <div>
                <ul>
                    {todoItems}
                </ul>
            </div>
        );
    }
});

module.exports = TodoList;