import Header from '../components/header'

import WideSection from '../components/wideSection'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div className='page-tickets'>
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
        
        @media (max-width: 1000px) { 
          .box {
            padding: 20px;
          }
        }      
      `}</style>
    </div>

  </Layout>
)
