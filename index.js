module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true,
    "jasmine": true,
    "commonjs": true
  },
  "rules": {
    "valid-jsdoc": 2,

    "one-var": [2, {
      "uninitialized": "always",
    }],

    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-multi-comp": 0,
    "react/react-in-jsx-scope": 2,
    "react/wrap-multilines": 2,

    "comma-dangle": [2, "always-multiline"],
    "id-length": [2, {"exceptions": ["_", "$"]}],
    "new-cap": [2, {"capIsNewExceptions": ["Iterable", "Seq", "Collection", "Map", "OrderedMap", "List", "Stack", "Set", "OrderedSet", "Record", "Range", "Repeat"]}]
  },
  "plugins": [
    "react",
    "babel"
  ],
  "globals": {
    "analytics": true
  }
}
