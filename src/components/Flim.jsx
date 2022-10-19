import React, {useState, useEffect} from 'react';
// import './styles/page_black.scss';
import flim_pie from './images/black_page/flim_pie.png';
import title from './images/black_page/flim_title.png';
import title_M from './images/black_page/flim_title_M.png';
import flim_talk from './images/black_page/flim_talk.png';

const Flim = () => {

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
        <div className="flim">
            <div className='title' >
                <img alt="" src={isPc ? title : title_M} width={isPc ? 'auto' : '450'} />
            </div>
            <div className='content'>
                <div className='blockWrap'>
                    <div className="block1">
                        <div className="subTitle">
                            影視串流的滲透影響了影視產業什麼？
                        </div>
                        <div className="subContent">
                            2019年底COVID-19爆發後，全球紛紛歷經封城及解封的循環，民眾居家時間大幅增加，對於影視收視和遊戲等娛樂的需求也隨之上升。國際影視串流平臺本就在近年積極佈局全球，疫情助推了對串流影視內容的收視需求，也讓國際串流服務業者在搶食各國影視內容消費市場的同時，加速調整拓展策略。
                        </div>
                    </div>
                    <div className="block2">
                        <a className="button" href="./01_flim.html">MORE+</a>
                    </div>
                    <div className='block3'>
                        <div className='imgWrap'>
                            {/* <div className='img' /> */}
                            <img alt="" src={flim_talk} />
                            <div className="text">
                                    <div className='black1' />
                                    <div className='black_text'>
                                        2019年Netfix創立新職務「VP of Global TV」，首度將英語節目和非英語節目的決策權統合在一位主管上，這位主管由印度裔美國人Bela Bajaria擔任。
                                        {/* 法國為維護本土電視頻道的生存，另針對窗口期推出適用於付費電視、免費電視及訂閱服務的新規定：過去36個月的院線窗口期調整為15至17個月，而法國免費電視頻道享有1個月的獨家播映窗口期。 */}
                                    </div>
                                    <div className='black2' />
                            </div>
                        </div>
                  
                    </div>
                </div>
                <div className='flim_pie'>
                    <div className='text'>韓國政府對OTT產業之政策關鍵角色關係———</div>
                    <img alt="" src={flim_pie}/>
                </div>
            </div>
        </div>
    );
}

export default Flim;
