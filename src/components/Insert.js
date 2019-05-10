import React, { Component } from 'react';
import {
    Form,
    Button,
    Label,
    Input,
    FormGroup
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Insert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            check: false,
            data: []
        }
    }

    componentDidMount() {
        this.setState({
            data: JSON.parse(localStorage.getItem('data'))
        });
    }

    onChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleStorage = async () => {
        const { data, name, check } = this.state;
        const arr = data;
        arr.push({ name, check });
        await this.setState({
            data: arr
        })
        localStorage.setItem('data', JSON.stringify(data));
    }

    render() {
        const { name, check } = this.state;

        return (
            <div>
                <h2>New item</h2>
                <Form>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <Input type="text" value={name} onChange={this.onChange} name="name" id="name" placeholder="Insert item name here" />
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" name="check" id="check" onChange={this.onChange} checked={check} /> {' '}
                            Done?
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" onClick={this.handleStorage}>Add</Button>
                        <Link to="/" className="btn btn-secondary ml-4 mr-4">Back to list</Link>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}