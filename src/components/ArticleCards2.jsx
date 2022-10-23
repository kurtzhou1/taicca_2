import React from 'react';
import future1Pic from './images/articleCards2/future1.png';
import comicPic from './images/articleCards2/comic.png';
import future2Pic from './images/articleCards2/future2.png';
import gamePic from './images/articleCards2/game.png';



const ArticleCards = () => {

    return (
        <>
            <div className="comic">
                <div className='imgWrap'>
                    <img alt="" src={future1Pic} className="future1Pic" />
                    <div className='title classTitle'>FUTURE&nbsp;CONTENT</div>
                </div>
                <div className='subtitle classSubtitle'>未來內容產業發展與挑戰</div>
                <div className='content classSubtitle'>
                創新技術促進產生新內容與創作形式，為原有內容創作帶來轉化加値的可能性。針對未來內容產業，由於國際上仍無淸楚的分類，大致以科技結合內容創作、並產生創新體驗皆可納入未來內容範疇。文策院針對「未來內容」趨勢進行研析，以內容創作與技術加値的作法，定義未來內容產業的界線。
                    <span className='more'>MORE+</span></div>
            </div>
            <div className="film">
                <div className='imgWrap'>
                    <img alt="" src={gamePic} className="gamePic" />
                    <div className='title classTitle'>GAME</div>
                </div>
                <div className='subtitle classSubtitle'>一級玩家》的世界即將實現？</div>
                <div className='content classSubtitle'>
                在疫情期間，VR硬體在2020-2021年已出現突破性成長，以持有者數量為例，2021年全球VR機種持有者達2千萬，較2020年成長62%，遊戲產業調查研究機構Newzoo在2022年的《全球遊戲市場年度報告》中出了「VR市場評估專題」，預期到2024年使用者會成長到4千萬人。
                    <span className='more'>MORE+</span></div>
            </div>
            <div className="interdisciplinary">
                <div className='imgWrap'>
                    <img alt="" src={future2Pic} className="future2Pic" />
                    <div className='title classTitle'>FUTURE&nbsp;CONTENT</div>
                </div>
                <div className='subtitle classSubtitle'>移動式VR帶你進元宇宙</div>
                <div className='content classSubtitle'>
                VR頭顯近年來從連接電腦，進步到可以單機使用，因此也提供了使用者移動的可能性，使用者在眞實世界可以自由移動的事實，讓玩家有更多實體體驗，也可以與其他人一起進入元宇宙，滿足了社交需求，因此開啟了VR各種可能的新商業模式。
                    <span className='more'>MORE+</span></div>
            </div>
            <div className="game">
                <div className='imgWrap'>
                    <img alt="" src={comicPic} className="comicPic" />
                    <div className='title classTitle'>COMIC</div>
                </div>
                <div className='subtitle classSubtitle'>NFT將為漫畫打造新粉絲經濟</div>
                <div className='content classSubtitle'>
                身為漫畫迷，你會想擁有沒有實體的數位周邊嗎？日本出版龍頭之一的講談社旗下漫畫雜誌週刊《Young Magazine》挑戰數位轉型，將連載作品《code: ノストラ》每話原稿製作成NFT銷售，上到港加跨國公司KLKTN經營的NFT銷售平台販賣。
                </div>
                <div className='content classSubtitle'>
                日本每年新推出的漫畫近1,000部，但能穩定連載的作品少於二成。《Young Magazine》總編輯鈴木一司表示，海外喜愛日本動漫文化的粉絲，多半也是NFT的主要客群。利用NFT話題行銷，或許有助漫畫作品在連載初期吸引並累積忠實的海內外讀者。
                    <span className='more'>MORE+</span></div>
            </div>
        </>
    );
}

export default ArticleCards;
