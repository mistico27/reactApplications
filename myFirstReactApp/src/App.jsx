import './app.css'
function App() {
  return (
   <>
<div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        Christan-Vite
                    </h3>
                    <span className='loginDesc'>
                        this is my try of Vite
                    </span>
                </div>
                <div className="loginRight">
                <img  className="newlogo" src="https://vitejs.dev/logo-with-shadow.png"/>
                </div>
            </div>
            
        </div>
        <br></br>
        <div className="flex-container">
	        <div className="flex-box">
          <div className='icon'>
              Icon
            </div>
            <div className='myserver'>Instant server</div>
            <p className='parrafo'>Aqui va un parrafo</p>
	        </div>
          <div className="flex-box">
          <div className='icon'>
              Icon
            </div>
            <div className='myserver'>Instant server</div>
          <p className='parrafo'>Aqui va un parrafo</p>
	        </div>
	        <div className="flex-box">
            <div className='icon'>
              Icon
            </div>
            <div className='myserver'>Instant server</div>
          <p className='parrafo'>Aqui va un parrafo</p>
	        </div>
	        <div className="flex-box">
          <div className='icon'>
              Icon
            </div>
            <div className='myserver'>Instant server</div>
          <p className='parrafo'>Aqui va un parrafo</p>
	        </div>
	        <div className="flex-box">
          <div className='icon'>
              <img src="data:image/png;base64,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" alt="" />
            </div>
            <div className='myserver'>Instant server</div>
          <p className='parrafo'>Aqui va un parrafo</p>
	        </div>
	        <div className="flex-box">
          <div className='icon'>
              Icon
            </div>
            <div className='myserver'>Instant server</div>
          <p className='parrafo'>Aqui va un parrafo</p>
	        </div>
        </div>
        </>   
  )
}

export default App
