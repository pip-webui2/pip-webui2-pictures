import * as _ from 'lodash';

export function setIconMarginCSS(container, icon) {
    let
        containerWidth = container.clientWidth ? container.clientWidth : container.width,
        containerHeight = container.clientHeight ? container.clientHeight : container.height,
        margin = 0,
        iconSize = containerWidth > containerHeight ? containerHeight : containerWidth;

    var cssParams = {
        'width': '' + iconSize + 'px',
        'margin-left': '',
        'height': '' + iconSize + 'px',
        'margin-top': ''
    };

    if ((containerWidth) > (containerHeight)) {
        margin = ((containerWidth - containerHeight) / 2);
        cssParams['margin-left'] = '' + margin + 'px';
    } else {
        margin = ((containerHeight - containerWidth) / 2);
        cssParams['margin-top'] = '' + margin + 'px';
    }

    icon.style.cssText += objectToString(cssParams);
};

export function setImageMarginCSS(element, image, params) {
    let
        containerWidth = element.width ? element.width() : element.clientWidth, // || 80,
        containerHeight = element.height ? element.height() : element.clientHeight, // || 80,
        imageWidth = image.naturalWidth || image.width,
        imageHeight = image.naturalHeight || image.height,
        margin = 0;
    let cssParams = {};

    if ((imageWidth / containerWidth) > (imageHeight / containerHeight)) {
        margin = -((imageWidth / imageHeight * containerHeight - containerWidth) / 2);
        cssParams['margin-left'] = '' + margin + 'px';
        cssParams['height'] = '' + containerHeight + 'px';//'100%';
        cssParams['width'] = '' + imageWidth * containerHeight / imageHeight + 'px';//'100%';
        cssParams['margin-top'] = '';
    } else {
        margin = -((imageHeight / imageWidth * containerWidth - containerHeight) / 2);
        cssParams['margin-top'] = '' + margin + 'px';
        cssParams['height'] = '' + imageHeight * containerWidth / imageWidth + 'px';//'100%';
        cssParams['width'] = '' + containerWidth + 'px';//'100%';
        cssParams['margin-left'] = '';
    }

    if (params) cssParams = _.assign(cssParams, params);

    image.style.cssText += objectToString(cssParams);
};

export function setErrorImageCSS(image, params) {
    var cssParams = {
        'width': '',
        'margin-left': '',
        'height': '',
        'margin-top': ''
    };

    if (params) cssParams = _.assign(cssParams, params);

    if (image) image.style.cssText += objectToString(cssParams);
};

function objectToString(obj) {
    let result = '';

    for (let key in obj) {
        result += key + ': ' + obj[key] + ';';
    }

    return result.substring(0, result.length - 1);
}