export default () => (
    <div className='footer'>

        <div><img src="../static/images/favicon.png" /> <p>COLDFRONT</p></div>
        <p>By attending you accept our code of conduct</p>
      <style jsx>{`
        .fiiter {
          width: 150px;
        }

        .footer {
          background-color: #0c0c14;
          padding: 6% 0;
          text-align: center;
          height: 20vh;
          display: flex;
          flex-direction: column;
          justify-content: center;



          div {
          margin-bottom: 1%;

            img {
             width: 2.5%;
            }
          }
        }

      `}</style>
    </div>
  )
