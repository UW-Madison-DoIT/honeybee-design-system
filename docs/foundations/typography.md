---
layout: component
title: Typography
---

{% capture designer %}

We use the style and appearance of our accessible text to ensure it's legible,
readable, accessible and visually appealing.

### Typefaces

The IT Design System uses the [Roboto](https://fonts.google.com/specimen/Roboto) typeface.

Things to note:

+ Fallback Fonts: Helvetica, Arial 
+ To connect with the University Marketing brand, Verlag font is utilized in the top app bar title font (LINK). It is not to be used in other locations. Refer to the [university guidelines](https://brand.wisc.edu/web/typography/) for usage and licensing details.

### Type scale

The IT Design System uses a defined [Major Second](https://type-scale.com/?size=16&scale=1.125&text=A%20Visual%20Type%20Scale&webfont=Libre+Baskerville&font-family=%27Libre%20Baskerville%27,%20serif&font-weight=400&font-family-headers=&font-weight-headers=inherit&background-color=white&font-color=#333) type scale that has been rounded to the nearest whole pixel. Using sizes from this scale will help create a hierarchy and consistency throughout your applications. Font sizes should not fall below 14pt (0.875rem). 

### Typescale Examples



### Typographic Treatments

#### Font weight

Font weight can be used to emphasize different parts of your interface and help enforce visual hierarchy. The IT Design System uses Roboto Regular (400), Roboto Medium (500), and Roboto Bold (700) font weights. 

#### Line-height

Line-height, traditionally known as leading, is one of several factors that directly contribute to readability and pacing of copy. Line-heights are based on the size of the font itself. Ideal line-heights for standard copy have a ratio of 1:1.5 (typesize : line-height). For example, a type at 16px/1rem would have a line-height of 1.5rem/24px (16 x 1.5). The exception to this rule are headings, which need less spacing and therefore have a line-height ratio of 1:1.25.

### Implementation notes

Try to keep the number of different font sizes you use in your application to a minimum. The size of fonts depends on the design of your application, but picking a handful of font sizes and sticking to them makes it easier to maintain consistency throughout the interface.

+ Avoid font variations like italics, underlines, and ALL CAPS. 
+ Limit the use of bolding text to one or two words. 
+ Use underline styling only for hyperlinked text.

### Type scale aliases

To make it easier to keep type sizes to a minimum we have predefined recommended type scale aliases. These type scale aliases match some of the type sizes listed in the table above (LINK) and are included in the Figma design system component library. 



### Usage

Headings: Use headings consistently to create a clear hierarchy throughout your application. Markup headings semantically using the appropriate <h#> level HTML element for your designs. Write all headings in sentence case.

Subtitles: Subtitles are smaller than headlines. They are typically reserved for medium-emphasis text that is shorter in length.

Body: Body text comes in two sizes, and it’s typically used for long-form writing as it works well for small text sizes.

Button: Button text is a call to action used different types of buttons (such as text, outlined and contained buttons) and in tabs, dialogs, and cards.

Links: Links are blue and underlined by default.



{% endcapture %}
{% include view-mode.html designer=designer %}

{% capture developer %}
	Developer specific content
{% endcapture %}
{% include view-mode.html developer=developer %}
