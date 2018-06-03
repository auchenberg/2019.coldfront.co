
import React from 'react';
import Link from 'next/link'
import ListItem from '../components/listItem'
import slug from 'slug'
import MarkdownIt from 'markdown-it'

class Speaker extends React.Component {
  constructor(props) {
    super(props);
    this.md = new MarkdownIt();
  }

  render(props) {
    let body;
    let url;
    let slugLabel = slug(this.props.speakerName, { lower: true})
    let description  = this.md.render(this.props.speakerPosition)

    if(this.props.compact && this.props.compact == 'true') {
      url = `/speakers#${slugLabel}`
      body = `will cover <strong>${this.props.speakerTheme}.</strong>`;
    } else {
      url = this.props.twitter
      body = `${description}</br>${this.props.speakerName.split(' ')[0]} will cover <strong>${this.props.speakerTheme}.</strong>`;
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