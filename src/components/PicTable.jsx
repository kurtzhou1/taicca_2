import React from 'react';
import table from './images/picTable/table.png';
import pic from './images/picTable/pic.png';



const PicTable = () => {

    return (
        <>
            <div className='picTableCard'>
                <div className='content classTitle'>INTERDISCIPLINARY</div>
                <div className='subContent classSubtitle'>探查網路高活耀的年輕族群閱讀傾向</div>
                <div className='content classSubtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, eius sed! Inventore illum itaque dolores. Odio quisquam nisi voluptas tempora pariatur molestias vel tempore, earum delectus nostrum ea, exercitationem sed!</div>
                <div className='pink'>MORE＋</div>
                <div className='picTableWrap pink'>
                    <img src={pic}/>
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
