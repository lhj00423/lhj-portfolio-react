import React from 'react';
import './Contact_4.css'; 

const Contact4 = () => {
    return (
        <div id="contact" className='contact'>
            <div className='content-box'>
                <h2 className='titeng'>PLEASE CONTACT ME !</h2>
                <div className='contact-box'>
                    <div id="p-tag">
                        <p className='error'>Error</p><p>를</p>&nbsp;
                        <p className='successfully'>Successfully</p><p>로 바꾸며, 성장하고 싶은 개발자입니다 !</p>
                    </div>
                    <a href='mailto:lhj100411@naver.com'>
                        <div className='contacts-box'>
                            <span>Contact me on E-mail💌</span><br/>
                        </div>
                    </a>    
                    <a href='mailto:lhj100411@naver.com'>
                            <div className='contacts-box'>
                            <span>Thank you ! 👍</span>
                        </div>
                    </a>
                </div>
            </div>    
        </div>
    );
};
export default Contact4;