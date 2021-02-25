function Card (props) {
  const {title, count, weekRate, dayRate, visits} = props;
  return (
    <div className="right-card">
      <div className="right-card-title">{title}</div>
      <div className="right-card-count">{count}次</div>
      <div>
        <span>周同比{weekRate}</span>
        <span>日同比{dayRate}</span>
      </div>
      <div>日均访问量{visits}次</div>
    </div>
  );
}


export default Card;