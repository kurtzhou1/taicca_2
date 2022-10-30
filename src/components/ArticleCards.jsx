import React from 'react';
import comicPic from './images/articleCards/comic.png';
import filmPic from './images/articleCards/film.png';
import interdisciplinaryPic from './images/articleCards/interdisciplinary.png';
import gamePic from './images/articleCards/game.png';



const ArticleCards = () => {

    return (
        <>
            <div className="comic" id="01section_COMIC">
                <div className='imgWrap'>
                    <img alt="" src={comicPic} className="comicPic" />
                    <div className='title classBetween'>COMIC</div>
                </div>
                <div className='subtitle classBetween'>從選題到轉譯打造故事力 ——以CCC創作集經驗為例</div>
                <div className='content bigClassSubtitle'>
                IP能否成功，引起閱聽眾共鳴是重要關鍵第一步。前置作業中資料收集影響著「故事力」的底蘊，素材該如何轉譯為有魅力的故事呢？要成就一個膾炙人口的IP，從IP本身經營到外力整合都相當重要，而能否跨域發揚光大至成就IP宇宙，最關鍵當然是IP的故事力，扎實的內容才有無限延伸的空間，而前期醞釀深深影響著IP本質的好壞。
                    <a className='more' href="./01_comic.html">MORE+</a>
                </div>
            </div>
            <div className="film" id="01section_FILM">
                <div className='imgWrap'>
                    <img alt="" src={filmPic} className="filmPic" />
                    <div className='title classBetween'>FILM</div>
                </div>
                <div className='subtitle classBetween'>有關《我的少女時代》──韓國人來告訴你在韓國為什麼紅</div>
                <div className='content bigClassSubtitle'>
                文策院今（2022）年委託Ipsos韓國團隊透過爬梳當地資料與數據，剖析臺灣電影《我的少女時代》能在韓國創下首映近41萬觀影人次，並獲得韓國2016年外國藝術／獨立電影票房第二名，背後的成功因素究竟為何，同時提出未來臺灣電影要進入韓國市場可能面臨的挑戰、機會點，以及可嘗試的行銷方式。
                    <a className='more' href="./01_film.html">MORE+</a></div>
            </div>
            <div className="interdisciplinary" id="01section_INTERDISCIPLINARY">
                <div className='imgWrap'>
                    <img alt="" src={interdisciplinaryPic} className="interdisciplinaryPic" />
                    <div className='title classBetween'>INTERDISCIPLINARITY</div>
                </div>
                <div className='subtitle classBetween'>線上展演來臨，要注意的是......</div>
                <div className='content bigClassSubtitle'>
                自COVID-19影響全球後，流行音樂與表演藝術產業積極拓展線上市場。英國作為音樂展演與表演藝術活動最興盛的國家之一，業者也紛紛向線上發展。流行音樂方面，根據MIDiA Research的《Virtual concerts: A new video format》報告，2020年全球線上音樂展演票房收入約6億美元，但曾參與線上音樂展演活動的消費者占比僅9%，顯示線上音樂展演市場仍有相當大的成長空間；表演藝術方面，英國國家劇院與莎士比亞劇團等團隊陸續推出線上計畫，從劇本創作到展演都能透過線上參與。
                    <a className='more' href="./01_interdisciplinary.html">MORE+</a></div>
            </div>
            <div className="game" id="01section_GAME">
                <div className='imgWrap'>
                    <img alt="" src={gamePic} className="gamePic" />
                    <div className='title classBetween'>GAME</div>
                </div>
                <div className='subtitle classBetween'>德e製，前進！德國策進遊戲內容開發面面觀</div>
                <div className='content bigClassSubtitle'>
                或許最近一次德國遊戲引起我們的注意，是因為全球研調機構Sensor Tower最新公布的《2022手遊市場報告》指出，臺灣已躍升為全球第五大手遊市場，僅次於美、日、中、韓，並擠下長踞排行榜、更是全歐洲第一大的德國。事實上，除了玩家人數眾多之外，德國與臺灣的遊戲業至少還有兩點相似處。
                    <a className='more' href="./01_game.html">MORE+</a></div>
            </div>
        </>
    );
}

export default ArticleCards;
