import React, { useContext } from "react";
import { TaskContext } from "../App";

const CheckoutCard = ({ name, price, image, id, quantity }) => {
  const { removeItem, addItem } = useContext(TaskContext);
  return (
    <div>
      <li className="flex items-center justify-between py-4">
        <div className="flex items-start">
          <img
            alt=""
            src={image}
            className="h-16 w-[4rem] flex-shrink-0 rounded-lg object-center"
          />

          <div className="ml-4">
            <p className="text-sm font-semibold">{name}</p>
            <dl className="mt-1 space-y-1 text-xs text-gray-500">
              <div>
                <dt className="inline">x</dt>
                <dd className="inline"> {quantity}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div></div>
        <p className="text-sm relative -right-6 md:-right-14 sm:-right-20 -top-5 pl-16">
          ₹{price}
        </p>
          <small className="text-gray-500 relative right-3 top-5 hover:cursor-pointer">
            <div className="inline-flex items-center -space-x-px rounded-md text-xs">
              <button
                onClick={()=> addItem(name, price, image)}
                className="rounded-l-md border px-3 py-1 font-medium hover:z-10 hover:bg-gray-50 focus:z-10 focus:border-indigo-600 focus:outline-none active:opacity-75"
                type="button"
              >
                +
              </button>

              <button
              onClick={() => removeItem(name, price, image)}
                className="rounded-r-md border px-3 py-1 font-medium hover:z-10 hover:bg-gray-50 focus:z-10 focus:border-indigo-600 focus:outline-none active:opacity-75"
                type="button"
              >
                -
              </button>
            </div>
          </small>
      </li>
    </div>
  );
};

export default CheckoutCard;
