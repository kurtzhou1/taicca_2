import React, {useState, useEffect}  from 'react';
import table from './images/picTable/table.png';
import pic from './images/picTable/pic.png';
import pic1 from './images/picTable/pic_1.png';
import pic2 from './images/picTable/pic_2.png';
import 'animate.css';

const PicTable = () => {

    const [showImage1, setShowImage1] = useState(false);
    const [showImage2, setShowImage2] = useState(false);
    const [isPc, setIsPc] = useState(false);

    const getElementTop = (element) => {
        let actualTop = element.offsetTop
        let current = element.offsetParent
        while (current !== null) {
            actualTop += current.offsetTop
            current = current.offsetParent
        }
        return actualTop
    }

    const onScroll = () => {
        let currentY = window.pageYOffset  //當前視窗距離天花板的高度
        let targetDom =  document.getElementById("target_img");
        let targetDomStart = getElementTop(targetDom) - targetDom.offsetHeight; //元素上層距離天花板的高度
        let startNumber = isPc ? 0 : 500 
        let startNumber2 = isPc ? -400 : 100 
        
        if( targetDomStart  <= currentY+startNumber ) {
            setShowImage1(true);
        } 

        if( targetDomStart  <= currentY+startNumber2 ) {
            setShowImage2(true);
        } 
    }

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

    useEffect(() => {
        //計算每個區塊
        document.addEventListener('scroll', onScroll)
        onScroll()
        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <>
            <div className='picTableCard'>
                <div className='content classTitle'>INTERDISCIPLINARY</div>
                <div className='subContent classSubtitle'>探查網路高活耀的年輕族群閱讀傾向</div>
                <div className='content classSubtitle'>
                2021年底文策院執行《臺灣文化內容消費趨勢調查》，針對15~69歲依照臺灣人口比例分層抽樣進行網路問卷調查，發現15~29歲族群扣除工作與學習，上網時數中位數落在每日3~5小時，影視、音樂、閱讀、遊戲的網路閱聽行為顯著高於30歲以上族群。此外，超過一半的15~29歲族群會透過Facebook、Instagram等社群蒐集影視資訊，更有65%以上常瀏覽社群或主動發文。
                </div>
                <div className='content classSubtitle'>
                網路內容包山包海且自主選擇性強，本文將透過影視、網路社群和Podcast，剖析15~29歲年輕族群的閱聽內容偏好。
                </div>
                <div className='pink'>MORE＋</div>
                <div className='picTableWrap pink' id="target_img">
                    <img src={pic}/>
                    <div className="pinkFlex">
                    <img className={showImage1 ? "animate__animated animate__fadeInUp" : ""} src={pic1}/>
                    <img className={showImage2 ? "animate__animated animate__fadeInUp" : ""} src={pic2}/>
                    </div>
                    {/* <div className='text'>
                        <div>各年齡層於影視管道收看節目<span className='Normal'>一</span></div>
                        <div>
                            <div>左圖為29歲以下收看率顯著較高的影視內容</div>
                            <div>右圖為30歲以上顯著較高的項目</div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='picTableCard'>
                <div className='content classTitle'>TV</div>
                <div className='subContent classSubtitle'>疫情下臺劇網路聲量追追追</div>
                <div className='content classSubtitle'>
                2019年底爆發的COVID-19不但衝擊了全球的產業鏈與交通運輸，也大幅影響消費者的娛樂休閒樣態。依據文策院2021年《臺灣文化內容消費趨勢調查》，2021年觀看影視節目是疫情期間少數在參與及付費比例均成長的文化消費項目，其中透過OTT收看影視節目的比例更較前一年增加了7.3個百分點。
                </div>
                <div className='content classSubtitle'>
                疫情期間臺劇表現亦相當亮眼，不少作品引發討論熱潮，本文分析比較97部在2020年1月1日~2022年5月31日首播臺劇的網路聲量。
                </div>
                <div className='purple'>MORE＋</div>
                <div className='picTableWrap purple'>
                    <img src={table}/>
                </div>
            </div>
        </>
    );
}

export default PicTable;
