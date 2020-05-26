# What is HeySugar?

HeySugar is an open-source, self hosted, blood sugar management application for type one and type two diabetics. HeySugar is developed with Jamstack and is made up of two separate applications:

- An front end to display blood sugar results
- An application to log blood readings and update the website

The front end is developed with Gatsby and the core functionality is
passed into a Gatsby website through our [Gatsby Theme](https://www.npmjs.com/package/@hey-sugar/gatsby-theme-heysugar) which means we can release patches and enhancements to users via NPM.

The blood tracking application has been developed with [Sanity](https://sanity.io). This means you will need to create an account on the Sanity platform in order to use HeySugar. But don't worry! We also created a [Sanity plugin](https://www.npmjs.com/package/@hey-sugar/sanity-plugin-hey-sugar-schema) to take care of this for you. Just like the Gatsby Theme, any changes we make to the Sanity Schema will be published through this plugin. This means you won't need to make any changes to the Sanity system, unless you want to customise your own instance of HeySugar.

### Want to Get Started?

Head over to our [documentation](http://heysugar.health/documentation/getting-started) for information on getting started and don't forget, if you experience any problems then raise an issue on our github. Better yet, if you want to contribute then Pull Requests are welcome!
