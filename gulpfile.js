var gulp = require('gulp');
var uglify = require('uglify-js-harmony');
var pump = require('pump');
var rename = require('gulp-rename');
var minifier = require('gulp-uglify/minifier');
var rollup = require('rollup');
var resolve = require('rollup-plugin-node-resolve');

gulp.task('build', ['compress'], function() {
  return rollup.rollup({
    entry: "./src/index.js",
    plugins: [ resolve() ]
  }).then( function compile(bundle) {
    console.log('3');
    bundle.write({
      format:"umd",
      moduleName: "assignEs6Class",
      dest: "./dist/bundle.js",
      sourceMap: true
    })
  }).catch(function error(error){
    console.error('Build error: ',error);
  })
});

gulp.task('compress', function(cb){
  pump([
    gulp.src('./src/assignEs6Class.js'),
    minifier({}, uglify),
    rename('assignEs6Class.min.js'),
    gulp.dest('./src/min'),
  ], cb);
});

