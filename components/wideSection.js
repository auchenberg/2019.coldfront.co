export default ({ children }) => (

    <div className="wide-section col-md-10 offset-md-1">

        <div className="row">
            { children }
        </div>

          <style jsx>{`
            .wide-section {
                padding: 100px 40px;
                background: #0c0c14;
            }

            @media (max-width: 1000px) {
                .wide-section {
                  padding: 20px;
                  width: 100%
                }
            }
          `}
          </style>
        </div>
    )
