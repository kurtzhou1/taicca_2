import React, {useState, useEffect} from 'react';
// import './styles/page_black.scss';
import title from './images/black_page/game_title.png';
import title_M from './images/black_page/game_title_M.png';
import game_man from './images/black_page/game_man.png';

const Game = () => {

    const [isPc, setIsPc] = useState(false);
    useEffect(()=>{
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
        <div className="game">
            <div className='title' >
                <img alt="" src={isPc ? title : title_M} width={isPc ? 'auto' : '450'} />
            </div>
            <div className='content'>
                <div className='blockWrap'>
                    <div className="block1">
                        <div className="subTitle">
                            踢到元宇宙：世足賽與電競遊戲的合縱連橫
                        </div>
                        <div className="subContent">
                            當全球名人都風風火火地在「元宇宙」開演唱會、購地、開店，把現實中的品牌搬到虛擬空間究竟怎麼操作？感覺和玩大富翁有多像呢？本文衍伸自《2021年臺灣文化內容產業調查報告IV：遊戲、電競產業》，商人摸索出遊戲與運動在競技形構的相似，以開發足球電競來擴大實體賽季效益早已不是新鮮事。隨著沉浸式科技與社群文化的日益成熟，無論在產業端的聯盟或消費端的金流機制方面，元宇宙的新商模都還有賴更多方合作的探索與突破。
                        </div>
                    </div>
                    <div className="block2">
                        <a className="button" href="./01_game.html">MORE+</a>
                    </div>
                </div>
            </div>
            <div className='game_man_box'>
                <img alt="" src={game_man} className="game_man" />
            </div>
        </div>
    );
}

export default Game;
