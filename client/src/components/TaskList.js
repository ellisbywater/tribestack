import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { connect } from 'react-redux'
import { getTasks, deleteItem } from "../actions/taskActions";

class TaskList extends Component {

    componentDidMount() {
        this.props.getTasks()
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id)
    }

    onCreateTask = () => {

    }

    render() {
        let { tasks } = this.props.tasks
        return (
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.onCreateTask}
                >Add Task</Button>
                <ListGroup>
                    <TransitionGroup className="task-list">
                        {tasks.map(({id, name}) => (
                            <CSSTransition key={id} timeout={250} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

TaskList.propTypes = {
    getTasks: PropTypes.func.isRequired,
    tasks: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
})

export default connect(mapStateToProps, {getTasks, deleteItem})(TaskList)