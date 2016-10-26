require.config({
  baseUrl: '/',
  paths: {
    backbone: 'public/vendor/backbone/backbone-min',
    bootstrap: 'public/vendor/bootstrap/dist/js/bootstrap.min',
    colorpicker: 'public/vendor/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min',
    d3: 'public/vendor/d3/d3.v2.min',
    jquery: 'public/vendor/jquery/dist/jquery.min',
    underscore: 'public/vendor/underscore/underscore-min',

    forceView: 'force-view',
    myView: 'my-backbone-view',
    myModel: 'my-backbone-model',
    dbaas: 'dbaas',
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    d3: {
      exports: 'd3'
    },
    colorpicker: ['jquery']
  }
});

require( [ 'myView', 'bootstrap', 'colorpicker' ], function( MyView ) {
  new MyView();
} );
