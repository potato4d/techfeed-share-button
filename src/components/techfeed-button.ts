import { LitElement, html, css, property } from 'lit-element'

export class TechFeedButton extends LitElement {
  @property({ type: String })
  url = ''

  static get styles() {
    return css`
      a {
        width: 60px;
        height: 20px;

        font-size: 10px;
        text-decoration: none;
        font-weight: bold;
        line-height: 1;

        color: #fff;
        background: #111;

        border-radius: 3px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    `
  }

  get shareUrl(): string | null {
    if (!this.url) {
      return null
    }

    if (!(this.url.startsWith('http://') || this.url.startsWith('https://'))) {
      return null
    }

    return `https://techfeed.io/intent/share?url=${encodeURIComponent(
      this.url
    )}`
  }

  render() {
    if (!this.shareUrl) {
      console.warn(`TechFeed Button Error: Invalid url ({ url: ${JSON.stringify(this.url)} })`)
      return ``
    }

    return html`
      <a href="${this.shareUrl}" target="_blank" rel="noopener"> Share </a>
    `
  }
}
