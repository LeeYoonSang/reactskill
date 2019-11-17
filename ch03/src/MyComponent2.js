import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mycomponent2 extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: PropTypes.string
    };
    render() {
        const {name, children } = this.props;
        return (
            <div>
                안녕 {name} 입니다. <br />
                children은 {children} 입니다. <br />
            </div>
        )
    }
}

export default Mycomponent2;