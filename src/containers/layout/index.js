import React from 'react'

import Navigation from '../../components/navigation'

import './layout.css'

const Layout = ({children}) => {    
    return (  
        <>                   
            <header>
                <Navigation />
            </header>          
            <main>   
                <div className="container">
                    {children}        
                </div> 
            </main>  
            <footer className="footer bg-primary">
                <div className="container">
                    <div className="row">
                        <p className="text-dark footer__text">  &copy; 2020</p>
                    </div>
                </div>        
            </footer>   
        </>        
    )
}     

export default Layout
