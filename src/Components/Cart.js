import CheckoutCard from "./CheckoutCard";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../App";
import { CardElement } from "@stripe/react-stripe-js";
 

const Cart = () => {

  const navigate = useNavigate()
  const { state } = useContext(TaskContext);
  const enable = "block w-full rounded-lg bg-black p-2.5 text-sm text-white";
 

  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/orders', {replace: true});
    
  };

  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white py-12 md:pt-24 md:pb-[35em]">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <div className="flex items-center">
                <span className="h-10 w-10 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://source.unsplash.com/random/40x40/?face"
                    alt="Random people photu"
                  />
                </span>
                <h2 className="ml-4 font-medium text-xl">
                  <span className="text-xl font-bold">Hello,</span>{" "}
                  {state.user ? state?.user : "Guest"}
                </h2>
              </div>

              <div className="mt-8">
                {/* ADD TOTAL HERE */}
                <p className="text-2xl font-medium tracking-tight">
                  {state.total ? "₹" + state.total : "Your cart is empty"}
                </p>
                {state.total ? (
                  <p className="mt-1 text-sm text-gray-500">
                    For the purchase of
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="mt-12">
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-200">
                    {/*  Add card here  */}

                    {state.items.map((product, index) => {
                      const { name, price, image, quantity } = product;
                      return (
                        <CheckoutCard
                          name={name}
                          price={price}
                          image={image}
                          quantity={quantity}
                          id={index}
                          key={index}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-12 md:py-24 ">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
                <div className="col-span-6">
                  <label
                    className="mb-1 block text-sm text-gray-600"
                    htmlFor="phone"
                  >
                    Phone
                  </label>

                  <input required
                    className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                    type="tel"
                    id="phone"
                  />
                </div>

                <fieldset className="col-span-6">
                  <div className="-space-y-px rounded-lg bg-white shadow-sm">
                    <div>
                      <CardElement className="my-5 p-3" />
                    </div>
                  </div>
                </fieldset>

                <fieldset className="col-span-6">
                  <legend className="mb-1 block text-sm text-gray-600">
                    Billing Address
                  </legend>

                  <div className="-space-y-px rounded-lg bg-white shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="country">
                        Country
                      </label>

                      <select
                        className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        required
                      >
                        <option>India</option>
                        <option>Rome</option>
                        <option>Japan</option>
                        <option>France</option>
                        <option>Isreal</option>
                        <option>England</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="postal-code">
                        ZIP/Post Code
                      </label>

                      <input
                        className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        placeholder="ZIP/Post Code"
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button
                  onClick={handleSubmit}
                    disabled={!state.total }
                    className={enable}
                    type="submit"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
