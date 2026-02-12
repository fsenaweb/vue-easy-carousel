# How to Use

### Installing as a package

```
npm install --save vue-easy-carousel
 
yarn add vue-easy-carousel
```

##### Usage

In the **`main.js`** file, import the package and install the component globally.

```
import VueEasyCarousel from 'vue-easy-carousel'

Vue.use(VueEasyCarousel)
```

After the global configuration, anywhere within your project, you can insert the component:

```html
<vue-easy-carousel :my-images="" show-text show-dots/>
```

::: warning
**Pay attention to the description of the component parameters so that it works correctly. However, there is a rule for
the insertion of images, as we inform below:**
:::

#
| Parameter          |        Type         |   Default value |
|--------------------|:-------------------:|----------------:|
| my-images          | Array&lt;object&gt; |             [ ] |
| show-text          |       Boolean       |           false |
| show-arrows        |       Boolean       |            true |
| show-dots          |       Boolean       |           false |
| animation          |       String        |            null |
| time-slide         |       Number        |            null |

#
::: tip show-text
_This parameter tells you if you want to have an informative text at the bottom of each slide. By default, it is set to false._
:::

::: tip show-dots
_This parameter displays points below the slides indicating which index it is at. By default, it is set to false._
:::

::: tip show-arrows
_This parameter displays Arrows side the slides indicating which index it is at. By default, it is set to true._
:::

::: tip time-slide
_This parameter sets the Carrousel's automatic rotation, determined by the time in milliseconds (ex: 3000). If you don't want it to be automatic, just omit it._
:::

::: tip animation
_This parameter will receive the value of a slide transition effect. At the moment only the FADE effect is available (we are accepting new effects as a contribution). By default, it is given a null value, so it has no effect on your transition from one slide to another._
:::

::: tip my-images
_This parameter receives an array of objects. Each object should contain `image` (URL of the image), `text` (description text of the image), and an optional `link` key (URL for the hyperlink). If the `link` property is provided, the image will become a clickable hyperlink. It is important that the keys contain these names so that o componente pode reconhecer e renderizar as imagens no navegador. Below is an example of the structure:_
```
{
  image: 'url',
  text: 'description text of image',
  link: 'https://example.com'
}
```
:::
