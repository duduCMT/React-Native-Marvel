import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');

export const SCREEN = {
  width: width < height ? width : height,
  height: width < height ? height : width,

  resizeByHeight: (imageHeight: number, imageWidth: number, percent: number): ImageSize => {
    const imageAspectRatio = imageHeight / imageWidth
    const initialImageHeight = height * percent
    const initialImageWidth = initialImageHeight / imageAspectRatio
    return {
      width: initialImageWidth,
      height: initialImageHeight
    }
  },

  resizeByWidth: (imageHeight: number, imageWidth: number, percent: number): ImageSize => {
    const imageAspectRatio = imageWidth / imageHeight
    const initialImageWidth = width * percent
    const initialImageHeight = initialImageWidth / imageAspectRatio
    return {
      width: initialImageWidth,
      height: initialImageHeight
    }
  },
};

export const LOGO = {
  smallHeight: create(25),
  smallWidth: create(66),
  mediumHeight: create(56),
  mediumWidth: create(140),
}

export function create(size: number){
  return RFValue(size, 812)  
}

export const FONT_SIZE = {
  tiny: create(8), 
  small: create(10), 
  medium: create(12), 
  regular: create(14), 
  big: create(16), 
  large: create(18), 
  headline: create(20), 
};