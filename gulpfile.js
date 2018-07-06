
'use strict'
const gulp = require('gulp');
const replace = require('gulp-replace');
const pkgConfig = require('./package');
const rename = require('gulp-rename');
const path = require('path');

gulp.task('readme', function() {
    return gulp.src(['README.org.md'])
        .pipe(replace('${VERSION}', pkgConfig.version))
        .pipe(rename('README.md'))
        .pipe(gulp.dest(path.join(__dirname)))
})
