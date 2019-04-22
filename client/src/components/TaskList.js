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
    onDeleteClick = id => {
        this.props.deleteItem(id)
    }
    render() {
        let { tasks } = this.props.tasks
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="task-list">
                        {tasks.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={250} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
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