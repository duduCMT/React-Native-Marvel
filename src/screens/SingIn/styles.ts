import { StyleSheet } from "react-native"
import { metrics } from "../../styles"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#000',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 45,
  },
  logo: {
    height: metrics.logoHeight,
    width: metrics.logoWidth,
    resizeMode: "center",
  }
})