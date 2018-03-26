import NewsletterForm from '../components/newsletterForm'
import Section from '../components/section'

export default (props) => (

    <Section>
        <div className="intro">
            <div className="row text">
                <div className="col-md-8">
                    <h2>{props.title}</h2>
                    <h1>{props.text}</h1>
                </div>
            </div>

            {props.img &&
            <div className="row">
                <div className="col-md-12">
                    <img src={props.img} />
                </div>
            </div>
            }
        </div>

    <style jsx>{`


        .text {
            padding-bottom: 50px;
        }

        h1 {
            font-size: 38px;
        }

        h2 {
            font-size: 24px;
            font-weight: 600;
        }

        img {
            width: 100%;
        }

        @media (max-width: 1000px) {
            .intro {
                h1 {
                    font-size: 20px;
                }
            }
        }


    `}</style>
    </Section>

)



