import './index.css'


const DestinationInages = (props) => {
  const { eachlistItem } = props;
  const { imgUrl, name } = eachlistItem;

  return (
    <li className="destnation-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  );
};
export default DestinationInages;
