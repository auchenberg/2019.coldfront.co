import Header from '../components/header'

import WideSection from '../components/wideSection'


export default () => (
  <div className='page-tickets'>

    <Header />

    
        <div className="tickets row justify-content-center">
          <div className="box col-md-10">
            <div className="row justify-content-center">
              <div className="col-md-6">
                  <h2>Tickets</h2>
                  <tito-widget event="coldfront/coldfront-2018"></tito-widget>
              </div>
            </div>
          </div>
        </div>



    <style jsx>{`    
      .tickets {
          padding: 40px 40px;
          background: #0c0c14;
          
          min-height: 700px;
      }

      .box {
        border: solid 1px #092ce3;
        padding: 50px;
      }
    `}</style>


  </div>
)
