import React from 'react';
import Button from './Button';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e, type) {
        e.preventDefault();
        if(type) {
            this.setState({ count: this.state.count + 1 })
        }else {
            this.setState({ count: this.state.count - 1 })
        }
    }
    render() {
        return (
            <div>
                <h4>Class Counter</h4>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    increment
                </button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>
                    decrement
                </button>
                <br /><br />
                <Button handleClick={this.handleClick} type={true} text="plus"/>
                <Button handleClick={this.handleClick} type={false} text="minus"/>
            </div>
        );
    }
}
export default ClassCounter