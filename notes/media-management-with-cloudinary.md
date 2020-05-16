# Media management with Cloudinary

Cloudinary is a cloud-based, end-to-end media-management platform which can store, dynamically optimize, and responsively deliver images and videos for both desktop or mobile apps. 

We will use the [gatsby-source-cloudinary-plugin](https://github.com/Chuloo/gatsby-source-cloudinary) to load optimized images from cloudinary.com. 

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

1. Using useCloudinaryImage(). Not the best approach as it delivers original images via the gatsby-source-cloudinary plug in. Images in Cloudinary are supposed to be large so all transformations can be done without quality loss.