import { useNavigate } from "react-router-dom"

function Card({data}) {
  const navigate = useNavigate();
  return(
    <div className='col-md-4' onClick={() => {
      navigate('/detail/' + data.id);
    }}>
      <img src={`https://raw.githubusercontent.com/ghkdss/react_sample_data/main/img/${data.title}.jpg`} alt="" width='80%'/>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <h3>{data.price + '원'}</h3>
    </div>
  )
}
export default Card