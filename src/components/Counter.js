import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        const lengthOfTrue = data.filter(item => item.check === true).length;
        const lengthOfFalse = data.filter(item => item.check === false).length;
        return (
            <div>
                <p>Total: {data.length}</p>
                <p>Total of true: {lengthOfTrue}</p>
                <p>Total of false: {lengthOfFalse}</p>
            </div>
        );
    }
}
// export default class Counter extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const { length } = this.props;
//         return (
//             <div>
//                 <p>Total {length} of itens</p>
//             </div>
//         );
//     }
// }