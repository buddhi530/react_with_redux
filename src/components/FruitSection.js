import { useDispatch, useSelector } from "react-redux";
import { buyFruits } from "../redux/fruits/fruitsAction";

function FruitSection(props){

    const noOfFruits = useSelector((state)=>{
        return state.fruits.noOfFruits;
    });

const dispatch = useDispatch();

const handleFruit = ()=>{
    dispatch(buyFruits(1));
}

return(
    <div>
        <h2>No of fruits : </h2>
        {noOfFruits}
    <div>
        <button onClick={handleFruit}>buy fruits</button>
    </div>
    </div>
)
}

export default FruitSection;