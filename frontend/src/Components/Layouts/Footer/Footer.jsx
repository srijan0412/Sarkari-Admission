import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div id='main'>
    <div id="footer">
                <div id="fleft">
                    <h1 id='Brand'>Sarkariadmission.in</h1>
                    <p>Revolutionalizing the future of admission counseling !</p>
                    <img src="https://images.assetsdelivery.com/compings_v2/pvl0707/pvl07071804/pvl0707180400384.jpg"
                        alt=""/>
                    <button class="rowtxts"><h2>Download APP</h2></button>

                </div>
                <div id="fright">
                    <a href="">
                        <span>Home</span>
                        <div className="opening"></div>
                    </a>
                    <a href=""><span>Services</span>
                        <div className="opening"></div>
                    </a>
                    <a href=""><span>Contact</span>
                        <div className="opening"></div>
                    </a>
                    <a href=""><span>About</span>
                        <div className="opening"></div>
                    </a>
                    <a href="https://www.instagram.com/reel/CiSIbOdAXEn/?utm_source=ig_web_copy_link"><span>Instagram</span>
                        <div className="opening"></div>
                    </a>
                    <a href="https://youtu.be/eB-8jCLg5bc"><span>Youtube</span>
                        <div className="opening"></div>
                    </a>
                </div>
            </div>

    </div>

  )
}

export default Footer
