import { useParams } from "react-router-dom"

function Detail({frult}) {
  const {id} = useParams();

  return(
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
         <img src={`${import.meta.env.BASE_URL}img/${frult[id].title}.jpg`} alt="" width='100%'/>
        </div>
        <div className="col-md-6">
          <h4>{frult[id].title}</h4>
          <p>{frult[id].content}</p>
          <p>{frult[id].price + '원'}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}
export default Detail