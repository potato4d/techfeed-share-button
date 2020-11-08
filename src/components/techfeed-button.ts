import { LitElement, html, css, property } from 'lit-element'
import { TechFeedIcon } from './assets/icon'

export class TechFeedButton extends LitElement {
  @property({ type: String })
  url = ''

  static get styles() {
    return css`
      :root {
        width: 60px;
        height: 20px;
      }

      a {
        width: 60px;
        height: 20px;

        font-size: 10px;
        text-decoration: none;
        font-family: Avenir, sans-serif;
        font-weight: 700;
        line-height: 1;

        color: #fff;
        background: #111;

        border-radius: 3px;
        display: inline-flex;
        align-items: flex-end;
        justify-content: center;
      }

      .logo-area {
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-top: 3px;
      }

      .text-area {
        display: inline-block;
        margin-bottom: 4px;
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
      console.warn(
        `TechFeed Button Error: Invalid url ({ url: ${JSON.stringify(
          this.url
        )} })`
      )
      return ``
    }

    return html`
      <a href="${this.shareUrl}" target="_blank" rel="noopener">
        <span class="logo-area"> ${TechFeedIcon} </span>
        <span class="text-area">Share</span>
      </a>
    `
  }
}
