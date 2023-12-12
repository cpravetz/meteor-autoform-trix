Trix for AutoForm
=======================

Add Trix WYSIWYG editor to your Meteor app.

## Usage

1) Install `meteor add seakaytee:autoform-trix`

2) Add trix to your main.html file:

<!-- Trix Editor -->
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.0/dist/trix.css">
  <script type="text/javascript" src="https://unpkg.com/trix@2.0.0/dist/trix.umd.min.js"></script>
  

3) Create schema

```
var BookSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  content: {
    type: String,
    label: "Yet another poem",
    autoform: {
      afFieldInput: {
        type: 'trix',
        settings: // trix options goes here
      }
    }
  }
});
```

4) Attach schema to your collection `Books.attachSchema(BookSchema)`

5) Generate the form with `{{> quickform}}` or `{{#autoform}}`

```
{{> quickForm collection="Books" type="insert"}}
```

