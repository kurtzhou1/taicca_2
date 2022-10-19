import React from 'react';
import future1Pic from './images/articleCards2/future1.png';
import comicPic from './images/articleCards2/comic.png';
import future2Pic from './images/articleCards2/future2.png';
import gamePic from './images/articleCards2/game.png';



const ArticleCards = () => {

    return (
        <>
            <div className="comic">
                <div className='imgWrap'>
                    <img alt="" src={future1Pic} className="future1Pic" />
                    <div className='title classTitle'>FUTURE&nbsp;CONTENT</div>
                </div>
                <div className='subtitle classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam.</div>
                <div className='content classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ex est dignissimos officia eius adipisci nam, suscipit enim deleniti eligendi aut natus quis, rerum quod quos. Mollitia, nostrum. Delectus alias est, nihil mollitia eveniet temporibus doloremque maxime voluptate ipsam odio fuga culpa deleniti provident illo laborum fugiat possimus ad?<span className='more'>MORE+</span></div>
            </div>
            <div className="film">
                <div className='imgWrap'>
                    <img alt="" src={gamePic} className="gamePic" />
                    <div className='title classTitle'>GAME</div>
                </div>
                <div className='subtitle classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam.</div>
                <div className='content classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ex est dignissimos officia eius adipisci nam, suscipit enim deleniti eligendi aut natus quis, rerum quod quos. Mollitia, nostrum. Delectus alias est, nihil mollitia eveniet temporibus doloremque maxime voluptate ipsam odio fuga culpa deleniti provident illo laborum fugiat possimus ad?<span className='more'>MORE+</span></div>
            </div>
            <div className="interdisciplinary">
                <div className='imgWrap'>
                    <img alt="" src={future2Pic} className="future2Pic" />
                    <div className='title classTitle'>FUTURE&nbsp;CONTENT</div>
                </div>
                <div className='subtitle classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam.</div>
                <div className='content classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ex est dignissimos officia eius adipisci nam, suscipit enim deleniti eligendi aut natus quis, rerum quod quos. Mollitia, nostrum. Delectus alias est, nihil mollitia eveniet temporibus doloremque maxime voluptate ipsam odio fuga culpa deleniti provident illo laborum fugiat possimus ad?<span className='more'>MORE+</span></div>
            </div>
            <div className="game">
                <div className='imgWrap'>
                    <img alt="" src={comicPic} className="comicPic" />
                    <div className='title classTitle'>COMIC</div>
                </div>
                <div className='subtitle classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam.</div>
                <div className='content classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ex est dignissimos officia eius adipisci nam, suscipit enim deleniti eligendi aut natus quis, rerum quod quos. Mollitia, nostrum. Delectus alias est, nihil mollitia eveniet temporibus doloremque maxime voluptate ipsam odio fuga culpa deleniti provident illo laborum fugiat possimus ad?<span className='more'>MORE+</span></div>
            </div>
        </>
    );
}

export default ArticleCards;
