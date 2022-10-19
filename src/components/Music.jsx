import React, { useState, useEffect } from 'react';
// import './styles/page_black.scss';
import title from './images/black_page/music_title.png';
import title_M from './images/black_page/music_title_M.png';
import music_jay from './images/black_page/music_jay.png';

const Music = () => {

    const [isPc, setIsPc] = useState(false);
    useEffect(() => {
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ) {
            setIsPc(false);
        }
        else {
            setIsPc(true);
        }
    })

    return (
        <div className="music">
            <div className='title' >
                <img alt="" src={isPc ? title : title_M} width={isPc ? 'auto' : '450'} />
            </div>
            <div className='content'>
                <div className='blockWrap'>
                    <div className="block1">
                        <div className="subTitle">
                            音樂市場新商模，市場金礦山已經出現？
                        </div>
                        <div className="subContent">
                            根據國際唱片業協會報告顯示，音樂產業線上產值在2021年達到整體產值的67%，時至2022年，線上產值將突破七成，消費型態、版權與商業模式等也在持續變化中。新技術概念的加入，更讓未來趨勢走向多元。文策院今年推出的《2021年臺灣文化內容產業調查告III：流行音樂、廣播產業》介紹音樂產業的三種新商業模式，有近二年最火熱的NFT話題、歌曲版權投資與利用音樂版權指數的交易平臺。
                        </div>
                    </div>
                    <div className="block2">
                        <a className="button" href="./01_music.html">MORE+</a>
                    </div>
                    <div className='block3'>
                        <div className='img'>
                        </div>
                    </div>
                </div>
                <div className='music_jay'>
                    <img alt="" src={music_jay} />
                    <div className='black1' />
                    <div className='text'>
                        周杰倫潮牌「PHANTACi」與Ezek平臺聯名推出的「Phanta Bear」NFT，不僅在NFT市場刷新世界紀錄，甚至躍上紐約時報廣場那斯達克電視牆。
                    </div>
                    <div className='black2' />
                </div>
            </div>
        </div>
    );
}

export default Music;
