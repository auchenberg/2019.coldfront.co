export default () => (

    <div className="splash">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <img className='img' src="/static/images/splash/splash.png" />
        </div>
      </div>

      <div className="btn-splash font-bitblox">
        <a className="btn btn-primary glitch" data-text="Get your ticket" href="https://2018.coldfront.co/tickets">
          Get your ticket <i className="fas fa-arrow-right"></i>
        </a>
        <p className="font-bitblox">NOV 13-14 2018</p>
      </div>

      <style jsx>{`
      .splash {
        position: relative;
        .img {
          width: 100%;
        }

        .btn-splash {
          position: absolute;
          top:40%;
          left: 57%;

          a {
            .fa-arrow-right {
              margin-left: 10px;
            }
          }

          button {
            background-color: #8f23f5;
            border: none;
            color: white;
            border-radius: 0;
            padding: 6%;
            width: 100%;

            a {
              color: white;

              &:hover {
                text-decoration: none;
              }
            }


          }

          p {
            text-align: right;
            color: #8f23f5;
            font-size: 20px;
            line-height: 2.6;
            letter-spacing: 0.7px;
          }

        }
      }

      @media (max-width: 1000px) {
        .btn-splash {
          position: static !important;
        }
      }

      `}
      </style>
    </div>
  )
