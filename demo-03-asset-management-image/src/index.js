import _ from 'lodash';
import './style.css';
import icon from './icon.jpg'

function component() {
    var element = document.createElement('div');

    // lodash 是由当前 script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());