const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync =  require('browser-sync');
//compile sass to css and auto inject to browsers to src “node-modules” folder 
gulp.task('sass',function(){
return gulp
.src(['scss/*.scss'])
.pipe(sass())
.pipe(gulp.dest('css'))
.pipe(browserSync.stream());
});

gulp.task('serve',['sass'],()=>{
BrowserSync.init({
Server:  './'
})
});
gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "javascript//*.js"], {
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("scss/*.scss", ['sass']);
});
