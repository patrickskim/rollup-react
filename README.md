# Order Book UI Component

Create a simple react app that displays an order book based on real live data.

* Runs locally and follows best practices concerning JS and CSS.
* Uses JavaScript, React, SCSS

The order book automatically updates every 5 seconds and uses live data from:
`https://exchange.itbit.com/api/feeds/orderbook/XBTUSD`.

Note that the green dollar amount in the middle represents the average between the lowest ask order and the highest bid order.
You do not have to provide a pixel-perfect solution.
Just make sure that the general layout and theme matches.


## Submission
1. What non-production level design and implementation decisions did you make for this
submission? (Please describe how your production system would look different from your current solution)

Optimized to be a quick proof of concept with minimal iteration and support for polling.

Noticed the semi-hidden complexity of rolling up pricing.
It is preferred that filtering and roll-up calculation be handled server-side.

Outside of a time constraints:
- Normalize CSS for basic layouts, create shared variable, utils, scss to share common style attributes. (i.e. color, font)
- Organize files into seperate components. App, Updater, Orderbook, TableRow.
- Consider generalizing `<TableRow />` to dynamically spread `props` so that it can display `n` columns.
- Consider spreading `orders` across `<Orderbook {...orders} />`.
- Use or write a util to handle Number formatting `$n,nnn.nn`, decrease requirement for client-side support.
- Use a math library or recommend calculating on the backend, Javascript float math is imprecise.
- Include unit + snapshot tests across atomic components & application logic.
- App could be expanded to cover request-level error handling and validation and include fail states with retry logic.
- Validate API before rendering, in the interest of time, assumptions were made on data validity.
- Check for cross-browser compatability (dependent on supported browsers).
- Performance test/optimize (dependent on avg user device, use case scenario, ideally determined before development.)
- Remove babel-polyfill, use `Promises` to fetch over async/await.

Nice to haves
- Consider supporting Realtime adjustments vs polling via pubsub or shorter intervals.
- Consider calculating rolling averages vs snapshots based on "request" redraws.
- Consider substituting Rollup with Webpack. (Wider developer support)

2. Suppose this app were to include additional features such as customer information and charts. How would you manage this increased complexity in your solution?

See above. Add state management, (like i.e. Redux/Apollo). Consider further user & application abstraction to handle authentication, permissioning, lazy-loading, saving, retry, client-side offline mode)

## Install
` npm install `

## Build
`npm build`

Compiles javascript & css into `dist/bundle.js` and `dist/bundle.css`.

## Running the App
` npm start `
`http://localhost:5000`
