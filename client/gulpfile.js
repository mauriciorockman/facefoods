/* gulp dependencies */
var gulp                  = require('gulp');
var pug                   = require('gulp-pug');
var clean                 = require('gulp-clean');
var watch                 = require('gulp-watch');
var uglify                = require('gulp-uglify');
var concat                = require('gulp-concat');
var imagemin              = require('gulp-imagemin');
var addStream             = require('add-stream');
var minifyCSS             = require('gulp-clean-css');
var concat_vendor         = require('gulp-concat-vendor');
var angularTemplateCache  = require('gulp-angular-templatecache');
var browserSync           = require('browser-sync').create();
var reload                = browserSync.reload;

/* path def */
var path = {
  TEMPLATING: [
  	'src/views/**/*.pug',
    'src/js/**/*.pug',
  ],
  INDEX: [
    'src/index.pug',
    'src/webview.pug'
  ],
  FILES: [
    'src/.htaccess', 
    'src/favicon.png',
    'src/libs/**/*'
  ],
  JS: [ 
    'src/js/**/*.js',
    'src/views/**/*.js'
  ],
  CSS: [
    'src/css/*.css',
    'node_modules/v-accordion/dist/v-accordion.min.css',
    'node_modules/ng-dialog/css/ngDialog.min.css',
    'node_modules/angular-tooltips/dist/angular-tooltips.min.css',
    'node_modules/ng-dialog/css/ngDialog-theme-default.min.css',
    'node_modules/ng-table/bundles/ng-table.min.css',
    'node_modules/sweetalert2/dist/sweetalert2.min.css',
    'node_modules/angularjs-toaster/toaster.min.css'
  ],
  IMG: [
  	'src/img/**'
  ],
  VENDOR: [
    'node_modules/angular/angular.min.js',
    'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    'node_modules/v-accordion/dist/v-accordion.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/ng-dialog/js/ngDialog.js',
    'node_modules/angular-tooltips/dist/angular-tooltips.min.js',
    'node_modules/sweetalert2/dist/sweetalert2.min.js',
    'node_modules/angularjs-toaster/toaster.min.js',
    'node_modules/angular-jwt/dist/angular-jwt.min.js',
    'node_modules/ng-table/bundles/ng-table.js',
    'node_modules/angular-touch/angular-touch.js',
    'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
    'node_modules/angular-jwt/dist/angular-jwt.min.js'
  ],
  DIST: './dist'
};

/* spin up distribution server */
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: path.DIST
    },
  })
})

/* clean up dist dir */
gulp.task('clean', function() {
	return gulp.src(['./dist/**/*'], {read: false})
		.pipe(clean());
});

/* move css */
gulp.task('css', function () {
  gulp.src(path.CSS)
    .pipe(minifyCSS())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(path.DIST + '/css'))
    .pipe(reload({stream:true}));
});

/* make html template files */
function prepareTemplates() {
  return gulp.src(path.TEMPLATING)
    .pipe(pug())
    .pipe(angularTemplateCache());
}

/* concat and compress app scripts */
gulp.task('js', function () {
  gulp.src(path.JS)
    .pipe(concat('app.js'))
    .pipe(addStream.obj(prepareTemplates()))
    .pipe(concat('app.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(path.DIST + '/js'))
    .pipe(reload({stream:true}));
});

/* concat vendor dependencies */
gulp.task('vendor', function () {
	gulp.src(path.VENDOR)
    .pipe(concat('vendor.js'))
		.pipe(uglify({mangle: false}))
    .pipe(gulp.dest(path.DIST + '/js'))
    .pipe(reload({stream:true}));
});

/* copy files */
gulp.task('files', function(){
  gulp.src(path.FILES, {base: 'src'})
    .pipe(gulp.dest(path.DIST))
    .pipe(reload({stream:true}));
  gulp.src(path.INDEX, {base: 'src'})
    .pipe(pug())
    .pipe(gulp.dest(path.DIST))
    .pipe(reload({stream:true}));
    
});

/* compress images */
gulp.task('img', function(){
  gulp.src(path.IMG)
    .pipe(imagemin())
    .pipe(gulp.dest(path.DIST + '/img'))
    .pipe(reload({stream:true}));
});

/* watch all changes */
gulp.task('watch', function () {
  gulp.watch(path.CSS, ['css']);
  gulp.watch(path.VENDOR, ['vendor']);
  console.log(path.TEMPLATING.concat(path.JS));
  gulp.watch(path.TEMPLATING.concat(path.JS), ['js']);
  gulp.watch(path.FILES.concat(path.INDEX), ['files']);
});

/* default */
gulp.task('default', ['css', 'js', 'vendor', 'files', 'img']);
gulp.task('serve', ['watch', 'browserSync']);