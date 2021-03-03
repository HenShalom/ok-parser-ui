import mainTheme from './mainTheme'

function getTheme() {
  return mainTheme;
}

export function useTheme() {
  return getTheme()
}

export default getTheme;
