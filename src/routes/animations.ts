import { StackCardInterpolatedStyle, StackCardInterpolationProps } from "@react-navigation/stack";

const forFade = ({ current, closing }: StackCardInterpolationProps): StackCardInterpolatedStyle => ({
  cardStyle: {
    opacity: current.progress,
  },
})

export { forFade }