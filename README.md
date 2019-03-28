[![Dependency Status](https://david-dm.org/raulg/nextjs-blog.svg)](https://david-dm.org/raulg/nextjs-blog)

# Prismic Next.js Blog Site Example
This project is an implementation of the Prismic blog site demo using Next.js. Built up from the starter project, it's meant to provide you with an idea of how to build your own sites using the Prismic features. Read our user guide if you need guidance on how to use this repository.

### Install dependencies
```
> $ npm install
```
### Runs the app in the development mode
Build and open your browser to http://localhost:3000. This method uses node to run `server.js` and provides the custom routing required for previews and loading pages directly. _This will be unnecesary once `now dev` is in production. However, if the focus is not on serverless, then node is still going to be a requirement, so no harm in keeping this around for now_
```
> $ npm run local
```

### Builds the app for production using Next.js
```
> $ npm run build
```

### Deploy to Now 2.0 serverless mode
[Install Now](https://zeit.co/download) and register in the Now platform for deploying your site using serverless features. The required routing and setup files are already included in the project. Just run the `now` command in your project folder.
```
> $ now
```

### Run serverless mode locally
_This is still in development_ As of version 14.3.0-canary.21 of `now-cli` you can use the `now dev` command to run the project in your local machine. You can use this to set up and test your routing in `now.json` without having to deploy to Now for every small change.
```
> $ now dev
```
Do a hard refresh (Command + Shift + R in OSX) in your browser after making any changes to trigger a local rebuild.

### Get started with Prismic

You can find out how to get started with Prismic from [our React documentation](https://prismic.io/docs/reactjs/getting-started/getting-started-from-scratch).

### Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright 2017 Prismic.io (https://prismic.io).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.