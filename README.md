# Welcome to Code Example

## Goal

The goal for the project is to demonstrate a piece of code. To have some meaning behind let’s take a look at a quite
common situation when company uses some third party library and wants to customise it.

To show how to handle this situation the project has a Button component. It uses Bootstrap button, but customised with
special styles.

Of course, if company does not have any plans to change `Bootstrap` to anything else or is not interested in creating
its
own components library, then dev team has to use `Bootstrap` customisation approach with special
classes/variables/etc.
Anyway, it is not the goal of this project, so let’s imagine that the company wants to get rid of Bootstrap step by step
to create their own specific design.

## Clicks Game

The project contains just one page with a simple game. The goal in the game is to click a button as many times as
possible in 2 seconds. Counts all the clicks per last two seconds.

Example, \
`1st second`: **4** clicks -> Current amount is **4** clicks \
`2d second`: **3** clicks -> Current amount is **7** clicks \
`3d second`: **2** clicks -> Current amount is **5** clicks, because 1st second clicks are expired \
`Record` is **7** clicks, because record is only updated when the user have a bigger current amount than before

P.S: My record is 19, what’s yours? \
Also, in the bottom of the page you can find a couple of settings to play with button appearance. It is not part of the
game, it is for demonstration only

## Tech stack

`React` + `Type Script` \
`Styled components` for managing styles \
`React-bootstrap` as “legacy” example \
`ESLint` + `Prettier` + `Husky` to keep the same coding style (my style today, from my style tomorrow..) \
`Jest` for future tests

## Project rules to follow

- Keep components small for better performance, readability and easier testing
- `Mobile first` approach
- Use `REM`s units (not PX) for better `a11y`
- Add test ids to each component which has to be tested, do not change test Ids for no good reason. If test id has to be
  changed, then inform QA team
- Do not forget about a11y, check with `axe`

## Project structure

The app was created with `create-react-app`, so as usual the entry point is `index.tsx` with `App` component inside

- `pages` - all the pages are stored in this directory. Each page has a separate directory to store all the components
  which are specific to that page. If some component suits to several pages, then it should be moved to components
  directory.
- `components` - contains all reusable components. Each component has a separate directory to store all the specific
  elements.
- `styles` - this folder is for common styles settings, helpers, etc.
    - `themes` - contains a theme for design system. All the properties from design system should go to theme.ts If the
      second theme is created, then it goes to the folder
    - `breakpoints.ts` - keep all the breakpoints here as a single souse of truth
    - `helpers.ts` - the file includes all common style helpers for reusing them through the app
    - `index.scss` - put here styles for page html tags or some imports needed to the app
- `types` - this directory is for Type Script helpers, e.g. if some type is needed everywhere through the app, then it
  is the place for that type

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

### Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
