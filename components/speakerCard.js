
import React from 'react';
import Link from 'next/link'
import ListItem from '../components/listItem'
import slug from 'slug'

class Speaker extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {

    let body;
    let url;

    if(this.props.compact && this.props.compact == 'true') {
      url = `/speakers#${slug(this.props.speakerName, { lower: true})}`
      body = `will cover <strong>${this.props.speakerTheme}.</strong>`;
    } else {
      url = this.props.twitter
      body = `<span class='title'>${this.props.speakerPosition}</span>.</br></br> will cover <strong>${this.props.speakerTheme}.</strong>`;
    }

    return (
        <ListItem
            title={this.props.speakerName}
            body={body}
            img={this.props.speakerImage}
            url={url}
        />
    );
  }
}

export default Speaker;