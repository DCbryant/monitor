import {useState} from 'react'
import Card from './Card';

function Cards() {
  const [data, setData] = useState([
    {title: '前台访问量', count: 1200, weekRate: '12%', dayRate: '5%', visits: 10000},
    {title: '接口请求次数', count: 12000, weekRate: '5%', dayRate: '-1%', visits: 10000},
    {title: '页面404', count: 1200, weekRate: '12%', dayRate: '5%', visits: 50}
  ]);
  return (
    <div className="right-cards">
      {data.map((cardData, index) => (
        <Card key={index} {...cardData} />
      ))}
    </div>
  );
}

export default Cards;
