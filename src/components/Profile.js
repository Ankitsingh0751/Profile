import React from 'react'
//import axios from 'axios';
import "./Profile.css"

function Profile() {



    return (
        <div className='profilecard'>
            <div className='edit'>
                <img src="/image/edit.svg" alt="" /> 
            </div>
            
                <div className='info-container'>
                    <div className='imgl'><img src="/image/user.png" alt="" /></div>
                    <div className='name'><p>Saumya Singh     </p></div>
                    <div className='sur'><p>(UI/UX Designer)</p></div>
                </div>
                
                <div>
                    
                
                    <div className='title'>
                   
                        <div className='icon' >
                            <img className='mail' src="/image/envelope.svg" alt="" />
                            <p className='prof'>Saumya.singh@verzeo.com</p>
                        </div>
                        <div className='icon2'>
                            <img className='add' src="/image/add.svg" alt="" />
                            <p className='prof'>Karol Bagh, New Delhi</p>
                        </div>
                        <div className='icon3'>
                            <img className='number' src="/image/phone-call.svg" alt="" />
                            <p className='prof'>7008384523</p>
                        </div>
                
                    </div>
                </div>
                
            
        </div>
    )
}

export default Profile

