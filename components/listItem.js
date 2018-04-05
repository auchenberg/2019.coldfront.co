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

    <style jsx>{``}</style>
    </li>
)
