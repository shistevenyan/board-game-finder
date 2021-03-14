import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'

const CarouselCards = ({data}) => {
  const isCarousel = useRef(null)

  if(!data) {
    return <Text>Loading Games...</Text>
  }
  return (
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={18}
        layoutCardOffset={18}
        useScrollView={true}
      />
  )
}

export default CarouselCards;