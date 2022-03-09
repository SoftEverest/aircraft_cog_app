var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var csv2json = require('gulp-csv2json');
var jsonFormat = require('gulp-json-format');
//var jeditor = require("gulp-json-editor");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');


function getFolders(dir){
    return fs.readdirSync(dir)
      .filter(function(file){
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

var opts = {
  mainJsInput: './app/app.js',
  mainJsOutput: 'cog.js',
  buildFolder: './build/',
  indexHtml: './app/index.html',
  styles: './app/styles/',
  watchedFiles: [
    './app/**/*'
  ],
  aircraft: './app/aircraft'
};

gulp.task('index', function() {
  gulp.src(opts.indexHtml)
    .pipe(gulp.dest(opts.buildFolder));
});

gulp.task('styles', function() {
  gulp.src(opts.styles + '**/*')
    .pipe(gulp.dest(opts.buildFolder+ '/styles/'));
});

gulp.task('compile', function() {
  var b = browserify();
  b.transform(reactify);
  b.add(opts.mainJsInput);
  return b.bundle()
    .pipe(source(opts.mainJsInput))
    .pipe(rename(opts.mainJsOutput))
    .pipe(gulp.dest(opts.buildFolder));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: opts.buildFolder
    }
  });
});

gulp.task('compress', function() {
  return gulp.src(opts.buildFolder+'/'+opts.mainJsOutput)
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest(opts.buildFolder));
});

gulp.task('default', ['browser-sync', 'compile', 'index', 'styles'], function() {
  gulp.watch(opts.watchedFiles, ['compile', 'index', 'styles', browserSync.reload]).on('error', function (){});
});

// ------ HELPER Tasks -------

/**
 * Converts all our CSV data in aircraft folders to JSON format.
 * Will not overwrite any aircraft datasets.
 */
gulp.task('aircraft-cvs-2-json', function () {
  gulp.src('./app/aircraft/specs/**/*.csv')
        .pipe(csv2json())
        .pipe(rename({extname: '.json'}))
        .pipe(jsonFormat(4))
        .pipe(gulp.dest(opts.aircraft + '/specs'));
});

/**
 * Concat aircraft defaults
 */
gulp.task('build-aircraft-bundle', function () {
  gulp.src('./app/aircraft/**/default.js')
  .pipe(concat('AircraftDefaults.js'))
  .pipe(gulp.dest(opts.aircraft));
});


