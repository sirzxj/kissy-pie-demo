/**
 * @fileoverview demo页面脚本初始化
 * @author: 明河（剑平）<minghe36@126.com>
 *
 **/
KISSY.add(function(S, Header) {

    return function(){
        Header();
        return 'this is demo page.';
    }

}, {requires:['./mods/header']});