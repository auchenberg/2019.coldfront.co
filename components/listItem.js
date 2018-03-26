export default (props) => (

    <li className="list-item">

        <div className="avatarBox">
            <img className="avatar" src={props.img} />
        </div>

        <div className="text">
            <div>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
        </div>

    <style jsx>{`

        .list-item {
            list-style: none;

            strong {
                font-weight: 800;
            }
            .subject {
                font-weight: 800;
            }

            .avatarBox {
                height: 300px;
                margin-bottom: 30px;
                overflow: hidden;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: left bottom;
            }

            @media (max-width: 1000px) {
                .avatarBox {
                    height: 110px;
                }
            }
        }
        `}</style>
    </li>
)
