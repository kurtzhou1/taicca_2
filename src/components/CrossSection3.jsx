import React from 'react';
import './styles/section3.scss'
import titleH2 from '../components/images/section2/s3_b2_t.png'
// import commaIMG from '../components/images/section2/comma_img.png'

const CrossSection3 = () => {
    
    return (
        <div className="crossSection3Mask">
            <div className="crossSection3">
                <div className='blockWrap'>
                    <div className="content_block">
                        <div className="block_title_h2">
                            <img src={titleH2} alt="" />
                            <p>從臺灣文化內容在日本社群聲量表現探討社群運用</p>
                        </div>
                        <div className="content_txt">
                        臺灣作品進入日本市場除了收視率與票房表現外，文策院鎖定具有聲量之特定內容進一步觀察其日本社群中的發展與討論狀況。研究發現出版多藉由獎項、臺日合作、名人推薦獲得聲量，而影視作品則呈現出多元性，且臺灣特色內容具有討論聲量。
                        </div>

                        <div className="annotation_block">
                            吳明益在2021年4月推出日譯本《複眼人》當日累積近450則聲量，此外，《天橋上的魔術師》和《單車失竊記》也都具有討論聲量，顯示出在日本出版市場具有讀者群關注的現象。而李琴峰則在2021年7月獲得芥川賞時，達到單日聲量突破12,000的高峰。
                        </div>
                        <div className="btn_box">
                            <a className="more_btn" href='./02_internation02.html'>
                                 MORE+
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrossSection3;
