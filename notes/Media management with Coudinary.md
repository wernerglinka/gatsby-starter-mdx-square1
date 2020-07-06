# Media management with Cloudinary

Cloudinary is a cloud-based, end-to-end media-management platform which can store, dynamically optimize, and responsively deliver images and videos for both desktop or mobile apps. 

We use a custom function that assembles the proper image tag  `/src/components/cl-image.js`

This meta tag is used in the head section:

`<meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />`

This will cause the browser to add an extra HTTP header named DPR onto all of its subsequent requests, broadcasting the current devicePixelRatio. Those DPR HTTP headers are Client Hints. With this Cloudinary can deliver different resources to different users depending on the density of their display.

An image tag will look like this:

`<img sizes="100vw" src="https://res.cloudinary.com/glinkaco/image/upload/f_auto,q_auto,w_auto:100:400/v1589395439/gatsby-square1/site-images/sample7_ugbjhj.jpg" alt="" />`

Note that <img> includes a sizes attribute. This attribute tells the browser the layout width of the image. The browser then broadcasts that width to the server, via the Width hint. The sizes attribute MUST be included, otherwise `w_auto` does nothing.
Note that `dpr_auto` is not included in the URL. If we include DPR and Width Hints in the meta tag, `w_auto` images will be scaled based on both of them.


### f_auto  
Some formats such as WebP and JPEG-XR are more efficient than the standard JPEG format for delivering web images, but they are not supported by all browsers: JPEG-XR is supported only in Internet Explorer/Edge browsers, while WebP is currently supported only in Chrome/Opera browsers and Android devices. The result is that the best image to deliver to your visitor depends on which browser they are using.

### q_auto  
Cloudinary selects the optimal quality compression level and optimal encoding settings based on the specific image content, format, and the viewing browser, in order to produce an image with good visual quality while minimizing the file size. This setting can significantly reduce the file size without any degradation noticeable to the human eye, and without the need for you to individually analyze every image.

### w_auto:100:400
The first (:100) tells Cloudinary how big the steps between alternate resources should be. This first parameter allows you to limit the number of possible responses by defining a “rounding step” between them. For example, here, if the target width is 452 pixels, Cloudinary will round up to the nearest hundred and return a 500-pixel-wide resource.

The second parameter (:400) serves as a fallback Width, which will be used if the browser doesn’t send a Width Hint. In this example, browsers that don’t support Client Hints are served a 400-pixel-wide image. 


Read more about Image Optimization:
- https://cloudinary.com/documentation/image_optimization

Read more about Client Hints:
- https://cloudinary.com/blog/automatic_responsive_images_with_client_hints
- https://www.keycdn.com/blog/client-hints
- https://developers.google.com/web/updates/2015/09/automating-resource-selection-with-client-hints










# Gatsby Source Cloudinary Plugin

! Browser hints from third-parties sites are currently disabled so using Cloundinary URLs don't work. However, using home domain URL and redirect them at Netlify will do the trick


We can use the [gatsby-source-cloudinary-plugin](https://github.com/Chuloo/gatsby-source-cloudinary) to load optimized images from cloudinary.com. 

Install:

- `dotenv` (for loading environment variables from a .env file)
- `gatsby-source-cloudinary` (for getting optimized images from Cloudinary)

## Configure plugin in gatsby-config.js

```
plugins:[
  ...
  {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        type: `upload`,
        resourceType: `image`,
        prefix: `gatsby-source-cloudinary/` 
      }
    }
  ]
```

In the project root, create an environment file called .env to which to add your Cloudinary credentials and their values:
```
CLOUDINARY_API_KEY=xxxxxxxxxxxxxx
CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxxxx
CLOUDINARY_CLOUD_NAME=xxxxx
```

The `dotenv` package exposes those environment variables in the project.


Forestry is setup to serve images in content with a max width of 1024px as that is the max content width. Example:

`https://res.cloudinary.com/glinkaco/image/upload/w_auto:200:1024,dpr_auto,f_auto/v1565045655/Industrial/image2_yx7xdd.jpg`

Images in frontmatter fields can be fetched in two ways.

Source: https://cloudinary.com/blog/automatic_responsive_images_with_client_hints

1. useCloundinaryImage() - Delivers images with q_auto and w_auto as transformations but no upper limit.
2. Manual inserting a transform string in component. This allows insertion of a max width parameter.

Note: 
- Browser hints are available for all Cromium based browsers, e.g. Chrome, Edge and Opera
- Browser hints to third-parties are currently disabled so using Cloundinary URLs don't work. However, using home domain URL and redirect them at Netlify will do the trick