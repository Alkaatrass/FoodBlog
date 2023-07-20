const { src, dest, watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const devIp = require('dev-ip');

const html = () => {
  return src('./src/html/*.html')
    .pipe(dest('./public'))
    .pipe(browserSync.stream());
};

const watcher = () => {
  watch('./src/html/*.html', html);
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: './public',
    },
    host: devIp(),
  });
};

exports.html = html;

exports.dev = series(html, parallel(server, watcher));
