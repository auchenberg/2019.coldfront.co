export default ({ children, sectionName }) => (
    <div className={`section container-fluid ${sectionName}`}>
          <div className="row">
            { children }
          </div>

          <style jsx>{`
            .section {
              padding: 100px 0;

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
