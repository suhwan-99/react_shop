import bg from '../bg.jpg';
import Card from '../components/Card';
function MainPage({frult}) {
  return (
    <>
    <div className="main-bg" style={{backgroundImage: 'url(' + bg + ')'}}></div>
        <br />
        <div className='container'>
          <div className='row'>
            {frult.map((data, i) => {
              return (
                <Card data={data} key={i}/>
              )
          })}
          </div>
        </div>
    
    </>
  )
}

export default MainPage