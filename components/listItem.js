import Markdown from 'react-markdown-it'

export default (props) => (

    <li className="list-item">
            <a name={props.anchor} />
            <div className="avatarBox">
            <a href={props.url}>
                    <img className="avatar" src={props.img} />
                </a>
            </div>

            <div className="text">
                <div>
                    <h3>{props.title}</h3>
                    <Markdown source={props.body } options={{ 
                        html: true
                    }}/>
                </div>
            </div>
        <style jsx>{`
            .list-item {
                list-style: none;
            }
            .list-item .avatarBox {
                display: flex;
                align-items: flex-end;
                min-height: 250px;
                transition: transform 0.7s ease-out;
                position: relative;
                margin-bottom: 30px;                
            }

            .list-item .avatar {
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                object-position: center bottom;
                box-shadow: 40px 80px 80px rgba(0, 0, 0, 0.5);
            }

            .list-item .text{
                position: relative;
            }

            .list-item:hover .avatarBox{
                transform: translate(0, -10px);
            }

            @media (max-width: 600px) {
                .list-item{
                    margin-bottom: 100px;
                }

                .list-item .avatar{
                    position: relative;
                }

                .list-item:hover{
                    transform: none;
                }

                .list-item .avatarBox {
                    height: auto;
                }
            }

        `}</style>
    </li>
)
