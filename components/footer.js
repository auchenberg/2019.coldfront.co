import NewsletterForm from '../components/newsletterForm'

export default () => (
    <div className="footer">
            <div className="top-part content narrow">
                <ul className="navbar-nav left">
                <li><a className="nav-link" href="https://coldfront.co//about">About</a></li>
                    <li><a className="nav-link" href="https://coldfront.co/why-coldfront">Why ColdFront?</a></li>
                    {/* <li><a className="nav-link" href="/tickets">Tickets</a></li> */}
                    {/* <li><a className="nav-link" href="/call-for-recommendations">CFR</a></li> */}
                </ul>
                <div className="right">
                    <p className="font-bitblox">Get the latest news.</p>
                    <NewsletterForm />
                </div>
            </div>

            <div className="content narrow line">
                <div className="left">
                    <img src="/static/images/icon-heart.svg" />
                    <a href="http://confcodeofconduct.com/">Code of Conduct</a>
                </div>
                <div className="right">
                    Follow us because we are awesome:
                    <a href="http://facebook.com/coldfrontconf"><img src="/static/images/icon-fb.svg" height="16" style={{ marginLeft: '10px' }} /></a>
                    <a href="http://twitter.com/coldfrontconf"><img src="/static/images/icon-twitter.svg" /></a>
                </div>
            </div>

      <style jsx>{`
        .left{
            float: left;
        }
        .right{
            float: right;
        }

        .top-part{
            overflow: hidden;
        }

        .line {
            clear: both;
            border-top: 1px solid #191D27;
            color: #3E495E;
            font-size: 16px;
            padding-top: 20px;
            padding-bottom: 20px;
            margin-top: 60px;

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
