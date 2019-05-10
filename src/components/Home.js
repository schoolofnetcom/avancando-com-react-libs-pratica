import React, { Component } from 'react';
import { 
    Table,
    Badge,
    Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Counter from './Counter';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }

    componentDidMount() {
        this.setState({
            data: JSON.parse(localStorage.getItem('data'))
        });
    }

    render() {
        const  { data } = this.state;

        return (
            <div>
                <Col>
                    <Link to="/add" className="btn btn-primary mb-4 mt-4">New Item</Link>
                </Col>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Check</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>
                                    {item.check === true ? <Badge color="success">True</Badge> : <Badge color="danger">False</Badge>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {/* <Counter length={data.length} /> */}
                <Counter data={data} />
            </div>
        );
    }
}