/**
 * @file initLayer.js
 * @author mengke01
 * @date
 * @description
 * Editor的layer初始化
 */


define(
    function (require) {
        var lang = require('common/lang');

        /**
         * 初始化层
         */
        function initLayer() {

            this.axisLayer = this.render.addLayer('axis', {
                level: 10,
                fill: false
            });

            this.fontLayer = this.render.addLayer('font', lang.extend({
                level: 20,
                lineWidth: 1,
                strokeColor: '#999',
                fillColor: '#555',
                strokeSeparate: false
            }, this.options.fontLayer));

            this.coverLayer = this.render.addLayer('cover', lang.extend({
                level: 30,
                fill: false,
                strokeColor: 'green',
                fillColor: 'white'
            }, this.options.coverLayer));

            this.referenceLineLayer = this.render.addLayer('referenceline', {
                level: 40,
                fill: false,
                strokeColor: this.options.referenceline.style.strokeColor
            });


            this.graduationLayer = this.render.addLayer('graduation', {
                level: 50,
                fill: false,
                disabled: true
            });
        }

        return initLayer;
    }
);
