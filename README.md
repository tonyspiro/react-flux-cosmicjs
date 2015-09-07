# easy-flux-cosmicjs
This is an extenstion of the [easy-flux-example repo](https://github.com/tonyspiro/easy-flux-example) demonstrating how to use the Cosmic JS browser client to perform read / write / delete operations on a given data set.

##Getting started
1. Sign up for Cosmic JS and add a bucket: [https://cosmicjs.com](https://cosmicjs.com)
2. Install the repo 

    ```git clone https://github.com/tonyspiro/easy-flux-cosmicjs ```

3. Configure config.js to point to your Cosmic JS bucket
    ```
/* Configure
================================ */
let config = {};
config.bucket = {
        slug: 'easy-flux-cosmicjs', // your Cosmic JS bucket slug.  Sign up for Cosmic JS (Free) and add a bucket: https://cosmicjs.com/
        read_key: '', // add read_key if added to your Cosmic JS bucket settings
        write_key: '' // add write_key if added to your Cosmic JS bucket settings
};

export default config;
    ```
4. Run gulp

    ```
cd easy-flux-cosmicjs
npm install
gulp
```

##Optional
###Gulp Watch and HTTP-Server:
```
gulp watch
sudo npm install -g http-server
http-server
```

Go to [http://localhost:8080](http://localhost:8080)
