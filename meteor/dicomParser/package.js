Package.describe({
  name: 'chafey:dicom-parser',
  summary: 'Javascript parser for DICOM Part 10 data',
  version: '1.5.0',
  git: 'https://github.com/chafey/dicomParser.git/',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('dicomParser.js');
  api.export('dicomParser');
});

