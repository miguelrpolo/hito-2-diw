! function (e, n, i, s) {
    "use strict";

    function t(n, i) {
        this.element = n, this.$elem = e(this.element), this.options = e.extend(d, i), this.init()
    }
    var l = "slimmenu",
        a = 0,
        d = {
            resizeWidth: "767",
            initiallyVisible: !1,
            collapserTitle: "Main Menu",
            animSpeed: "medium",
            easingEffect: null,
            indentChildren: !1,
            childrenIndenter: "&nbsp;&nbsp;",
            expandIcon: "<em>&#9660;</em>",
            collapseIcon: "<em>&#9650;</em>"
        };
    t.prototype = {
        init: function () {
            var i, s = e(n),
                t = this.options,
                l = this.$elem,
                a = '<div class="menu-collapser">' + t.collapserTitle + '<div class="collapse-button"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div></div>';
            l.before(a), i = l.prev(".menu-collapser"), l.on("click", ".sub-toggle", function (n) {
                n.preventDefault(), n.stopPropagation();
                var i = e(this).closest("li");
                e(this).hasClass("expanded") ? (e(this).removeClass("expanded").html(t.expandIcon), i.find(">ul").slideUp(t.animSpeed, t.easingEffect)) : (e(this).addClass("expanded").html(t.collapseIcon), i.find(">ul").slideDown(t.animSpeed, t.easingEffect))
            }), i.on("click", ".collapse-button", function (e) {
                e.preventDefault(), l.slideToggle(t.animSpeed, t.easingEffect)
            }), this.resizeMenu(), s.on("resize", this.resizeMenu.bind(this)), s.trigger("resize")
        },
        resizeMenu: function () {
            var i = this,
                t = e(n),
                l = t.width(),
                d = this.options,
                o = e(this.element),
                h = e("body").find(".menu-collapser");
            n.innerWidth !== s && n.innerWidth > l && (l = n.innerWidth), l != a && (a = l, o.find("li").each(function () {
                e(this).has("ul").length && (e(this).addClass("has-submenu").has(".sub-toggle").length ? e(this).children(".sub-toggle").html(d.expandIcon) : e(this).addClass("has-submenu").append('<span class="sub-toggle">' + d.expandIcon + "</span>")), e(this).children("ul").hide().end().find(".sub-toggle").removeClass("expanded").html(d.expandIcon)
            }), d.resizeWidth >= l ? (d.indentChildren && o.find("ul").each(function () {
                var n = e(this).parents("ul").length;
                e(this).children("li").children("a").has("em").length || e(this).children("li").children("a").prepend(i.indent(n, d))
            }), o.addClass("collapsed").find("li").has("ul").off("mouseenter mouseleave"), h.show(), d.initiallyVisible || o.hide()) : (o.find("li").has("ul").on("mouseenter", function () {
                e(this).find(">ul").stop().slideDown(d.animSpeed, d.easingEffect)
            }).on("mouseleave", function () {
                e(this).find(">ul").stop().slideUp(d.animSpeed, d.easingEffect)
            }), o.find("li > a > em").remove(), o.removeClass("collapsed").show(), h.hide()))
        },
        indent: function (e, n) {
            for (var i = 0, s = ""; e > i; i++) s += n.childrenIndenter;
            return "<em>" + s + "</em> "
        }
    }, e.fn[l] = function (n) {
        return this.each(function () {
            e.data(this, "plugin_" + l) || e.data(this, "plugin_" + l, new t(this, n))
        })
    }
}(jQuery, window, document);