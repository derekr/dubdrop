/**
 * Simple drag and drop file handler.
 *
 * @package dubdrop
 * @author drk <drk@diy.org>
 */

var _      = require('lodash');
var queue  = require('queue-async');

var settings = {
    'tasks': []
};

/**
 * Constructor
 */
function dubdrop (target, options) {
    var me = this;

    _.extend(settings, options);

    initDrop(target);
};

function initDrop (target) {
    var $target = document.querySelectorAll(target);
    var targetLength = $target.length;

    for (var i = 0; i < targetLength; i++) {
        var $el = $target[i];
        
        if (isFileInput($el)) enhanceInput($el);

        bindDropEvents($el);
    }
};

function enhanceInput($el) {
    console.log('TODO: enhancing input');
}

function bindDropEvents($el) {
    console.log('TODO: binding events');

    $el.addEventListener('change', function (e) {
        queueFiles(e.target.files);
    }, false);

    // TOOD: Finish binding drop events and not just change...
}

function queueFiles (files) {
    // `async` for queue?
    var q = queue();

    _.each(files, function (file) {
        _.each(settings.tasks, function (task) {
            q.defer(function (file, callback) {
                task.call(this, file);
                callback(null, file);
            }, file);
        })
    });

    q.awaitAll(function (err, result) {
        console.log(result);
    });
}

function isFileInput ($el) {
    return ($el.tagName === 'INPUT' && $el.type === 'file');
}

/**
 * Export
 */
module.exports = dubdrop;
