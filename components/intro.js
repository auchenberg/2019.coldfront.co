import NewsletterForm from '../components/newsletterForm'
import Section from '../components/section'

export default (props) => (    
        <div className="intro">
            <div className="narrow text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>

            {props.img &&
                <img src={props.img} />
            }
        

    <style jsx>{`


        .text {
            padding-bottom: 50px;
        }

        img {
            width: 100%;
        }


    `}</style>
    </div>
)



