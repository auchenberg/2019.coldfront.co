export default () => (
    <div className="footer">
        <a href="#"><img src="/static/images/logos/coldfront_stacked.svg" /></a>
        <p>By attending you accept <a href="http://confcodeofconduct.com/">our code of conduct</a></p>
      <style jsx>{`

        .footer {
          background-color: #0c0c14;
          padding: 50px 0;
          text-align: center;
          margin: 100px -15px 0 -15px;
        }

        img {
            max-width: 90px;
            margin: 0 auto 40px auto;
        }

      @media (max-width: 1000px) {

        .footer {
            padding: 10px 0;
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
