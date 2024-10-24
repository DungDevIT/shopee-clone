import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routes';

const App = () => {
    return (
        <Router>
            <Routing />
        </Router>
    );
};

export default App;
