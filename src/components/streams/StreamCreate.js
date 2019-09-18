import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/action-creators/streams';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {

    onSubmitForm = (formValues) => {
        console.log('entered the zone', formValues);
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div className="streamCreate">
                <h3>Create a stream</h3>
                <StreamForm onSubmit={this.onSubmitForm} />
        
            </div>
        )
    }
}


export default connect(null, { createStream })(StreamCreate);
