import React from 'react';
import {Link} from 'react-router';

class HomePage  extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Admin</h1>
                <p>React redux and webpack</p>
                <Link to="about" className="btn btn-primary">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;