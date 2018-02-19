export default ({ children }) => (

        <div className="newsletter-form">

            <div id="mc_embed_signup">
                <form action="https://coldfrontconf.us8.list-manage.com/subscribe/post?u=cc078fd6eb28f04be591da615&amp;id=778ceac4c9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll"> </div>

                    <div className="mc-field-group form-row">
                        <div className="col-sm">
                            <input type="email" name="EMAIL" className="email form-control required email" placeholder="Your email" id="mce-EMAIL" />
                        </div>

                        <div className="col-sm">
                            <input type="submit" value="NOTIFY ME" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary fade-glitch" data-text="NOTIFY ME" />
                        </div>
                    </div>

                    <div className="form-row info">
                        <div className="clear">
                            <div className="response" id="mce-error-response"></div>
                            <div className="response" id="mce-success-response"></div>
                        </div>
                    </div>
                </form>
            </div>

            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>


          <style jsx>{`
            .newsletter-form {
                padding: 20px 0;
            }

            .info {
                padding: 20px 0;
            }

            .email {
                text-transform: uppercase;
                font-size: 13px;
                font-family: 'bitbloxmonospaced';
                padding: 14px;
            }

            @media (max-width: 1000px) {
                .newsletter-form {
                    padding: 0;
                }

                .email {
                    margin-bottom: 10px
                }
            }

          `}
          </style>
        </div>
      )
