import './WatchedProduct.css'
import bg from '../bg.jpg'
import { useSelector } from 'react-redux';
function WatchedProduct({frult}) {
  const watched = useSelector(State => State.watched);
  return(
    <div className="WatchedProduct">
      <div className="cards">
        <p>최근 본 상품</p>
        {
          watched.map((i) => {
            return (
              <div className="card" key={i}>
                <img src={bg} alt="" />
                <p>{frult[i].title}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default WatchedProduct;