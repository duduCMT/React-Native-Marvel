import { StyleSheet } from "react-native"
import { colors, fonts } from "../../../../styles"

export const styles = StyleSheet.create({
  content: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginTop: 14,
  },
  text: {
    color: colors.text,
    fontSize: 8,
    fontFamily: fonts.title500,
  },
})