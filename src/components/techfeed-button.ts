import { LitElement, html, css, property } from 'lit-element'

class TechFeedButton extends LitElement {
  @property({ type: String })
  url = ''

  static get styles() {
    return css`
      :root {
        width: 60px;
        height: 21px;
      }

      a {
        width: 60px;
        height: 21px;

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

const TechFeedIcon = html` <!--
  * Copyright (c) TechFeed Inc.
  * The logo is officially licensed for the development of this component only.
  -->
  <?xml version="1.0" encoding="UTF-8"?>
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 18 18"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <title>techfeed-icon</title>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Artboard-button" transform="translate(-5.000000, -3.000000)">
        <image
          id="Bitmap"
          x="0"
          y="0"
          width="60"
          height="19.6721311"
          xlink:href="data:image/png;base64,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"
        ></image>
        <rect
          id="Rectangle"
          fill="#111111"
          x="0"
          y="0"
          width="60"
          height="20"
          rx="3"
        ></rect>
        <g id="techfeed-icon" transform="translate(5.000000, 3.000000)">
          <rect
            id="Rectangle"
            fill="#FFFFFF"
            fill-rule="nonzero"
            x="0"
            y="0"
            width="18"
            height="18"
          ></rect>
          <rect
            id="Rectangle"
            fill="#FFFFFF"
            fill-rule="nonzero"
            x="0"
            y="0"
            width="18"
            height="18"
          ></rect>
          <circle
            id="Oval"
            fill-opacity="0.09"
            fill="#000000"
            fill-rule="nonzero"
            cx="9"
            cy="9"
            r="7.77273"
          ></circle>
          <circle
            id="Oval"
            stroke-opacity="0.04"
            stroke="#2869BF"
            stroke-width="0.642857143"
            cx="9"
            cy="9"
            r="7.69773"
          ></circle>
          <circle
            id="Oval"
            fill-opacity="0.09"
            fill="#000000"
            fill-rule="nonzero"
            cx="9"
            cy="9"
            r="4.90908"
          ></circle>
          <circle
            id="Oval"
            stroke-opacity="0.04"
            stroke="#2869BF"
            stroke-width="0.642857143"
            cx="9"
            cy="9"
            r="4.83408"
          ></circle>
          <polygon
            id="Path"
            fill-opacity="0.1"
            fill="#6277A1"
            points="9.075 0 8.925 0 8.925 8.925 0 8.925 0 9.075 8.925 9.075 8.925 18 9.075 18 9.075 9.075 18 9.075 18 8.925 9.075 8.925"
          ></polygon>
          <polygon
            id="Path"
            fill="#111111"
            fill-rule="nonzero"
            points="0 18 18 18 18 0 0 0"
          ></polygon>
          <polygon
            id="Path"
            fill="#FFFFFF"
            fill-rule="nonzero"
            points="13.275 4.5 4.5 4.5 4.5 13.27086 6.18687 11.58399 6.18687 6.18687 11.58813 6.18687"
          ></polygon>
          <polygon
            id="Path"
            fill="#FFFFFF"
            fill-rule="nonzero"
            points="10.2378 7.53303 7.53717 7.53303 7.53717 10.23366"
          ></polygon>
        </g>
      </g>
    </g>
  </svg>`

export default TechFeedButton
