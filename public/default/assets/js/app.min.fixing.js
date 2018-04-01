// eslint-disable-next-line
// const $ = $;
// eslint-disable-next-line
// const jQuery = jQuery;

function openConf(t) {
  $('#ms-configurator').animate(
    {
      right: '0px',
    },
    400,
  ),
    $('.ms-configurator-btn').animate(
      {
        right: '-60px',
      },
      200,
    );
}

function closeConf() {
  $('#ms-configurator').animate(
    {
      right: '-310px',
    },
    200,
  ),
    $('.ms-configurator-btn').animate(
      {
        right: '20px',
      },
      400,
    );
}

function slidebar() {
  let t = $('.ms-slidebar'),
    o = $('.ms-site-container'),
    n = !1,
    e = !1;
  $('.ms-toggle-left').click(() => {
    e ? (t.removeClass('open'), (e = !1)) : (t.addClass('open'), (e = !0)),
      (n = !0);
  }),
    o.click(() => {
      !n && e && (t.removeClass('open'), (e = !1)), (n = !1);
    });
}

function afterBodyShowed() {
  let n = $('.ms-navbar'),
    e = ($('.navbar-nav'), $('body')),
    i = $('.ms-site-container').hasClass('ms-nav-fixed');
  $(window).scroll(() => {
    i ||
      ($(window).scrollTop() > 120 &&
        (n.addClass('shrink'),
        e.addClass('bd-scroll'),
        n.addClass('fixed-top')),
      $(window).scrollTop() < 121 &&
        (n.removeClass('shrink'),
        e.removeClass('bd-scroll'),
        n.removeClass('fixed-top')));
  });
}

