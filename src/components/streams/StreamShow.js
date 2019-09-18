import React from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions/action-creators/streams';

class StreamShow extends React.Component {

    componentDidMount() {
        console.log('this.props.match.params.id: ', this.props.match.params.id);
        this.props.getStream(this.props.match.params.id);
    }

    render() {
        

        if (this.props.stream) {
            const { title, description } = this.props.stream;
            return (
                <div>
                    <h1>{title}</h1>
                    <h5>{description}</h5>
                </div>
            )
        }

        return <h3>Loading...</h3>
    }
};

const mapStateToProps = (state, ownProps) => {
    console.log('state', state);
    return {
        stream: state.streams[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { getStream })(StreamShow);
