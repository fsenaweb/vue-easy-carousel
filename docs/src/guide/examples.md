# Examples

### Show all attributes in component
```html
<vue-easy-carousel :my-images="array" show-text show-dots :show-arrows="false" time-slide="5000" animation="fade" />
```

### Show only descriptions text attributes in component
```html
<vue-easy-carousel :my-images="array" show-text />
```

### Show only the dots how the attribute in component
```html
<vue-easy-carousel :my-images="array" show-dots />
```

### Show only the images slide
```html
<vue-easy-carousel :my-images="array" />
```

### Using images with hyperlinks
```html
<vue-easy-carousel :my-images="arrayWithLinks" show-text />
```

_For this example, the `arrayWithLinks` would be structured like this:_
```javascript
data() {
  return {
    arrayWithLinks: [
      {
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        text: 'Link to Squirrel',
        link: 'https://www.google.com/search?q=squirrel'
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        text: 'Link to Sky',
        link: 'https://www.google.com/search?q=sky'
      }
    ]
  }
}
```
