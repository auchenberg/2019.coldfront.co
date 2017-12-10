export default ({ children }) => (
    
    <div className="wide-section">
        
        <div className="row">
            { children }
        </div>

          <style jsx>{`
            .wide-section {
                padding: 100px 40px;
                background: #0c0c14;
            }
          `}
          </style>
        </div>
    )
    