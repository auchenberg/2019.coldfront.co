export default (props) => (
    <div className={('compact' in props ? 'compact ' : '') + ('clean' in props ? 'clean ' : '') + ('bright' in props ? 'bright ' : '') + ' section row'}>
        <div className="container">

            <div className="col-12">
                { props.children }
            </div>

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

            .bright {
                    background:#151D45;
            }

            .compact {
                padding-top: 50px;
                padding-bottom: 50px
            }

            @media (max-width: 1000px) {
                .section {
                    padding: 40px 0;
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
