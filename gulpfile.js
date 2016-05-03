var gulp      = require('gulp'),
    gulp_jade = require('gulp-jade');

gulp.task('default', ['index-jade', 'jade']);

gulp.task('jade', function(){
  gulp.src(['./jade/*.jade', '!jade/index.jade'])
      .pipe(
        gulp_jade({
          clients: true,
          pretty: true
        })
      )
      .pipe(gulp.dest('./templates/'));
});

gulp.task('index-jade', function(){
  gulp.src('./jade/index.jade')
      .pipe(
        gulp_jade(
          {
            clients: true,
            pretty: true
          }
        )
      )
      .pipe(gulp.dest('.'));
})
