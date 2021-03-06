var chalk = require('chalk'),
    log = require('./log'),
    parseArgs = require('minimist'),
    pkg = require('../package.json'),
    version = pkg.version;



var bannerText = [
    '================================================================================',
    '==      =====================      ===  ========================================',
    '=  ====  ===================  ====  ==  ========================================',
    '=  ====  =======  ==========  ====  ==  ====================  ==================',
    '==  =======  ==    ===   ====  =======  ======   ====   ===    ===   ===  =   ==',
    '====  ==========  ===  =  =====  =====    ===     ==     ===  ===  =  ==    =  =',
    '======  ===  ===  ===     =======  ===  =  ==  =  ==  =  ===  ===     ==  ======',
    '=  ====  ==  ===  ===  =====  ====  ==  =  ==  =  ==  =  ===  ===  =====  ======',
    '=  ====  ==  ===  ===  =  ==  ====  ==  =  ==  =  ==  =  ===  ===  =  ==  ======',
    '==      ===  ===   ===   ====      ===  =  ===   ====   ====   ===   ===  ======',
    '================================================================================',
    'Siteshooter                                                     v' + version,
    'Developed by                                                    ' +  pkg.author.name,
    '',
    'Usage: siteshooter [options]',
    '',
    'OPTIONS',
    '_______________________________________________________________________________________',
    '-c --config            Show configuration',
    '-e --debug             Output exceptions',
    '-h --help              Print this help',
    '-i --init              Create siteshooter.yml template file',
    '-v --version           Print version number',
    '-V --verbose           Verbose output',
    '',
].join('\n');


var aliases = {
    c: 'config',
    e: 'debug',
    h: 'help',
    i: 'init',
    v: 'version',
    V: 'verbose'
};

module.exports = {
    banner: function() {
        log.log(chalk.yellow.bold(bannerText));
    },
    config: function() {
        log.log.apply(null, arguments);
    },
    help: function() {
        log.log(chalk.yellow.bold(bannerText));
    },
    parse: function(argv) {
        var options = parseArgs(argv, {
            boolean: true,
            alias: aliases
        });
        return options;
    },
    version: function() {
        log.log('v' + version);
    }
};
