import React, {useState, useEffect} from 'react';
import './styles/kv.scss';
import kv_img_left from './images/kv/kv_img_left.png';
import kv_img_left_M from './images/kv/kv_img_left_M.png';
import kv_img_right from './images/kv/kv_img_right.png';

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
        <div className="kv">
            <div className="kv_header"><span>Taiwan Creative Content Agency Publishing</span></div>
            <div className="kv_body">
                <div className="title" />
                <div className='subtitleIsPC'>探索文化內容新商模</div>
                <div className='subtitleIsM'><div>探索</div><div>文化內容新商模</div></div>
            </div>
            {isPc ? <img alt="" src={kv_img_left} className="kv_img_left" /> :
            <img alt="" src={kv_img_left_M} className="kv_img_left" />
            }
            <img alt="" src={kv_img_right} className="kv_img_right" />
        </div>
    );
}

export default Kv;
