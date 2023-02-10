import { LitElement, css, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import styles from './ds-badge.scss?inline';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('ds-badge')
export class DsBadge extends LitElement {
  static styles = css`${unsafeCSS(styles)}`

  render() {
    return html`
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ds-badge': DsBadge
  }
}
