# About this Project

Hello Turnitin Team, or others who may be viewing this repository. This repo was created to complete the "Bigger Coding Challenge" provided by Turnitin. It provides a React-based web application that shows a random picture of a dog at the top of the page and 10 random dog images at the bottom of the page, as specified by the challenge document.

The application retrieves the random dog pictures using Dog API, whose documentation can be found at https://dog.ceo/dog-api/

The application also uses some "borrowed" assets for the purpose of creating a more stylistically interesting web page:
- The text color of all the text on the page is the same as the primary text on Turnitin's web page: `#003C46` 
- The two main background colors are also the same as the primary background colors on Turnitin's web page: `#FFFFFF` and `#F5F5F5`
- The web page's tab logo (i.e. "favicon") is taken directly from the Dog CEO web page https://dog.ceo/

To see how to run this application, see the **Instructions for Running this Application** section below.

To see the different sources that were used to create this application, see the **Works Cited / Useful Links** at the end of this document

## Instructions for Running this Application 

To run this program, follow the instructions below:

1. Clone this repository by running the following command on the command line:

```console
git clone https://github.com/mgomez05/turnitin-bigger-coding-exercise.git
```

2. Switch into the newly created directory:

```console
cd turnitin-bigger-coding-exercise
```

3. Ensure you have [npm and node.js installed globally on your computer](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/), then run the following command to install the necessary dependencies for the app:

```console
npm install
```

4. To run the app, run the following command:

```console
npm start
```

This will start the app in development mode at `localhost:3000`, and open up the web page for you in your browser.

## Credit to Facebook's "Create React App"

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Works Cited / Useful Links

I thank the sources below for contributing in one way or another to the creation of this app!

- Turnitin's website: https://turnitin.com/
   - Used for extracting different colors used in the app
- Dog API from Dog CEO: https://dog.ceo/dog-api/
   - Used for setting up the Dog API calls in the app, and for borrowing the Dog CEO logo
- The names of all possible breeds from the Dog API https://dog.ceo/api/breeds/list/all
   - Used for making the dog names on the page look good
      - See the `getPrettyBreedName()` function in `prettyBreedName.js` for more information
- How to examine the CSS of a web page using dev tools: 
   - https://www.freecodecamp.org/news/how-to-use-css-overview-in-chrome-developer-tools/#:~:text=on%20More%20tools-,Click%20on%20the%20three%20vertical%20dots%20located%20on%20the%20top,select%20the%20CSS%20overview%20feature.
- How to Make a CSS Image Gallery: https://www.w3schools.com/css/css_image_gallery.asp
- How to Style Images in CSS: https://www.w3schools.com/css/css3_images.asp
- How to Make All Images of Different Heights and Width the Same Height and Width
    - https://stackoverflow.com/questions/19414856/how-can-i-make-all-images-of-different-height-and-width-the-same-via-css
- A Guide to Flexbox in CSS:
   - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Concatenating Strings and Variables in React
   - https://stackoverflow.com/questions/39523040/concatenating-variables-and-strings-in-react
- 6 Simple CSS Tricks for images
   - https://www.godaddy.com/garage/6-simple-css-tricks-for-images/
- Importing and Exporting functions in JS
   - https://bobbyhadz.com/blog/javascript-export-function

