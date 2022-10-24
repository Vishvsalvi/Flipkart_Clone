import React, {useContext} from "react";
import { TaskContext } from "../App";

const ProductCard =({ name, img, price }) => {

  const {addItem} = useContext(TaskContext)

  return (
    <div>
      <div
        
        className="relative block  hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all "
      >
        <img alt="Toy" src={img} className="pt-7 h-56 w-full object-contain" />

        <div className="p-6">
          <p className="text-sm font-medium text-gray-900">₹ {price}</p>

          <h5 className="mt-1 text-medium font-medium">{name}</h5>

          <button
            onClick={()=> addItem(name, price, img)}
            name="add"
            type="button"
            className="mt-4 flex w-full items-center justify-center rounded-sm active:bg-blue-700 bg-blue-500 hover:bg-blue-600  text-white font-semibold px-2 py-4"
          >
            <span className="text-sm font-semibold"> Add to Cart </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
