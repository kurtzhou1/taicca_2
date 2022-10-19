import React from 'react';
import './styles/section2.scss'
import titleH1 from '../components/images/section2/section3_h1.png'
import title from '../components/images/section2/s3_b1_t.png'
import dataIMG from '../components/images/section2/s2_b3_data.png'

const FilmSection2 = () => {
    
    return (
        <div className="filmSection2">
            <div className="blockWrap">
                <div className="block_title_h1">
                    <img src={titleH1} alt="" />
                </div>
                <div className='content_block'>
                    <div className="block1">
                        <div className="block_title_h2">
                            <img src={title} alt="" />
                            <p>從影視主題曲流佈初探臺灣影視目標市場</p>
                        </div>
                        <div className="content_txt">
                        近兩年國片票房亮眼，票房破億超過五部，不少主題曲、插曲於流行音樂榜名列前茅。由於疫情，各國影院歇業或觀眾不上門，某段時期國片於是多上架國際串流平臺，取代過去的電影賣埠、實體上映。透過線上接觸潛在觀眾的特殊時期播映模式，是否可探查臺灣電影在全球各國於疫情解封後實體落地播映的市場機會？我們將透過電影主題曲與電影受歡迎的相關聯性，和主題曲在各國的受歡迎程度來進行推測。以下將以Chartmetric資料庫來檢視我國電影還能開拓哪些實體上映市場。
                        </div>
                        <div className="data_box">
                            <img src={dataIMG} alt="" />
                        </div>
                        <div className="btn_box">
                            <a className="more_btn" href='./02_tw03.html'>
                                MORE+
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmSection2;
