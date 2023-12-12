Package.describe({
  name: 'seakaytee:autoform-trix',
  summary: 'Trix editor for aldeed:autoform',
  version: '0.1.0',
  git: 'https://github.com/cpravetz/meteor-autoform-trix'
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');

  api.use([
    'templating',
    'underscore',
    'reactive-var',
    'aldeed:autoform'
  ], 'client');

  api.addFiles([
    'lib/client/templates.html',
    'lib/client/templates.js',
    'lib/client/autoform-trix.js'  
  ], 'client');
});
