export default (props) => (
    <div className={('compact' in props ? 'compact' : '') + ('clean' in props ? 'clean' : '') + ' section row'}>
          <div className="col-12">
            { props.children }
          </div>

          <style jsx>{`
            .section {
              padding-top: 100px;
              padding-bottom: 100px;

              img {
                width: 100%;
              }
            }

            .clean {
                padding-top: 0;
                padding-bottom: 0;
            }

            .compact {
                padding-top: 50px;
                padding-bottom: 50px
            }

            @media (max-width: 1000px) {
                .section {
                    padding: 20px 0;
                }

                .clean {
                    padding-top: 0;
                    padding-bottom: 0;
                }
            }

          `}
          </style>
        </div>
      )
