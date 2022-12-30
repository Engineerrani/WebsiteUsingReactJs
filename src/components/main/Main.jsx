import React from 'react'
import './main.css';


function Main() {

    const clr = {
        color: "red",
        fontSize: "35px",
        fontweight: "bold"
    }

    return (
        <>
            <div className="main_div">
                <img className='img1' src="/images/pexels-pixabay-414102.jpg" alt="" />
                <img className='img2' src="/images/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="" />
                <img className='img3' src="/images/the-most-beautiful-picture-of-nature-wallpaper-preview.jpg" alt="" />
            </div>
            <div className="head_line">
                <p className='p1'>GoodNews</p>
                <p className='p2'>Tech 1: iGadgets</p>
                <p className='p3'>Tech 1: iGadgets</p>
            </div>

        </>
    )
}

export default Main