import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TaskList.css';

class TaskList extends Component {

    render() {
        return (
            <div className="TaskList">
                <h1>Список задач</h1>
                <table className='TaskList__table'>
                    <thead>
                        <tr>
                            <td>Название задачи</td>
                            <td>Теги</td>
                            <td>Время потраченое на задачу</td>
                            <td>Время выполнения</td>
                            <td>Дата окончания</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks
                            .filter(task => task.obj_status === 'active')
                            .map(task => {
                                return (
                                    <tr key={task.id}>
                                        <td className="taskName" onClick={() => this.props.history.push("/" + task.id)}>
                                            {task.is_high_priority ? <b>{task.name}</b> : task.name}
                                        </td>
                                        <td>{task.tags ? task.tags.join(", ") : ''}</td>
                                        <td>{task.actual_effort}</td>
                                        <td>{task.estimated_effort}</td>
                                        <td>{new Date(task.due_date).toLocaleString('ru')}</td>
                                    </tr>
                                )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        tasks: store.tasks.tasks
    }
}

export default connect(mapStateToProps, null)(TaskList);