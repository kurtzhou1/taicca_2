import React, {useState, useEffect} from 'react';
// import './styles/page_black.scss';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
  } from 'recharts';
// import {Button, Grid, Stack, Typography} from '@mui/material'
import title from './images/black_page/comic_title.png';
import title_M from './images/black_page/comic_title_M.png';
import comic_comic from './images/black_page/comic_comic.png';
// import comic_more from './more/01_comic.html';

const Comic = () => {

    const data = [
        {
          name: '11',
          uv: 0.3,
          pv: 0.5,
        },
        {
          name: '12',
          uv: 1,
          pv: 0.4,
        },
        {
          name: '13',
          uv: 1.5,
          pv: 0.6,
        },
        {
          name: '14',
          uv: 2.5,
          pv: 0.8,
        },
        {
          name: '15',
          uv: 3.5,
          pv: 1.3,
        },
        {
          name: '16',
          uv: 5,
          pv: 2,
        },
        {
            name: '17',
            uv: 7,
            pv: 1.4,
        },
        {
            name: '18',
            uv: 9,
            pv: 1.3,
        },
        {
            name: '19',
            uv: 10,
            pv: 1.5,
        },
        {
            name: '20',
            uv: 11,
            pv: 1,
        },
    ];

    const [showImage, setShowImage] = useState(false);
    const [isPc, setIsPc] = useState(false);
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

    const getElementTop = (element) => {
        let actualTop = element.offsetTop
        let current = element.offsetParent
        while (current !== null) {
            actualTop += current.offsetTop
            current = current.offsetParent
        }
        return actualTop
    }

  
   
    useEffect(() => {
        //計算每個區塊
        document.addEventListener('scroll', onScroll)
        onScroll()
        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    const onScroll = () => {
        let currentY = window.pageYOffset  //當前視窗距離天花板的高度
        let targetDom =  document.getElementById("target");
        // let targetDomEnd = getElementTop(targetDom); //元素底部距離天花板的高度
        let targetDomStart = getElementTop(targetDom) - targetDom.offsetHeight; //元素上層距離天花板的高度
        let startNumber = isPc ? 400 : 900 
        // let endNumber = isPc ? 300 : 700
        if( targetDomStart  <= currentY+150) {
            setShowImage(true);
        } 
        // else {
            // setShowImage(false);
        // }
       
    }

    return (
        <div className="comic">
            <div className='title' >
                <img alt="" src={isPc ? title : title_M} width={isPc ? 'auto' : '450'} />
            </div>
            <div className='content'>
                <div className='blockWrap'>
                    <div className="block1">
                        <div className="subTitle">
                            韓國網漫進化史 → Webtoon產業創造新商模
                        </div>
                        <div className="subContent">
                            韓國Webtoon（網路漫畫）產業被視為繼韓劇（K-Drama）、韓國流行音樂（K-POP）之後，有潛力成為下一個推廣韓國文化到國際舞臺的韓流產業。Webtoon一字由網路媒介「web」與漫畫「cartoon」兩詞結合而成，專指載於網路平臺上的漫畫。當Webtoon逐漸取代傳統紙本漫畫成為創造韓國漫畫產業產值的主力，韓國漫畫產業的整體生態隨之改變，無論是產業發展走向、產業角色重組、政策規劃、行業標準皆接軌Webtoon產業的未來發展。
                        </div>
                    </div>
                    <div className="block2">
                        <a className="button" href="./01_comic.html">MORE+</a>
                    </div>
                    <div className='block3'>
                        <img alt="" src={comic_comic}  width='100%' />
                    </div>
                </div>
                <div className='comic_chart' id="target">
                    <div>
                        <div className='white'>2011-2020韓國網路漫畫新品及累計產量表────</div>
                        <div>(單位:千部)</div>
                    </div>
                    <div className={`chart ${showImage ? 'showImage' : ''}`}>
                        <div className='five'>5倍</div>
                        <ResponsiveContainer>
                            <ComposedChart
                                width={500}
                                height={400}
                                data={data}
                            >
                                {/* <CartesianGrid stroke="#fff67f" vertical={false} /> */}
                                <CartesianGrid stroke="#fff67f" />
                                <XAxis dataKey="name" scale="band" stroke="#fff67f" />
                                <YAxis stroke="#fff67f" />
                                <Bar dataKey="pv" barSize={300} fill="#fff67f" animationDuration={5000}/>
                                <Line type="monotone" dataKey="uv" stroke="#fff67f" />
                            </ComposedChart>
                        </ResponsiveContainer>
                        <div className='numberWrap'>
                            <div className='no1'>1971</div>
                            <div>382</div>
                        </div>
                    </div>
                    <div className='text' >
                        <div className='yellow'>(單位:年份)</div>
                        <div>
                            根據KOCCA的統計觀察，韓國網路漫畫新作品於2013年至2016年的產量，
                            從原本的382部增加到1,971部，短短三年內突增了1,589部，成長超過五倍。
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comic;
