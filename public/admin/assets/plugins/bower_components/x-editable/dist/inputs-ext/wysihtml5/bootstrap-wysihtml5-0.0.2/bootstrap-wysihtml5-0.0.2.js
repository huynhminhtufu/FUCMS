!function($, wysi) {
    

    const tpl = {
        "font-styles": function(locale, options) {
            const size = (options && options.size) ? ` btn-${options.size}` : '';
            return `${"<li class='dropdown'>" +
              "<a class='btn dropdown-toggle"}${  size  }' data-toggle='dropdown' href='#'>` +
              `<i class='icon-font'></i>&nbsp;<span class='current-font'>${  locale.font_styles.normal  }</span>&nbsp;<b class='caret'></b>` +
              `</a>` +
              `<ul class='dropdown-menu'>` +
                `<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='div' tabindex='-1'>${  locale.font_styles.normal  }</a></li>` +
                `<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h1' tabindex='-1'>${  locale.font_styles.h1  }</a></li>` +
                `<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h2' tabindex='-1'>${  locale.font_styles.h2  }</a></li>` +
                `<li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h3' tabindex='-1'>${  locale.font_styles.h3  }</a></li>` +
              `</ul>` +
            `</li>`;
        },

        "emphasis": function(locale, options) {
            const size = (options && options.size) ? ` btn-${options.size}` : '';
            return `${"<li>" +
              "<div class='btn-group'>" +
                "<a class='btn"}${  size  }' data-wysihtml5-command='bold' title='CTRL+B' tabindex='-1'>${  locale.emphasis.bold  }</a>` +
                `<a class='btn${  size  }' data-wysihtml5-command='italic' title='CTRL+I' tabindex='-1'>${  locale.emphasis.italic  }</a>` +
                `<a class='btn${  size  }' data-wysihtml5-command='underline' title='CTRL+U' tabindex='-1'>${  locale.emphasis.underline  }</a>` +
              `</div>` +
            `</li>`;
        },

        "lists": function(locale, options) {
            const size = (options && options.size) ? ` btn-${options.size}` : '';
            return `${"<li>" +
              "<div class='btn-group'>" +
                "<a class='btn"}${  size  }' data-wysihtml5-command='insertUnorderedList' title='${  locale.lists.unordered  }' tabindex='-1'><i class='icon-list'></i></a>` +
                `<a class='btn${  size  }' data-wysihtml5-command='insertOrderedList' title='${  locale.lists.ordered  }' tabindex='-1'><i class='icon-th-list'></i></a>` +
                `<a class='btn${  size  }' data-wysihtml5-command='Outdent' title='${  locale.lists.outdent  }' tabindex='-1'><i class='icon-indent-right'></i></a>` +
                `<a class='btn${  size  }' data-wysihtml5-command='Indent' title='${  locale.lists.indent  }' tabindex='-1'><i class='icon-indent-left'></i></a>` +
              `</div>` +
            `</li>`;
        },

        "link": function(locale, options) {
            const size = (options && options.size) ? ` btn-${options.size}` : '';
            return `${"<li>" +
              "<div class='bootstrap-wysihtml5-insert-link-modal modal hide fade'>" +
                "<div class='modal-header'>" +
                  "<a class='close' data-dismiss='modal'>&times;</a>" +
                  "<h3>"}${  locale.link.insert  }</h3>` +
                `</div>` +
                `<div class='modal-body'>` +
                  `<input value='http://' class='bootstrap-wysihtml5-insert-link-url input-xlarge'>` +
                `</div>` +
                `<div class='modal-footer'>` +
                  `<a href='#' class='btn' data-dismiss='modal'>${  locale.link.cancel  }</a>` +
                  `<a href='#' class='btn btn-primary' data-dismiss='modal'>${  locale.link.insert  }</a>` +
                `</div>` +
              `</div>` +
              `<a class='btn${  size  }' data-wysihtml5-command='createLink' title='${  locale.link.insert  }' tabindex='-1'><i class='icon-share'></i></a>` +
            `</li>`;
        },

        "image": function(locale, options) {
            const size = (options && options.size) ? ` btn-${options.size}` : '';
            return `${"<li>" +
              "<div class='bootstrap-wysihtml5-insert-image-modal modal hide fade'>" +
                "<div class='modal-header'>" +
                  "<a class='close' data-dismiss='modal'>&times;</a>" +
                  "<h3>"}${  locale.image.insert  }</h3>` +
                `</div>` +
                `<div class='modal-body'>` +
                  `<input value='http://' class='bootstrap-wysihtml5-insert-image-url input-xlarge'>` +
                `</div>` +
                `<div class='modal-footer'>` +
                  `<a href='#' class='btn' data-dismiss='modal'>${  locale.image.cancel  }</a>` +
                  `<a href='#' class='btn btn-primary' data-dismiss='modal'>${  locale.image.insert  }</a>` +
                `</div>` +
              `</div>` +
              `<a class='btn${  size  }' data-wysihtml5-command='insertImage' title='${  locale.image.insert  }' tabindex='-1'><i class='icon-picture'></i></a>` +
            `</li>`;
        },

        "html": function(locale, options) {
            const size = (options && options.size) ? ` btn-${options.size}` : '';
            return `${"<li>" +
              "<div class='btn-group'>" +
                "<a class='btn"}${  size  }' data-wysihtml5-action='change_view' title='${  locale.html.edit  }' tabindex='-1'><i class='icon-pencil'></i></a>` +
              `</div>` +
            `</li>`;
        },

        "color": function(locale, options) {
            const size = (options && options.size) ? ` btn-${options.size}` : '';
            return `${"<li class='dropdown'>" +
              "<a class='btn dropdown-toggle"}${  size  }' data-toggle='dropdown' href='#' tabindex='-1'>` +
                `<span class='current-color'>${  locale.colours.black  }</span>&nbsp;<b class='caret'></b>` +
              `</a>` +
              `<ul class='dropdown-menu'>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='black'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='black'>${  locale.colours.black  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='silver'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='silver'>${  locale.colours.silver  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='gray'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='gray'>${  locale.colours.gray  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='maroon'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='maroon'>${  locale.colours.maroon  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='red'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='red'>${  locale.colours.red  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='purple'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='purple'>${  locale.colours.purple  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='green'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='green'>${  locale.colours.green  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='olive'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='olive'>${  locale.colours.olive  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='navy'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='navy'>${  locale.colours.navy  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='blue'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='blue'>${  locale.colours.blue  }</a></li>` +
                `<li><div class='wysihtml5-colors' data-wysihtml5-command-value='orange'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='orange'>${  locale.colours.orange  }</a></li>` +
              `</ul>` +
            `</li>`;
        }
    };

    const templates = function(key, locale, options) {
        return tpl[key](locale, options);
    };


    const Wysihtml5 = function(el, options) {
        this.el = el;
        const toolbarOpts = options || defaultOptions;
        for(const t in toolbarOpts.customTemplates) {
          tpl[t] = toolbarOpts.customTemplates[t];
        }
        this.toolbar = this.createToolbar(el, toolbarOpts);
        this.editor =  this.createEditor(options);

        window.editor = this.editor;

        $('iframe.wysihtml5-sandbox').each((i, el) => {
            $(el.contentWindow).off('focus.wysihtml5').on({
                'focus.wysihtml5' : function(){
                    $('li.dropdown').removeClass('open');
                }
            });
        });
    };

    Wysihtml5.prototype = {

        constructor: Wysihtml5,

        createEditor(options) {
            options = options || {};
            
            // Add the toolbar to a clone of the options object so multiple instances
            // of the WYISYWG don't break because "toolbar" is already defined
            options = $.extend(true, {}, options);
            options.toolbar = this.toolbar[0];

            const editor = new wysi.Editor(this.el[0], options);

            if(options && options.events) {
                for(const eventName in options.events) {
                    editor.on(eventName, options.events[eventName]);
                }
            }
            return editor;
        },

        createToolbar(el, options) {
            const self = this;
            const toolbar = $("<ul/>", {
                'class' : "wysihtml5-toolbar",
                'style': "display:none"
            });
            const culture = options.locale || defaultOptions.locale || "en";
            for(var key in defaultOptions) {
                let value = false;

                if(options[key] !== undefined) {
                    if(options[key] === true) {
                        value = true;
                    }
                } else {
                    value = defaultOptions[key];
                }

                if(value === true) {
                    toolbar.append(templates(key, locale[culture], options));

                    if(key === "html") {
                        this.initHtml(toolbar);
                    }

                    if(key === "link") {
                        this.initInsertLink(toolbar);
                    }

                    if(key === "image") {
                        this.initInsertImage(toolbar);
                    }
                }
            }

            if(options.toolbar) {
                for(key in options.toolbar) {
                    toolbar.append(options.toolbar[key]);
                }
            }

            toolbar.find("a[data-wysihtml5-command='formatBlock']").click((e) => {
                const target = e.target || e.srcElement;
                const el = $(target);
                self.toolbar.find('.current-font').text(el.html());
            });

            toolbar.find("a[data-wysihtml5-command='foreColor']").click((e) => {
                const target = e.target || e.srcElement;
                const el = $(target);
                self.toolbar.find('.current-color').text(el.html());
            });

            this.el.before(toolbar);

            return toolbar;
        },

        initHtml(toolbar) {
            const changeViewSelector = "a[data-wysihtml5-action='change_view']";
            toolbar.find(changeViewSelector).click((e) => {
                toolbar.find('a.btn').not(changeViewSelector).toggleClass('disabled');
            });
        },

        initInsertImage(toolbar) {
            const self = this;
            const insertImageModal = toolbar.find('.bootstrap-wysihtml5-insert-image-modal');
            const urlInput = insertImageModal.find('.bootstrap-wysihtml5-insert-image-url');
            const insertButton = insertImageModal.find('a.btn-primary');
            const initialValue = urlInput.val();
            let caretBookmark;

            const insertImage = function() {
                const url = urlInput.val();
                urlInput.val(initialValue);
                self.editor.currentView.element.focus();
                if (caretBookmark) {
                  self.editor.composer.selection.setBookmark(caretBookmark);
                  caretBookmark = null;
                }
                self.editor.composer.commands.exec("insertImage", url);
            };

            urlInput.keypress((e) => {
                if(e.which == 13) {
                    insertImage();
                    insertImageModal.modal('hide');
                }
            });

            insertButton.click(insertImage);

            insertImageModal.on('shown', () => {
                urlInput.focus();
            });

            insertImageModal.on('hide', () => {
                self.editor.currentView.element.focus();
            });

            toolbar.find('a[data-wysihtml5-command=insertImage]').click(function() {
                const activeButton = $(this).hasClass("wysihtml5-command-active");

                if (!activeButton) {
                    self.editor.currentView.element.focus(false);
                    caretBookmark = self.editor.composer.selection.getBookmark();
                    insertImageModal.appendTo('body').modal('show');
                    insertImageModal.on('click.dismiss.modal', '[data-dismiss="modal"]', (e) => {
                        e.stopPropagation();
                    });
                    return false;
                }
                
                    return true;
                
            });
        },

        initInsertLink(toolbar) {
            const self = this;
            const insertLinkModal = toolbar.find('.bootstrap-wysihtml5-insert-link-modal');
            const urlInput = insertLinkModal.find('.bootstrap-wysihtml5-insert-link-url');
            const insertButton = insertLinkModal.find('a.btn-primary');
            const initialValue = urlInput.val();
            let caretBookmark;

            const insertLink = function() {
                const url = urlInput.val();
                urlInput.val(initialValue);
                self.editor.currentView.element.focus();
                if (caretBookmark) {
                  self.editor.composer.selection.setBookmark(caretBookmark);
                  caretBookmark = null;
                }
                self.editor.composer.commands.exec("createLink", {
                    href: url,
                    target: "_blank",
                    rel: "nofollow"
                });
            };
            const pressedEnter = false;

            urlInput.keypress((e) => {
                if(e.which == 13) {
                    insertLink();
                    insertLinkModal.modal('hide');
                }
            });

            insertButton.click(insertLink);

            insertLinkModal.on('shown', () => {
                urlInput.focus();
            });

            insertLinkModal.on('hide', () => {
                self.editor.currentView.element.focus();
            });

            toolbar.find('a[data-wysihtml5-command=createLink]').click(function() {
                const activeButton = $(this).hasClass("wysihtml5-command-active");

                if (!activeButton) {
                    self.editor.currentView.element.focus(false);
                    caretBookmark = self.editor.composer.selection.getBookmark();
                    insertLinkModal.appendTo('body').modal('show');
                    insertLinkModal.on('click.dismiss.modal', '[data-dismiss="modal"]', (e) => {
                        e.stopPropagation();
                    });
                    return false;
                }
                
                    return true;
                
            });
        }
    };

    // these define our public api
    var methods = {
        resetDefaults() {
            $.fn.wysihtml5.defaultOptions = $.extend(true, {}, $.fn.wysihtml5.defaultOptionsCache);
        },
        bypassDefaults(options) {
            return this.each(function () {
                const $this = $(this);
                $this.data('wysihtml5', new Wysihtml5($this, options));
            });
        },
        shallowExtend (options) {
            const settings = $.extend({}, $.fn.wysihtml5.defaultOptions, options || {});
            const that = this;
            return methods.bypassDefaults.apply(that, [settings]);
        },
        deepExtend(options) {
            const settings = $.extend(true, {}, $.fn.wysihtml5.defaultOptions, options || {});
            const that = this;
            return methods.bypassDefaults.apply(that, [settings]);
        },
        init(options) {
            const that = this;
            return methods.shallowExtend.apply(that, [options]);
        }
    };

    $.fn.wysihtml5 = function ( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } 
            $.error( `Method ${   method  } does not exist on jQuery.wysihtml5` );
            
    };

    $.fn.wysihtml5.Constructor = Wysihtml5;

    var defaultOptions = $.fn.wysihtml5.defaultOptions = {
        "font-styles": true,
        "color": false,
        "emphasis": true,
        "lists": true,
        "html": false,
        "link": true,
        "image": true,
        events: {},
        parserRules: {
            classes: {
                // (path_to_project/lib/css/wysiwyg-color.css)
                "wysiwyg-color-silver" : 1,
                "wysiwyg-color-gray" : 1,
                "wysiwyg-color-white" : 1,
                "wysiwyg-color-maroon" : 1,
                "wysiwyg-color-red" : 1,
                "wysiwyg-color-purple" : 1,
                "wysiwyg-color-fuchsia" : 1,
                "wysiwyg-color-green" : 1,
                "wysiwyg-color-lime" : 1,
                "wysiwyg-color-olive" : 1,
                "wysiwyg-color-yellow" : 1,
                "wysiwyg-color-navy" : 1,
                "wysiwyg-color-blue" : 1,
                "wysiwyg-color-teal" : 1,
                "wysiwyg-color-aqua" : 1,
                "wysiwyg-color-orange" : 1
            },
            tags: {
                "b":  {},
                "i":  {},
                "br": {},
                "ol": {},
                "ul": {},
                "li": {},
                "h1": {},
                "h2": {},
                "h3": {},
                "blockquote": {},
                "u": 1,
                "img": {
                    "check_attributes": {
                        "width": "numbers",
                        "alt": "alt",
                        "src": "url",
                        "height": "numbers"
                    }
                },
                "a":  {
                    set_attributes: {
                        target: "_blank",
                        rel:    "nofollow"
                    },
                    check_attributes: {
                        href:   "url" // important to avoid XSS
                    }
                },
                "span": 1,
                "div": 1,
                // to allow save and edit files with code tag hacks
                "code": 1,
                "pre": 1
            }
        },
        stylesheets: ["./lib/css/wysiwyg-color.css"], // (path_to_project/lib/css/wysiwyg-color.css)
        locale: "en"
    };

    if (typeof $.fn.wysihtml5.defaultOptionsCache === 'undefined') {
        $.fn.wysihtml5.defaultOptionsCache = $.extend(true, {}, $.fn.wysihtml5.defaultOptions);
    }

    var locale = $.fn.wysihtml5.locale = {
        en: {
            font_styles: {
                normal: "Normal text",
                h1: "Heading 1",
                h2: "Heading 2",
                h3: "Heading 3"
            },
            emphasis: {
                bold: "Bold",
                italic: "Italic",
                underline: "Underline"
            },
            lists: {
                unordered: "Unordered list",
                ordered: "Ordered list",
                outdent: "Outdent",
                indent: "Indent"
            },
            link: {
                insert: "Insert link",
                cancel: "Cancel"
            },
            image: {
                insert: "Insert image",
                cancel: "Cancel"
            },
            html: {
                edit: "Edit HTML"
            },
            colours: {
                black: "Black",
                silver: "Silver",
                gray: "Grey",
                maroon: "Maroon",
                red: "Red",
                purple: "Purple",
                green: "Green",
                olive: "Olive",
                navy: "Navy",
                blue: "Blue",
                orange: "Orange"
            }
        }
    };

}(window.jQuery, window.wysihtml5);
