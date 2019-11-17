import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
    return <div>
        나의 컴포넌트는 {name} 이다 <br />
        children은 {children}
        </div>;
};

MyComponent.propTypes = {
    name: PropTypes.string
};


export default MyComponent;