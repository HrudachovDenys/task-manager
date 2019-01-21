import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import { TaskList, TaskInfo } from './views';
import createBrowserHistory from "history/createBrowserHistory";
import { setTasks } from './store/actions/tasks';
import { connect } from 'react-redux';

const history = createBrowserHistory();

class App extends Component {

    componentWillMount() {
        this.props.setTasks();
    }
    
    render() {
        return (
            <Router history={history}>
                <div className="app">
                
                    <Route exact path="/" component={ TaskList } />
                    <Route exact path="/:taskid" component={ TaskInfo } />
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTasks: () => dispatch(setTasks())
    }
}

export default connect(null, mapDispatchToProps)(App);
