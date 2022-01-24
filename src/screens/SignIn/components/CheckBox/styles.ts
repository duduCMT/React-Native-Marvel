import { StyleSheet } from "react-native"
import { colors, fonts, size } from "../../../../styles"

export const styles = StyleSheet.create({
  content: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginTop: 14,
  },
  text: {
    color: colors.text,
    fontSize: size.FONT_SIZE.tiny,
    fontFamily: fonts.title700,
  },
})