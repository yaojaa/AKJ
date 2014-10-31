//my/shirt.js now has some dependencies, a cart and inventory
//module in the same directory as shirt.js
define(["./jquery-2.1.1.min","./idangerous.swiper"],function(jquery,swiper) {
        //return an object to define the "my/shirt" module.
        console.log(swiper);
        return {
            color: $,
            size: "large",
        }
    }
);


