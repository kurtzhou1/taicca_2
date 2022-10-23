import React,{useState,useEffect} from 'react';
import circle from './images/picTable/circle.png';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const PicTable2 = () => {

    const [showImage, setShowImage] = useState(false);
    const [isPc, setIsPc] = useState(false);

    const data1 = [
        { name: '資料庫', value: 100 },
    ];

    const data2 = [
        { name: '半自動/自動生成中', value: 100 },
    ];

    const data3 = [
        { name: 'AI作品', value: 100 },
    ];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index,name }) => {
        const radius = isPc ? innerRadius + (outerRadius - innerRadius) * 0.5 : innerRadius + (outerRadius - innerRadius) * 0.001;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
            <text className='pie_name' x={isPc ? x+125 : x+25} y={isPc ? y-20 : y-10} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {name}
            </text>

        );
    };

    const getElementTop = (element) => {
        let actualTop = element.offsetTop
        let current = element.offsetParent
        while (current !== null) {
            actualTop += current.offsetTop
            current = current.offsetParent
        }
        return actualTop
    }

    const onScroll = () => {
        let currentY = window.pageYOffset  //當前視窗距離天花板的高度
        let targetDom =  document.getElementById("target_pie");
        let targetDomStart = getElementTop(targetDom) - targetDom.offsetHeight; //元素上層距離天花板的高度
        let startNumber = isPc ? 200 : 700 
        
        if( targetDomStart  <= currentY+startNumber ) {
            setShowImage(true);
        } 
    }

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

    useEffect(() => {
        //計算每個區塊
        document.addEventListener('scroll', onScroll)
        onScroll()
        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div className='picTableCard2'>
            <div className='content classTitle'>MUSIC</div>
            <div className='subContent classSubtitle'>AI音樂版權該給誰？</div>
            <div className='content classSubtitle'>隨著娛樂內容需求大幅度增加，供應商也面臨音效、配樂以及音樂等各種製作需求，在成本壓力之下，部分業者期望透過AI技術，快速生產可使用的音樂。然而隨著AI音樂製作逐漸開展，也進而引發著作權爭議。</div>
            <div className='greenLight'>MORE＋</div>
            <div className='picTableWrap purple'>
                <img src={circle}/>
                <div className="pieChart1" id="target_pie">
                    {
                        showImage && <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={10} height={10}>
                            <Pie
                                data={data1}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                // outerRadius={80}
                                fill="#d882ff"
                                dataKey="value"
                            >
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    }
                </div>
                <div className="pieChart2" id="target_pie">
                    {
                        showImage && <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={10} height={10}>
                            <Pie
                                data={data2}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                // outerRadius={80}
                                fill="#bc71de"
                                dataKey="value"
                            >
                                資料庫
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    }
                </div>
                <div className="pieChart3" id="target_pie">
                    {
                        showImage && <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={10} height={10}>
                            <Pie
                                data={data3}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                // outerRadius={80}
                                fill="#9d5eba"
                                dataKey="value"
                            >
                                資料庫
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    }
                </div>
            </div>
        </div>
    );
}

export default PicTable2;
