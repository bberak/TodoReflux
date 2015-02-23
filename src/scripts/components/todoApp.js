/** @jsx React.DOM */

var React = require("react");
var ReactRouter = require("react-router");
var Reflux = require("reflux");
var TodoListStore = require("store.js");
var TodoHeader = require("./todoHeader.js");
var TodoFooter = require("./todoFooter.js");

var TodoApp = React.createClass({
    
	mixins: [Reflux.connect(TodoListStore, "list")],

    render: function() {
        return (
            <div>
                <TodoHeader list={this.state.list} />
                <ReactRouter.RouteHandler list={this.state.list} />
                <TodoFooter />
            </div>
        );
    }
});

module.exports = TodoApp;