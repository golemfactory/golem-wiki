/*!
 * docsify-plugin-flexible-alerts
 * v1.0.1
 * https://github.com/zanfab/docsify-plugin-flexible-alerts#readme
 * (c) 2019 Fabian Zankl
 * MIT license
 */

!function() {
    "use strict";
    !function(t, e) {
        void 0===e&&(e= {}
        );
        var o=e.insertAt;
        if(t&&"undefined"!=typeof document) {
            var r=document.head||document.getElementsByTagName("head")[0],
            l=document.createElement("style");
            l.type="text/css",
            "top"===o&&r.firstChild?r.insertBefore(l, r.firstChild): r.appendChild(l), l.styleSheet?l.styleSheet.cssText=t: l.appendChild(document.createTextNode(t))
        }
    }
    ('@import url("https://use.fontawesome.com/releases/v5.6.3/css/solid.css");@import url("https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css");.alert{display:block;position:relative;word-wrap:break-word;word-break:break-word;padding:.75rem 1.25rem!important;margin-bottom:1rem!important}.alert>*{max-width:100%}.alert+.alert{margin-top:-.25rem!important}.alert:before{content:unset!important}.alert p{margin-top:.5rem;margin-bottom:.5rem}.alert i{margin-right:.5rem}.alert .title{font-weight:600;margin:0}.alert>:first-child{margin-top:0}.alert>:last-child{margin-bottom:0}.alert.callout{border:1px solid #eee;border-left-width:.25rem;border-radius:.25rem;background:#fff}.alert.callout.warning{border-left-color:#f0ad4e!important}.alert.callout.warning .title{color:#f0ad4e}.alert.callout.tip{border-left-color:#28a745!important}.alert.callout.tip .title{color:#28a745}.alert.callout.info{border-left-color:#17a2b8!important}.alert.callout.info .title{color:#17a2b8}.alert.callout.danger{border-left-color:#dc3545!important}.alert.callout.danger .title{color:#dc3545}.alert.flat{border:1px solid transparent;border-radius:.125rem;color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert.flat.info{color:#02587f;background-color:#cdeefd;border-color:#b8e7fc}.alert.flat.info .title{color:#01354d}.alert.flat.tip{color:#285b2a;background-color:#dbefdc;border-color:#cde9ce}.alert.flat.tip .title{color:#18381a}.alert.flat.warning{color:#852d12;background-color:#ffddd3;border-color:#ffd0c1}.alert.flat.warning .title{color:#581e0c}.alert.flat.danger{color:#7f231c;background-color:#fdd9d7;border-color:#fccac7}.alert.flat.danger .title{color:#551713}');
    var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t) {
        return typeof t
    }
    :function(t) {
        return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol": typeof t
    }
    ;
    !function() {
        var e= {
            style:"callout",
            note: {
                label: "Note", icon: "fas fa-info-circle", className: "info"
            }
            ,
            tip: {
                label: "Tip", icon: "fas fa-lightbulb", className: "tip"
            }
            ,
            warning: {
                label: "Warning", icon: "fas fa-exclamation-triangle", className: "warning"
            }
            ,
            danger: {
                label: "Attention", icon: "fas fa-ban", className: "danger"
            }
        }
        ;
        window.$docsify=window.$docsify|| {}
        ,
        window.$docsify.plugins=[].concat(function(o, r) {
            var l=function t(e, o) {
                var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]: 0;
                for(var l in o)try {
                    o[l].constructor===Object&&r<1?e[l]=t(e[l], o[l], r+1): e[l]=o[l]
                }
                catch(t) {
                    e[l]=o[l]
                }
                return e
            }
            (e, r.config["flexible-alerts"]), a=function(t, e, o, r) {
                var l=(t||"").match(new RegExp(e+":(([\\w\\s]*))"));
                return l?r?r(l[1]): l[1]: r?r(o): o
            }
            ;
            o.afterEach(function(e, o) {
                o(e.replace(/<\s*blockquote[^>]*>(?: <p>|[\S\n]*)?\[!(\w*)((?: \|[\w*: [\w\s]*)*?)\]([\s\S]*?)(?: <\/p>)?<\s*\/\s*blockquote>/g, function(e, o, n, i) {
                    var c=l[o.toLowerCase()];
                    if(!c)return e;
                    var d=a(n, "style", l.style), s=a(n, "iconVisibility", "visible", function(t) {
                        return"hidden"!==t
                    }
                    ), f=a(n, "labelVisibility", "visible", function(t) {
                        return"hidden"!==t
                    }
                    ), u=a(n, "label", c.label), b=a(n, "icon", c.icon), m=a(n, "className", c.className);
                    if("object"===(void 0===u?"undefined":t(u))) {
                        var p=Object.keys(u).filter(function(t) {
                            return r.route.path.indexOf(t)>-1
                        }
                        );
                        p&&p.length>0?u=u[p[0]]:(f=!1, s=!1)
                    }
                    return'<div class="alert '+d+" "+m+'">\n            <p class="title">\n                '+(s?'<i class="'+b+'"></i>':"")+"\n                "+(f?u:"")+"\n            </p>\n            <p>"+i+"</p>\n          </div>"
                }
                ))
            }
            )
        }
        , window.$docsify.plugins)
    }
    ()
}

();
//# sourceMappingURL=docsify-plugin-flexible-alerts.min.js.map