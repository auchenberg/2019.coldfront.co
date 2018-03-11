import NewsletterForm from '../components/newsletterForm'

export default (props) => (
    <div className="intro d-none d-md-block" style={{ backgroundImage: 'url(' + props.img + ')' }}>
        <div className="overlay-shadow"></div>
        <div className="text">
            <h1>{props.title}</h1>
        </div>
    <style jsx>{`

        /* Shadow Overlay */
        .intro {
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: relative;
            box-shadow: 40px 80px 80px 20px rgba(0, 0, 0, 0.5);

            height: 500px;
            margin-bottom: -200px;
        }

        h1 {
            font-size: 50px;

        }

        .overlay-shadow {
            background-image: linear-gradient(to bottom, transparent 0%,rgba(28,28,45,0.80) 30%, #1c1c2d 70%);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        .text {
            position: absolute;
            top: 30%;
            bottom: 0;
            left: 0;
            right: 0;

            display: flex;
            align-items: center;
            justify-content: center;
        }

    `}</style>
    </div>

)



