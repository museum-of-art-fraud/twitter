gulp = require 'gulp'

jade = require 'gulp-jade'
stylus = require 'gulp-stylus'
coffee = require 'gulp-coffee'

gulp.task 'jade', ->
	gulp
	.src 'src/**/*.jade'
	.pipe jade pretty: yes
	.pipe gulp.dest 'dest'

gulp.task 'stylus', ->
	gulp
	.src 'src/**/*.styl'
	.pipe do stylus
	.pipe gulp.dest 'dest'

gulp.task 'coffee', ->
	gulp
	.src 'src/**/*.coffee'
	.pipe do coffee
	.pipe gulp.dest 'dest'

gulp.task 'bower', ->
	gulp
	.src 'bower_components/**/*'
	.pipe gulp.dest 'dest/bower_components'


gulp.task 'js', ->
	gulp
	.src 'src/**/*.js'
	.pipe gulp.dest 'dest'	

gulp.task 'bower', ->
	gulp
	.src 'bower_components/**/*'
	.pipe gulp.dest 'dest/bower_components'

gulp.task 'watch', ->
	gulp.watch 'src/**/*.jade', ['jade']
	gulp.watch 'src/**/*.styl', ['stylus']
	gulp.watch 'src/**/*.coffee', ['coffee']
	gulp.watch 'src/**/*.js', ['js']

gulp.task 'dest', ['jade', 'stylus', 'coffee', 'js', 'bower']
gulp.task 'dev', ['dest', 'watch']
gulp.task 'default', ['dev']