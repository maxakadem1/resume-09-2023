import ReactGA from 'react-ga4'

export const initGA = () => {
  ReactGA.initialize('G-5HV07H8C8H') // GA4 measurement ID.
}

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}
