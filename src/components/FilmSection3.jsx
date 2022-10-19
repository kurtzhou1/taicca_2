import React from 'react';
import './styles/section2.scss'
// import titleH1 from '../components/images/section2/section3_h1.png'
import title from '../components/images/section2/s3_b1_t.png'
import dataIMG from '../components/images/section2/s3_b1_pic.png'

const FilmSection3 = () => {
    
    return (
        <div className="filmSection3">
            <div className='blockWrap'>
                {/* <div className="block_title_h1">
                    <img src={titleH1} alt="" />
                </div> */}

                <div className="content_block">
                    <div className="l_box">
                        <img src={dataIMG} alt="" />
                    </div>
                    <div className="r_box">
                        <div className="block_title_h2">
                            <img src={title} alt="" />
                            <p>品牌合資內容：新興影視製作籌資模式及其挑戰</p>
                        </div>
                        <div className="content_txt">
                            未來的影視製作，將不再是傳統的出資委託與製作的甲、乙方關係，而是需要多方溝通的多元募資模式。
                        </div>
                        <div className="btn_box">
                            <a className="more_btn" href='./02_internation01.html'>
                                 MORE+
                            </a>
                        </div>
                    </div>

                </div>
            </div>
           
        </div>
    );
}

export default FilmSection3;
