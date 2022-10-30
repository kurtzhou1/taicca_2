import React from 'react';
import { ImCross } from "react-icons/im";


const Menu = ({isShow, setLeftVisible}) => {

    const scrollToAnchor = (anchorName) => {
        let anchorElement = document.getElementById(anchorName)
        if (anchorElement) {
            let currentY = window.pageYOffset //當前視窗距離天花板的高度
            let targetBlockY = anchorElement.getBoundingClientRect().y //目標點距離當前視窗高度
            let headerOffset = window.innerWidth >= 980 ? -0.9 : 0    //調整移動距離目標點以上/以下的距離
            let offsetPosition = currentY + targetBlockY - headerOffset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
            setLeftVisible(false)
        }
    }

    return (
        <div className={`Menu ${isShow ? "show":""}`}>
            <div className='center'>
                <div className='crossIcon' onClick={()=>setLeftVisible(false)}><ImCross /></div>
                <div>
                    <div className='bigClass'>01</div>
                    <div className='bigClassTitle'>TAICCA聚焦</div>
                    <div className='classSubtitle'>
                        <div onClick={()=>scrollToAnchor("01section_COMIC")}>COMIC</div>
                        <div onClick={()=>scrollToAnchor("01section_FILM")}>FILM</div>
                        <div onClick={()=>scrollToAnchor("01section_INTERDISCIPLINARY")}>INTERDISCIPLINARY</div>
                        <div onClick={()=>scrollToAnchor("01section_GAME")}>GAME</div>
                    </div>
                </div>
                <div>
                    <div className='bigClass'>02</div>
                    <div className='bigClassTitle'>產業研究&nbsp;/&nbsp;臺灣觀察</div>
                    <div className='classSubtitle'>
                        <div onClick={()=>scrollToAnchor("02section_INTERDISCIPLINARY")}>INTERDISCIPLINARITY</div>
                        <div onClick={()=>scrollToAnchor("02section_TV")}>TV</div>
                    </div>
                </div>
                <div>
                    <div className='bigClass'>03</div>
                    <div className='bigClassTitle'>產業研究&nbsp;/&nbsp;國際動態</div>
                    <div className='classSubtitle'>
                        <div onClick={()=>scrollToAnchor("03section_CONTENT1")}>FUTURE&nbsp;CONTENT1</div>
                        <div onClick={()=>scrollToAnchor("03section_CONTENT2")}>FUTURE&nbsp;CONTENT2</div>
                        <div onClick={()=>scrollToAnchor("03section_GAME")}>GAME</div>
                        <div onClick={()=>scrollToAnchor("03section_COMIC")}>COMIC</div>
                        <div onClick={()=>scrollToAnchor("03section_MUSIC")}>MUSIC</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
