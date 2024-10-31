import SocialButton from "@/component/social-button/social-button";
import React from "react";

const IMAGE_URL = "https://i.imgur.com/20qXuyk.jpeg";

function HomePage(){
    const styles = {};
    const socials = [
        {
            id: 'instagram',
            link: 'https://instagram.com/anaveragehost'
        },
        {
            id: 'x',
            link: 'https://x.com/anaveragehost'
        },
        {
            id: 'facebook',
            link: 'https://facebook.com/anaveragehost',
        },
        {
            id: 'blog',
            link: 'https://blog.anaveragehost.com'
        },
        {
            id: 'email',
            link: 'mailto:nitin@anaveragehost.com'
        }
    ]
    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div>
                <h3>AnAverageHost</h3>
            </div>
            <div>
                <img style={{height: 300, width: 300, borderRadius: '50%'}} src={IMAGE_URL} />
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '0.3rem'}}>
                {socials.map((social, index)=>{
                    return (
                        <SocialButton key={`${social.id}${index}`} id={social.id} link={social.link} />
                    )
                })}
            </div>
        </div>
    );
}

export default HomePage;