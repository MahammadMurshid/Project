import React from 'react'
import './Footer.css'



import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';

export default function Footer() {
    const mystyle = {

        backgroundColor: 'rgb(233, 233, 233)',
        height: '333px',
        marginTop: ' 55px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gridGap: '211px'
        //textAlign: 'Center',

    }

    return (
        <>
            <div style={mystyle} className="Container">
                <div className="Footer-Detail FooterH">
                    <h2>Murshid</h2>
                    <p>Address: 60-49 Road 11378 New York</p>
                    <p>Phone: +65 11.188.888</p>
                    <p>Email: Murshid.com</p>

                </div>
                <div className="Link-detail-head FooterH">
                    <h4 style={{ padding: 0 }}>UseFul Links</h4>
                    <div className="Link-detail" style={{ paddingRight: '21px' }}>
                        <div className='LinksStyle'>
                            <a href="/"><p>About Us </p></a>
                            <a href="/"><p>About Our Shop </p></a>
                            <a href="/"><p>Secure Shopping </p></a>
                            <a href="/"><p>Delivery infomation </p></a>
                            <a href="/"><p>Privacy Policy </p></a>
                            <a href="/"><p>Our Sitemap </p></a>
                        </div>
                        <div className='LinksStyle'>
                            <a href="/"><p> Who We Are </p></a>
                            <a href="/"><p>Our Services </p></a>
                            <a href="/"><p>About Our Shop </p></a>
                            <a href="/"><p>Contact </p></a>
                            <a href="/"><p>Innovation </p></a>
                            <a href="/"><p>Testimonials </p></a>
                        </div>
                    </div>

                </div>
                <div className="Footer-Social-Link FooterH">
                    <h3>Join Our Newsletter Now</h3>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <div className="Subscribe">
                        <input type="text" placeholder='Enter Your Mail' />
                        <button>Subscribe</button>
                    </div>
                    <div className="logos">
                        <p>   <TwitterIcon /></p>
                        <p><FacebookOutlinedIcon /></p>
                        <p><InstagramIcon /></p>
                        <p>  <WhatsAppIcon /> </p>
                    </div>

                </div>


            </div>
            <div className="CopyRight">
                <p>CopyRight &copy; www.vegetable.com</p>

            </div>

        </>
    )
}
