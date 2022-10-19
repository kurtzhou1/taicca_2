import React from 'react';
import './style.scss'

const Popup = ({open,closeFun,color,title,content}) => {

    return (
        <div className={`popup ${open? 'show':''}`}>
            <div className={`popup_block ${color}`}>
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
                    {/* <p>
                       {content}
                    </p> */}
                </div>
                <div className="button_box">
                    <div className="close_btn" onClick={()=>{closeFun()}}>
                        CLOSE x
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
