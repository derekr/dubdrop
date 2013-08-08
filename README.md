## dubdrop

#### Simple drag and drop file handler.

Progressively enhances file inputs to allow for dragging and dropping of files and running 
each file through async tasks.

## Usage

```js
var dubdrop = require('dubdrop');

var $input = dubdrop('#file-input', {
    'tasks': [
        function readFile (file, callback) {
            var reader = new FileReader();

            reader.onload = function (e) {
                console.log(file.name, ' loaded');
                console.log(e.target.result);

                callback(null, file);
            };

            reader.readAsText(file);
        },

        function trasnloadThis (file, callback) {
            // handle transloadit
        }
    ]
});
```

## Contributing

Running example:

```
npm start
```