$(document).ready(() => {
  document.addEventListener('touchstart', () => {}, !0), $.material.init();
  new SmoothScroll('[data-scroll]');
  $('[data-toggle="tooltip"]').tooltip(),
    $('[data-toggle="popover"]').popover(),
    $('#status').fadeOut(),
    $('#ms-preload')
      .delay(350)
      .fadeOut('slow'),
    $('body')
      .delay(350)
      .css({
        overflow: 'visible',
      }),
    new WOW().init();
  plyr.setup();
  $('.counter').counterUp({
    delay: 10,
    time: 2e3,
  }),
    slidebar();
  let t,
    o = $('.btn-back-top');
  $(window).scroll(function() {
    $(this).scrollTop() > 400
      ? o.addClass('back-show')
      : o.removeClass('back-show');
  }),
    (t = jQuery)(() => {
      t(document).off('click.bs.tab.data-api', '[data-hover="tab"]'),
        t(document).on(
          'mouseenter.bs.tab.data-api',
          '[data-hover="tab"]',
          function() {
            t(this).tab('show');
          },
        );
    }),
    $('.navbar').on(
      'click mousedown mouseup touchstart',
      'a.has_children',
      function() {
        return $(this)
          .next('ul')
          .hasClass('open_t') &&
          !$(this)
            .parents('ul')
            .hasClass('open_t')
          ? ($('.open_t').removeClass('open_t'), !1)
          : ($('.open_t')
              .not($(this).parents('ul'))
              .removeClass('open_t'),
            $(this)
              .next('ul')
              .addClass('open_t'),
            !1);
      },
    ),
    $(document).on('click', ':not(.has_children, .has_children *)', () => {
      if ($('.open_t').length > 0)
        return (
          $('.open_t').removeClass('open_t'),
          $('.open_t')
            .parent()
            .removeClass('open'),
          !1
        );
    });

  // var n = $(".ms-navbar")
  //   , e = ($(".navbar-nav"),
  // $("body"))
  //   , i = $(".ms-site-container").hasClass("ms-nav-fixed");
  // $(window).scroll(function() {
  //     i || ($(window).scrollTop() > 120 && (n.addClass("shrink"),
  //     e.addClass("bd-scroll"),
  //     n.addClass("fixed-top")),
  //     $(window).scrollTop() < 121 && (n.removeClass("shrink"),
  //     e.removeClass("bd-scroll"),
  //     n.removeClass("fixed-top")))
  // }),

  afterBodyShowed();

  $('#datePicker').datepicker({
    orientation: 'bottom left',
    autoclose: !0,
    todayHighlight: !0,
  });
  const a = $('.masonry-container');
  a.imagesLoaded(() => {
    a.masonry({
      columnWidth: '.masonry-item',
      itemSelector: '.masonry-item',
    });
  });
  let s = !1;
  $('.ms-conf-btn').click(() => {
    s ? ((s = !1), closeConf()) : ((s = !0), openConf());
  }),
    $('.ms-site-container').click(() => {
      s && ((s = !1), closeConf());
    });
}),
  (function(t) {
    t('.input-number .btn-circle:first-of-type').on('click', () => {
      t('.input-number input').val(
        parseInt(t('.input-number input').val(), 10) - 1,
      );
    }),
      t('.input-number .btn-circle:last-of-type').on('click', () => {
        t('.input-number input').val(
          parseInt(t('.input-number input').val(), 10) + 1,
        );
      });
  })(jQuery),
  (function(t, o, n) {
    let e = t();
    (t.fn.dropdownHover = function(n) {
      return 'ontouchstart' in document
        ? this
        : ((e = e.add(this.parent())),
          this.each(function() {
            let i,
              a,
              s = t(this),
              r = s.parent(),
              l = {
                delay: t(this).data('delay'),
                hoverDelay: t(this).data('hover-delay'),
                instantlyCloseOthers: t(this).data('close-others'),
              },
              c = 'show.bs.dropdown',
              p = t.extend(
                !0,
                {},
                {
                  delay: 0,
                  hoverDelay: 0,
                  instantlyCloseOthers: !0,
                },
                n,
                l,
              );

            function u(t) {
              o.clearTimeout(i),
                o.clearTimeout(a),
                (a = o.setTimeout(() => {
                  e.find(':focus').blur(),
                    !0 === p.instantlyCloseOthers && e.removeClass('show'),
                    o.clearTimeout(a),
                    s.attr('aria-expanded', 'true'),
                    r.addClass('show'),
                    s.trigger(c);
                }, p.hoverDelay));
            }
            r.hover(
              n => {
                if (!r.hasClass('show') && !s.is(n.target)) return !0;
                t(o).width() > 767 && u(n);
              },
              () => {
                t(o).width() > 767 &&
                  (o.clearTimeout(a),
                  (i = o.setTimeout(() => {
                    s.attr('aria-expanded', 'false'),
                      r.removeClass('show'),
                      s.trigger('hide.bs.dropdown');
                  }, p.delay)));
              },
            ),
              s.hover(n => {
                if (
                  !r.hasClass('show') &&
                  !r.is(n.target) &&
                  t(o).width() > 767
                )
                  return !0;
                t(o).width() > 767 && u(n);
              }),
              r.find('.dropdown-submenu').each(function() {
                let n,
                  e = t(this);
                e.hover(
                  () => {
                    o.clearTimeout(n),
                      e.children('.dropdown-menu').show(),
                      e
                        .siblings()
                        .children('.dropdown-menu')
                        .hide();
                  },
                  () => {
                    const t = e.children('.dropdown-menu');
                    n = o.setTimeout(() => {
                      t.hide();
                    }, p.delay);
                  },
                );
              });
          }));
    }),
      t(document).ready(() => {
        t('[data-hover="dropdown"]').dropdownHover();
      });
  })(jQuery, window),
  (function(t) {
    function o(o) {
      const n = t(o);
      n.prop('disabled') || n.closest('.form-group').addClass('is-focused');
    }

    function n(n) {
      let i = !1;
      (n.is(t.material.options.checkboxElements) ||
        n.is(t.material.options.radioElements)) &&
        (i = !0),
        n.closest('label').hover(
          function() {
            let n,
              e,
              a = t(this).find('input'),
              s = a.prop('disabled');
            i &&
              ((n = t(this)),
              (e = s),
              (n.hasClass('checkbox-inline') || n.hasClass('radio-inline')
                ? n
                : n.closest('.checkbox').length
                  ? n.closest('.checkbox')
                  : n.closest('.radio')
              ).toggleClass('disabled', e)),
              s || o(a);
          },
          function() {
            e(t(this).find('input'));
          },
        );
    }

    function e(o) {
      t(o)
        .closest('.form-group')
        .removeClass('is-focused');
    }
    (t.expr[':'].notmdproc = function(o) {
      return !t(o).data('mdproc');
    }),
      (t.material = {
        options: {
          validate: !0,
          input: !0,
          ripples: !0,
          checkbox: !0,
          togglebutton: !0,
          radio: !0,
          arrive: !0,
          autofill: !1,
          withRipples: [
            '.btn:not(.btn-link)',
            '.card-image',
            '.navbar a:not(.withoutripple)',
            '.dropdown-menu a',
            '.nav-tabs a:not(.withoutripple)',
            '.withripple',
            '.pagination li:not(.active):not(.disabled) a:not(.withoutripple)',
          ].join(','),
          inputElements:
            'input.form-control, textarea.form-control, select.form-control',
          checkboxElements:
            '.checkbox > label > input[type=checkbox], label.checkbox-inline > input[type=checkbox]',
          togglebuttonElements: '.togglebutton > label > input[type=checkbox]',
          radioElements:
            '.radio > label > input[type=radio], label.radio-inline > input[type=radio]',
        },
        checkbox(o) {
          n(
            t(o || this.options.checkboxElements)
              .filter(':notmdproc')
              .data('mdproc', !0)
              .after(
                "<span class='checkbox-material'><span class='check'></span></span>",
              ),
          );
        },
        togglebutton(o) {
          n(
            t(o || this.options.togglebuttonElements)
              .filter(':notmdproc')
              .data('mdproc', !0)
              .after("<span class='toggle'></span>"),
          );
        },
        radio(o) {
          n(
            t(o || this.options.radioElements)
              .filter(':notmdproc')
              .data('mdproc', !0)
              .after("<span class='circle'></span><span class='check'></span>"),
          );
        },
        input(o) {
          t(o || this.options.inputElements)
            .filter(':notmdproc')
            .data('mdproc', !0)
            .each(function() {
              let o = t(this),
                n = o.closest('.form-group');
              n.length !== 0 ||
                o.attr('type') === 'hidden' ||
                o.attr('hidden') ||
                (o.wrap("<div class='form-group'></div>"),
                (n = o.closest('.form-group'))),
                o.attr('data-hint') &&
                  (o.after(`<p class='help-block'>${o.attr('data-hint')}</p>`),
                  o.removeAttr('data-hint'));
              if (
                (t.each(
                  {
                    'input-lg': 'form-group-lg',
                    'input-sm': 'form-group-sm',
                  },
                  (t, e) => {
                    o.hasClass(t) && (o.removeClass(t), n.addClass(e));
                  },
                ),
                o.hasClass('floating-label'))
              ) {
                const e = o.attr('placeholder');
                o.attr('placeholder', null).removeClass('floating-label');
                let i = o.attr('id'),
                  a = '';
                i && (a = `for='${i}'`),
                  n.addClass('label-floating'),
                  o.after(`<label ${a}class='control-label'>${e}</label>`);
              }
              (o.val() !== null && o.val() != 'undefined' && o.val() !== '') ||
                n.addClass('is-empty'),
                n.find('input[type=file]').length > 0 &&
                  n.addClass('is-fileinput');
            });
        },
        attachInputEventHandlers() {
          const n = this.options.validate;
          t(document)
            .on('keydown paste', '.form-control', function(o) {
              let n;
              (void 0 === (n = o).which ||
                (typeof n.which === 'number' &&
                  n.which > 0 &&
                  !n.ctrlKey &&
                  !n.metaKey &&
                  !n.altKey &&
                  n.which != 8 &&
                  n.which != 9 &&
                  n.which != 13 &&
                  n.which != 16 &&
                  n.which != 17 &&
                  n.which != 20 &&
                  n.which != 27)) &&
                t(this)
                  .closest('.form-group')
                  .removeClass('is-empty');
            })
            .on('keyup change', '.form-control', function() {
              let o = t(this),
                e = o.closest('.form-group'),
                i = void 0 === o[0].checkValidity || o[0].checkValidity();
              o.val() === ''
                ? e.addClass('is-empty')
                : e.removeClass('is-empty'),
                n && (i ? e.removeClass('has-error') : e.addClass('has-error'));
            })
            .on('focus', '.form-control, .form-group.is-fileinput', function() {
              o(this);
            })
            .on('blur', '.form-control, .form-group.is-fileinput', function() {
              e(this);
            })
            .on('change', '.form-group input', function() {
              const o = t(this);
              if (o.attr('type') != 'file') {
                const n = o.closest('.form-group');
                o.val() ? n.removeClass('is-empty') : n.addClass('is-empty');
              }
            })
            .on(
              'change',
              ".form-group.is-fileinput input[type='file']",
              function() {
                let o = t(this).closest('.form-group'),
                  n = '';
                t.each(this.files, (t, o) => {
                  n += `${o.name}, `;
                }),
                  (n = n.substring(0, n.length - 2))
                    ? o.removeClass('is-empty')
                    : o.addClass('is-empty'),
                  o.find('input.form-control[readonly]').val(n);
              },
            );
        },
        ripples(o) {
          t(o || this.options.withRipples).ripples();
        },
        autofill() {
          const o = setInterval(() => {
            t('input[type!=checkbox]').each(function() {
              const o = t(this);
              o.val() && o.val() !== o.attr('value') && o.trigger('change');
            });
          }, 100);
          setTimeout(() => {
            clearInterval(o);
          }, 1e4);
        },
        attachAutofillEventHandlers() {
          let o;
          t(document)
            .on('focus', 'input', function() {
              const n = t(this)
                .parents('form')
                .find('input')
                .not('[type=file]');
              o = setInterval(() => {
                n.each(function() {
                  const o = t(this);
                  o.val() !== o.attr('value') && o.trigger('change');
                });
              }, 100);
            })
            .on('blur', '.form-group input', () => {
              clearInterval(o);
            });
        },
        init(o) {
          (this.options = t.extend({}, this.options, o)),
            t.fn.ripples && this.options.ripples && this.ripples(),
            this.options.input &&
              (this.input(), this.attachInputEventHandlers()),
            this.options.checkbox && this.checkbox(),
            this.options.togglebutton && this.togglebutton(),
            this.options.radio && this.radio(),
            this.options.autofill &&
              (this.autofill(), this.attachAutofillEventHandlers()),
            document.arrive &&
              this.options.arrive &&
              (t.fn.ripples &&
                this.options.ripples &&
                document.arrive(this.options.withRipples, function() {
                  t.material.ripples(t(this));
                }),
              this.options.input &&
                document.arrive(this.options.inputElements, function() {
                  t.material.input(t(this));
                }),
              this.options.checkbox &&
                document.arrive(this.options.checkboxElements, function() {
                  t.material.checkbox(t(this));
                }),
              this.options.radio &&
                document.arrive(this.options.radioElements, function() {
                  t.material.radio(t(this));
                }),
              this.options.togglebutton &&
                document.arrive(this.options.togglebuttonElements, function() {
                  t.material.togglebutton(t(this));
                }));
        },
      });
  })(jQuery),
  (function(t, o, n, e) {
    let i = 'ripples',
      a = null,
      s = {};

    function r(o, n) {
      (a = this),
        (this.element = t(o)),
        (this.options = t.extend({}, s, n)),
        (this._defaults = s),
        (this._name = i),
        this.init();
    }
    (r.prototype.init = function() {
      const n = this.element;
      n.on('mousedown touchstart', e => {
        if (!a.isTouch() || e.type !== 'mousedown') {
          n.find('.ripple-container').length ||
            n.append('<div class="ripple-container"></div>');
          let i = n.children('.ripple-container'),
            s = a.getRelY(i, e),
            r = a.getRelX(i, e);
          if (s || r) {
            let l = a.getRipplesColor(n),
              c = t('<div></div>');
            c.addClass('ripple').css({
              left: r,
              top: s,
              'background-color': l,
            }),
              i.append(c),
              o.getComputedStyle(c[0]).opacity,
              a.rippleOn(n, c),
              setTimeout(() => {
                a.rippleEnd(c);
              }, 500),
              n.on('mouseup mouseleave touchend', () => {
                c.data('mousedown', 'off'),
                  c.data('animating') === 'off' && a.rippleOut(c);
              });
          }
        }
      });
    }),
      (r.prototype.getNewSize = function(t, o) {
        return Math.max(t.outerWidth(), t.outerHeight()) / o.outerWidth() * 2.5;
      }),
      (r.prototype.getRelX = function(t, o) {
        const n = t.offset();
        return a.isTouch()
          ? (o = o.originalEvent).touches.length === 1 &&
              o.touches[0].pageX - n.left
          : o.pageX - n.left;
      }),
      (r.prototype.getRelY = function(t, o) {
        const n = t.offset();
        return a.isTouch()
          ? (o = o.originalEvent).touches.length === 1 &&
              o.touches[0].pageY - n.top
          : o.pageY - n.top;
      }),
      (r.prototype.getRipplesColor = function(t) {
        return t.data('ripple-color')
          ? t.data('ripple-color')
          : o.getComputedStyle(t[0]).color;
      }),
      (r.prototype.hasTransitionSupport = function() {
        const t = (n.body || n.documentElement).style;
        return (
          t.transition !== e ||
          t.WebkitTransition !== e ||
          t.MozTransition !== e ||
          t.MsTransition !== e ||
          t.OTransition !== e
        );
      }),
      (r.prototype.isTouch = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      }),
      (r.prototype.rippleEnd = function(t) {
        t.data('animating', 'off'),
          t.data('mousedown') === 'off' && a.rippleOut(t);
      }),
      (r.prototype.rippleOut = function(t) {
        t.off(),
          a.hasTransitionSupport()
            ? t.addClass('ripple-out')
            : t.animate(
                {
                  opacity: 0,
                },
                100,
                () => {
                  t.trigger('transitionend');
                },
              ),
          t.on(
            'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
            () => {
              t.remove();
            },
          );
      }),
      (r.prototype.rippleOn = function(t, o) {
        const n = a.getNewSize(t, o);
        a.hasTransitionSupport()
          ? o
              .css({
                '-ms-transform': `scale(${n})`,
                '-moz-transform': `scale(${n})`,
                '-webkit-transform': `scale(${n})`,
                transform: `scale(${n})`,
              })
              .addClass('ripple-on')
              .data('animating', 'on')
              .data('mousedown', 'on')
          : o.animate(
              {
                width: 2 * Math.max(t.outerWidth(), t.outerHeight()),
                height: 2 * Math.max(t.outerWidth(), t.outerHeight()),
                'margin-left': -1 * Math.max(t.outerWidth(), t.outerHeight()),
                'margin-top': -1 * Math.max(t.outerWidth(), t.outerHeight()),
                opacity: 0.2,
              },
              500,
              () => {
                o.trigger('transitionend');
              },
            );
      }),
      (t.fn.ripples = function(o) {
        return this.each(function() {
          t.data(this, `plugin_${i}`) ||
            t.data(this, `plugin_${i}`, new r(this, o));
        });
      });
  })(jQuery, window, document),
  (window.onresize = tabs);
