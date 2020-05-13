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