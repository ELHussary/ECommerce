import React from "react";

const Photos = (props: any) => {
  return (
    <div>
      <div>
        <img src={props.productimages} alt="" />
      </div>
      <div className="flex py-2">
        <img
          src="https://cdn.outfitbook.fr/27974-thickbox_default/trench-coat-in-taupe.jpg?_ga=2.70005584.1799479511.1662785947-1104294664.1662785947"
          alt=""
          className="h-16 w-16 object-contain"
        />

        <img
          src="https://cdn.outfitbook.fr/27974-thickbox_default/trench-coat-in-taupe.jpg?_ga=2.70005584.1799479511.1662785947-1104294664.1662785947"
          alt=""
          className="h-16 w-16 object-contain"
        />

        <img
          src="https://cdn.outfitbook.fr/27974-thickbox_default/trench-coat-in-taupe.jpg?_ga=2.70005584.1799479511.1662785947-1104294664.1662785947"
          alt=""
          className="h-16 w-16 object-contain"
        />
      </div>
    </div>
  );
};

export default Photos;
