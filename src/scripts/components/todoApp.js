/** @jsx React.DOM */

var React = require("react");
var ReactRouter = require("react-router");
var Reflux = require("reflux");
var TodoListStore = require("store.js");

var TodoApp = React.createClass({
	mixins: [Reflux.connect(TodoListStore,"list")],
	 getInitialState: function() {
        return {
            list: []
        };
    },
    render: function() {
        return (
            <div>
                <TodoHeader />
                <ReactRouter.RouteHandler list={this.state.list} />
                <TodoFooter list={this.state.list} />
            </div>
        );
    }
});