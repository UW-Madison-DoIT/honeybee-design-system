---
layout: component
title: Buttons

---

---

{% capture demo %}
  <p>Text button</p>
  <button>Default</button>
  <button>
    <i class="material-icons uwds-button__icon">favorite</i> Icon
  </button>
  <button class="uwds-button--compact">Compact</button>

  <p>Raised</p>
  <button class="uwds-button--raised">Default</button>
  <button class="uwds-button--raised">
    <i class="material-icons uwds-button__icon">favorite</i> Icon
  </button>
  <button class="uwds-button--raised uwds-button--compact">Compact</button>

  <p>Flat</p>
  <button class="uwds-button--flat">Default</button>
  <button class="uwds-button--flat">
    <i class="material-icons uwds-button__icon">favorite</i> Icon
  </button>
  <button class="uwds-button--flat uwds-button--compact">Compact</button>

  <p>Outlined</p>
  <button class="uwds-button--outlined">Default</button>
  <button class="uwds-button--outlined">
    <i class="material-icons uwds-button__icon">favorite</i> Icon
  </button>
  <button class="uwds-button--outlined uwds-button--compact">Compact</button>

  <p>Disabled</p>
  <button disabled>Disabled</button>
  <button class="uwds-button--compact" disabled>Compact</button>
{% endcapture %}

{% capture usage %}

<h3>Minimum requirements:</h3>

<ol>
  <li>Download the <a href="#">UW IT Design System CSS</a></li>
  <li>Use the CSS class modifier of your choice in your buttons:</li>
    <ul>
      <li><code>uwds-button--raised</code>: For an elevated button</li>
      <li><code>uwds-button--flat</code>: For a button with background color and no elevation</li>
      <li><code>uwds-button--outlined</code>: For a button with transparent background and theme-colored text</li>
    </ul>
</ol>

{% endcapture %}

{% include component-demo.html demo=demo code=demo usage=usage %}



