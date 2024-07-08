import { useSelector } from "react-redux";
import dataDishes from "../../Data/dataDishes";
import Dish from "./Dish";
import { getSelectedCategory } from "../../redux/dishesSlice";


const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return (
        <div>
            {dataDishes.filter(dish => {
                return selectedCategory === dish.category;
            })}            
          
            {dataDishes.map(dish => <Dish dish={dish} />)}
        </div>
    )
}
export default Dishes;