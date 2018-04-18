
import React from 'react';
import Link from 'next/link'
import ListItem from '../components/listItem'

class Speaker extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {

    return (
        <ListItem
            title={this.props.speakerName}
            body={this.props.speakerSubject}
            img={this.props.speakerImage}
        />
    );
  }
}

export default Speaker;