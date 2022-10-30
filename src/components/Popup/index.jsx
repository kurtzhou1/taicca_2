import React from 'react';
import './style.scss'
import pic1 from '../images/section4/03-1pic.png';
import pic2 from '../images/section4/03-2pic.png';
import pic3 from '../images/section4/03-3pic.png';
import pic4 from '../images/section4/03-4pic.png';
import pic5 from '../images/section4/03-5pic.png';
import pic6 from '../images/section4/03-6pic.png';
import pic7 from '../images/section4/03-7pic.png';

const Popup = ({open,closeFun,title,content, itemIdx}) => {

    return (
        <div className={`popup ${open? 'show':''}`}>
            <div className={`popup_block`}>
                <div className='contentWrap'>
                    <img src={itemIdx === 0 ? 
                        pic1 : itemIdx === 1 ? 
                        pic2 : itemIdx === 2 ? 
                        pic3 : itemIdx === 3 ?
                        pic4 : itemIdx === 4 ?
                        pic5 : itemIdx === 5 ?
                        pic6 : pic7
                    } />
                    <div className='forButton'>
                        <h3 className="title_box">
                            {title}
                        </h3>
                        <div className="content_box">
                        {content && content.map((i) => {
                            return(
                                <p>
                                    {i}
                                </p>
                            )
                        })}
                        </div>
                    </div>
                    <div className="button_box">
                        <div className="close_btn" onClick={()=>{closeFun()}}>
                            x
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
