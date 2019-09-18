import React from 'react';
import { connect } from 'react-redux';
import { getStream, editStream } from '../../actions/action-creators/streams';
import StreamForm from './StreamForm';

export class StreamChange extends React.Component {
    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }


    render() {
        if (!this.props.stream) {
            return <div>loading...</div>
        } else {
            return (
                <div className="editStream">
                   <h3>Edit a Stream</h3>
                   <StreamForm 
                   initialValues={ { title: this.props.stream.title, description: this.props.stream.description } } 
                   onSubmit={ this.onSubmit } />
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, editStream })(StreamChange);