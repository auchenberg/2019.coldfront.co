
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
    let slugLabel = slug(this.props.speakerName, { lower: true})
    let description  = this.props.speakerPosition + `<p>${this.props.speakerName.split(' ')[0]} will cover <strong>${this.props.speakerTheme}.</strong></p>`

    if(this.props.compact && this.props.compact == 'true') {
      url = `/speakers#${slugLabel}`
      body = `will cover <strong>${this.props.speakerTheme}.</strong>`;
    } else {
      url = this.props.twitter
      body = `${description}`
    }

    if(this.props.hideTheme && this.props.hideTheme == 'true') {
      body = this.props.speakerPosition
    }

    return (
        <ListItem
            title={this.props.speakerName}
            body={body}
            img={this.props.speakerImage}
            url={url}
            anchor={slugLabel}
        />
    );
  }
}

export default Speaker;