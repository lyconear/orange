var gulp = require('gulp');
var sftp = require('gulp-sftp');
 
gulp.task('server', function () {
  return gulp.src('./dist/**/*')
    .pipe(sftp({
      host: '111.230.139.176',
      port: 22,
      user: 'root',
      pass: 'lyc741753cc',
      remotePath:'/home/'
    }));
});


// // var gulp = require('gulp');
// // // import * as gulp from 'gulp';
// // gulp.task('default', function() {
// //   // 将你的默认的任务代码放在这
// //   return new Promise(function(resolve, reject) {
// //       console.log('this task is work!');
// //       resolve();
// //   });
// // });

// // gulp.task("build", ['compile', 'resources', 'libs'], () => {
// //     console.log("Building the project ...");
// // });

// "use strict";

// const gulp = require("gulp");
// const del = require("del");
// const tsc = require("gulp-typescript");
// const sourcemaps = require('gulp-sourcemaps');
// const tsProject = tsc.createProject("tsconfig.json");
// const tslint = require('gulp-tslint');

// /**
//  * Remove build directory.
//  */
// gulp.task('clean', (cb) => {
//     return del(["build"], cb);
// });

// /**
//  * Lint all custom TypeScript files.
//  */
// gulp.task('tslint', () => {
//     return gulp.src("src/**/*.ts")
//         .pipe(tslint({
//             formatter: 'prose'
//         }))
//         .pipe(tslint.report());
// });

// /**
//  * Compile TypeScript sources and create sourcemaps in build directory.
//  */
// // gulp.task("compile", ["tslint"], () => {
// //     let tsResult = gulp.src("src/**/*.ts")
// //         .pipe(sourcemaps.init())
// //         .pipe(tsc(tsProject));
// //     return tsResult.js
// //         .pipe(sourcemaps.write(".", {sourceRoot: '/src'}))
// //         .pipe(gulp.dest("build"));
// // });

// /**
//  * Copy all resources that are not TypeScript files into build directory.
//  */
// gulp.task("resources", () => {
//     return gulp.src(["src/**/*", "!**/*.ts"])
//         .pipe(gulp.dest("build"));
// });

// /**
//  * Copy all required libraries into build directory.
//  */
// gulp.task("libs", () => {
//     return gulp.src([
//             'core-js/client/shim.min.js',
//             'systemjs/dist/system-polyfills.js',
//             'systemjs/dist/system.src.js',
//             'reflect-metadata/Reflect.js',
//             'rxjs/**',
//             'zone.js/dist/**',
//             '@angular/**'
//         ], {cwd: "node_modules/**"}) /* Glob required here. */
//         .pipe(gulp.dest("build/lib"));
// });

// /**
//  * Watch for changes in TypeScript, HTML and CSS files.
//  */
// gulp.task('watch', function () {
//     gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
//         console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
//     });
//     gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
//         console.log('Resource file ' + e.path + ' has been changed. Updating.');
//     });
// });

// /**
//  * Build the project.
//  */
// // gulp.task("build", ['compile', 'resources', 'libs'], () => {
// //     console.log("Building the project ...");
// // });
function print() {
    console.log('start!!!');
}

function defaultTask(cb) {
    // place code for your default task here
    console.log('aaa');
    cb();
  }
  
  exports.default = defaultTask