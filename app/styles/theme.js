import colors from './colors';
import fonts from './fonts';

export default {
  primary: colors.c1Blue,
  primaryDark: colors.c1BlueDark,
  primaryLight: colors.c1BlueLight,

  secondary: colors.white,

  error: colors.red,
  surface: colors.transparentWhiteBackground,
  background: colors.offWhite,

  // Text and iconography
  onError: colors.white,
  onPrimary: colors.white,
  onSurface: colors.darkGray,
  onSecondary: colors.black,
  onBackground: colors.white,

  defaultContainerPadding: 10,

  // Common
  subTitleText: {
    color: colors.gray,
    fontSize: fonts.FONT_SIZE_SMALL,
  },

  sectionTitleText: {
    color: colors.white,
    fontSize: fonts.FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },

  titleText: {
    color: colors.gray,
    fontSize: fonts.FONT_SIZE_MEDIUM,
  },
};
