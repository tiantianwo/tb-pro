// let{src,dest,watch} = require('gulp'),
// 	sass = require('gulp-sass')(require('sass')),
// 	cssnano = require('gulp-cssnano'),
// 	rename = require('gulp-rename'),
// 	uglify = require('gulp-uglify'),
// 	babel = require('gulp-babel'),
// 	imagemin = require('gulp-imagemin');
	
// function fnCopyIndex(){
// 	return src('src/index.html')
// 	.pipe(dest('dist'));
// }
// function fnCSS(){
// 	return src('src/scss/*.scss')
// 	.pipe(sass())
// 	.pipe(cssnano())
// 	.pipe(rename({suffix : '.min'}))
// 	.pipe(dest('dist/css'));
// }
// function fnJS(){
// 	return src('src/js/*.js')
// 	.pipe(babel({
// 		presets : ['@babel/nev']
// 	}))
// 	.pipe(uglify())
// 	.pipe(rename({suffix : '.min'}))
// 	.pipe(dest('dist/js'));
// }
// function fnImg(){
// 	return src('src/img/*')
// 	.pipe(imagemin())
// 	.pipe(dest('dist/img'));
// }
// function fnCopyLib(){
// 	return src('src/lib/*')
// 	.pipe(dest('dist/lib'));
// }
// function fnHTML(){
// 	return src('src/html/*.html')
// 	.pipe(htmlmin())
// 	.pipe(dest('dist/html'));
// }
// function fnCopyLib(){
// 	watch('src/index.html',fnCopyIndex);
// 	watch('src/scss/*.scss',fnCSS);
// 	watch('src/js/*.js',fnJS);
// 	watch('src/lib/*',fnCopyLib);
// 	watch('src/html/*',fnHTML);
// 	watch('src/img/*',fnImg);
// }
// exports.copyIndex = fnCopyIndex;
// exports.css = fnCSS;
// exports.js = fnJS;
// exports.img = fnImg;
// exports.html = fnHTML;
// exports.lib = fnCopyLib;
// exports.default = fnWatch;







const htmlmin = require('gulp-htmlmin');

let {src,dest,watch} = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin');

function fnCopyIndex(){
    return src('./src/index.html')
    .pipe(dest('./dist'));
}
function fnCSS(){
    return src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/css'));
}
function fnJS(){
    return src('./src/js/*.js')
    .pipe(babel({
        presets : ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/js'));
}
function fnImg(){
    return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'));
}
function fnCopyLib(){
    return src('./src/lib/*')
    .pipe(dest('./dist/lib'));
}
function fnHTML(){
    return src('./src/html/*.html')
    .pipe(htmlmin())
    .pipe(dest('./dist/html'));
}
function fnWatch(){
    watch('./src/index.html',fnCopyIndex);
    watch('./src/scss/*.scss',fnCSS);
    watch('./src/js/*.js',fnJS);
    watch('./src/lib/*',fnCopyLib);
    watch('./src/html/*.html',fnHTML);
    watch('./src/img/*',fnImg);
}
exports.copyIndex = fnCopyIndex;
exports.css = fnCSS;
exports.js = fnJS;
exports.img = fnImg;
exports.html = fnHTML;
exports.lib = fnCopyLib;
exports.default = fnWatch;



	
	
	
	
	
	
	