import React from "react";
import ProductCard from "./ProductCard";
import DiscountProduct from "./DiscountProduct";

const Products = React.memo(() => {

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 relative top-8 ">
          <div className="relative mx-auto max-w-3xl text-center mt-10">
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"></span>
          <h2 className="relative inline-block bg-white px-4 text-center  text-3xl font-extrabold">
            Explore our bestsellers
          </h2>
          </div>

         

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-4">
            <ProductCard

              name="iPhone 13 (Black, 128GB)"
              price={66990}
              img={
                "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70"
              }
            />

            <ProductCard
            
              name="boAt Rockerz 450 Pro"
              price={1999}
              img={
                "https://rukminim1.flixcart.com/image/612/612/kmccosw0/headphone/u/g/s/rockerz-450-pro-boat-original-imagf9j54dayugqg.jpeg?q=70"
              }
            />

            <ProductCard
            
              name="HAVELLS Coffee Maker"
              price={5399}
              img={
                "https://rukminim1.flixcart.com/image/612/612/kuk4u4w0/coffee-maker/3/9/r/donato-espresso-donato-espresso-havells-original-imag7ne57tvqgaht.jpeg?q=70"
              }
            />

            <ProductCard
            
              name="Do Epic Shit - Warikoo Ankur"
              price={163}
              img={
                "https://rukminim1.flixcart.com/image/612/612/kwxv98w0/book/l/z/y/do-epic-shit-original-imag9gcfcwfvwtep.jpeg?q=70"
              }
              
            />
          </div>
        </div>
      </section>
      {/* DISCOUNT SECTION */}

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-black/10"></span>

            <h2 className="relative inline-block bg-white px-4 text-center  text-3xl font-extrabold">
              Mega discounts on your favourite items
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            <DiscountProduct
              name="Canon EOS M50 Mark II"
              cutprice={60995}
              price={57890}
              img={
                "https://rukminim1.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
              }
            />

            <DiscountProduct
              name="APPLE M1 Chip"
              cutprice={64900}
              price={61890}
              img={
                "https://rukminim1.flixcart.com/image/612/612/khdqnbk0/cpu/g/5/m/mgnr3hn-a-apple-original-imafxexfwzgxgdfx.jpeg?q=70"
              }
            />

            <DiscountProduct
              name="APPLE Airpods Pro"
              cutprice={26300}
              price={17900}
              img={
                "https://rukminim1.flixcart.com/image/612/612/kpinwy80/headphone/r/1/q/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg?q=70"
              }
            />

            <DiscountProduct
              name="Dumbbell Set Fixed Weight"
              price={296}
              cutprice={399}
              img={
                "https://rukminim1.flixcart.com/image/612/612/kulk9zk0/dumbbell/q/b/w/dumbbell-set-fixed-weight-dumbbell-for-home-gym-fitness-1-kg-x-2-original-imag7ztsunxcfvdf.jpeg?q=70"
              }
            />
            <DiscountProduct
              name="FUJIFILM Instax Mini 11"
              price={5899}
              cutprice={5999}
              img={
                "https://rukminim1.flixcart.com/image/312/312/kbzergw0/instant-camera/3/c/m/instax-instant-camera-mini-11-fujifilm-original-imaft7fpn3gzz6xj.jpeg?q=70"
              }
            />
            <DiscountProduct
              name="Harry Potter: Wand Pen"
              price={3658}
              cutprice={7700}
              img={
                "https://rukminim1.flixcart.com/image/612/612/l3rmzrk0/action-figure/v/l/t/3-harry-potter-wand-pen-hermione-granger-ver-multicolor-beast-original-imagetg5gsbthdgx.jpeg?q=70"
              }
            />
            <DiscountProduct
              name="Grand Theft Auto V"
              price={1418}
              cutprice={2199}
              img={
                "https://rukminim1.flixcart.com/image/612/612/keiuxzk0/code-in-the-box-game/q/r/j/pc-grand-theft-auto-v-premium-edition-pc-rockstar-download-code-original-imafv626naryejbe.jpeg?q=70"
              }
            />
            <DiscountProduct
              name="SAMSUNG Watch"
              price={10899}
              cutprice={29999}
              img={
                "https://rukminim1.flixcart.com/image/312/312/l26hdow0/smartwatch/j/r/o/1-4-sm-r870nzkainu-android-samsung-yes-original-imagdhf2ahk7nvmf.jpeg?q=70"
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
});

export default Products;
