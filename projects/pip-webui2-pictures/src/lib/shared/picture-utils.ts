export function dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    const byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    const ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    const ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    const blob = new Blob([ab], { type: mimeString });
    return blob;

}

export function setIconMarginCSS(container, icon) {
    const
        containerWidth = container.clientWidth ? container.clientWidth : container.width,
        containerHeight = container.clientHeight ? container.clientHeight : container.height,
        iconSize = containerWidth > containerHeight ? containerHeight : containerWidth;
    let margin = 0;

    const cssParams = {
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
}

export function setImageMarginCSS(element, image, params) {
    const
        containerWidth = element.width ? element.width() : element.clientWidth, // || 80,
        containerHeight = element.height ? element.height() : element.clientHeight, // || 80,
        imageWidth = image.naturalWidth || image.width,
        imageHeight = image.naturalHeight || image.height;
    let margin = 0;
    let cssParams = {};

    if ((imageWidth / containerWidth) > (imageHeight / containerHeight)) {
        margin = -((imageWidth / imageHeight * containerHeight - containerWidth) / 2);
        cssParams['margin-left'] = '' + margin + 'px';
        cssParams['height'] = '' + containerHeight + 'px'; // '100%';
        cssParams['width'] = '' + imageWidth * containerHeight / imageHeight + 'px'; // '100%';
        cssParams['margin-top'] = 0;
    } else {
        margin = -((imageHeight / imageWidth * containerWidth - containerHeight) / 2);
        cssParams['margin-top'] = '' + margin + 'px';
        cssParams['height'] = '' + imageHeight * containerWidth / imageWidth + 'px'; // '100%';
        cssParams['width'] = '' + containerWidth + 'px'; // '100%';
        cssParams['margin-left'] = 0;
    }

    if (params) { cssParams = Object.assign(cssParams, params); }

    image.style.cssText += objectToString(cssParams);
}

export function setErrorImageCSS(image, params) {
    let cssParams = {
        'width': '',
        'margin-left': '',
        'height': '',
        'margin-top': ''
    };

    if (params) { cssParams = Object.assign(cssParams, params); }

    if (image) { image.style.cssText += objectToString(cssParams); }
}

export function setErrorIconCSS(element, icon, params) {
    const
        containerWidth = element.width ? element.width() : element.clientWidth,
        containerHeight = element.height ? element.height() : element.clientHeight;
    let cssParams = {};
    const value = Math.min(containerHeight, containerWidth) / 2;

    cssParams['width'] = value + 'px';
    cssParams['height'] = value + 'px';
    cssParams['font-size'] = (value) + 'px';

    if (params) { cssParams = Object.assign(cssParams, params); }

    icon.style.cssText += objectToString(cssParams);
}

function objectToString(obj) {
    let result = '';

    for (const key of Object.keys(obj)) {
        result += key + ': ' + obj[key] + ';';
    }

    return result.substring(0, result.length - 1);
}

export function addPasteListener(onPaste) {
    let pasteCatcher;

    if (!window['Clipboard']) {
        pasteCatcher = document.createElement('div');

        // Firefox allows images to be pasted into contenteditable elements
        pasteCatcher.setAttribute('contenteditable', 'true');

        // We can hide the element and append it to the body,
        // pasteCatcher.style.opacity = 0;
        const cssParams = {
            'position': 'absolute',
            'left': '-999',
            width: '0',
            height: '0',
            'overflow': 'hidden',
            outline: 0
        };

        pasteCatcher.style.cssText += objectToString(cssParams);
        document.body.appendChild(pasteCatcher);
    }

    document.addEventListener('paste', function (event: any) {
        if (event.clipboardData == null && event.originalEvent) {
            event = event.originalEvent;
        }

        // Paste for chrome
        if (event.clipboardData) {
            const items = event.clipboardData.items;
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item.type.indexOf('image') !== -1) {
                    const file = item.getAsFile();

                    const fileReader = new FileReader();
                    fileReader.onload = function (e) {
                        setTimeout(() => {
                            onPaste({ url: e.target['result'], file: file });
                        }, 0);
                    };
                    fileReader.readAsDataURL(file);
                }
            }
        } else if (window['clipboardData'] && window['clipboardData'].files) {
            for (let i = 0; i < window['clipboardData'].files.length; i++) {
                const file = window['clipboardData'].files[i];
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    setTimeout(() => {
                        onPaste({ url: e.target['result'], file: file });
                    }, 0);
                };
                fileReader.readAsDataURL(file);
            }
        }
    });

    return pasteCatcher;
}

export function debounce(func, wait, immediate = false) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) { func.apply(context, args); }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) { func.apply(context, args); }
    };
}

export function removePasteListener(pasteCatcher) {
    if (!window['Clipboard']) {
        if (pasteCatcher !== null) {
            document.body.removeChild(pasteCatcher);
            pasteCatcher = null;
        }
    }
    document.removeEventListener('paste', () => { });
}

export let collageSchemes = [
    // 1
    [
        {
            cols: 1,
            rowHeightDivider: 1,
            pictures: [
                {
                    colspan: 1, rowspan: 1
                }
            ]
        }
    ],
    // 2
    [
        {
            cols: 2,
            rowHeightDivider: 1,
            pictures: [
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        }
    ],
    // 3
    [
        {
            cols: 2,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 1, rowspan: 2
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        },
        {
            cols: 3,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 2, rowspan: 2
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        },
        {
            cols: 2,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        }
    ],
    // 4
    [
        {
            cols: 4,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 2, rowspan: 2
                },
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        },
        {
            cols: 3,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 3, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        },
        {
            cols: 2,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        }
    ],
    // 5
    [
        {
            cols: 4,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 2, rowspan: 2
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        },
        {
            cols: 4,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 4, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        },
        {
            cols: 6,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 3, rowspan: 1
                },
                {
                    colspan: 3, rowspan: 1
                },
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 2, rowspan: 1
                }
            ]
        }
    ],
    // 6
    [
        {
            cols: 4,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        },
        {
            cols: 14,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 8, rowspan: 2
                },
                {
                    colspan: 3, rowspan: 1
                },
                {
                    colspan: 3, rowspan: 1
                },
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 2, rowspan: 1
                }
            ]
        },
        {
            cols: 4,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        },
        {
            cols: 3,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        }
    ],
    // 7
    [
        {
            cols: 4,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 2, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        },
        {
            cols: 4,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 1, rowspan: 2
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        }
    ],
    // 8
    [
        {
            cols: 4,
            rowHeightDivider: 2,
            pictures: [
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                },
                {
                    colspan: 1, rowspan: 1
                }
            ]
        }
    ]
];
