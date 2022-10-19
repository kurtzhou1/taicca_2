import React from 'react';
import './styles/section3.scss'
import IMG from '../components/images/section2/img_music.png';
import titleH2 from '../components/images/section2/s3_b3_t_p.png'

const Music3_2 = () => {

    return (
        <div className="music3">
             <div className='blockWrap'>
                 <div className="content_block">
                    <div className="block_title_h2">
                        <img src={titleH2} alt="" />
                    </div>
                    <div className="btm_block">
                        <div className="l_box">
                            <div className="block_title_h2">
                                <p>永續發展，以國際趨勢為例，臺灣音樂也做得到</p>
                            </div>
                            <div className="content_txt">
                                在去年底的COP26簽訂格拉斯哥氣候協定後，2050年淨零排放（Net Zero）已是全球氣候行動的共識。而音樂產業也不例外，全球三大音樂唱片公司，環球、華納、Sony以及部分廠牌也回應簽署音樂氣候協定，目標2030年減碳50%、2050年淨零排放。
                            </div>
                            <div className="btn_box">
                                <a className="more_btn" href='./02_tw05.html'>
                                    MORE+
                                </a>
                            </div>
                        </div>
                        <div className="r_box">
                            <img src={IMG} alt="" />
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    );
}

export default Music3_2;
