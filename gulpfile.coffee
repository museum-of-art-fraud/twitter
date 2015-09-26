gulp = require 'gulp'

jade = require 'gulp-jade'
stylus = require 'gulp-stylus'
coffee = require 'gulp-coffee'

gulp.task 'jade', ->
	gulp
	.src 'src/**/*.jade'
	.pipe do jade
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

gulp.task 'js', ->
	gulp
	.src 'src/**/*.js'
	.pipe gulp.dest 'dest'

gulp.task 'watch', ->
	gulp.watch 'src/**/*.jade', ['jade']
	gulp.watch 'src/**/*.styl', ['stylus']
	gulp.watch 'src/**/*.coffee', ['coffee']
	gulp.watch 'src/**/*.js', ['js']

gulp.task 'dev', ['jade', 'stylus', 'coffee', 'watch', 'js']
gulp.task 'default', ['dev']