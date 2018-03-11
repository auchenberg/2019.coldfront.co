export default (props) => (

    <li className={ 'list-item ' + (props.size ? 'col-md-' + props.size : 'col-md-6')}>
        <div className="img" style={{ backgroundImage: 'url(' + props.img + ')' }}></div>
        <div className="overlay"></div>
        <div className="text">
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>

    <style jsx>{`

        .list-item {
            height: 500px;


            display: flex;
            align-items: flex-end;
            justify-content: center;

            padding: 20px;
            position: relative;
        }

        .img {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;

            background-repeat: no-repeat;
            background-size: cover;
        }

        .overlay {
            background-image: linear-gradient(to top, #1c1c2d, rgba(28, 28, 45, 0.80) 100%, rgba(108, 28, 45, 0));
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 2;
        }

        .text {
            position: relative;
            z-index: 2;
            padding: 15px;
        }


        `}</style>
    </li>
)
