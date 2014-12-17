/**
 * @file referenceline.js
 * @author mengke01
 * @date 
 * @description
 * 参考线相关命令
 */


define(
    function(require) {

        
        return {
            /**
             * 添加参考线
             */
            addreferenceline: function(x, y) {
                if(x > 20) {
                    this.referenceLineLayer.addShape('line', {
                        p0: {
                            x: x
                        }
                    });
                }

                if(y > 20) {
                    this.referenceLineLayer.addShape('line', {
                        p0: {
                            y: y
                        }
                    });
                }
                this.referenceLineLayer.refresh();
            },

            /**
             * 移除参考线
             */
            removereferenceline: function(x, y) {
                var lines = [];
                // 如果传入的是shape对象
                if(typeof(x) === 'object') {
                    lines.push(x);
                }

                var referenceLineLayer = this.referenceLineLayer;
                var rightSideBearing = this.rightSideBearing;

                // 获取选中的参考线
                if(x > 20 || y > 20) {
                    var result = this.referenceLineLayer.getShapeIn(x, y);
                    lines = lines.concat(result);
                }

                // rightside bearing 线不可移除
                lines = lines.filter(function(line) {
                    return line !== rightSideBearing;
                });

                lines.forEach(function(l) {
                    referenceLineLayer.removeShape(l);
                });
                referenceLineLayer.refresh();
            },

            /**
             * 清除参考线
             */
            clearreferenceline: function() {
                var referenceLineLayer = this.referenceLineLayer;
                var rightSideBearing = this.rightSideBearing;
                var lines = referenceLineLayer.shapes.filter(function(line) {
                    return line.type === 'line' && line !== rightSideBearing;
                });

                lines.forEach(function(l) {
                    referenceLineLayer.removeShape(l);
                });
                referenceLineLayer.refresh();
            }
        };
    }
);
