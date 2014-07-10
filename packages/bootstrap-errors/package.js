Package.describe({
  summary: "A package to show errors with bootstrap styling."
});

Package.on_use(function (api, where) {
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.add_files(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export) 
    api.export('Errors');
});

Package.on_test(function(api) {
  api.use(['tinytest', 'test-helpers'], 'client');  
  api.use('bootstrap-errors', 'client');

  api.add_files('errors_tests.js', 'client');
});