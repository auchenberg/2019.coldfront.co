
import React from 'react';
import Link from 'next/link'
import ListItem from '../components/listItem'

class Speaker extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {

    let speakerLink = this.props.speakerName.split(" ");
    let speakerBody = `<strong> ${this.props.speakerName}</strong> is a <span class='title'>${this.props.speakerPosition}</span>, and will cover <strong>${this.props.speakerSubject}.</strong>`

    return (
        <ListItem
            title={this.props.speakerName}
            body={speakerBody}
            img={this.props.speakerImage}
        />
    );
  }
}

export default Speaker;