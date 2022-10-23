import React from 'react';
import comicPic from './images/articleCards/comic.png';
import filmPic from './images/articleCards/film.png';
import interdisciplinaryPic from './images/articleCards/interdisciplinary.png';
import gamePic from './images/articleCards/game.png';



const ArticleCards = () => {

    return (
        <>
            <div className="comic">
                <div className='imgWrap'>
                    <img alt="" src={comicPic} className="comicPic" />
                    <div className='title classTitle'>COMIC</div>
                </div>
                <div className='subtitle classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam.</div>
                <div className='content classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ex est dignissimos officia eius adipisci nam, suscipit enim deleniti eligendi aut natus quis, rerum quod quos. Mollitia, nostrum. Delectus alias est, nihil mollitia eveniet temporibus doloremque maxime voluptate ipsam odio fuga culpa deleniti provident illo laborum fugiat possimus ad?
                    <a className='more' href="./01_comic.html" >MORE+</a>
                </div>
            </div>
            <div className="film">
                <div className='imgWrap'>
                    <img alt="" src={filmPic} className="filmPic" />
                    <div className='title classTitle'>FILM</div>
                </div>
                <div className='subtitle classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam.</div>
                <div className='content classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ex est dignissimos officia eius adipisci nam, suscipit enim deleniti eligendi aut natus quis, rerum quod quos. Mollitia, nostrum. Delectus alias est, nihil mollitia eveniet temporibus doloremque maxime voluptate ipsam odio fuga culpa deleniti provident illo laborum fugiat possimus ad?<span className='more'>MORE+</span></div>
            </div>
            <div className="interdisciplinary">
                <div className='imgWrap'>
                    <img alt="" src={interdisciplinaryPic} className="interdisciplinaryPic" />
                    <div className='title classTitle'>INTERDISCIPLINARY</div>
                </div>
                <div className='subtitle classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam.</div>
                <div className='content classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ex est dignissimos officia eius adipisci nam, suscipit enim deleniti eligendi aut natus quis, rerum quod quos. Mollitia, nostrum. Delectus alias est, nihil mollitia eveniet temporibus doloremque maxime voluptate ipsam odio fuga culpa deleniti provident illo laborum fugiat possimus ad?<span className='more'>MORE+</span></div>
            </div>
            <div className="game">
                <div className='imgWrap'>
                    <img alt="" src={gamePic} className="gamePic" />
                    <div className='title classTitle'>GAME</div>
                </div>
                <div className='subtitle classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quibusdam.</div>
                <div className='content classSubtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga ex est dignissimos officia eius adipisci nam, suscipit enim deleniti eligendi aut natus quis, rerum quod quos. Mollitia, nostrum. Delectus alias est, nihil mollitia eveniet temporibus doloremque maxime voluptate ipsam odio fuga culpa deleniti provident illo laborum fugiat possimus ad?<span className='more'>MORE+</span></div>
            </div>
        </>
    );
}

export default ArticleCards;
