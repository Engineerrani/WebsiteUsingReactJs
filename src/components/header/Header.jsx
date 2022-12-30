import React from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from '../main/Main';
import Containt from '../containt/Containt';




function Header() {

    const clr = {
        color: "red",
        fontSize: "35px",
        fontweight: "bold"
    }

    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src="images/570917-1JeyPs1511436971.jpg" width={45} height={45} alt="logo images" />
                    <h1 className='text'>techy development</h1>
                </div>
                <div className='side_nav'>
                    <ul>
                        <li>Demo</li>
                        <li>Features</li>
                        <li>Spports</li>
                    </ul>
                    <button className='bttn'>Buy Now</button>
                </div>
                <h1 className='middle'>100%</h1>
                <p className='para'>Hi!! Rani here...
                    I have completed bachelor of engineering in computer science.
                    <br>
                    </br>
                    I am the fullstack developer.</p>
                <br></br>
                <br></br>
                <p className='par'>Keep learning, keep exploring.</p>
                <br>
                </br>
                <br></br>
                <a href='https://github.com/Engineerrani'> <button className='bttnn'>Explore</button></a>
            </div>
            <div className='extra '>
                <button className='buton'>LATEST</button>
                <p className='pp'>Lorem amet ullam consec labore ad libero nisi aut vel. Libero ex cumque beatae pariatur ipsa, suscipit odio molestias aliquid.</p>
            </div>
            <div className='container'>
                <p><span style={clr}>32+</span>Unique Designs, <strong>Unlimited</strong><br></br>
                    Layout Variations</p>
                <br></br>
                <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, repellendus Lorem<br></br> ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ea!</h6>
            </div>
            <Main />
            <Main />
            <Main />
            <Main />
            <Main />
            <Main />
            <Main />
            <Main />
            <Main />
            <Containt />



        </>
    )
}

export default Header