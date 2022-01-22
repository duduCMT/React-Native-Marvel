import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,

  logoHeight: 56,
  logoWidth: 140,
  smallLogoHeight: 25,
  smallLogoWidth: 66,
};

export default metrics;

export function resizeByHeight(imageHeight: number, imageWidth: number, percent: number){
  const imageAspectRatio = imageHeight / imageWidth
  const initialImageHeight = metrics.screenHeight * percent
  const initialImageWidth =  initialImageHeight / imageAspectRatio
  return {
    width: initialImageWidth,
    height: initialImageHeight
  }
}

export function resizeByWidth(
  imageHeight: number, imageWidth: number, percent: number
): ImageSize {
  const imageAspectRatio = imageWidth / imageHeight
  const initialImageWidth =  metrics.screenWidth * percent
  const initialImageHeight = initialImageWidth / imageAspectRatio
  return {
    width: initialImageWidth,
    height: initialImageHeight
  }
}