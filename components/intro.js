import NewsletterForm from '../components/newsletterForm'
import Section from '../components/section'

export default (props) => (    
        <div className="intro">
            <div className="narrow text">
                <h2>{props.title}</h2>
                <h1>{props.text}</h1>
            </div>

            {props.img &&
                <img src={props.img} />
            }
        

    <style jsx>{`


        .text {
            padding-bottom: 50px;
        }

        h1 {
            font-size: 38px;
        }

        h2 {
            font-size: 24px;
            font-weight: 500;
        }

        img {
            width: 100%;
        }


    `}</style>
    </div>
)



