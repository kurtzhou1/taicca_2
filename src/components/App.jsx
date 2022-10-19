import React from 'react';
import './styles/section2.scss'
import './styles/section3.scss'
import Kv from './Kv';
import Focus from './Focus';
import Comic from './Comic';
import Flim from './Flim';
import Music from './Music';
import Game from './Game';
// import Cross from './Cross';
import Publish from './Publish';
import FilmSection2 from './FilmSection2';
import Performance from './Performance';
import FilmSection3 from './FilmSection3';
import CrossSection3 from './CrossSection3';
import Music3 from './Ｍusic3'
import Music3_2 from './Ｍusic3_2'
import VisualArt3 from './VisualArt3'
import MarketIntelligence from './MarketIntelligence'
import ArticleCards from './ArticleCards';
import ArticleCards2 from './ArticleCards2';
import PicTable from './PicTable';
import PicTable2 from './PicTable2';

const Containers = () => {

    return (
        <div className="App">
            {/* <div className='page'><Kv /></div> */}
            <div className='section2_block'>
                <div className='introduction'>
                    <div className='title bigClassTitle'>TAICCA聚焦</div>
                    <div className='content bigClassSubtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum maxime neque laboriosam aut, fugit blanditiis impedit, exercitationem fuga minima delectus pariatur in eveniet alias similique sapiente provident deserunt voluptatibus voluptas dolorem aliquid mollitia tempore. Saepe cumque officia ex a quidem aliquam quod perferendis, in vitae! Suscipit error id officia repellat quidem deserunt soluta, facilis reiciendis repudiandae officiis autem repellendus fugit nulla magni ut ipsa quo omnis qui assumenda quia modi eius aliquam, unde iste. Similique accusamus voluptatibus aliquam quaerat doloremque sunt animi repellendus atque eos hic vitae, quia blanditiis nihil? Mollitia, tempora! Repellat autem nobis molestias consequuntur libero nihil ipsam!</div>
                    <div className='subContent bigClassSubtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, eius sed! Inventore illum itaque dolores. Odio quisquam nisi voluptas tempora pariatur molestias vel tempore, earum delectus nostrum ea, exercitationem sed!</div>
                </div>
                <div className='articleCard'><ArticleCards /></div>
                <div className='bigClassCard1 bigClass'><span>02</span></div>
            </div>
            <div className='section3_block'>
                <div className='introduction'>
                    <div className='title bigClassTitle'>產業研究&nbsp;/&nbsp;台灣觀察</div>
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
            <div className='page_black focusPage'><Focus /></div>
            <div className='page_black comicPage'><Comic /></div>
            <div className='page_black flimPage'><Flim /></div>
            <div className='page_black musicPage'><Music /></div>
            <div className='page_black gamePage'><Game /></div>
            <div className="section_2_block">
                {/* 產業研究(跨域) */}
                {/* <div className='section_2_box'><Cross /></div> */}
                {/* 產業研究(出版) */}
                <div className='section_2_box'><Publish /></div>
                {/* 產業研究(表演藝術) */}
                <div className='section_2_box'><Performance /></div>
                {/* 國際動態(音樂_2) */}
                <div className='section_2_box'><Music3_2 /></div>
                {/* 產業研究(影視) */}
                <div className='section_2_box'><FilmSection2 /></div>
                {/* 國際動態(影視) */}
                <div className='section_2_box'><FilmSection3 /></div>
                {/* 國際動態(跨域) */}
                <div className='section_2_box'><CrossSection3 /></div>
                {/* 國際動態(音樂) */}
                <div className='section_2_box'><Music3 /></div>
                {/* 國際動態(視覺藝術) */}
                <div className='section_2_box'><VisualArt3 /></div>
            </div>

            <div className="section_3_block">
                {/* 情商掃描 */}
                <div className='section_3_box'><MarketIntelligence /></div>
            </div>

            {/* <section id="HOME"><Home/></section>
            <section id="ABOUT"><About/></section>
            <section id="PROJECT"><Project /></section> */}
        </div>
    );
}

export default Containers;
