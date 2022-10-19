import React from 'react';
import './styles/section2.scss'
import title from '../components/images/section2/s2_b2_t.png'
import dataIMG from '../components/images/section2/s2_b2_data.png'

const Publish = () => {
    
    return (
        <div className="publish gary">
            <div className='blockWrap'>
                <div className="content_block">
                    <div className="block_title_h2">
                        <img src={title} alt="" />
                        <p>獨立書店通路的數據積木──探勘友善書業供給合作社進銷存數據</p>
                    </div>
                    <div className="content_txt">
                    文策院為完整出版通路產業的全貌，堆疊產業整體輪廓，在2021年與「臺灣友善書業供給合作社」（簡稱友善書業）共同探勘該社前一年度的完整進銷存數據，就書店這項子產業，補完大型網路書店、實體連鎖書店以外的獨立書店部分數據資料。友善書業2015年銷貨數量為37,691冊，到2020年已達144,468冊，可說雖遇疫情但仍持續成長。此外，出貨的種類在2017年以後維持在兩萬餘種，而2020年增加幅度較大。
                    </div>
                    <div className="data_img_box">
                        <p className="title">
                        2021年1-6月友善書業合作社、博客來、誠品銷售排行─
                        </p>
                        <img src={dataIMG} alt="" />
                        <span>
                            比較2019至2021年前半年，友善書業合作社與博客來、誠品的銷售榜前十名，村上春樹的《第一人稱單數》(時報)是唯一同時出現在不同通路榜單的圖書，其餘品項均無交集。
                        </span>
                    </div>
                    <div className="btn_box">
                        <a className="more_btn" href='./02_tw02.html'>
                            MORE+
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Publish;
