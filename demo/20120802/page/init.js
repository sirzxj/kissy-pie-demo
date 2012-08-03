/*
combined files : 

page/mods/header
page/init

*/
/**
 * @fileoverview ҳ��ͷ�����ýű�
 * @author: ���ӣ���ƽ��<minghe36@126.com>
 *
 **/
KISSY.add('page/mods/header',function(S) {

    return function(){
        alert('header of demo page.');
    }

});/**
 * @fileoverview demoҳ���ű���ʼ��
 * @author: ���ӣ���ƽ��<minghe36@126.com>
 *
 **/
KISSY.add('page/init',function(S, Header) {

    return function(){
        Header();
        return 'this is demo page.';
    }

}, {requires:['./mods/header']});