import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FastfoodIcon from '@mui/icons-material/Fastfood';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="left-section">
                {/* <div className="logo"> */}
                    <FastfoodIcon size="large" />
                {/* </div> */}
                <div className="footer-message">
                    <p>&copy; {new Date().getFullYear()} Dhaka Catering</p>
                </div>
            </div>
            <div className="right-section">
                <ul className="social-icons">
                    <li><a className='link' href="#"><FacebookOutlinedIcon /></a></li>
                    <li><a className='link' href="#"><InstagramIcon /></a></li>
                    <li><a className='link' href="#"><YouTubeIcon /></a></li>
                </ul>
            </div>
        </footer>
    )
}
