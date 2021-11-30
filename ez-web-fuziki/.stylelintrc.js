module.exports = {
  "plugins": ["stylelint-scss"],
  "ignoreFiles": ["**/*.css"],
  "extends": ["stylelint-config-recommended-scss", "stylelint-config-recess-order"],
  "rules": {
    "at-rule-no-unknown": [ true, {
      ignoreAtRules: [
        'extend', 'at-root', 'debug',
        'warn', 'error', 'if', 'else',
        'for', 'each', 'while', 'mixin',
        'include', 'content', 'return', 'function', 'charset'
      ]
    }],
    "no-invalid-double-slash-comments": null,
    "indentation": 2,
    "string-quotes": "double",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "selector-combinator-space-after": "always",
    "selector-attribute-quotes": "always",
    "selector-attribute-operator-space-before": "always",
    "selector-attribute-operator-space-after": "always",
    "selector-attribute-brackets-space-inside": "always",
    "declaration-block-trailing-semicolon": "always",
    "declaration-no-important": true,
    "declaration-colon-space-before": "never",
    "declaration-colon-space-after": "always",
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "number-leading-zero": "never",
    "function-url-quotes": "always",
    "font-weight-notation": "numeric",
    "comment-whitespace-inside": "always",
    "at-rule-no-vendor-prefix": true,
    "rule-empty-line-before": "always",
    "selector-pseudo-element-colon-notation": "double",
    "selector-pseudo-class-parentheses-space-inside": "always",
    "selector-no-vendor-prefix": true,
    "media-feature-range-operator-space-before": "always",
    "media-feature-range-operator-space-after": "always",
    "media-feature-parentheses-space-inside": "always",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-colon-space-before": "always",
    "media-feature-colon-space-after": "always"
  }
}