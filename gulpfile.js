var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('default', ['clean','browserify']);
gulp.task('browserify',browserify);
gulp.task('clean',clean);

function browserify(){

    var sourceFile = './app/app.module.js';

    return browserify(sourceFile)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        //Start piping stream to tasks!
        .pipe(gulp.dest('./build'));
}

function clean(){
    //Clean out build folder
}