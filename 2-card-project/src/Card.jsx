import gfPic from './assets/mygf.png'

function Card(){
    return(
        <div className="card">
            <img src={gfPic} alt="my girlfriend"></img>
            <h2>my girlfriend</h2>
            <p>this is my beautifulest girlfriend ever mwa mwah. i love you</p>
        </div>
    );
}

export default Card