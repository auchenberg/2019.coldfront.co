export default ({ children, className }) => (
    <div className={`section container-fluid ${className}`}>
          <div className="row">
            { children }
          </div>

          <style jsx>{`
            .section {
              padding: 200px 0;

              img {
                width: 100%;
              }
            }

            @media (max-width: 1000px) {
                .section {
                  padding: 40px 0;
                }
            }

          `}
          </style>
        </div>
      )
