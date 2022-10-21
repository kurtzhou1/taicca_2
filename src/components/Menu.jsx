import React, {useState, useEffect} from 'react';
import { ImCross } from "react-icons/im";


const Menu = ({isShow, setLeftVisible}) => {

    return (
        <div className={`Menu ${isShow ? "show":""}`}>
            <div className='center'>
                <div className='crossIcon' onClick={()=>setLeftVisible(false)}><ImCross /></div>
                <div>
                    <div className='bigClass'>01</div>
                    <div className='bigClassTitle'>TAICCA聚焦</div>
                    <div className='classSubtitle'>
                        <div>COMIC</div>
                        <div>FILM</div>
                        <div>INTERDISCIPLINARY</div>
                        <div>GAME</div>
                    </div>
                </div>
                <div>
                    <div className='bigClass'>02</div>
                    <div className='bigClassTitle'>產業研究&nbsp;/&nbsp;臺灣觀察</div>
                    <div className='classSubtitle'>
                        <div>INTERDISCIPLINARY</div>
                        <div>TV</div>
                    </div>
                </div>
                <div>
                    <div className='bigClass'>03</div>
                    <div className='bigClassTitle'>產業研究&nbsp;/&nbsp;國際動態</div>
                    <div className='classSubtitle'>
                        <div>FUTURE&nbsp;CONTENT1</div>
                        <div>FUTURE&nbsp;CONTENT2</div>
                        <div>GAME</div>
                        <div>COMIC</div>
                        <div>MUSIC</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
