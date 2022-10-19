import React from 'react';
import './styles/section2.scss'
import title from '../components/images/section2/s2_b4_t.png'
import IMG from '../components/images/section2/s2_b4_pic.png'

const Performance = () => {
    
    return (
        <div className="performance">
            <div className='blockWrap'>
                <div className="content_block">
                    <div className="l_box">
                        <div className="block_title_h2">
                            <img src={title} alt="" />
                            <p>在臺北哪裡經營表演空間有商機？商圈分析是這麼說的</p>
                        </div>
                        <div className="content_txt">
                        如果想要在交通方便、捷運可達、下班可以跟朋友約，順便逛街就會到的蛋黃區商圈設立表演場所，就臺北市內的房地產物件客觀條件，想要經營表演空間的業主有什麼選擇？
                        </div>
                        <div className="btn_box">
                            <a className="more_btn" href='./02_tw04.html'>
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
    );
}

export default Performance;
