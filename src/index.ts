import { fromCallback } from 'cypress/types/bluebird'
import _TechFeedButton from './components/techfeed-button'

export const TechFeedButton = _TechFeedButton

export default function define() {
  customElements.define('techfeed-button', TechFeedButton)
}
