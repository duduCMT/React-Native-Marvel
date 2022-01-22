import { metrics } from '../../../../styles'

export const animationBg1 = {
  from: { opacity: 0 },
  show: { opacity: 1 },
}

export const animationBg2 = (initialSize: ImageSize, endSize: ImageSize) => {
  return {
    from: {
      opacity: 0,
      width: initialSize.width,
      height: initialSize.height,
      marginLeft: 400,
    },
    show: { opacity: 0.25, },
    reduce: {
      width: endSize.width,
      height: endSize.height,
      marginLeft: 0,
    },
  }
}

export const animationGradient = {
  from: {transform: [{ translateY: -metrics.screenHeight }],},
  show: {transform: [{ translateY: 0 }],}
}