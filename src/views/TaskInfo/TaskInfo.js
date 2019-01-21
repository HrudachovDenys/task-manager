import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditableLabel from 'react-inline-editing';
import { updateTask } from '../../store/actions/tasks';
import './TaskInfo.css';

class TaskInfo extends Component {

    constructor(props) {
        super(props);

        this.onFocusOut = this.onFocusOut.bind(this);

        this.state = {
            task: this.props.tasks.find(elem => {
                return +elem.id === +this.props.match.params.taskid
            })
        }
    }

    componentWillUpdate() {
        if(!this.state.task) {
            this.setState({ 
                task: this.props.tasks.find(elem => {
                    return +elem.id === +this.props.match.params.taskid
                })
            });
        }
    }

    onFocusOut(text) {
        let task = { ...this.state.task }
        task.name = text;
        this.setState({ task });
        this.props.updateTask(this.props.tasks, task);
    }

    render() {
        if (this.state.task) {
            return (
                <div className="TaskInfo">
                    <button onClick={() => this.props.history.push("/")}>Вернуться к списку задач</button>
                    <h1>
                        <EditableLabel text={this.state.task.name}
                            onFocusOut={this.onFocusOut}
                        />
                    </h1>
                    <p>Описание: {this.state.task.description}</p>
                    <p>Дата создания: {new Date(this.state.task.creation_date).toLocaleString('ru')}</p>
                    <p>Время потраченое на задачу: {this.state.task.actual_effort}</p>
                    <p>Время выполнения: {this.state.task.estimated_effort}</p>
                    <p>Дата окончания: {new Date(this.state.task.due_date).toLocaleString('ru')}</p>
                </div>
            )
        } else {
            return <></>
        }
    }
}

const mapStateToProps = store => {
    return {
        tasks: store.tasks.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTask: (tasks, newTask) => dispatch(updateTask(tasks, newTask))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskInfo);