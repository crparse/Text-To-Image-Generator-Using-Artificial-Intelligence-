(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8252], {
        46880: function(A, e, o) {
            "use strict";
            o.d(e, {
                Z: function() {
                    return l
                }
            });
            o(59748);
            var d = o(34952),
                i = o(8311),
                l = function(A) {
                    var e = A.autoPlay,
                        o = void 0 === e || e,
                        l = A.handleMouseOver,
                        t = void 0 === l ? function() {} : l,
                        c = A.handleMouseOut,
                        a = void 0 === c ? function() {} : c,
                        n = A.poster ? d.Z[A.poster.volumeId] + A.poster.filename : void 0,
                        s = d.Z[A.videos[0].volumeId] + A.videos[0].filename,
                        u = void 0;
                    return A.videos[1] && (u = d.Z[A.videos[1].volumeId] + A.videos[1].filename), (0, i.BX)("video", {
                        autoPlay: o,
                        loop: !Object.getOwnPropertyDescriptor(A, "loop") || A.loop,
                        muted: !Object.getOwnPropertyDescriptor(A, "muted") || A.muted,
                        playsInline: !0,
                        className: A.className,
                        poster: n,
                        controls: A.controls,
                        onEnded: A.handleEnded,
                        onMouseOver: t,
                        onMouseOut: a,
                        children: [A.isMobile && u ? (0, i.tZ)("source", {
                            src: u,
                            type: "video/mp4"
                        }) : (0, i.tZ)("source", {
                            src: s,
                            type: "video/mp4"
                        }), "Your browser does not support Video tags."]
                    })
                }
        },
        28252: function(A, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                default: function() {
                    return u
                }
            });
            var d = o(59748),
                i = o(72959),
                l = o.n(i),
                t = o(55582),
                c = o.n(t),
                a = o(69918),
                n = o(46880),
                s = o(8311);

            function u() {
                var A = d.default.useContext(a.y),
                    e = A.state,
                    o = A.dispatch,
                    i = e.videoModal,
                    t = function() {
                        o({
                            type: "UPDATE_VIDEOMODAL",
                            payload: null
                        })
                    };
                return i ? (0, s.tZ)("div", {
                    className: l().modalBG,
                    children: (0, s.BX)("div", {
                        className: l().modal,
                        children: [(0, s.tZ)("button", {
                            className: l().modal__close,
                            style: {
                                backgroundImage: "url(".concat(c())
                            },
                            onClick: function() {
                                t()
                            }
                        }), (0, s.tZ)("div", {
                            className: l().modal__info,
                            children: (0, s.tZ)(n.Z, {
                                videos: i.videosThemes.videosThemes,
                                poster: i.videosThemes.videoImage[0],
                                isMobile: i.userAgent.isMobile,
                                className: l().video,
                                controls: !0,
                                handleEnded: t,
                                loop: !1,
                                muted: !0
                            })
                        })]
                    })
                }) : (0, s.tZ)(s.HY, {})
            }
        },
        72959: function(A) {
            A.exports = {
                modalBG: "VideoModal_modalBG__2v9So",
                modal: "VideoModal_modal__zWzXU",
                modal__close: "VideoModal_modal__close__2zE5B",
                modal__info: "VideoModal_modal__info__PKia9",
                video: "VideoModal_video__13SKy"
            }
        },
        55582: function(A) {
            A.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAADACAYAAAC02WUGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4NzRkOWNiOS00Y2U4LTQwNWQtYTQ4Ni04ZWNjZjFjOTE3M2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUQ5OTY1NDRFQjRBMTFFQUE3MjFDNjVCNEVCNDQ0QkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUQ5OTY1NDNFQjRBMTFFQUE3MjFDNjVCNEVCNDQ0QkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NGNkMzFhNi03NDc1LTZkNDItYTliMi1hZGU4NmU1ZjE1ZGEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODc0ZDljYjktNGNlOC00MDVkLWE0ODYtOGVjY2YxYzkxNzNlIi8+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"
        }
    }
]);