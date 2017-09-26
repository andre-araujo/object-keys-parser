# Object Keys Parser

A small lib to translate object keys.

## Why?

We can not predict the response of each api with which we work, sometimes we must deal with responses in different languages, or we simply need to normalize some objects keys to fit the application better.

## Usage

Import ObjectParser:

```javascript
import ObjectParser from 'object-keys-parser'
```

Create a dictionary:

```javascript
const adventureDictionary = {
    human: 'finn',
    dog: 'jake',
    vampire: 'marceline'
}
```

Then instantiate a ObjectParser using the dictionary:

```javascript
const adventureParser = new ObjectParser(adventureDictionary)
```

Now you can normalize the object keys or revert the keys to normal:

```javascript
const items = {
    human: 'sword',
    dog: null,
    vampire: 'axe'
}

adventureParser.parse(items);
/* output:
{
    finn: 'sword',
    jake: null,
    marceline: 'axe'
}
*/
```

```javascript
const items = {
    finn: 'sword',
    jake: null,
    marceline: 'axe'
}

adventureParser.revert(items);
/* output:
{
    human: 'sword',
    dog: null,
    vampire: 'axe'
}
*/
```

It also translate keys recursively:

```javascript
const friends = {
    human: {
        dog: null
    }
}

adventureParser.parse(friends);
/* output:
{
    finn: {
        jake: null
    }
}
*/
```
