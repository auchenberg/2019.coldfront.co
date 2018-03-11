
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
        <div className="speaker-avatar col-md-12 col-xs-12">
                <div className="overlay-shadow"></div>
                <div className="text">
                    <div>

                        <h3>{this.props.speakerName}</h3>
                        <p>{this.props.speakerSubject}</p>
                        <p className="title">{this.props.speakerPosition}</p>
                    </div>

                </div>
            </div>

        <style jsx>{`

            .speaker-card {
                width: 30%;

            }

            .title {
                font-size: 12px;
                position: absolute;
                bottom: 0;
                left: 40px;
            }

            .speaker-avatar {
                background-image: url(${this.props.speakerImage});
                background-size: cover;
                box-shadow: 40px 80px 80px 20px rgba(0, 0, 0, 0.5);
                height: 30vw;

                position: relative;

                .overlay-shadow {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to top,#1c1c2d 0%,transparent);
                }

                .text {
                    position: absolute;
                    bottom: 0;
                    top: 40%;
                    left: 0;
                    right: 0;

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                    padding: 20px 40px;
                }
            }

          `}</style>
    </div>
    );
  }
}

export default Speaker;