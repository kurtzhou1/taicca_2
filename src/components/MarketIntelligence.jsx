import React,{useState} from 'react';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles/section3.scss'
import popData from './popData.json'
import Popup from './Popup'

import titleH1 from '../components/images/section2/s3_h1.png'
import footerBgl from '../components/images/section2/footer_left.png'
import footerBgr from '../components/images/section2/footer_right.png'
import footerLogo from '../components/images/section2/footer_logo.png'


const MarketIntelligence = () => {
    const [open,setOpen] = useState(false);
    const [poptitle,setPoptitle] = useState('');
    const [popClolr,setPopColor] = useState('');
    const [popContent,setPopContent] = useState('');

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2500,
        responsive:[
            {
                breakpoint: 990,
                settings:{
                   slidesToShow: 2, 
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1, 
                }
            }
        ]
      };

    return (
        <div className="marketIntelligence">
            <div className="content_block">
                <div className="block_title_h1">
                    <img src={titleH1} alt="" />
                </div>
                <div className="subTitle">
                    想了解文化內容產業最新動態？<br />
                    《TAICCA誌》帶你快速掌握全球文化內容產業重要商業情報
                </div>

                {/* 輪播 */}
                <div className="slider_block">
                    <Slider {...settings}>
                        {
                            popData.map((item,idx)=>{
                                return (
                                    <div className={`slider_box`} key={`slider${idx}`}>
                                        <div className={`news_card ${item.color}`}>
                                            <h3 className="card_title">
                                               {item.title}
                                            </h3>
                                            <p>
                                                {item.desc}
                                            </p>
                                            <div className="more_link" 
                                                onClick={()=>{
                                                    setOpen(!open);
                                                    setPopColor(item.color);
                                                    setPopContent(item.content);
                                                    setPoptitle(item.title);
                                                 }
                                                }
                                            >MORE+</div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>

       
            </div>
        
                <img src={footerBgl} alt="" className='footerBGl'/>
                <img src={footerBgr} alt="" className='footerBGr'/>
                <img src={footerLogo} alt="" className='footerLogo'/>
               
               <Popup open={open} closeFun={()=>{setOpen(false)}} title={poptitle} content={popContent} color={popClolr}/>
        </div>
    );
}

export default MarketIntelligence;
