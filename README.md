# Vue Easy Carousel
[![npm version](https://badge.fury.io/js/vue-easy-carousel.svg)](https://badge.fury.io/js/vue-easy-carousel)

Vue Easy Carousel is a customizable carousel component for Vue.js applications. Simple to implement, customize, and responsive, its intention is to be able to be compatible with simple projects without requiring very advanced configurations, which take a long time.

## How to Use 

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
<vue-easy-carousel :my-images="" show-text show-dots />
```

**Pay attention to the description of the component parameters so that it works correctly. However, there is a rule for the insertion of images, as we inform below:**

| Parameter          | Type               | Default value |
|--------------------|--------------------|---------------|
| my-images          | Array<object>      | [ ]            |
| show-text          | Boolean            | false          |
| show-arrows        | Boolean            | true           |
| show-dots          | Boolean            | false          |
| animation          | String             | null           |
| time-slide         | Number             |                |

###### show-text: 
_This parameter tells you if you want to have an informative text at the bottom of each slide. By default, it is set to false._

###### show-dots: 
_This parameter displays points below the slides indicating which index it is at. By default, it is set to false._

###### show-arrows: 
_This parameter displays Arrows side the slides indicating which index it is at. By default, it is set to true._

###### time-slide: 
_This parameter sets the Carrousel's automatic rotation, determined by the time in milliseconds (ex: 3000). If you don't want it to be automatic, just omit it._

###### animation: 
_This parameter will receive the value of a slide transition effect. At the moment only the FADE effect is available (we are accepting new effects as a contribution). By default, it is given a null value, so it has no effect on your transition from one slide to another._

###### my-images: 
_This parameter receives an array of objects containing the image and text keys. It is important that the keys contain these names so that the component can recognize and render the images in the browser. Below is an example of the structure:_

```
{
  image: 'url',
  text: 'description text of image'
}
```

##### Examples
```html
<!-- Show all attributes in component --> 
<vue-easy-carousel :my-images="array" show-text show-dots :show-arrows="false" time-slide="5000" animation="fade" />

<!-- Show only descriptions text attributes in component -->
<vue-easy-carousel :my-images="array" show-text />

<!-- Show only the dots how the attribute in component -->
<vue-easy-carousel :my-images="array" show-dots />

<!-- Show only the images slide -->
<vue-easy-carousel :my-images="array" />
```

## Next steps

### New Features
The project is just beginning and we count on the help of the community to expand it. New features will always appear and are welcome to the project.

## Contribute
If you are interested, please submit a pull request from your code and we will help to get developers a simple and quality system to provide the services.

##### Raising questions
When indicating / reporting a problem, write a text with as much detail as possible. If possible, attach screenshots or anything else that makes it easier to understand the bug you are reporting to the community to help fix it.

If you already have the solution, be sure to send your Pull Request, it will be very welcome and we will all thank you for your contribution.

## License
Vue Easy Carousel is Open Source software released under the [MIT license](https://opensource.org/licenses/MIT).
