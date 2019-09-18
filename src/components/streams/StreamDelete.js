import React from 'react';
import Modal from '../modal';
import history from '../../history';
import { connect } from 'react-redux';
import { getStream, deleteStream } from '../../actions/action-creators/streams';


class StreamDelete extends React.Component {
    
    componentDidMount() {
        this.props.getStream(this.props.match.params.id)
    }

    deleteStream = () => {
        this.props.deleteStream(this.props.match.params.id);
    }
    
    renderActions = () =>  (
        <React.Fragment>
            <button onClick={this.deleteStream} className="ui button negative">Delete</button>
            <button onClick={() => history.push('/')} className="ui button">Cancel</button>
        </React.Fragment>
    );

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure want to the delete the stream with title: ${this.props.stream.title}`
    }


    render() {
        return (
            <div>
        <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                    id={this.props.match.params.id} />
            </div>
        )

    }

};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { getStream, deleteStream })(StreamDelete);
