![Typescript](https://assets.jeanlescure.io/f8mvuN.svg)
![plus](https://assets.jeanlescure.io/gxaoy.svg)
![React](https://assets.jeanlescure.io/eooifcELx.svg)

# No BS React.js (Typescript) Boilerplate

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

This boilerplate focuses on keeping configuration to a minimum yet supporting all latest Typescript
features for making it as easy and worry-free as possible to get started building a performance
optimized React.js web application.

This project is open to updates by its users, I ensure that PRs are relevant to the community.
In other words, if you find a bug or want a new feature, please help us by becoming one of the
[contributors](#contributors-) ✌️ ! See the [contributing section](#contributing).

🚨 **Before continuing:**

- If you're creating an API using Express.js consider looking at my [No BS Typescript Server Boilerplate](https://github.com/jeanlescure/no-bs-typescript-server-boilerplate)
- If you're creating a Javascript/Typescript module consider looking at my [No BS Typescript Boilerplate](https://github.com/jeanlescure/no-bs-typescript-boilerplate)
- If you're creating a Lambda function for AWS consider looking at my [No BS Typescript Lambda Boilerplate](https://github.com/jeanlescure/no-bs-typescript-lambda-boilerplate)

## Like this project? ❤️

Please consider:

- [Buying me a coffee](https://www.buymeacoffee.com/jeanlescure) ☕
- Supporting me on [Patreon](https://www.patreon.com/jeanlescure) 🏆
- Starring this repo on [Github](https://github.com/jeanlescure/string-crypto) 🌟

## How to get started using this boilerplate

The logic of this repo is structured in such a way that all you need to worry about is placing your
code in the `src` directory (using `src/index.tsx` as entry point).

## Running the app

I chose Rollup to handle the transpiling, compression, and any other transformations needed to get
your Typescript code running as quickly and performant as possible.

There's two ways of running the app:

**Development**

```
yarn dev
```

Uses [concurrently]() to run Rollup in watch mode (which means it will transpile the bundle js file
when you save changes to your code), as well as a combo between an Express.js server and Liveserver
which will automagically setup [hot-reload]() functionality so your browser reloads as you modify
your source!

**Build**

```
yarn build
```

This command will build the `public/bundle.js`, uglified and tree-shaken so it loads/runs faster.

This is the recommended hay of producing the **production** bundle you serve to your final users;
after the build completes simply copy the contents of the `public` directory to a static content
delivery service such as AWS S3 or Github Pages, et voilà.

If, on the other hand, you would like to spin up the provided Express.js server with hot-reload
turned **off**, just run:

```
yarn server
```

## What about tests, styles, etc?

The ethos of this boilerplate is to provide a solid foundation, from there on you are owner of your
project and get to decide on the rest of the stack to build upon.

And if you're looking for suggestions here are some that I have tried, tested, and love:

**Fast prototyping**

- :warning: **Testing:** [Jest](https://jestjs.io/)
- :art: **Styling:** [Concise CSS](https://concisecss.com/), just pop those `<link>` tags on the `index.html`, and `className` all your components as desired.
- :earth_americas: **Back-end communication:** Simply use [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), but keep it tidy by setting up [reducers with **useReducer**](https://hswolff.com/blog/why-i-love-usereducer/).
- :memo: **State management with persistance:** Make a global [context with **useContext**](https://hswolff.com/blog/how-to-usecontext-with-usereducer/), and persist it with [window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

**Serious production-ready apps**

- :warning: **Testing:** [Jest](https://jestjs.io/)
- :art: **Styling/Components:** [React Bootstrap](https://react-bootstrap.github.io/), make it easy for yourself, Bootstrap has been the leading UI framework for virtually a decade now, and this React-specific port is well mantained, been stable for quite some time now, and has a community that is both active and helpful.
- :earth_americas: **Back-end communication:** Whether it's GraphQL or REST, can't go wrong with [Apollo](https://www.apollographql.com/) ([apollo-link-rest](https://www.apollographql.com/docs/link/links/rest/) for REST APIs).
- :memo: **State management with persistance:** I honestly just make my own concoctions based on [useReducer](https://hswolff.com/blog/why-i-love-usereducer/) and [useContext](https://hswolff.com/blog/how-to-usecontext-with-usereducer/) and whatever storage solution fits the bill for the project, but if you're looking for something pre-made I hear great things about [Redux Toolkit](https://redux-toolkit.js.org/).

## Contributing

Yes, thank you! This plugin is community-driven, most of its features are from different authors.
Please update the docs and tests and add your name to the `package.json` file.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://jeanlescure.cr"><img src="https://avatars2.githubusercontent.com/u/3330339?v=4" width="100px;" alt=""/><br /><sub><b>Jean Lescure</b></sub></a><br /><a href="#maintenance-jeanlescure" title="Maintenance">🚧</a> <a href="https://github.com/jeanlescure/no-bs-react-boilerplate/commits?author=jeanlescure" title="Code">💻</a> <a href="#userTesting-jeanlescure" title="User Testing">📓</a> <a href="https://github.com/jeanlescure/no-bs-react-boilerplate/commits?author=jeanlescure" title="Tests">⚠️</a> <a href="#example-jeanlescure" title="Examples">💡</a> <a href="https://github.com/jeanlescure/no-bs-react-boilerplate/commits?author=jeanlescure" title="Documentation">📖</a></td>
    <td align="center"><a href="https://dianalu.design"><img src="https://avatars2.githubusercontent.com/u/1036995?v=4" width="100px;" alt=""/><br /><sub><b>Diana Lescure</b></sub></a><br /><a href="https://github.com/jeanlescure/no-bs-react-boilerplate/commits?author=DiLescure" title="Documentation">📖</a> <a href="https://github.com/jeanlescure/no-bs-react-boilerplate/pulls?q=is%3Apr+reviewed-by%3ADiLescure" title="Reviewed Pull Requests">👀</a> <a href="#design-DiLescure" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
