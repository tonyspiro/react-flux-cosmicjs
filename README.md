# react-flux-cosmicjs
This is an extenstion of the [easy-flux-example repo](https://github.com/tonyspiro/easy-flux-example).  This repo demonstrates how to build a data-driven [React](http://facebook.github.io/react/) application using the [Flux](https://facebook.github.io/flux/) pattern and the [Cosmic JS browser client](https://npm.com/cosmicjs-browser) to perform read / write / delete operations on the [Cosmic JS API](https://cosmicjs.com).

##Getting started
1. Sign up for Cosmic JS and add a bucket: [https://cosmicjs.com](https://cosmicjs.com)
2. Install the repo 

    ```git clone https://github.com/tonyspiro/react-flux-cosmicjs ```

3. Configure config.js to point to your Cosmic JS bucket
    ```
// config.js

let config = {};
config.bucket = {
        slug: 'react-flux-cosmicjs', // your Cosmic JS bucket slug
        read_key: '', // add read_key if added to your Cosmic JS bucket settings
        write_key: '' // add write_key if added to your Cosmic JS bucket settings
};

export default config;
    ```
4. Run webpack-dev-server

    ```
cd react-flux-cosmicjs
npm install
npm run dev
    ```
Go to [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)

5. Production ready (minified)
    ```
npm run prod
    ```