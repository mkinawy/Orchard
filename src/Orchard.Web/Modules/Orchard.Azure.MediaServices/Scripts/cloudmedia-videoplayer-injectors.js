/*
** NOTE: This file is generated by Gulp and should not be edited directly!
** Any changes made directly to this file will be overwritten next time its asset group is processed by Gulp.
*/

var Orchard;
(function (Orchard) {
    var Azure;
    (function (Azure) {
        var MediaServices;
        (function (MediaServices) {
            var VideoPlayer;
            (function (VideoPlayer) {
                var Injectors;
                (function (Injectors) {
                    var Injector = (function () {
                        function Injector(container, playerWidth, playerHeight, autoPlay, assetData, applyMediaQueries, debugToConsole, nextInjector) {
                            this.container = container;
                            this.playerWidth = playerWidth;
                            this.playerHeight = playerHeight;
                            this.autoPlay = autoPlay;
                            this.assetData = assetData;
                            this.applyMediaQueries = applyMediaQueries;
                            this.debugToConsole = debugToConsole;
                            this.nextInjector = nextInjector;
                            this._isFaulted = false;
                        }
                        Injector.prototype.isFaulted = function () {
                            return this._isFaulted;
                        };
                        Injector.prototype.invoke = function () {
                            if (this.isSupported())
                                this.inject();
                            else if (this.nextInjector)
                                this.nextInjector.invoke();
                        };
                        Injector.prototype.isSupported = function () {
                            throw new Error("This method is abstract and must be overridden in an inherited class.");
                        };
                        Injector.prototype.inject = function () {
                            throw new Error("This method is abstract and must be overridden in an inherited class.");
                        };
                        Injector.prototype.filteredAssets = function () {
                            if (!this.applyMediaQueries)
                                return this.assetData;
                            var hasMatchingMediaQuery = function (asset) {
                                return !asset.MediaQuery || window.matchMedia(asset.MediaQuery).matches;
                            };
                            return {
                                VideoAssets: _(this.assetData.VideoAssets).filter(hasMatchingMediaQuery),
                                DynamicVideoAssets: _(this.assetData.DynamicVideoAssets).filter(hasMatchingMediaQuery),
                                ThumbnailAssets: _(this.assetData.ThumbnailAssets).filter(hasMatchingMediaQuery),
                                SubtitleAssets: _(this.assetData.SubtitleAssets).filter(hasMatchingMediaQuery)
                            };
                        };
                        Injector.prototype.fault = function () {
                            if (!this._isFaulted) {
                                this._isFaulted = true;
                                $(this.container).empty();
                                if (this.nextInjector)
                                    this.nextInjector.invoke();
                            }
                        };
                        Injector.prototype.debug = function (message) {
                            var args = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                args[_i - 1] = arguments[_i];
                            }
                            if (this.debugToConsole) {
                                console.debug(message.replace(/{(\d+)}/g, function (match, index) { return (typeof args[index] != "undefined" ? args[index] : match); }));
                            }
                        };
                        return Injector;
                    })();
                    Injectors.Injector = Injector;
                })(Injectors = VideoPlayer.Injectors || (VideoPlayer.Injectors = {}));
            })(VideoPlayer = MediaServices.VideoPlayer || (MediaServices.VideoPlayer = {}));
        })(MediaServices = Azure.MediaServices || (Azure.MediaServices = {}));
    })(Azure = Orchard.Azure || (Orchard.Azure = {}));
})(Orchard || (Orchard = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3VkbWVkaWEtdmlkZW9wbGF5ZXItaW5qZWN0b3JzLmpzIiwiY2xvdWRtZWRpYS12aWRlb3BsYXllci1pbmplY3RvcnMudHMiXSwibmFtZXMiOlsiT3JjaGFyZCIsIk9yY2hhcmQuQXp1cmUiLCJPcmNoYXJkLkF6dXJlLk1lZGlhU2VydmljZXMiLCJPcmNoYXJkLkF6dXJlLk1lZGlhU2VydmljZXMuVmlkZW9QbGF5ZXIiLCJPcmNoYXJkLkF6dXJlLk1lZGlhU2VydmljZXMuVmlkZW9QbGF5ZXIuSW5qZWN0b3JzIiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzLlZpZGVvUGxheWVyLkluamVjdG9ycy5JbmplY3RvciIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5JbmplY3RvcnMuSW5qZWN0b3IuY29uc3RydWN0b3IiLCJPcmNoYXJkLkF6dXJlLk1lZGlhU2VydmljZXMuVmlkZW9QbGF5ZXIuSW5qZWN0b3JzLkluamVjdG9yLmlzRmF1bHRlZCIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5JbmplY3RvcnMuSW5qZWN0b3IuaW52b2tlIiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzLlZpZGVvUGxheWVyLkluamVjdG9ycy5JbmplY3Rvci5pc1N1cHBvcnRlZCIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5JbmplY3RvcnMuSW5qZWN0b3IuaW5qZWN0IiwiT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzLlZpZGVvUGxheWVyLkluamVjdG9ycy5JbmplY3Rvci5maWx0ZXJlZEFzc2V0cyIsIk9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5JbmplY3RvcnMuSW5qZWN0b3IuZmF1bHQiLCJPcmNoYXJkLkF6dXJlLk1lZGlhU2VydmljZXMuVmlkZW9QbGF5ZXIuSW5qZWN0b3JzLkluamVjdG9yLmRlYnVnIl0sIm1hcHBpbmdzIjoiQUFB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OERDQyxJQUFBRDtvQkE5RFlBLGtCQUFRQSxXQThEcEJBLENBQUFBO2dCQUNMQSxDQUFDQSxFQW5FOENELFNBQVNBLEdBQVRBLHFCQUFTQSxLQUFUQSxxQkFBU0EsUUFtRXZEQTtZQUFEQSxDQUFDQSxFQW5Fa0NELFdBQVdBLEdBQVhBLHlCQUFXQSxLQUFYQSx5QkFBV0EsUUFtRTdDQTtRQUFEQSxDQUFDQSxFQW5Fb0JELGFBQWFBLEdBQWJBLG1CQUFhQSxLQUFiQSxtQkFBYUEsUUFtRWpDQTtJQUFEQSxDQUFDQSxFQW5FY0QsS0FBS0EsR0FBTEEsYUFBS0EsS0FBTEEsYUFBS0EsUUFtRW5CQTtBQUFEQSxDQUFDQSxFQW5FTSxPQUFPLEtBQVAsT0FBTyxRQW1FYiIsImZpbGUiOiJjbG91ZG1lZGlhLXZpZGVvcGxheWVyLWluamVjdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwibW9kdWxlIE9yY2hhcmQuQXp1cmUuTWVkaWFTZXJ2aWNlcy5WaWRlb1BsYXllci5JbmplY3RvcnMge1xyXG5cclxuICAgIGltcG9ydCBEYXRhID0gT3JjaGFyZC5BenVyZS5NZWRpYVNlcnZpY2VzLlZpZGVvUGxheWVyLkRhdGE7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEluamVjdG9yIHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIHB1YmxpYyBjb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgICAgICBwdWJsaWMgcGxheWVyV2lkdGg6IG51bWJlcixcclxuICAgICAgICAgICAgcHVibGljIHBsYXllckhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgICAgICBwdWJsaWMgYXV0b1BsYXk6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgIHB1YmxpYyBhc3NldERhdGE6IERhdGEuSUFzc2V0RGF0YSxcclxuICAgICAgICAgICAgcHVibGljIGFwcGx5TWVkaWFRdWVyaWVzOiBib29sZWFuLFxyXG4gICAgICAgICAgICBwcml2YXRlIGRlYnVnVG9Db25zb2xlOiBib29sZWFuLFxyXG4gICAgICAgICAgICBwcml2YXRlIG5leHRJbmplY3RvcjogSW5qZWN0b3IpIHsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9pc0ZhdWx0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBwdWJsaWMgaXNGYXVsdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNGYXVsdGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGludm9rZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTdXBwb3J0ZWQoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0KCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMubmV4dEluamVjdG9yKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0SW5qZWN0b3IuaW52b2tlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgaXNTdXBwb3J0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGlzIGFic3RyYWN0IGFuZCBtdXN0IGJlIG92ZXJyaWRkZW4gaW4gYW4gaW5oZXJpdGVkIGNsYXNzLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbmplY3QoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgbWV0aG9kIGlzIGFic3RyYWN0IGFuZCBtdXN0IGJlIG92ZXJyaWRkZW4gaW4gYW4gaW5oZXJpdGVkIGNsYXNzLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBmaWx0ZXJlZEFzc2V0cygpOiBEYXRhLklBc3NldERhdGEge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYXBwbHlNZWRpYVF1ZXJpZXMpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hc3NldERhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgaGFzTWF0Y2hpbmdNZWRpYVF1ZXJ5ID0gZnVuY3Rpb24gKGFzc2V0OiBEYXRhLklBc3NldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFhc3NldC5NZWRpYVF1ZXJ5IHx8IHdpbmRvdy5tYXRjaE1lZGlhKGFzc2V0Lk1lZGlhUXVlcnkpLm1hdGNoZXM7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgVmlkZW9Bc3NldHM6IF8odGhpcy5hc3NldERhdGEuVmlkZW9Bc3NldHMpLmZpbHRlcihoYXNNYXRjaGluZ01lZGlhUXVlcnkpLFxyXG4gICAgICAgICAgICAgICAgRHluYW1pY1ZpZGVvQXNzZXRzOiBfKHRoaXMuYXNzZXREYXRhLkR5bmFtaWNWaWRlb0Fzc2V0cykuZmlsdGVyKGhhc01hdGNoaW5nTWVkaWFRdWVyeSksXHJcbiAgICAgICAgICAgICAgICBUaHVtYm5haWxBc3NldHM6IF8odGhpcy5hc3NldERhdGEuVGh1bWJuYWlsQXNzZXRzKS5maWx0ZXIoaGFzTWF0Y2hpbmdNZWRpYVF1ZXJ5KSxcclxuICAgICAgICAgICAgICAgIFN1YnRpdGxlQXNzZXRzOiBfKHRoaXMuYXNzZXREYXRhLlN1YnRpdGxlQXNzZXRzKS5maWx0ZXIoaGFzTWF0Y2hpbmdNZWRpYVF1ZXJ5KVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIGZhdWx0KCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzRmF1bHRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNGYXVsdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICQodGhpcy5jb250YWluZXIpLmVtcHR5KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uZXh0SW5qZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0SW5qZWN0b3IuaW52b2tlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHB1YmxpYyBkZWJ1ZyhtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlYnVnVG9Db25zb2xlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCg8YW55Pm1lc3NhZ2UpLnJlcGxhY2UoL3soXFxkKyl9L2csIChtYXRjaDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7IHJldHVybiAodHlwZW9mIGFyZ3NbaW5kZXhdICE9IFwidW5kZWZpbmVkXCIgPyBhcmdzW2luZGV4XSA6IG1hdGNoKTsgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
