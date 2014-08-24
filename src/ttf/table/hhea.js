/**
 * @file hhea.js
 * @author mengke01
 * @date 
 * @description
 * hhea 表
 * 
 * The 'hhea' table contains information needed to
 *  layout fonts whose characters are written
 *  horizontally, that is, either left
 *  to right or right to left. 
 * This table contains information that is general
 *  to the font as a whole. Information which
 *  pertains to specific glyphs is given in the
 *  'hmtx' table defined below.
 * https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6hhea.html
 */


define(
    function(require) {
        var table = require('./table');
        var struct = require('./struct');
        var hhea = table.create(
            'hhea', 
            [
                ['version', struct.Fixed],
                ['ascent', struct.Int16],
                ['descent', struct.Int16],
                ['lineGap', struct.Int16],
                ['advanceWidthMax', struct.Uint16],
                ['minLeftSideBearing', struct.Int16],
                ['minRightSideBearing', struct.Int16],
                ['xMaxExtent', struct.Int16],
                ['caretSlopeRise', struct.Int16],
                ['caretSlopeRun', struct.Int16],
                ['caretOffset', struct.Int16],
                ['reserved0', struct.Int16],
                ['reserved1', struct.Int16],
                ['reserved2', struct.Int16],
                ['reserved3', struct.Int16],
                ['metricDataFormat', struct.Int16],
                ['numOfLongHorMetrics', struct.Uint16]
            ]
        );

        return hhea;
    }
);
