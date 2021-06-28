import React from 'react'
import './Description.css';

function Description() {
    return (
        <div className='card-container'>
            <button className='btn1'>Job details</button>
            <button className='btn2'>Education details</button>
            <div className='pedit'><img src= '/image/edit.svg' alt=''></img></div>
            <div className='image-conatiner'><img src = '/image/logo.png' alt='' /></div>
            <div className='card-title'>
                <h3>
                    UI UX Designer
                    
                </h3>
                <p className='Acc'>Accenture</p>
            </div>
            <div className='card-body'>
                <p className='year'>Sept 2020-Present</p>
                <p className='address'>Mumbai, Maharastra, India.</p>    
                <p className='des'>Description:</p> 
                <p className='para'>User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces.</p>  
                <p className='skills'>Skills:</p>
                    

                    

                    
                
            </div>
            <div className='choice'>
                
                    <button className='skill1'>wireframing x</button>
                    
                   
                <button className='skill2'>Video editing x</button>
                <button className='skill3'>content writing x</button>
                <button className='skill4'>Photography x</button>
                <button className='skill5'>Visual merchandising x</button>
            </div>
        </div>
    )
}

export default Description
