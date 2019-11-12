[![Dependency Status](https://david-dm.org/prismicio/nextjs-blog.svg)](https://david-dm.org/prismicio/nextjs-blog)

# Prismic Next.js Blog Site Example
This project is an implementation of the Prismic blog site demo using Next.js. Built up from the starter project, it's meant to provide you with an idea of how to build your own sites using the Prismic features. Read our [user guide](https://user-guides.prismic.io/examples/next-js-samples/sample-blog-with-api-based-cms-in-nextjs) if you need guidance on how to use this repository.

## Getting started quickly with Prismic Themes
You can use our [Prismic-CLI](https://github.com/prismicio/prismic-cli) tool to quickly install this project in your machine, as well as setting up a Prismic repository with the required Custom Types. Just follow the instructions in your terminal to get started!

```
npm install -g prismic-cli
prismic theme https://github.com/prismicio/nextjs-blog
```

### Install dependencies
```
npm install
```

### Installing Now globally
The official [recommendation](https://zeit.co/guides/updating-now-cli) is to install Now Desktop and check the Canary Releases option. This is will automatically update your now-cli package so it's always up to date. You can also install the package using NPM if you're not concerned about updates.
```
npm install -g now
```

### Run serverless mode locally
As of version 15.0.0 of `now` you can use the `now dev` command to run the project in your local machine in serverless mode. You can use this to set up and test your routing in `now.json` without having to deploy to Now for every small change. Development server will be running in `http://localhost:3000/`
```
now dev
```
or 
```
npm run dev
```

## Deploy to Now 2.0 serverless mode
[Signup for Now](https://zeit.co/now) for deploying your site using serverless features. The required routing and setup files are already included in the project. Just run the `now` command in your project folder if you have installed it, or try the included package.
```
now
```
or
```
npm run deploy
```

## Get started with Prismic

You can find out how to get started with Prismic from [our React documentation](https://prismic.io/docs/reactjs/getting-started/prismic-nextjs).

## License

This software is licensed under the Apache 2 license, quoted below.

Copyright 2019 Prismic (https://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.