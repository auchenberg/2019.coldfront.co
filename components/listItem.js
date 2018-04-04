export default (props) => (

    <li className="list-item">

        <div className="avatarBox">
            <img className="avatar" src={props.img} />
        </div>

        <div className="text">
            <div>
                <h3>{props.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: props.body }}></p>
            </div>
        </div>

    <style jsx>{`

        .list-item {
            list-style: none;
            transition: transform 1s ease-out;

            .subject {
                font-weight: 800;
            }

            .avatarBox {
                height: 450px;
                margin-bottom: 30px;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                object-position: center bottom;
                box-shadow: 40px 80px 80px rgba(0, 0, 0, 0.5);
            }

            &:hover{
                transform: translate(0, -10px);
            }
        }

        @media (max-width: 1000px) {
            .list-item{
                margin-bottom: 100px;
                &:hover{
                    transform: none;
                }
                

                .avatarBox {
                    height: auto;
                }
            }
        }
        `}</style>
    </li>
)
