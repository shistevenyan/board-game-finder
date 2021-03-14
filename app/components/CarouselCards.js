import React, { useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem from './CarouselCardItem';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCards = ({data}) => {
  const isCarousel = useRef(null)

  if(!data) {
    return <ActivityIndicator style={{paddingLeft: 33}} size="large" color="#FF6767" /> 
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