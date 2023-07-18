const { src, dest, watch, series, parallel } = require('gulp');

const html = () => {
  return src('./src/html/*.html').pipe(dest('./public'));
};

const watcher = () => {
  watch('./src/html/*.html', html);
};

exports.html = html;

exports.dev = series(html, watcher);
