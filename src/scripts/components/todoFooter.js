/** @jsx React.DOM */

var React = require("react");
var ReactRouter = require("react-router");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var _ = require("lodash");

var TodoFooter = React.createClass({

    propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    },

    onClearCompleted: function() {
        TodoActions.clearCompleted();
    },

    render: function() {

        var totalCount = this.props.list.length;
        var completedCount = _.filter(this.props.list, "isComplete").length;

        var footerClassName = totalCount > 0 ? "footer" : "hidden";
        var clearCompletedClassName = completedCount > 0 ? "completed" : "hidden";

        return (
            <div className={footerClassName}>
                <ul>
                    <li>
                        <ReactRouter.Link activeClassName="selected" to="All">All</ReactRouter.Link>
                    </li>
                    <li>
                        <ReactRouter.Link activeClassName="selected" to="Active">Active</ReactRouter.Link>
                    </li>
                    <li>
                        <ReactRouter.Link activeClassName="selected" to="Completed">Completed</ReactRouter.Link>
                    </li>
                </ul>
                <input className={clearCompletedClassName} type="button" value="Remove completed" onClick={this.onClearCompleted} />
            </div>
        );
    }
});

module.exports = TodoFooter;