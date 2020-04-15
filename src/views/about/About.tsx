import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';

const About: React.FC<RouteChildrenProps<{ name: string }>> = (props) => {
    return <h2>about-{props.match?.params.name}</h2>;
};

export default About;