const handler = window.onresize;

function tabs() {
  for (var t = $('.nav.nav-tabs'), o = {}, n = {}, e = 0; e < t.length; e++) {
    var i = e + 1,
      a = $(t[e]).children(),
      s = $(t[e]).children().length;
    $(a[a.length - 1]).hasClass('ms-tabs-indicator') ||
      ($(t[e]).data('id', i),
      $(t[e]).append(`<span id="i${i}" class="ms-tabs-indicator"></span>`));
    const r = $(`#i${i}`);
    (o[`tabW${i}`] = []), (n[`tabL${i}`] = []);
    let l = o[`tabW${i}`],
      c = n[`tabL${i}`],
      p = 0;
    for (m = 0; m < s; m++)
      (c[m] = p),
        (l[m] = $(a[m]).width()),
        $(a[m])
          .children()
          .hasClass('active') &&
          r.css({
            left: `${c[m]}px`,
            width: `${l[m]}px`,
          }),
        (p += l[m]);
  }
  $('.nav.nav-tabs > li').click(function(t) {
    const e = (a = $(this).parent()).data('id');
    a.children().removeClass('current'), $(this).addClass('current');
    for (let i = a.children(), s = 0; s < i.length - 1; s++)
      $(i[s]).hasClass('current') &&
        $(`#i${e}`).css({
          left: `${n[`tabL${  e}`][s]}px`,
          width: `${o[`tabW${  e}`][s]}px`,
        });
  });
}
handler.apply(window, [' On']),
  $('#ms-account-modal').on('shown.bs.modal', t => {
    setTimeout(tabs, 700);
  });
