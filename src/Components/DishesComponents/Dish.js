const Dish = ({dish}) => {
    return (
        <div>
            <img src={`${dish.img}.jpg`} alt="food" />
            <h1>{dish.name}</h1>
            <p>$ {dish.price}</p>
            {/* TO FIX LATER */}
            <button>HOW MQNY PORTIONS???</button>
            <button>Add to Cart</button>
        </div>
  
    )
}
export default Dish;