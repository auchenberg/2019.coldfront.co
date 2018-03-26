
import React from 'react';
import Link from 'next/link'


const PageLink = (props) => (
      <Link href={`/speakers/${props.speakerLink}`}>
        <img className="arrow cursor-pointer" src="/static/images/arrow-purple.svg" />
      </Link>
  )

class Speaker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    let speakerLink = this.props.speakerName.split(" ");

    return (
        <div className="speaker-card">

            <div className="avatarBox">
                <img className="avatar" src={this.props.speakerImage} />
            </div>
            <div className="text">
                <div>
                    <p>
                        <strong>{this.props.speakerName}</strong> is a <span className="title">{this.props.speakerPosition}</span>, and will cover <span className="subject">{this.props.speakerSubject}.</span>
                    </p>
                </div>
            </div>


        <style jsx>{`
            .speaker-card {



            }

            strong {
                font-weight: 800;
            }

            .subject {
                font-weight: 800;
            }

            .avatarBox {
                height: 300px;
                margin-bottom: 30px;
                overflow: hidden;
            }

            img {
                width: 100%;
            }

            .title {

            }

            @media (max-width: 1000px) {
                .avatarBox {
                    height: 110px;
                }
            }

          `}</style>
    </div>
    );
  }
}

export default Speaker;