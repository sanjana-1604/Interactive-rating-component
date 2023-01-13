import star from "../img/icon-star.svg"
import Ratingdiv from "./Ratingdiv"
export default function Main()
{
    const arr = ["1","2","3","4","5"]
    const tempArr = arr.map((item)=>{
        return (<Ratingdiv index = {item}/>)
    })
    return(
        <div className="MainScreen">
            <div className="star"><img src={star} alt="star" /></div>
            <div className="question">
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request.All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div  className = "ratingSection">
            <div className = "rating">1</div>
            <div className = "rating">2</div>
            <div className = "rating">3</div>
            <div className = "rating">4</div>
            <div className = "rating">5</div>
            </div>
            <button className="submit">SUBMIT</button>

        </div>
    )
}