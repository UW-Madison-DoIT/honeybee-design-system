---
layout: component
title: Top bar
tagname: uwds-top-bar
attributes:
  - name: 'app-name'
    note: 'Set the app title text'
  - name: 'app-url'
    note: 'Set the url for the title to link to'
  - name: 'theme-name'
    note: 'Prefix the app title with a theme name'
slots:
  - name: 'uwds-navigation'
    note: 'Include a side-navigation toggle button'
  - name: 'uwds-help'
    note: 'Include a help & feedback icon button'
  - name: 'uwds-notifications'
    note: 'Include a notifications bell'
  - name: 'uwds-profile'
    note: 'Include a profile button/menu'
cssvars:
  - name: '--uwds-top-bar-bg'
    note: 'Sets background color'
  - name: '--uwds-top-bar-color'
    note: 'Sets text color for top-bar elements'
  - name: '--uwds-top-bar-font'
    note: 'Sets font face of the app-name'
  - name: '--uwds-top-bar-font-weight'
    note: 'Sets font weight of the app-name'
  - name: '--uwds-top-bar-depth'
    note: 'Sets the z-index'
  - name: '--theme-name-font-weight'
    note: 'Sets font-weight for the theme-name'
---

{% capture designer %}
Designer specific content goes here...
{% endcapture %}

{% capture developer %}

---

<div class="uwds-demo">
  <div class="uwds-demo__demo">
    <uwds-top-bar
      theme-name="MyUW"
      app-name="Shiny New App"
      app-url="#">
      <i slot="uwds-help"
        style="margin: 0; height: 3rem; width: 4rem; font-size: 1.8rem; cursor: pointer; line-height: 3rem; text-align: center;"
        class="material-icons">settings</i>
      <i slot="uwds-notifications"
      style="margin: 0; height: 3rem; width: 4rem; font-size: 1.8rem; cursor: pointer; line-height: 3rem; text-align: center;"
      class="material-icons">notifications_none</i>
      <span slot="uwds-profile" style="cursor:pointer; margin:0 0.5rem; width: 4rem;">LOGIN</span>
    </uwds-top-bar>
  </div>
  <div class="uwds-demo__code">
    {% highlight html %}
      <uwds-top-bar
        theme-name="MyUW"
        app-name="Shiny New App"
        app-url="/shiny-app-home-page">

        <!-- Using some slots -->
        <i slot="uwds-help" class="material-icons">settings</i>
        <i slot="uwds-notifications" class="material-icons">notifications_none</i>
        <button slot="uwds-profile" type="button">Login</button>

      </uwds-top-bar>
    {% endhighlight %}
  </div>
</div>

### Usage

<div class="uwds-beta-info">
  <p><strong>Note:</strong> The process described below is a placeholder for future self-hosting and distribution plans.</p>
</div>

1. Download or copy the [top-bar.min.mjs](https://github.com/UW-Madison-DoIT/uwds-components/tree/master/dist/top-bar) file from the uwds-components project on Github
2. Add the script to your project directory
3. Include the script on your page:
```html
  <script type="module" src="your/path/top-bar.min.mjs"></script>
```

### Customizations

{% include component-doc-table.html %}

{% endcapture %}

{% include view-mode.html designer=designer %}
{% include view-mode.html developer=developer %}
