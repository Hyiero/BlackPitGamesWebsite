var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sourceMaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

gulp.task('default', ['clean','browserify']);
gulp.task('browserify',bundleApp);
gulp.task('clean',clean);

function bundleApp(){

    var sourceFile = './app/app.module.js';

    //Debug needs to be set in order to see the sourcemapped scripts in the browser
    var browserifyApp = browserify(sourceFile,{debug: true});

    return browserifyApp
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        .pipe(buffer())
        //Initialize sourcemaps for anything under this
        .pipe(sourceMaps.init({loadMaps: true}))
        //Write sourcemaps out to the build folder
        .pipe(sourceMaps.write('./'))
        //Start piping stream to tasks!
        .pipe(gulp.dest('./build'));
}

function clean(){
    //Clean out build folder
}