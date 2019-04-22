import React, { Component } from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

import { addTask } from '../actions/taskActions'


class TaskModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const newTask = {
            id: uuid(),
            name: this.state.name
        }
        // Add task via addTask action
        this.props.addTask(newTask)
        // Close modal
        this.toggle()
    }

    render() {
        return (    
            <React.Fragment>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >
                </Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add Task
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="task">Task</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add Task"
                                    onChange={this.onChange}
                                 />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    task: state.task,

})

export default connect(mapStateToProps, { addTask })(TaskModal)