import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('G-5HV07H8C8H') // Use your tracking id here
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
