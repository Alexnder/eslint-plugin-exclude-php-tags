# eslint-plugin-exclude-php-tags

A preprocessor to remove PHP tags to prevent "Unexpected token <" errors in .phtml files.

## Under the hood

By fact it just replaces occurrences of `<?...?>` for `0` to prevent parsing of php code.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint
```

Next, install `eslint-plugin-exclude-php-tags`:

```
$ npm install eslint-plugin-exclude-php-tags
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-exclude-php-tags` globally.

## Usage

Add `exclude-php-tags` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "exclude-php-tags"
    ]
}
```