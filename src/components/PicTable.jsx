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

    console.log("showImage1=>>", showImage1);
    console.log("showImage2=>>", showImage2);

    return (
        <>
            <div className='picTableCard'>
                <div className='content classTitle'>INTERDISCIPLINARY</div>
                <div className='subContent classSubtitle'>探查網路高活耀的年輕族群閱讀傾向</div>
                <div className='content classSubtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, eius sed! Inventore illum itaque dolores. Odio quisquam nisi voluptas tempora pariatur molestias vel tempore, earum delectus nostrum ea, exercitationem sed!</div>
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
                <div className='content classTitle'>INTERDISCIPLINARY</div>
                <div className='subContent classSubtitle'>探查網路高活耀的年輕族群閱讀傾向</div>
                <div className='content classSubtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, eius sed! Inventore illum itaque dolores. Odio quisquam nisi voluptas tempora pariatur molestias vel tempore, earum delectus nostrum ea, exercitationem sed!</div>
                <div className='purple'>MORE＋</div>
                <div className='picTableWrap purple'>
                    <img src={table}/>
                </div>
            </div>
        </>
    );
}

export default PicTable;
