import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/milestone/milestone-list';
import './components/settings/settings-modal';

import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/src/themes.js';

@customElement('app-lit')
export default class AppLit extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <sp-theme color="light" scale="medium">
        <settings-modal></settings-modal>
        <milestone-list></milestone-list>
      </sp-theme>
    `;
  }
}
