import gfPic from './assets/mygf.png'

function Card(){
    return(
        <div className="card">
            <img src={gfPic} alt="my girlfriend" className='card-image'></img>
            <h2 className='card-title'>my girlfriend</h2>
            <p className="card-text">this is my beautifulest girlfriend ever mwa mwah. i love you</p>
        </div>
    );
}

export default Card
