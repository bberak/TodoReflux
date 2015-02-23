/** @jsx React.DOM */

var React = require("react");
var ReactRouter = require("react-router");
var Reflux = require("reflux");
var TodoActions = require("actions.js");
var _ = require("lodash");

var TodoFooter = React.createClass({

    render: function() {
        return (
            <div>
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
                <input type="button" value="Remove completed" />
            </div>
        );
    }
});

module.exports = TodoFooter;