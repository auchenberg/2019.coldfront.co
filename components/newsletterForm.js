export default ({ children }) => (
    
        <div className="newsletter-form">
        
            <div id="mc_embed_signup">
                <form action="https://coldfrontconf.us8.list-manage.com/subscribe/post?u=cc078fd6eb28f04be591da615&amp;id=778ceac4c9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll"> </div>
                    
                    <div className="mc-field-group form-row">
                        <div className="col">
                            <input type="email" name="EMAIL" className="email form-control required email" placeholder="Your email" id="mce-EMAIL" />
                        </div>

                        <div className="col">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button btn btn-primary" />
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
                padding: 10px;
            }
            
          `}
          </style>
        </div>
      )
    