# position-map-text-to-markdown

Map rendered text/html position to Markdown position.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install position-map-text-to-markdown

## Usage

```js
import {findAllPositions} from "position-map-text-to-markdown";
const results = findAllPositions({
    text: "match",
    markdown: "**match** __match__"
});
assert.ok(results.length === 2);
const [result1, result2] = results;
assert.deepEqual(result1, {
    markdown: "match",
    range: [2, 7],
    loc: {
        start: { line: 1, column: 2 },
        end: { line: 1, column: 7 }
    }
});
assert.deepEqual(result2, {
    markdown: "match",
    range: [12, 17],
    loc: {
        start: { line: 1, column: 12 },
        end: { line: 1, column: 17 }
    }
});
```

## Changelog

See [Releases page](https://github.com/azu/position-map-text-to-markdown/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/position-map-text-to-markdown/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu