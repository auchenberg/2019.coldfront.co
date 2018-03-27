import NewsletterForm from '../components/newsletterForm'

export default () => (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <ul className="navbar-nav ml-md-auto d-md-flex">
                        <li className="nav-item font-bitblox"><a className="nav-link" href="/why-coldfront">Why ColdFront?</a></li>
                        <li className="nav-item font-bitblox"><a className="nav-link" href="/tickets">Tickets</a></li>
                        <li className="nav-item font-bitblox"><a className="nav-link" href="/about">About</a></li>
                        <li className="nav-item font-bitblox"><a className="nav-link" href="/call-for-recommendations">CFR</a></li>
                    </ul>
                </div>
                <div className="col-md-5 offset-md-2">
                    <p className="font-bitblox">Get the latest news.</p>
                    <NewsletterForm />
                </div>
            </div>

            <div className="row line">
                <div className="col-md-2">
                    <img src="/static/images/icon-heart.svg" />
                    <a href="http://confcodeofconduct.com/">Code of Conduct</a>
                </div>
                <div className="col-md-7 offset-md-3 text-right">
                    Follow us because we are awesome:
                    <a href="http://facebook.com/coldfrontconf"><img src="/static/images/icon-fb.svg" height="16" style={{ marginLeft: '10px' }} /></a>
                    <a href="http://twitter.com/coldfrontconf"><img src="/static/images/icon-twitter.svg" /></a>
            </div>
            </div>

        </div>



      <style jsx>{`

        .line {
            border-top: 1px solid #191D27;
            color: #3E495E;
            font-size: 16px;
            padding: 20px 0;
            margin-top: 20px;

            a:link,
            a:visited {
                color: #3E495E;
            }

            img {
                display: inline-block;
                width: 16px;
                margin-right: 10px;
            }
        }


        .footer {
          padding: 50px 0;

          ul {
            color: white;

            a {
              color: white;
            }
          }

        }

      @media (max-width: 1000px) {

        .footer {
            padding: 10px 0;
            margin-top: 20px;
        }

        img {
            max-width: 50px;
            margin-bottom: 10px;
        }

        p {
            font-size: 10px;
        }

        .line {
            font-size: 13px;
        }

        .navbar-nav {
            margin-bottom: 40px;
        }

      }

      `}</style>
    </div>
  )
