import { utils } from './utils'
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
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: utils.marginTop,
  },
  logo: {
    height: metrics.logoHeight,
    width: metrics.logoWidth,
    resizeMode: "center",
  }
})