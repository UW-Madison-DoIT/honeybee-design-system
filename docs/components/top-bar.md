---
layout: component
title: Top bar
attributes: 
  - app-name: Set the app title text
  - app-url: Set the url for the title to link to
  - theme-name: Prefix the app title with a theme name
slots: 
  - uwds-navigation: Include a side-navigation toggle button
  - uwds-help: Include a help & feedback icon button
  - uwds-notifications: Include a notifications bell
  - uwds-profile: Include a profile button/menu
cssvars: 
  - --uwds-top-bar-bg: Set the top bar background color
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
    </uwds-top-bar>
  </div>
  <div class="uwds-demo__code">
    {% highlight html %}
      <uwds-top-bar 
        theme-name="MyUW" 
        app-name="Shiny New App" 
        app-url="/shiny-app-home-page">
      </uwds-top-bar>
    {% endhighlight %}
  </div>
</div>



### Customizations

{% include component-doc-table.html %}

{% endcapture %}

{% include view-mode.html designer=designer %}
{% include view-mode.html developer=developer %}

