## dubdrop

#### Simple drag and drop file handler.

Progressively enhances file inputs to allow for dragging and dropping of files and running 
each file through async tasks.

## Usage

```js
var dubdrop = require('dubdrop');

var exampleInput = dubdrop('#file-input', {
    'tasks': [
        function readFile (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                console.log(file.name, ' loaded');
                console.log(e.target.result);
            };

            reader.readAsText(file);
        }
    ]
});
```

## Contributing

Running example:

```
npm start
```
