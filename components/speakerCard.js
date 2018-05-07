
import React from 'react';
import Link from 'next/link'
import ListItem from '../components/listItem'

class Speaker extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {

    let body = `<span class='title'>${this.props.speakerPosition}</span>. </br></br> ${this.props.speakerPosition.split(' ')[0]} will cover <strong>${this.props.speakerTheme}.</strong>`;

    return (
        <ListItem
            title={this.props.speakerName}
            body={body}
            img={this.props.speakerImage}
            url={this.props.twitter}
        />
    );
  }
}

export default Speaker;