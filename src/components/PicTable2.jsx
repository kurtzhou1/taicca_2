import React from 'react';
import circle from './images/picTable/circle.png';

const PicTable2 = () => {

    return (
        <div className='picTableCard2'>
            <div className='content classTitle'>MUSIC</div>
            <div className='subContent classSubtitle'>AI音樂版權該給誰？</div>
            <div className='content classSubtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, eius sed! Inventore illum itaque dolores. Odio quisquam nisi voluptas tempora pariatur molestias vel tempore, earum delectus nostrum ea, exercitationem sed!</div>
            <div className='greenLight'>MORE＋</div>
            <div className='picTableWrap purple'>
                <img src={circle}/>
            </div>
        </div>
    );
}

export default PicTable2;
