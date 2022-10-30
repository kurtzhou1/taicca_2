import React from 'react';
import './styles/section2.scss'
import './styles/section3.scss'
import FrontPage from './FrontPage';
import MarketIntelligence from './MarketIntelligence'
import ArticleCards from './ArticleCards';
import ArticleCards2 from './ArticleCards2';
import PicTable from './PicTable';
import PicTable2 from './PicTable2';

const Containers = () => {

    return (
        <div className="App">
            <div className='page'>
                <FrontPage />
            </div>
            <div className='section2_block'>
                <div className='introduction'>
                    <div className='title bigClassTitle'>TAICCA聚焦</div>
                    <div className='content bigClassSubtitle'>文化內容以多元樣貌滿足不同消費族群的日常娛樂需求，當我們把這些緣起於創意的產品「拆解」，觀察一部漫畫、一齣舞台劇或一場電影背後的製作和生產，它們組成的結構是否存在公式？</div>
                    <div className='content bigClassSubtitle'>首先，吸引人的好故事是基本吧！再來，還需要運籌帷幄的資本；而在科技快速迭代的今日，好的故事加上科技應用，更能吸引愛嘗鮮的消費者。本期TAICCA聚焦「故事升級術！創造怦然心動的方程式」透過四篇文章，與您一起探討故事、資本與科技，如何成為支持文化內容發光的力量！</div>
                    <div className='subContent bigClassSubtitle'>
                        <div>
                            <span className='fontBold'>TAICCA聚焦封面設計：</span>將故事力、資本力跟科技力三個文化內容的重要元素，利用《愛麗絲夢遊仙境》故事轉化，將各個角色拆開再結合，例如代表「故事」的愛麗絲拾起示意「科技」、呼應原作瘋帽的太空帽，散落的硬幣雨代表「資本」，而在硬幣上刻有兔子頭像和專屬皇后的愛心圖案。角落的白兔與月亮也有一點傳說的味道，是充滿幻想又穿插現實的一張插畫。
                        </div>
                        <div>
                            <span className='fontBold'>插畫家 林花：</span>自由接案插畫家，容易踢被子的白羊座，最近的限時動態都是廢文。
                        </div>
                    </div>
                </div>
                <div className='articleCard'><ArticleCards /></div>
                <div className='bigClassCard1 bigClass'><span>02</span></div>
            </div>
            <div className='section3_block'>
                <div className='introduction'>
                    <div className='title bigClassTitle'>產業研究&nbsp;/&nbsp;臺灣觀察</div>
                    <div className='picTable'><PicTable /></div>
                </div>
                <div className='bigClassCard1 bigClass'><span>02</span></div>
                <div className='introduction'>
                    <div className='title bigClassTitle'>產業研究&nbsp;/&nbsp;國際動態</div>
                    <div className='articleCard2'><ArticleCards2 /></div>
                    <div className='introduction'>
                    <div className='picTable'><PicTable2 /></div>
                </div>
                </div>
                <div className='bigClassCard2 bigClass'><span>03</span></div>
            </div>
            <div className="section4_block">
                {/* 情商掃描 */}
                <div className='section_3_box'><MarketIntelligence /></div>
            </div>
        </div>
    );
}

export default Containers;
