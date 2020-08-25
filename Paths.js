const Path = require('path');

exports.join = Path.join.bind(Path, process.cwd());

exports.dist = exports.join('dist');
exports.components = exports.join('src/components');
exports.layouts = exports.join('src/layouts');
exports.template = exports.join('public/index.html');
exports.favicon = exports.join('public/favicon.png');
