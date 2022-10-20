import React, {useState, useEffect} from 'react';
import './styles/frontPage.scss';
import front_img_M from './images/front/frontPage_M.png';
import front_img from './images/front/frontPage.png';

const Kv = () => {

    const [isPc, setIsPc] = useState(false);
    useEffect(()=>{
        if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ) {
            setIsPc(false);
        }
        else {
            setIsPc(true);
        }
    }, [navigator.userAgent])
    
    return (
        <div className="frontPage">
            <span className="burger">☰</span>
            <div className="fp_header"><span>Taiwan Creative Content Agency Publishing</span></div>
            <div className="fp_header2"><span>taicca.tw</span></div>
            <div className="fp_body classSubtitle">
                <div className="title" />
                <div className='info'>
                    <div>故事升級術！</div>
                    <div>創造怦然心動的方程式</div>
                </div>
            </div>
            {isPc ? <img alt="" src={front_img} className="front_img" /> :
            <img alt="" src={front_img_M} className="front_img_M" />
            }
            <div className='bigClassCard2 bigClass'><span>02</span></div>
        </div>
    );
}

export default Kv;
