function Card({data}) {
  return(
    <div className='col-md-4'>
      <img src={`${import.meta.env.BASE_URL}img/${data.title}.jpg`} alt="" width='80%'/>
      <h4>{data.title}</h4>
      <p>{data.content}</p>
      <h3>{data.price + '원'}</h3>
    </div>
  )
}
export default Card