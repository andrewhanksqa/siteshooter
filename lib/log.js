var util = require('util'),
    chalk = require('chalk'),
    config = require('./config');

function log() {
    console.log.apply(console, arguments);
}

function bold() {
    log(chalk.bold.apply(chalk, arguments));
}

function warn(message) {
    message = message.message || message;
    log(chalk.yellow('WARNING'), message);
}

function stdOut(message) {
    message = message.message || message;
    log(chalk.gray('stdOut'), message);
}

function note(message) {
    log(chalk.blue(''), message);
}

function error(message) {
    message = message.message || message;
    log(chalk.red.bold('✗ ERROR: ' + message));
}

function success(message) {
    message = message.message || message;
    log(chalk.green.bold('✔︎'), message);
}

function dir(obj) {
    log(util.inspect(obj));
}

function verbose() {
    if(config.isVerbose()) {
        log.apply(null, arguments);
    }
}

function verboseDir(obj) {
    if(config.isVerbose()) {
        dir(obj);
    }
}

function debug() {
    if(config.isDebug()) {
        log.apply(null, arguments);
    }
}

function debugDir(obj) {
    if(config.isDebug()) {
        dir(obj);
    }
}

function execution() {
    var args = [].concat.apply([!config.isDryRun() ? '[execute]' : '[dry-run]'], arguments);
    verbose.apply(this, args);
}

module.exports = {
    log: log,
    bold: bold,
    warn: warn,
    note: note,
    error: error,
    success: success,
    stdOut: stdOut,
    dir: dir,
    verbose: verbose,
    verboseDir: verboseDir,
    debug: debug,
    debugDir: debugDir,
    execution: execution
};
