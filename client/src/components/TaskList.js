import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from "react-transition-group"
import uuid from 'uuid'

class TaskList extends Component {
    state = {
        tasks: [
            { id: uuid(), name: 'Task 1'},
            { id: uuid(), name: 'Task 2'},
            { id: uuid(), name: 'Task 3'},
            { id: uuid(), name: 'Task 4'}
        ]
    }

    render() {
        const { tasks } = this.state
        return (
            <Container>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={()=> {
                        const name = prompt('Enter Item')
                        if(name) {
                            this.setState(state => ({
                                tasks: [...state.tasks, {id: uuid(), name}]
                            }))
                        }
                    }}
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
                                        onClick={()=> {
                                            this.setState(state => ({
                                                tasks: state.tasks.filter(task => task.id !== id)
                                            }))
                                        }}
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

export default TaskList