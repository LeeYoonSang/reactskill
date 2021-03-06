import React, { Component } from 'react';

class Event extends Component {
    state = {
        message: ''
    };

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input 
                type="text"
                name="mssage"
                placeholder="아무거나입력"
                value={this.state.message}
                onChange={this.handleChange}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default Event;