import React from 'react'
//trying to add multiple imgs upon hover transistions to another one


function HomeScreen() {
  return (
    <div style={{paddingTop: "10vh"}}>
    <img class='img-fluid' src={`${process.env.PUBLIC_URL}/images/Vlogger.png`} alt="Responsive"/>
    <img class="img-fluid image-hover" src={`${process.env.PUBLIC_URL}/images/Drawing.png`} alt="Responsive"/>
    {/*<img class="img-fluid image-hover" src={`${process.env.PUBLIC_URL}/images/suisei.png`} alt="Responsive"/>*/}
    <div className='text-on-image'>
        <h1>Start Your Journey Today, Start With US</h1>
    </div>
    </div>
  )
}

export default HomeScreen