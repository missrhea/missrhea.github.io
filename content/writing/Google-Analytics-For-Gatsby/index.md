---
title: Google Analytics For Gatsby!
date: "2021-03-13T04:33:36Z"
description: "Collect and analyse website traffic with a Gatsby Plugin."
featuredImage: ./dummy_img.jpg
---

<style>
body {
text-align: justify}
</style>

I've wanted to add analytics capabilities to this website for a while. And, Google Analytics sounded like the tool with the least resistance. I am aware of the [nasty consequences](https://plausible.io/blog/remove-google-analytics
) of using Google Analytics versus an ethical and privacy-focused [alternative](https://ethical.net/ethical/google-alternatives/). Some day I will make the shift. For now, to get familiar with analytics Google Analytics will do.

I knew a Gatsby plug-in i.e. [gatsby-plugin-google-analytics](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-analytics/) enabled integration with Google Analytics. However, in late 2020 Google Analytics got an [upgrade](https://support.google.com/analytics/answer/10089681). 

Without getting confused with details, here are two points to understand how a Gatsby site is affected by this upgrade.
- The tracking ID (or unique identifier that Google Analytics associates with a site) was associated with a Universal Analytics property before October 14, 2020. The gatsby-plugin-google-analytics supported this Universal Analytics property.

- The upgrade uses a Google Analytics 4 property (by default). The tracking ID is associated with this new Google Analytics 4 property. The gatsby-plugin-google-analytics does not support this new property. A new plug-in, [gatsby-plugin-google-gtag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/) enables integration with the upgraded version.

Let's get started with adding analytics to our Gatsby site.

### 1. Set up Google Analytics 
This [video](https://www.youtube.com/watch?v=A9rCUVCB6hw) is a great resource for this step.

And this [video](https://www.youtube.com/watch?v=wX9euOw4mGY) goes over the same thing. Except at the 5-minute mark, there is an explanation for the data stream set up specifically for a static site (i.e. any site Gatsby generates).

You'll obviously need to set up a Google Analytics account. You can follow the steps [here](https://support.google.com/analytics/answer/9304153), to do the following,
1. Create an Analytics account.
2. Create a Google Analytics 4 property.
3. Add a data stream (for Web, not an app).

    --> Settings > Enhanced measurement > Page views > Uncheck "page changes based on browser history events".
4. Set up data collection (for websites)

    --> Navigate to Admin > Property > Data Streams > Click on your website to see Web Stream Details. Copy the Measurement ID. 


### 2. Configure the Gatsby Plug-in
The gatsby-plugin-google-gtag docs provide the steps to configure this plug-in. 

After struggling and eventually getting answers from StackOverflow and YouTube, I have some pointers here,
1. This plug-in should be the first one in the ```gatsby-config.js``` file. 
2. Paste the Measurement ID against the trackingIds option.
3. Set the 'head' option to true.
4. I got rid of the other options for simplicity.


And, we are done. To test if this works, let's run our Gatsby site in production mode, so run ```gatsby build && gatsby serve```. Click around the site links. Navigate to the Google Analytics dashboard and you should see some live user activity!

*Sidenote:*

>The [gatsby-plugin-google-gtag plug-in docs](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/) mention that this plugin only works in production mode. So run, 
>```gatsby build && gatsby serve```.
>If you run, ```gatsby develop```, you'll receive a warning:
>```
warn Plugin gatsby-plugin-google-gtag is not compatible with your gatsby version 2.22.15 - It requires >gatsby@^3.0.0-next.0
>```




