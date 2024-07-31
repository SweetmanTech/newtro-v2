import React from "react";
import FeaturedMintsHome from "../FeaturedMintsHome";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const FeaturedMintsCarousel = ({
  carouselRef,
  displayedData,
  showLeftArrow,
  scrollLeft,
  showRightArrow,
  scrollRight,
}: any) => {
  return (
    <div className="relative">
      <div
        className="flex justify-between overflow-x-auto horizontal-list whitespace-nowrap"
        ref={carouselRef}
      >
        {displayedData.map((mint: any, key: number) => (
          <div key={key}>
            <FeaturedMintsHome
              name={mint.name}
              description={mint.description}
              image={mint.webAssets.previewAsset.previewImage}
              index={mint.index}
              mime={mint.webAssets.previewAsset.mime}
              contract={mint.address}
              token_id={mint.tokenId}
              dropName={mint.dropId}
            />
          </div>
        ))}
        {showLeftArrow && (
          <button
            className="hidden lg:block absolute top-1/2 left-2 transform -translate-y-1/2 border bg-primary-dark border-fourth-green px-2 py-1 "
            onClick={scrollLeft}
          >
            <MdOutlineKeyboardArrowLeft className="active:hover:fill-white" />
          </button>
        )}
        {showRightArrow && (
          <button
            className="hidden lg:block absolute top-1/2 right-2 transform -translate-y-1/2 border bg-primary-dark border-fourth-green px-2 py-1 "
            onClick={scrollRight}
          >
            <MdOutlineKeyboardArrowRight className="active:hover:fill-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedMintsCarousel;
