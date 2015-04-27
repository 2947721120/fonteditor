/**
 * @file 设置选中的命令
 * @author mengke01(kekee000@gmail.com)
 */

define(
    function (require) {

        /**
         * 设置选中的命令
         *
         * @param {Array} commandList 命令列表
         * @param {string} command     命令路径，支持二级路径
         * @param {boolean} selected    是否被选中
         * @return {boolean} 是否找到command
         */
        function setSelectedCommand(commandList, command, selected) {
            var path = command.split('.');
            for (var i = 0, l = commandList.length; i < l; i++) {
                if (commandList[i].name === path[0]) {
                    if (!commandList[i].items) {
                        commandList[i].selected = !!selected;
                        return true;
                    }
                    else if (path[1]) {
                        var items = commandList[i].items;
                        for (var j = 0, ll = items.length; j < ll; j++) {
                            if (items[j].name === path[1]) {
                                items[j].selected = !!selected;
                                return true;
                            }
                        }
                    }
                }
            }

            return false;
        }

        return setSelectedCommand;
    }
);
