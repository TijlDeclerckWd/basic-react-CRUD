import React from 'react';
import { connect } from "react-redux";
import { getAllStreams } from "../../actions/action-creators/streams";
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.getAllStreams();
    }

    componentDidUpdate() {
        console.log('this.auth', this.props.auth);
    }

    renderCreateStreamButton() {
        if (this.props.auth.isSignedIn) {
            return (
                <Link to="/streams/new"><button className="ui right floated button">Create Stream</button></Link>    
            )
        }
    }

    renderAdmin = (stream) => {
        if (this.props.auth.isSignedIn && stream.userId === this.props.auth.userId) {
            return (
                <div className="button-container right floated content">
                <Link to={`/streams/edit/${stream.id}`}><button className="edit-button ui button primary">Edit</button></Link>
                <Link to={`/streams/delete/${stream.id}`}><button className="delete-button ui button negative">Delete</button></Link>
            </div>
            )
        }
    }

    renderList = () => {
        console.log('streams', this.props.streams);
        return this.props.streams.map((stream) => (
            <div key={stream.id} className="item">
                {this.renderAdmin(stream)}
                <i className="large middle aligned icon camera" />
                <div className="content">
                    <Link to={`/streams/show/${stream.id}`}>{stream.title}</Link>
                    <div className="description">{stream.description}</div>
                </div>
            </div>
        ))
    };

    render() {
        return (
            <div className="stream-list">
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreateStreamButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    streams: Object.values(state.streams),
    auth: state.auth
});

export default connect(mapStateToProps, { getAllStreams })(StreamList);
