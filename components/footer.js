import NewsletterForm from '../components/newsletterForm'

export default () => (
    <div className="footer">
      <div className="container">

        <div className="row">
          <div className="col-md-1 offset-md-1">
            <ul className="navbar-nav ml-md-auto d-md-flex">
                <li className="nav-item font-bitblox"><a className="nav-link" href="/about">About</a></li>
                <li className="nav-item font-bitblox"><a className="nav-link" href="/tickets">Tickets</a></li>
                <li className="nav-item font-bitblox"><a className="nav-link" href="/call-for-recommendations">CFR</a></li>
            </ul>
        </div>

        <div className="col-md-2 offset-md-1">
            <ul className="navbar-nav ml-md-auto d-md-flex">
                <li className="nav-item font-bitblox"><a className="nav-link" href="/community">Community</a></li>
                <li className="nav-item font-bitblox"><a className="nav-link" href="/social">Social</a></li>
                <li className="nav-item font-bitblox"><a className="nav-link" href="http://confcodeofconduct.com/">Code of Conduct</a></li>
            </ul>
        </div>

        <div className="col-md-5 offset-md-2">
            <p className="font-bitblox">Get the latest news.</p>
            <NewsletterForm />
          </div>
        </div>

      </div>

      <style jsx>{`

        .footer {
          background-color: #0c0c14;
          padding: 50px 0;
          margin: 50px -15px 0 -15px;

          .wrapper {
            display: flex;
            align-items: baseline;
            //width: 40%;

            .fab {
              margin: 0 5px;
            }

            .fa-heart {
              margin: 0 5px;
            }
          }

          ul {
            color: white;

            a {
              color: white;
            }
          }

          div {
            p {
              margin-bottom: -10px;
            }
          }
        }

        img {
            max-width: 90px;
            margin: 0 auto 40px auto;
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

      }

      `}</style>
    </div>
  )
