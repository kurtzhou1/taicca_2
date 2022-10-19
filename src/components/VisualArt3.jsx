import React,{useState,useEffect} from 'react';
import './styles/section2.scss'
import titleH2 from '../components/images/section2/s3_b4_t.png'
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// import { convertLength } from '@mui/material/styles/cssUtils';

const VisualArt3 = () => {

    const data = [
        { name: '運輸', value: 30 },
        { name: '建築物', value: 20 },
        { name: '商務差旅', value: 21 },
        { name: '出版', value: 7 },
        { name: '其他', value: 22 },
      ];
      
      const COLORS = ['#8dc55d', '#d6e8c2', '#a7d17d', '#a7d17d'];
      
      const RADIAN = Math.PI / 180;

      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index,name }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
            <>
                <text className='pie_name' x={x} y={y-24} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {name}
                </text>
                <text className='pie_data' x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            </>

        );
      };

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
            let targetDom =  document.getElementById("target_pie");
            // let targetDomEnd = getElementTop(targetDom); //元素底部距離天花板的高度
            let targetDomStart = getElementTop(targetDom) - targetDom.offsetHeight; //元素上層距離天花板的高度
            let startNumber = isPc ? 200 : 700 
            // let endNumber = isPc ? 300 : 500
            
            if( targetDomStart  <= currentY+startNumber ) {
                setShowImage(true);
            } 
        }

    
    return (
        <div className="visualArt3">
            <div className='blockWrap'>
                <div className="content_block">
                    <div className="block_title_h2">
                        <img src={titleH2} alt="" />
                        <p>藝術拍賣加入綠色產業行列</p>
                    </div>
                    <div className="content_txt">
                        國際藝術拍賣龍頭佳士得（Christie's）於2021年7月首次公布集團的年度碳排放量，並宣示遵循「科學基礎減量目標倡議」（SBTi），承諾將減少碳排50%，於2030年以前達到淨零排放（Net Zero）。在2021年全球拍賣市場取得43%市占的佳士得，是全球2,356間響應SBTi公司中唯一的藝術拍賣行。
                    </div>
                    <div className="data_block">
                        <div className="l_box">
                            <p className='content_txt bold'>佳士得2019年碳排放量分布─</p>
                            <div className="pieChart" id="target_pie">
                                {/* 圓餅圖 */}
                                {
                                    showImage && <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width={10} height={10}>
                                        <Pie
                                            data={data}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            // outerRadius={80}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {data.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                }
                            </div>
                        </div>
                        <div className="r_box">
                            <div className="list_box">
                                <div className="list">
                                    <span className='lv01'></span>
                                    <p>運輸→19,551噸（出入境的貨運、展覽導覽和其他內部的物流項目，如倉儲。）</p>
                                </div>
                                <div className="list">
                                    <span className='lv02'></span>
                                    <p>其他→14,117噸（其他商業行為所產生的間接碳排放。）</p>
                                </div>
                                <div className="list">
                                    <span className='lv03'></span>
                                    <p>商務差旅→13,585噸（主要為員工的航空差旅。）</p>
                                </div>
                                <div className="list">
                                    <span className='lv04'></span>
                                    <p>建築物→12,804噸（包含建築物、廢棄物、水、紙張、資訊、數據中心和員工通勤所使用的能源。）</p>
                                </div>
                                <div className="list">
                                    <span className='lv05'></span>
                                    <p>出版→4,311噸（如拍品目錄的印製和配發。）</p>
                                </div>
                            </div>
                            <p className="unit">
                                單位：tonnes CO2e
                            </p>
                            <div className="btn_box">
                                <a className="more_btn" href='./02_internation04.html'>
                                    MORE+
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VisualArt3;
