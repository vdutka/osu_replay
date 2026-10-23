"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/spark-md5/spark-md5.js
  var require_spark_md5 = __commonJS({
    "node_modules/spark-md5/spark-md5.js"(exports, module) {
      (function(factory) {
        if (typeof exports === "object") {
          module.exports = factory();
        } else if (typeof define === "function" && define.amd) {
          define(factory);
        } else {
          var glob;
          try {
            glob = window;
          } catch (e) {
            glob = self;
          }
          glob.SparkMD5 = factory();
        }
      })(function(undefined2) {
        "use strict";
        var add32 = function(a, b) {
          return a + b & 4294967295;
        }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        function cmn(q, a, b, x, s, t) {
          a = add32(add32(a, q), add32(x, t));
          return add32(a << s | a >>> 32 - s, b);
        }
        function md5cycle(x, k) {
          var a = x[0], b = x[1], c = x[2], d = x[3];
          a += (b & c | ~b & d) + k[0] - 680876936 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[1] - 389564586 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[2] + 606105819 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[4] - 176418897 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[7] - 45705983 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[10] - 42063 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
          a = (a << 7 | a >>> 25) + b | 0;
          d += (a & b | ~a & c) + k[13] - 40341101 | 0;
          d = (d << 12 | d >>> 20) + a | 0;
          c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
          c = (c << 17 | c >>> 15) + d | 0;
          b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
          b = (b << 22 | b >>> 10) + c | 0;
          a += (b & d | c & ~d) + k[1] - 165796510 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[11] + 643717713 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[0] - 373897302 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[5] - 701558691 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[10] + 38016083 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[15] - 660478335 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[4] - 405537848 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[9] + 568446438 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[3] - 187363961 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
          a = (a << 5 | a >>> 27) + b | 0;
          d += (a & c | b & ~c) + k[2] - 51403784 | 0;
          d = (d << 9 | d >>> 23) + a | 0;
          c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
          c = (c << 14 | c >>> 18) + d | 0;
          b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
          b = (b << 20 | b >>> 12) + c | 0;
          a += (b ^ c ^ d) + k[5] - 378558 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[14] - 35309556 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[7] - 155497632 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[13] + 681279174 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[0] - 358537222 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[3] - 722521979 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[6] + 76029189 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (b ^ c ^ d) + k[9] - 640364487 | 0;
          a = (a << 4 | a >>> 28) + b | 0;
          d += (a ^ b ^ c) + k[12] - 421815835 | 0;
          d = (d << 11 | d >>> 21) + a | 0;
          c += (d ^ a ^ b) + k[15] + 530742520 | 0;
          c = (c << 16 | c >>> 16) + d | 0;
          b += (c ^ d ^ a) + k[2] - 995338651 | 0;
          b = (b << 23 | b >>> 9) + c | 0;
          a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
          a = (a << 6 | a >>> 26) + b | 0;
          d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
          d = (d << 10 | d >>> 22) + a | 0;
          c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
          c = (c << 15 | c >>> 17) + d | 0;
          b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
          b = (b << 21 | b >>> 11) + c | 0;
          x[0] = a + x[0] | 0;
          x[1] = b + x[1] | 0;
          x[2] = c + x[2] | 0;
          x[3] = d + x[3] | 0;
        }
        function md5blk(s) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          }
          return md5blks;
        }
        function md5blk_array(a) {
          var md5blks = [], i;
          for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
          }
          return md5blks;
        }
        function md51(s) {
          var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
          }
          s = s.substring(i - 64);
          length = s.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }
        function md51_array(a) {
          var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
          for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
          }
          a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
          length = a.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3);
          }
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(state, tail);
          return state;
        }
        function rhex(n) {
          var s = "", j;
          for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
          }
          return s;
        }
        function hex(x) {
          var i;
          for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
          }
          return x.join("");
        }
        if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
          add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535;
          };
        }
        if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
          (function() {
            function clamp(val, length) {
              val = val | 0 || 0;
              if (val < 0) {
                return Math.max(val + length, 0);
              }
              return Math.min(val, length);
            }
            ArrayBuffer.prototype.slice = function(from, to) {
              var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
              if (to !== undefined2) {
                end = clamp(to, length);
              }
              if (begin > end) {
                return new ArrayBuffer(0);
              }
              num = end - begin;
              target = new ArrayBuffer(num);
              targetArray = new Uint8Array(target);
              sourceArray = new Uint8Array(this, begin, num);
              targetArray.set(sourceArray);
              return target;
            };
          })();
        }
        function toUtf8(str) {
          if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
          }
          return str;
        }
        function utf8Str2ArrayBuffer(str, returnUInt8Array) {
          var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
          for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
          }
          return returnUInt8Array ? arr : buff;
        }
        function arrayBuffer2Utf8Str(buff) {
          return String.fromCharCode.apply(null, new Uint8Array(buff));
        }
        function concatenateArrayBuffers(first, second, returnUInt8Array) {
          var result = new Uint8Array(first.byteLength + second.byteLength);
          result.set(new Uint8Array(first));
          result.set(new Uint8Array(second), first.byteLength);
          return returnUInt8Array ? result : result.buffer;
        }
        function hexToBinaryString(hex2) {
          var bytes = [], length = hex2.length, x;
          for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex2.substr(x, 2), 16));
          }
          return String.fromCharCode.apply(String, bytes);
        }
        function SparkMD52() {
          this.reset();
        }
        SparkMD52.prototype.append = function(str) {
          this.appendBinary(toUtf8(str));
          return this;
        };
        SparkMD52.prototype.appendBinary = function(contents) {
          this._buff += contents;
          this._length += contents.length;
          var length = this._buff.length, i;
          for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
          }
          this._buff = this._buff.substring(i - 64);
          return this;
        };
        SparkMD52.prototype.end = function(raw) {
          var buff = this._buff, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = hex(this._hash);
          if (raw) {
            ret = hexToBinaryString(ret);
          }
          this.reset();
          return ret;
        };
        SparkMD52.prototype.reset = function() {
          this._buff = "";
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        SparkMD52.prototype.getState = function() {
          return {
            buff: this._buff,
            length: this._length,
            hash: this._hash.slice()
          };
        };
        SparkMD52.prototype.setState = function(state) {
          this._buff = state.buff;
          this._length = state.length;
          this._hash = state.hash;
          return this;
        };
        SparkMD52.prototype.destroy = function() {
          delete this._hash;
          delete this._buff;
          delete this._length;
        };
        SparkMD52.prototype._finish = function(tail, length) {
          var i = length, tmp, lo, hi;
          tail[i >> 2] |= 128 << (i % 4 << 3);
          if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
              tail[i] = 0;
            }
          }
          tmp = this._length * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;
          tail[14] = lo;
          tail[15] = hi;
          md5cycle(this._hash, tail);
        };
        SparkMD52.hash = function(str, raw) {
          return SparkMD52.hashBinary(toUtf8(str), raw);
        };
        SparkMD52.hashBinary = function(content, raw) {
          var hash = md51(content), ret = hex(hash);
          return raw ? hexToBinaryString(ret) : ret;
        };
        SparkMD52.ArrayBuffer = function() {
          this.reset();
        };
        SparkMD52.ArrayBuffer.prototype.append = function(arr) {
          var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
          this._length += arr.byteLength;
          for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
          }
          this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
          return this;
        };
        SparkMD52.ArrayBuffer.prototype.end = function(raw) {
          var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
          for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3);
          }
          this._finish(tail, length);
          ret = hex(this._hash);
          if (raw) {
            ret = hexToBinaryString(ret);
          }
          this.reset();
          return ret;
        };
        SparkMD52.ArrayBuffer.prototype.reset = function() {
          this._buff = new Uint8Array(0);
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];
          return this;
        };
        SparkMD52.ArrayBuffer.prototype.getState = function() {
          var state = SparkMD52.prototype.getState.call(this);
          state.buff = arrayBuffer2Utf8Str(state.buff);
          return state;
        };
        SparkMD52.ArrayBuffer.prototype.setState = function(state) {
          state.buff = utf8Str2ArrayBuffer(state.buff, true);
          return SparkMD52.prototype.setState.call(this, state);
        };
        SparkMD52.ArrayBuffer.prototype.destroy = SparkMD52.prototype.destroy;
        SparkMD52.ArrayBuffer.prototype._finish = SparkMD52.prototype._finish;
        SparkMD52.ArrayBuffer.hash = function(arr, raw) {
          var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
          return raw ? hexToBinaryString(ret) : ret;
        };
        return SparkMD52;
      });
    }
  });

  // src/replay-hitsounds.ts
  function replayHitSounds(map2, simulation2) {
    const sounds = [];
    for (const result of simulation2.events) {
      const object = map2.objects[result.objectIndex];
      if (!result.judgement) continue;
      const sample = object.nodeSamples?.[0];
      sounds.push({ time: result.hitTime ?? result.time, object: sample ? { ...object, ...sample } : object, kind: object.type === "slider" ? "head" : object.type, objectIndex: result.objectIndex });
    }
    const edgeCursor = /* @__PURE__ */ new Map();
    for (const event of simulation2.comboReconstruction?.events ?? []) {
      if (event.kind !== "repeat" && event.kind !== "tail") continue;
      const object = map2.objects[event.objectIndex], node = (edgeCursor.get(event.objectIndex) ?? 0) + 1;
      edgeCursor.set(event.objectIndex, node);
      if (!event.hit) continue;
      const time = Math.max(event.time, object.time + (object.endTime - object.time) * node / (object.repeats ?? 1)), sample = object.nodeSamples?.[node];
      sounds.push({ time, object: sample ? { ...object, ...sample } : object, kind: event.kind, objectIndex: event.objectIndex });
    }
    return sounds.sort((a, b) => a.time - b.time || a.objectIndex - b.objectIndex);
  }
  function firstSoundAfter(sounds, time) {
    let lo = 0, hi = sounds.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (sounds[mid].time <= time) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  // node_modules/fflate/esm/browser.js
  var u8 = Uint8Array;
  var u16 = Uint16Array;
  var i32 = Int32Array;
  var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */
    0,
    0,
    /* impossible */
    0
  ]);
  var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */
    0,
    0
  ]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
      b[i] = start += 1 << eb[i - 1];
    }
    var r = new i32(b[30]);
    for (var i = 1; i < 30; ++i) {
      for (var j = b[i]; j < b[i + 1]; ++j) {
        r[j] = j - b[i] << 5 | i;
      }
    }
    return { b, r };
  };
  var _a = freb(fleb, 2);
  var fl = _a.b;
  var revfl = _a.r;
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0);
  var fd = _b.b;
  var revfd = _b.r;
  var rev = new u16(32768);
  for (i = 0; i < 32768; ++i) {
    x = (i & 43690) >> 1 | (i & 21845) << 1;
    x = (x & 52428) >> 2 | (x & 13107) << 2;
    x = (x & 61680) >> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
  }
  var x;
  var i;
  var hMap = (function(cd, mb, r) {
    var s = cd.length;
    var i = 0;
    var l = new u16(mb);
    for (; i < s; ++i) {
      if (cd[i])
        ++l[cd[i] - 1];
    }
    var le = new u16(mb);
    for (i = 1; i < mb; ++i) {
      le[i] = le[i - 1] + l[i - 1] << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          var sv = i << 4 | cd[i];
          var r_1 = mb - cd[i];
          var v = le[cd[i] - 1]++ << r_1;
          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            co[rev[v] >> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
        }
      }
    }
    return co;
  });
  var flt = new u8(288);
  for (i = 0; i < 144; ++i)
    flt[i] = 8;
  var i;
  for (i = 144; i < 256; ++i)
    flt[i] = 9;
  var i;
  for (i = 256; i < 280; ++i)
    flt[i] = 7;
  var i;
  for (i = 280; i < 288; ++i)
    flt[i] = 8;
  var i;
  var fdt = new u8(32);
  for (i = 0; i < 32; ++i)
    fdt[i] = 5;
  var i;
  var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
  var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
  var max = function(a) {
    var m = a[0];
    for (var i = 1; i < a.length; ++i) {
      if (a[i] > m)
        m = a[i];
    }
    return m;
  };
  var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
  };
  var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
  };
  var shft = function(p) {
    return (p + 7) / 8 | 0;
  };
  var slc = function(v, s, e) {
    if (s == null || s < 0)
      s = 0;
    if (e == null || e > v.length)
      e = v.length;
    return new u8(v.subarray(s, e));
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    // determined by compression function
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
    // determined by unknown compression method
  ];
  var err = function(ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e, err);
    if (!nt)
      throw e;
    return e;
  };
  var inflt = function(dat, st, buf, dict) {
    var sl = dat.length, dl = dict ? dict.length : 0;
    if (!sl || st.f && !st.l)
      return buf || new u8(0);
    var noBuf = !buf;
    var resize = noBuf || st.i != 2;
    var noSt = st.i;
    if (noBuf)
      buf = new u8(sl * 3);
    var cbuf = function(l2) {
      var bl = buf.length;
      if (l2 > bl) {
        var nbuf = new u8(Math.max(bl * 2, l2));
        nbuf.set(buf);
        buf = nbuf;
      }
    };
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    var tbts = sl * 8;
    do {
      if (!lm) {
        final = bits(dat, pos, 1);
        var type = bits(dat, pos + 1, 3);
        pos += 3;
        if (!type) {
          var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
          if (t > sl) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + l);
          buf.set(dat.subarray(s, t), bt);
          st.b = bt += l, st.p = pos = t * 8, st.f = final;
          continue;
        } else if (type == 1)
          lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
          var tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          var ldt = new u8(tl);
          var clt = new u8(19);
          for (var i = 0; i < hcLen; ++i) {
            clt[clim[i]] = bits(dat, pos + i * 3, 7);
          }
          pos += hcLen * 3;
          var clb = max(clt), clbmsk = (1 << clb) - 1;
          var clm = hMap(clt, clb, 1);
          for (var i = 0; i < tl; ) {
            var r = clm[bits(dat, pos, clbmsk)];
            pos += r & 15;
            var s = r >> 4;
            if (s < 16) {
              ldt[i++] = s;
            } else {
              var c = 0, n = 0;
              if (s == 16)
                n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
              else if (s == 17)
                n = 3 + bits(dat, pos, 7), pos += 3;
              else if (s == 18)
                n = 11 + bits(dat, pos, 127), pos += 7;
              while (n--)
                ldt[i++] = c;
            }
          }
          var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
          lbt = max(lt);
          dbt = max(dt);
          lm = hMap(lt, lbt, 1);
          dm = hMap(dt, dbt, 1);
        } else
          err(1);
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
      }
      if (resize)
        cbuf(bt + 131072);
      var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
      var lpos = pos;
      for (; ; lpos = pos) {
        var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
        pos += c & 15;
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (!c)
          err(2);
        if (sym < 256)
          buf[bt++] = sym;
        else if (sym == 256) {
          lpos = pos, lm = null;
          break;
        } else {
          var add = sym - 254;
          if (sym > 264) {
            var i = sym - 257, b = fleb[i];
            add = bits(dat, pos, (1 << b) - 1) + fl[i];
            pos += b;
          }
          var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
          if (!d)
            err(3);
          pos += d & 15;
          var dt = fd[dsym];
          if (dsym > 3) {
            var b = fdeb[dsym];
            dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
          }
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (resize)
            cbuf(bt + 131072);
          var end = bt + add;
          if (bt < dt) {
            var shift = dl - dt, dend = Math.min(dt, end);
            if (shift + bt < 0)
              err(3);
            for (; bt < dend; ++bt)
              buf[bt] = dict[shift + bt];
          }
          for (; bt < end; ++bt)
            buf[bt] = buf[bt - dt];
        }
      }
      st.l = lm, st.p = lpos, st.b = bt, st.f = final;
      if (lm)
        final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
  };
  var et = /* @__PURE__ */ new u8(0);
  var b2 = function(d, b) {
    return d[b] | d[b + 1] << 8;
  };
  var b4 = function(d, b) {
    return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
  };
  var b8 = function(d, b) {
    return b4(d, b) + b4(d, b + 4) * 4294967296;
  };
  function inflateSync(data, opts) {
    return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
  }
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, { stream: true });
    tds = 1;
  } catch (e) {
  }
  var dutf8 = function(d) {
    for (var r = "", i = 0; ; ) {
      var c = d[i++];
      var eb = (c > 127) + (c > 223) + (c > 239);
      if (i + eb > d.length)
        return { s: r, r: slc(d, i - 1) };
      if (!eb)
        r += String.fromCharCode(c);
      else if (eb == 3) {
        c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
      } else if (eb & 1)
        r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
      else
        r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
    }
  };
  function strFromU8(dat, latin1) {
    if (latin1) {
      var r = "";
      for (var i = 0; i < dat.length; i += 16384)
        r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
      return r;
    } else if (td) {
      return td.decode(dat);
    } else {
      var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
      if (r.length)
        err(8);
      return s;
    }
  }
  var slzh = function(d, b) {
    return b + 30 + b2(d, b + 26) + b2(d, b + 28);
  };
  var zh = function(d, b, z) {
    var fnl = b2(d, b + 28), efl = b2(d, b + 30), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
    var _a2 = z64hs(d, es, efl, z, b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)), sc = _a2[0], su = _a2[1], off = _a2[2];
    return [b2(d, b + 10), sc, su, fn, es + efl + b2(d, b + 32), off];
  };
  var z64hs = function(d, b, l, z, sc, su, off) {
    var nsc = sc == 4294967295, nsu = su == 4294967295, noff = off == 4294967295, e = b + l;
    var nf = nsc + nsu + noff;
    if (z && nf) {
      for (; b + 4 < e; b += 4 + b2(d, b + 2)) {
        if (b2(d, b) == 1) {
          return [
            nsc ? b8(d, b + 4 + 8 * nsu) : sc,
            nsu ? b8(d, b + 4) : su,
            noff ? b8(d, b + 4 + 8 * (nsu + nsc)) : off,
            1
          ];
        }
      }
      if (z < 2)
        err(13);
    }
    return [sc, su, off, 0];
  };
  function unzipSync(data, opts) {
    var files2 = {};
    var e = data.length - 22;
    for (; b4(data, e) != 101010256; --e) {
      if (!e || data.length - e > 65558)
        err(13);
    }
    ;
    var c = b2(data, e + 8);
    if (!c)
      return {};
    var o = b4(data, e + 16);
    var z = b4(data, e - 20) == 117853008;
    if (z) {
      var ze = b4(data, e - 12);
      z = b4(data, ze) == 101075792;
      if (z) {
        c = b4(data, ze + 32);
        o = b4(data, ze + 48);
      }
    }
    var fltr = opts && opts.filter;
    for (var i = 0; i < c; ++i) {
      var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
      o = no;
      if (!fltr || fltr({
        name: fn,
        size: sc,
        originalSize: su,
        compression: c_2
      })) {
        if (!c_2)
          files2[fn] = slc(data, b, b + sc);
        else if (c_2 == 8)
          files2[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
        else
          err(14, "unknown compression type " + c_2);
      }
    }
    return files2;
  }

  // src/beatmap.ts
  var import_spark_md5 = __toESM(require_spark_md5(), 1);
  var MAX_ARCHIVE = 150 * 1024 * 1024;
  var MAX_UNPACKED = 350 * 1024 * 1024;
  var MAX_FILE = 100 * 1024 * 1024;
  function safeName(name) {
    const clean = name.replaceAll("\\", "/");
    if (clean.startsWith("/") || /^[a-z]:/i.test(clean) || clean.split("/").some((x) => x === "..")) throw new Error("Archive contains an unsafe path.");
    return clean.toLowerCase();
  }
  function zipSizeCheck(bytes) {
    let total = 0, count = 0;
    for (let i = 0; i + 46 < bytes.length; i++) {
      if (bytes[i] !== 80 || bytes[i + 1] !== 75 || bytes[i + 2] !== 1 || bytes[i + 3] !== 2) continue;
      const v = new DataView(bytes.buffer, bytes.byteOffset + i);
      const size = v.getUint32(24, true), n = v.getUint16(28, true), e = v.getUint16(30, true), c = v.getUint16(32, true);
      if (i + 46 + n + e + c > bytes.length) throw new Error("Invalid archive directory.");
      total += size;
      count++;
      if (size > MAX_FILE || total > MAX_UNPACKED || count > 1e4) throw new Error("Beatmap archive is too large.");
      i += 45 + n + e + c;
    }
    if (count === 0) throw new Error("No ZIP directory found.");
  }
  function fields(text) {
    const sections = {};
    let section = "";
    for (const original of text.replace(/^\uFEFF/, "").split(/\r?\n/)) {
      const line = original.trim();
      if (!line || line.startsWith("//")) continue;
      if (line.startsWith("[") && line.endsWith("]")) {
        section = line.slice(1, -1);
        sections[section] ??= [];
        continue;
      }
      sections[section]?.push(line);
    }
    return sections;
  }
  function keyValue(lines) {
    const data = {};
    for (const line of lines) {
      const p = line.indexOf(":");
      if (p >= 0) data[line.slice(0, p).trim()] = line.slice(p + 1).trim();
    }
    return data;
  }
  function csvFields(line) {
    const values = [];
    let value = "", quoted = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        if (quoted && line[i + 1] === '"') {
          value += '"';
          i++;
        } else quoted = !quoted;
      } else if (char === "," && !quoted) {
        values.push(value.trim());
        value = "";
      } else value += char;
    }
    values.push(value.trim());
    return values;
  }
  function backgroundFilename(lines) {
    for (const line of lines) {
      const values = csvFields(line);
      if (values[0] === "0" && values[1] === "0" && values[2]) return values[2];
    }
    return void 0;
  }
  function sampleSet(value, fallback = "normal") {
    const normalized = String(value ?? "").trim().toLowerCase();
    if (normalized === "2" || normalized === "soft") return "soft";
    if (normalized === "3" || normalized === "drum") return "drum";
    if (normalized === "1" || normalized === "normal") return "normal";
    return fallback;
  }
  function timingSampleSet(value) {
    const normalized = String(value ?? "").trim();
    return normalized === "1" || normalized === "2" || normalized === "3" ? sampleSet(normalized) : void 0;
  }
  function objectHitSample(raw, timing, defaultSet) {
    const fields2 = (raw ?? "").split(":"), normal = sampleSet(fields2[0], timing.set || defaultSet), addition = sampleSet(fields2[1], normal);
    const index = Number(fields2[2]), volume2 = Number(fields2[3]);
    return { normalSet: normal, additionSet: addition, index: Number.isFinite(index) && index > 0 ? Math.floor(index) : timing.index, volume: Number.isFinite(volume2) && volume2 > 0 ? Math.min(100, volume2) : timing.volume };
  }
  function samplePath(start, params, length) {
    const bits2 = params.split("|");
    const type = bits2.shift();
    const points = [start, ...bits2.map((x) => {
      const [px, py] = x.split(":").map(Number);
      return { x: px, y: py };
    }).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y))];
    if (points.length < 2) return [start];
    let path = [];
    if (type === "P" && points.length === 3) {
      const [a, b, c] = points;
      const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));
      if (Math.abs(d) > 1e-3) {
        const aa = a.x * a.x + a.y * a.y, bb = b.x * b.x + b.y * b.y, cc = c.x * c.x + c.y * c.y;
        const cx = (aa * (b.y - c.y) + bb * (c.y - a.y) + cc * (a.y - b.y)) / d;
        const cy = (aa * (c.x - b.x) + bb * (a.x - c.x) + cc * (b.x - a.x)) / d;
        const radius2 = Math.hypot(a.x - cx, a.y - cy);
        let startA = Math.atan2(a.y - cy, a.x - cx), midA = Math.atan2(b.y - cy, b.x - cx), endA = Math.atan2(c.y - cy, c.x - cx);
        const norm = (x) => (x % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
        let sweep = norm(endA - startA);
        if (norm(midA - startA) > sweep) sweep -= 2 * Math.PI;
        const steps2 = Math.max(8, Math.min(300, Math.ceil(Math.abs(sweep) * radius2 / 5)));
        for (let i = 0; i <= steps2; i++) {
          const angle = startA + sweep * i / steps2;
          path.push({ x: cx + radius2 * Math.cos(angle), y: cy + radius2 * Math.sin(angle) });
        }
      }
    }
    if (type === "B") {
      const segments = [];
      let segment = [points[0]];
      for (let i = 1; i < points.length; i++) {
        segment.push(points[i]);
        if (i < points.length - 1 && points[i].x === points[i + 1].x && points[i].y === points[i + 1].y) {
          segments.push(segment);
          segment = [points[++i]];
        }
      }
      segments.push(segment);
      for (const controls of segments) {
        if (controls.length < 2) continue;
        const steps2 = Math.max(16, Math.min(150, controls.length * 25));
        for (let i = 0; i <= steps2; i++) {
          const t = i / steps2, work = controls.map((p) => ({ ...p }));
          for (let level = work.length - 1; level > 0; level--) for (let j2 = 0; j2 < level; j2++) {
            work[j2].x = work[j2].x * (1 - t) + work[j2 + 1].x * t;
            work[j2].y = work[j2].y * (1 - t) + work[j2 + 1].y * t;
          }
          path.push(work[0]);
        }
      }
    }
    if (!path.length) {
      path = points;
    }
    const distances = [0];
    for (let i = 1; i < path.length; i++) distances.push(distances[i - 1] + Math.hypot(path[i].x - path[i - 1].x, path[i].y - path[i - 1].y));
    const full = distances.at(-1) ?? 0;
    let target = Math.max(0, length);
    if (full === 0 || target === 0) return [start];
    const last = path.length - 1, lastSpan = distances[last] - distances[last - 1];
    if (target > full && lastSpan === 0) target = full;
    if (target > full) {
      const extra = (target - full) / lastSpan, a = path[last - 1], b = path[last];
      path.push({ x: b.x + (b.x - a.x) * extra, y: b.y + (b.y - a.y) * extra });
      distances.push(target);
    }
    const out = [], steps = Math.max(1, Math.min(150, Math.ceil(target / 2)));
    let j = 1;
    for (let i = 0; i <= steps; i++) {
      const distance = target * i / steps;
      while (j < distances.length - 1 && distances[j] < distance) j++;
      const span = distances[j] - distances[j - 1] || 1, t = (distance - distances[j - 1]) / span;
      out.push({ x: path[j - 1].x + (path[j].x - path[j - 1].x) * t, y: path[j - 1].y + (path[j].y - path[j - 1].y) * t });
    }
    return out;
  }
  function parseBeatmapText(text, md5, files2 = {}) {
    const parts = fields(text), general = keyValue(parts.General ?? []), meta = keyValue(parts.Metadata ?? []), diff = keyValue(parts.Difficulty ?? []);
    if ((general.Mode ?? "0") !== "0") throw new Error("Only osu!standard beatmaps are supported.");
    const defaultSet = sampleSet(general.SampleSet);
    const timing = (parts.TimingPoints ?? []).map((row) => {
      const v = row.split(","), index = Number(v[4]), volume2 = Number(v[5]);
      return { time: Number(v[0]), beat: Number(v[1]), uninherited: v[6] !== "0", set: timingSampleSet(v[3]), index: Number.isFinite(index) && index > 0 ? Math.floor(index) : 0, volume: Number.isFinite(volume2) && volume2 > 0 ? Math.min(100, volume2) : 100 };
    }).filter((t) => Number.isFinite(t.time) && Number.isFinite(t.beat)).sort((a, b) => a.time - b.time);
    const sliderMultiplier = Number(diff.SliderMultiplier ?? 1.4);
    const sliderTickRate = Math.max(0.1, Number(diff.SliderTickRate ?? 1));
    const formatVersion = Number(text.match(/osu file format v(\d+)/)?.[1] ?? 14);
    let combo = 0;
    const objects = [];
    for (const row of parts.HitObjects ?? []) {
      const v = row.split(","), x = Number(v[0]), y = Number(v[1]), time = Number(v[2]), flags = Number(v[3]), sound = Number(v[4]);
      if (![x, y, time, flags, sound].every(Number.isFinite)) continue;
      if (flags & 4) combo = 0;
      combo++;
      let checkpoints, nodeSamples;
      let type = "circle", endTime = time, path, repeats, comboContribution = 1, hitSampleRaw = v[5];
      let activeTiming = { set: defaultSet, index: 0, volume: 100 };
      for (const t of timing) {
        if (t.time > time) break;
        activeTiming = { set: t.set ?? activeTiming.set, index: t.index, volume: t.volume };
      }
      if (flags & 2) {
        type = "slider";
        repeats = Math.max(1, Number(v[6]) || 1);
        const length = Number(v[7]) || 0;
        let beat = 500, sv = 1;
        for (const t of timing) {
          if (t.time > time) break;
          if (t.uninherited) {
            beat = t.beat;
            sv = 1;
          } else if (t.beat < 0) sv = -100 / t.beat;
        }
        endTime = time + length * beat * repeats / (100 * Math.max(0.01, sliderMultiplier) * Math.max(0.01, sv));
        path = samplePath({ x, y }, v[5] ?? "", length);
        const velocity = 100 * sliderMultiplier * sv / beat, spanDuration = (endTime - time) / repeats;
        const tickDistance = 100 * sliderMultiplier * (formatVersion < 8 ? 1 : sv) / sliderTickRate;
        checkpoints = [];
        for (let span = 0; span < repeats; span++) {
          for (let distance = tickDistance; distance < Math.min(length - velocity * 10, 1e5); distance += tickDistance) {
            const progress = distance / length;
            checkpoints.push({ time: time + spanDuration * (span + (span % 2 ? 1 - progress : progress)), progress, kind: "tick" });
          }
          checkpoints.push({ time: time + spanDuration * (span + 1), progress: (span + 1) % 2, kind: span === repeats - 1 ? "tail" : "repeat" });
        }
        checkpoints.sort((a, b) => a.time - b.time);
        comboContribution = 1 + checkpoints.length;
        hitSampleRaw = v[10];
        const edgeSounds = (v[8] ?? "").split("|"), edgeSets = (v[9] ?? "").split("|");
        nodeSamples = Array.from({ length: repeats + 1 }, (_, node) => {
          const nodeTime = time + (endTime - time) * node / repeats;
          let nodeTiming = { set: defaultSet, index: 0, volume: 100 };
          for (const point of timing) {
            if (point.time > nodeTime) break;
            nodeTiming = { set: point.set ?? nodeTiming.set, index: point.index, volume: point.volume };
          }
          const custom = (hitSampleRaw ?? "").split(":"), sets = edgeSets[node]?.split(":");
          const normal = Number(sets?.[0]) ? sets[0] : custom[0], addition = Number(sets?.[1]) ? sets[1] : custom[1];
          return { sound: Number(edgeSounds[node] ?? sound), hitSample: objectHitSample([normal, addition, custom[2], custom[3]].join(":"), nodeTiming, defaultSet) };
        });
      } else if (flags & 8) {
        type = "spinner";
        endTime = Number(v[5]) || time;
        hitSampleRaw = v[6];
      }
      objects.push({ x, y, time, endTime, type, sound, hitSample: objectHitSample(hitSampleRaw, activeTiming, defaultSet), combo, path, repeats, comboContribution, checkpoints, nodeSamples });
    }
    if (!objects.length) throw new Error("Beatmap has no playable objects.");
    return { md5, title: meta.Title ?? "Unknown title", artist: meta.Artist ?? "Unknown artist", version: meta.Version ?? "", audioFilename: general.AudioFilename ?? "", backgroundFilename: backgroundFilename(parts.Events ?? []), ar: Number(diff.ApproachRate ?? diff.OverallDifficulty ?? 5), cs: Number(diff.CircleSize ?? 5), od: Number(diff.OverallDifficulty ?? 5), hp: Number(diff.HPDrainRate ?? 5), objects, sourceText: text, files: files2 };
  }
  function parseVerifiedBeatmap(bytes, expectedMd5) {
    const actualMd5 = import_spark_md5.default.ArrayBuffer.hash(Uint8Array.from(bytes).buffer);
    if (actualMd5 !== expectedMd5.toLowerCase()) throw new Error("This beatmap file does not match the replay.");
    return parseBeatmapText(new TextDecoder("utf-8").decode(bytes), actualMd5);
  }
  function parseBeatmapArchive(input, replayMd5) {
    if (input.length > MAX_ARCHIVE) throw new Error("Beatmap archive exceeds the 150 MB limit.");
    zipSizeCheck(input);
    const raw = unzipSync(input);
    const files2 = {};
    let total = 0;
    for (const [name, bytes] of Object.entries(raw)) {
      const key = safeName(name);
      total += bytes.length;
      if (bytes.length > MAX_FILE || total > MAX_UNPACKED) throw new Error("Beatmap archive is too large.");
      files2[key] = bytes;
    }
    const osu = Object.entries(files2).find(([name, bytes]) => name.endsWith(".osu") && import_spark_md5.default.ArrayBuffer.hash(Uint8Array.from(bytes).buffer) === replayMd5.toLowerCase());
    if (!osu) throw new Error("This beatmap archive does not match the replay.");
    const text = new TextDecoder("utf-8").decode(osu[1]);
    return parseBeatmapText(text, replayMd5, files2);
  }
  function findArchiveFile(map2, name) {
    const target = safeName(name);
    return map2.files[target] ?? Object.entries(map2.files).find(([key]) => key.endsWith("/" + target))?.[1];
  }
  function validSetting(key, value) {
    return typeof value === "number" && Number.isFinite(value) && value >= (key === "ar" ? -10 : 0) && value <= 11 ? value : void 0;
  }
  function mergeDifficultySettings(map2, ...sources) {
    const difficulty = { ar: map2.ar, cs: map2.cs, od: map2.od, hp: map2.hp };
    for (const source of sources) {
      if (!source) continue;
      for (const key of ["ar", "cs", "od", "hp"]) {
        const value = validSetting(key, source[key]);
        if (value !== void 0) difficulty[key] = value;
      }
    }
    return { ...map2, ...difficulty };
  }

  // src/hud-font.ts
  var glyphs = {
    "0": "M12 0H40Q52 0 52 12V28Q52 40 40 40H12Q0 40 0 28V12Q0 0 12 0Z",
    "1": "M0 0H14V40",
    "2": "M0 0H40Q52 0 52 10Q52 20 40 20H12Q0 20 0 32V40H52",
    "3": "M0 0H40Q52 0 52 10Q52 20 40 20H14M40 20Q52 20 52 30Q52 40 40 40H0",
    "4": "M0 0V17Q0 24 9 24H52M44 0V40",
    "5": "M52 0H0V20H40Q52 20 52 30Q52 40 40 40H0",
    "6": "M52 0H12Q0 0 0 12V28Q0 40 12 40H40Q52 40 52 30Q52 20 40 20H0",
    "7": "M0 0H52V6L18 40",
    "8": "M12 20Q0 20 0 10Q0 0 12 0H40Q52 0 52 10Q52 20 40 20ZM12 20Q0 20 0 30Q0 40 12 40H40Q52 40 52 30Q52 20 40 20",
    "9": "M52 20H12Q0 20 0 10Q0 0 12 0H40Q52 0 52 12V28Q52 40 40 40H0",
    P: "M0 40V0H38Q50 0 50 12Q50 24 38 24H0",
    G: "M52 0H12Q0 0 0 12V28Q0 40 12 40H52V21H29",
    R: "M0 40V0H38Q50 0 50 11Q50 22 38 22H0M29 22L52 40",
    E: "M52 0H0V40H52M0 20H44",
    A: "M0 40L22 0H30L52 40M10 24H42",
    T: "M0 0H52M26 0V40",
    O: "M12 0H40Q52 0 52 12V28Q52 40 40 40H12Q0 40 0 28V12Q0 0 12 0Z",
    D: "M0 0H35Q52 0 52 20Q52 40 35 40H0Z",
    M: "M0 40V0H6L26 24L46 0H52V40",
    H: "M0 0V40M52 0V40M0 20H52",
    I: "M0 0V40",
    S: "M52 0H12Q0 0 0 10Q0 20 12 20H40Q52 20 52 30Q52 40 40 40H0",
    "\u2014": "M0 20H52"
  };
  function glyphWidth(char) {
    return char === "1" ? 14 : char === "I" ? 0 : 52;
  }
  function strokeGlyph(ctx2, path) {
    const tokens = path.match(/[MLHVQZ]|-?\d+(?:\.\d+)?/g);
    let x = 0, y = 0, index = 0;
    ctx2.beginPath();
    const number = () => Number(tokens[index++]);
    while (index < tokens.length) {
      const command = tokens[index++];
      if (command === "M" || command === "L") {
        x = number();
        y = number();
        if (command === "M") ctx2.moveTo(x, y);
        else ctx2.lineTo(x, y);
      } else if (command === "H") {
        x = number();
        ctx2.lineTo(x, y);
      } else if (command === "V") {
        y = number();
        ctx2.lineTo(x, y);
      } else if (command === "Q") {
        const cx = number(), cy = number();
        x = number();
        y = number();
        ctx2.quadraticCurveTo(cx, cy, x, y);
      } else if (command === "Z") ctx2.closePath();
    }
    ctx2.stroke();
  }
  function geometricTextWidth(text, height) {
    return [...text].reduce((width, char, index) => width + (glyphWidth(char) + 4 + (index ? 9 : 0)) * height / 44, 0);
  }
  function drawGeometricText(ctx2, text, x, y, height, color) {
    ctx2.save();
    ctx2.translate(x, y);
    ctx2.scale(height / 44, height / 44);
    ctx2.strokeStyle = color;
    ctx2.lineWidth = height >= 30 ? 5.5 : 3.5;
    ctx2.lineJoin = "round";
    ctx2.lineCap = "butt";
    let cursor = 2;
    for (const char of text) {
      if (glyphs[char]) {
        ctx2.save();
        ctx2.translate(cursor, 2);
        strokeGlyph(ctx2, glyphs[char]);
        ctx2.restore();
      }
      cursor += glyphWidth(char) + 13;
    }
    ctx2.restore();
    return geometricTextWidth(text, height);
  }

  // src/combo.ts
  function inputAt(frames, time) {
    let lo = 0, hi = frames.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (frames[mid].time <= time) lo = mid + 1;
      else hi = mid;
    }
    const a = frames[Math.max(0, lo - 1)] ?? { time: 0, x: 256, y: 192, keys: 0 }, b = frames[lo] ?? a;
    const t = b.time > a.time ? Math.max(0, Math.min(1, (time - a.time) / (b.time - a.time))) : 0;
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, keys: a.keys };
  }
  function pointAt(object, time) {
    const path = object.path ?? [{ x: object.x, y: object.y }], span = (object.endTime - object.time) / (object.repeats ?? 1);
    const elapsed = Math.max(0, Math.min(object.endTime - object.time, time - object.time));
    const index = Math.min((object.repeats ?? 1) - 1, Math.floor(elapsed / Math.max(1, span)));
    let progress = Math.max(0, Math.min(1, (elapsed - index * span) / Math.max(1, span)));
    if (index % 2) progress = 1 - progress;
    const position = progress * (path.length - 1), a = path[Math.floor(position)], b = path[Math.min(path.length - 1, Math.floor(position) + 1)], t = position % 1;
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
  }
  function reconstructCombo(map2, replay2, results) {
    const events = [];
    let largeTickHits = 0, sliderEndHits = 0;
    const hr = replay2.performanceMods?.some((mod) => mod.acronym === "HR") ?? Boolean(replay2.mods & 16), cs = Math.min(10, map2.cs * (hr ? 1.3 : 1)), radius2 = (54.4 - 4.48 * cs) * 1.00041;
    const push = (time, objectIndex, kind, hit) => events.push({ time, objectIndex, kind, hit, combo: 0, maxCombo: 0 });
    for (const result of results) {
      const object = map2.objects[result.objectIndex];
      if (object.type !== "slider") {
        push(result.time, result.objectIndex, object.type, Boolean(result.judgement));
        continue;
      }
      const headTime = result.hitTime ?? object.time + Math.floor(200 - 10 * Math.min(10, map2.od * (hr ? 1.4 : 1))) - (replay2.version >= 3e7 ? 0.5 : 0);
      push(headTime, result.objectIndex, "head", result.hitTime !== null);
      let tracking = false, lastTime2 = object.time;
      const update = (time) => {
        const input = inputAt(replay2.frames, time), ball = pointAt(object, time), y = hr ? 384 - ball.y : ball.y;
        tracking = Boolean(input.keys & 15) && Math.hypot(input.x - ball.x, input.y - y) <= radius2 * (tracking ? 2.4 : 1);
      };
      for (const checkpoint of object.checkpoints ?? []) {
        const judgeTime = Math.max(checkpoint.time, headTime);
        const tail = checkpoint.kind === "tail", from = tail ? Math.max(object.time + (object.endTime - object.time) / 2, checkpoint.time - 36, lastTime2) : checkpoint.time;
        let hit = false, resultTime = judgeTime;
        const samples = [...replay2.frames.filter((f) => f.time > lastTime2 && f.time <= judgeTime).map((f) => f.time), from, judgeTime, headTime].filter((t) => t >= lastTime2 && t <= judgeTime).sort((a, b) => a - b);
        for (const time of samples) {
          update(time);
          if (time >= Math.max(headTime, from) && tracking) {
            hit = true;
            resultTime = time;
            if (tail) break;
          }
        }
        if (!tail) {
          update(judgeTime);
          hit = tracking;
          resultTime = judgeTime;
        }
        if (hit) {
          if (tail) sliderEndHits++;
          else largeTickHits++;
        }
        push(resultTime, result.objectIndex, checkpoint.kind, hit);
        lastTime2 = judgeTime;
      }
    }
    events.sort((a, b) => a.time - b.time || a.objectIndex - b.objectIndex);
    let combo = 0, maxCombo = 0;
    for (const event of events) {
      combo = event.hit ? combo + 1 : 0;
      maxCombo = Math.max(maxCombo, combo);
      event.combo = combo;
      event.maxCombo = maxCombo;
    }
    const stats = replay2.performanceStatistics;
    const validated = maxCombo === replay2.combo && (!stats || largeTickHits === stats.largeTickHits && sliderEndHits === stats.sliderEndHits);
    return { events, maxCombo, largeTickHits, sliderEndHits, validated };
  }
  function comboAt(events, time) {
    let lo = 0, hi = events.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (events[mid].time <= time) lo = mid + 1;
      else hi = mid;
    }
    return lo ? events[lo - 1] : { combo: 0, maxCombo: 0 };
  }

  // src/scoring.ts
  function smoothScoreAt(events, time) {
    let lo = 0, hi = events.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (events[mid].time <= time) lo = mid + 1;
      else hi = mid;
    }
    if (!lo) return 0;
    const current = events[lo - 1];
    let value = 0;
    for (let i = lo - 1; i >= 0; i--) {
      const progress = Math.max(0, Math.min(1, (time - events[i].time) / 180));
      if (progress === 1) {
        value += events[i].score;
        break;
      }
      const previous = i ? events[i - 1].score : 0;
      value += (events[i].score - previous) * (1 - (1 - progress) ** 3);
    }
    return Math.min(current.score, value);
  }
  function smoothAccuracyAt(events, time) {
    let lo = 0, hi = events.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (events[mid].time <= time) lo = mid + 1;
      else hi = mid;
    }
    let value = 1;
    for (let i = lo - 1; i >= 0; i--) {
      const progress = Math.max(0, Math.min(1, (time - events[i].time) / 180));
      if (progress === 1) {
        value += events[i].accuracy - 1;
        break;
      }
      const previous = i ? events[i - 1].accuracy : 1;
      value += (events[i].accuracy - previous) * (1 - (1 - progress) ** 3);
    }
    return Math.max(0, Math.min(1, value));
  }
  function namedCounts(counts) {
    return { great: counts[0], good: counts[1], meh: counts[2], miss: counts[3] };
  }
  function replayCounts(replay2) {
    return { great: replay2.counts[0], good: replay2.counts[1], meh: replay2.counts[2], miss: replay2.counts[5] };
  }
  var SUPPORTED_MODS = 8 | 16 | 64 | 512;
  function pressed(frame, previous) {
    return Boolean(frame.keys & 15 & ~(previous?.keys ?? 0));
  }
  function modified(map2, replay2) {
    const hardRock = replay2.performanceMods?.some((mod) => mod.acronym === "HR") ?? Boolean(replay2.mods & 16);
    return { od: Math.min(10, map2.od * (hardRock ? 1.4 : 1)), cs: Math.min(10, map2.cs * (hardRock ? 1.3 : 1)), hardRock };
  }
  function radius(cs) {
    return (54.4 - 4.48 * cs) * 1.00041;
  }
  function hitWindows(od, lazer = false) {
    const offset = lazer ? 0.5 : 0;
    return { great: Math.floor(80 - 6 * od) - offset, ok: Math.floor(140 - 8 * od) - offset, meh: Math.floor(200 - 10 * od) - offset };
  }
  function supportedScoringSettings(map2, replay2) {
    if (replay2.performanceModsInvalid) return false;
    if ([map2.ar, map2.cs, map2.od, map2.hp, ...Object.values(replay2.difficultyOverride ?? {}).filter((value) => value !== void 0)].some((value) => !Number.isFinite(value) || value < 0 || value > 10)) return false;
    if (replay2.performanceMods === void 0) return !(replay2.mods & ~SUPPORTED_MODS);
    if (replay2.performanceMods.some((mod) => mod.acronym === "DA") && replay2.performanceMods.some((mod) => mod.acronym === "HR")) return false;
    const settings = { HD: ["only_fade_approach_circles"], HR: [], DT: ["speed_change", "adjust_pitch"], NC: ["speed_change", "adjust_pitch"], DA: ["approach_rate", "circle_size", "overall_difficulty", "drain_rate", "extended_limits"] };
    return replay2.performanceMods.every((mod) => {
      const allowed = settings[mod.acronym];
      if (!allowed) return false;
      return Object.entries(mod.settings ?? {}).every(([key, value]) => allowed.includes(key) && (mod.acronym !== "DA" || key === "extended_limits" || value === null || typeof value === "number" && value >= 0 && value <= 10));
    });
  }
  function judgementPosition(object) {
    if (object.type === "spinner") return { x: 256, y: 192 };
    if (object.type !== "slider") return { x: object.x, y: object.y };
    const path = object.path ?? [{ x: object.x, y: object.y }], repeats = object.repeats ?? 1;
    return repeats % 2 === 0 ? path[0] : path.at(-1);
  }
  function simulateScore(map2, replay2) {
    if (!supportedScoringSettings(map2, replay2)) return { validated: false, reason: "Live scoring is unavailable for this mod combination or difficulty settings.", events: [], finalCounts: [0, 0, 0, 0], maxCombo: 0 };
    const lazer = replay2.version >= 3e7, settings = modified(map2, replay2), hit = hitWindows(settings.od, lazer), clicks = replay2.frames.filter((f, i) => pressed(f, replay2.frames[i - 1]));
    const counts = [0, 0, 0, 0];
    const events = [];
    let cursor = 0, combo = 0, maxCombo = 0, points = 0;
    for (const [objectIndex, object] of map2.objects.entries()) {
      let judgement = 0, hitOffset = null;
      if (object.type === "spinner") {
        const held = replay2.frames.some((f) => f.time >= object.time && f.time <= object.endTime && Boolean(f.keys & 15));
        judgement = held ? 300 : 0;
      } else {
        while (cursor < clicks.length && clicks[cursor].time < object.time - hit.meh) cursor++;
        let best = -1, bestDelta = Infinity;
        for (let i = cursor; i < clicks.length && clicks[i].time <= object.time + hit.meh; i++) {
          const frame = clicks[i], y = settings.hardRock ? 384 - object.y : object.y;
          if (Math.hypot(frame.x - object.x, frame.y - y) > radius(settings.cs)) continue;
          const delta = Math.abs(frame.time - object.time);
          if (delta < bestDelta) {
            best = i;
            bestDelta = delta;
            break;
          }
        }
        if (best >= 0) {
          judgement = (lazer ? bestDelta <= hit.great : bestDelta < hit.great) ? 300 : (lazer ? bestDelta <= hit.ok : bestDelta < hit.ok) ? 100 : 50;
          hitOffset = clicks[best].time - object.time;
          cursor = best + 1;
        }
      }
      if (judgement === 300) counts[0]++;
      else if (judgement === 100) counts[1]++;
      else if (judgement === 50) counts[2]++;
      else counts[3]++;
      if (judgement) {
        combo += object.comboContribution ?? 1;
        maxCombo = Math.max(maxCombo, combo);
      } else combo = 0;
      points += judgement;
      const judged = counts.reduce((a, b) => a + b, 0), accuracy = judged ? points / (judged * 300) : 1;
      const position = judgementPosition(object);
      const hitTime = hitOffset === null ? null : object.time + hitOffset;
      const resultTime = object.type === "circle" ? hitTime ?? object.time + hit.meh : object.endTime;
      events.push({ objectIndex, time: resultTime, hitTime, hitOffset, objectType: object.type, x: position.x, y: position.y, judgement, combo, maxCombo, score: 0, accuracy, health: Math.max(0, Math.min(1, 0.75 + (counts[0] * 0.02 - counts[3] * 0.12))), counts: namedCounts(counts) });
    }
    const expected = [replay2.counts[0], replay2.counts[1], replay2.counts[2], replay2.counts[5]];
    const countMatch = counts.every((value, index) => value === expected[index]);
    const comboReconstruction = replay2.version >= 3e7 ? reconstructCombo(map2, replay2, events) : void 0;
    if (comboReconstruction) {
      maxCombo = comboReconstruction.maxCombo;
      let ticks = 0, tails = 0;
      const nestedByObject = /* @__PURE__ */ new Map();
      for (const nested of comboReconstruction.events) {
        const list = nestedByObject.get(nested.objectIndex) ?? [];
        list.push(nested);
        nestedByObject.set(nested.objectIndex, list);
      }
      for (const event of events) {
        const state = comboAt(comboReconstruction.events, event.time);
        event.combo = state.combo;
        event.maxCombo = state.maxCombo;
        for (const nested of nestedByObject.get(event.objectIndex) ?? []) {
          if (nested.hit) {
            if (nested.kind === "tick" || nested.kind === "repeat") ticks++;
            if (nested.kind === "tail") tails++;
          }
        }
        if (comboReconstruction.validated) event.statistics = { largeTickHits: ticks, smallTickHits: 0, sliderEndHits: tails };
      }
    }
    const comboMatch = comboReconstruction ? comboReconstruction.validated : maxCombo === replay2.combo;
    const totalWeight = events.reduce((sum, event, index) => sum + event.judgement / 300 * (0.3 + 0.7 * (index + 1) / Math.max(1, events.length)), 0) || 1;
    let accumulated = 0;
    events.forEach((event, index) => {
      accumulated += event.judgement / 300 * (0.3 + 0.7 * (index + 1) / Math.max(1, events.length));
      event.score = Math.round(replay2.score * accumulated / totalWeight);
    });
    const validated = countMatch && comboMatch;
    return { validated, countsValidated: countMatch, comboReconstruction, estimated: !validated, reason: validated ? "Live score reconstruction validated against the replay." : `Estimated live combo: reconstructed ${counts.join("/")} and ${maxCombo}\xD7 did not match the replay.`, events, finalCounts: counts, maxCombo };
  }
  function scoreAt(simulation2, replay2, time) {
    if (!simulation2.validated && !simulation2.estimated || simulation2.estimated && simulation2.events.every((event2) => event2.time <= time)) return { score: replay2.score, combo: replay2.combo, accuracy: (replay2.counts[0] * 300 + replay2.counts[1] * 100 + replay2.counts[2] * 50) / (Math.max(1, replay2.counts[0] + replay2.counts[1] + replay2.counts[2] + replay2.counts[5]) * 300), health: 1, judgement: null, counts: replayCounts(replay2), final: true };
    let lo = 0, hi = simulation2.events.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (simulation2.events[mid].time <= time) lo = mid + 1;
      else hi = mid;
    }
    const event = simulation2.events[Math.max(0, lo - 1)];
    const comboState = simulation2.comboReconstruction ? comboAt(simulation2.comboReconstruction.events, time) : null;
    return event && event.time <= time ? { ...event, ...comboState ? { combo: comboState.combo, maxCombo: comboState.maxCombo } : {}, judgement: time - event.time < 500 ? event.judgement : null, final: false } : { score: 0, combo: comboState?.combo ?? 0, accuracy: 1, health: 1, judgement: null, counts: { great: 0, good: 0, meh: 0, miss: 0 }, final: false };
  }

  // src/performance.ts
  function recordedPerformanceScore(replay2, statistics) {
    return { counts: { great: replay2.counts[0], good: replay2.counts[1], meh: replay2.counts[2], miss: replay2.counts[5] }, maxCombo: replay2.combo, statistics: statistics ?? replay2.performanceStatistics };
  }
  function ppAt(events, values, time) {
    if (!values) return null;
    let value = 0;
    for (let i = 0; i < events.length; i++) {
      if (events[i].time > time) break;
      value = values[i] ?? null;
    }
    return value;
  }
  function ppComplete(events, time) {
    return events.length > 0 && events.every((event) => event.time <= time);
  }
  function smoothPpAt(events, values, time) {
    if (!values || values.length !== events.length) return null;
    let value = 0, previous = 0, prefixTime = -Infinity;
    for (let i = 0; i < events.length; i++) {
      prefixTime = Math.max(prefixTime, events[i].time);
      if (prefixTime > time) break;
      const current = values[i];
      if (current === null || current === void 0 || !Number.isFinite(current) || current < 0) {
        previous = null;
        continue;
      }
      const progress = Math.max(0, Math.min(1, (time - prefixTime) / 180));
      if (previous === null) {
        value = current;
      } else {
        value += (current - previous) * (1 - (1 - progress) ** 3);
      }
      previous = current;
    }
    return previous === null ? null : Math.max(0, value);
  }
  function displayPpAt(officialPp2, events, values, time, validated, completion) {
    const official = officialPp2 !== null && Number.isFinite(officialPp2) && officialPp2 >= 0 ? officialPp2 : null;
    if (completion && time >= completion.time) return official ?? (completion.pp !== null && Number.isFinite(completion.pp) && completion.pp >= 0 ? completion.pp : null);
    if (ppComplete(events, time) && official !== null) return official;
    if (!validated || !values || values.length !== events.length) return null;
    const live = ppAt(events, values, time);
    return live !== null && Number.isFinite(live) && live >= 0 ? live : null;
  }
  function formatPp(pp, officialPp2, events, time, completionTime) {
    if (pp === null) return "\u2014 PP";
    return `${officialPp2 !== null && Number.isFinite(officialPp2) && officialPp2 >= 0 && (ppComplete(events, time) || completionTime !== void 0 && time >= completionTime) ? "" : "\u2248 "}${Math.round(pp)} PP`;
  }

  // src/mods.ts
  var MOD_HD = 8;
  var MOD_HR = 16;
  var MOD_DT = 64;
  var MOD_HT = 256;
  var MOD_NC = 512;
  function clockRateForMods(mods, structuredMods) {
    if (structuredMods !== void 0) {
      const rateMod = structuredMods.find((mod) => ["DT", "NC", "HT", "DC"].includes(mod.acronym));
      if (!rateMod) return 1;
      const rate = rateMod.settings?.speed_change;
      if (typeof rate === "number" && Number.isFinite(rate) && rate >= 0.01 && rate <= 100) return rate;
      return rateMod.acronym === "DT" || rateMod.acronym === "NC" ? 1.5 : 0.75;
    }
    if (mods & (MOD_DT | MOD_NC)) return 1.5;
    if (mods & MOD_HT) return 0.75;
    return 1;
  }
  function visibleModBadges(mods) {
    const badges = [];
    if (mods & MOD_HD) badges.push("HD");
    if (mods & MOD_HR) badges.push("HR");
    if (mods & MOD_NC) badges.push("NC");
    else if (mods & MOD_DT) badges.push("DT");
    return badges;
  }

  // src/render.ts
  function spinnerMotion(frames, start, end, time) {
    let angle = 0, travel = 0, previous;
    const until = Math.min(end, time);
    let lo = 0, hi = frames.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (frames[mid].time < start) lo = mid + 1;
      else hi = mid;
    }
    for (let i = lo; i < frames.length; i++) {
      const frame = frames[i];
      if (frame.time > until) break;
      if (previous && previous.keys & 15 && frame.keys & 15 && Math.hypot(previous.x - 256, previous.y - 192) > 8 && Math.hypot(frame.x - 256, frame.y - 192) > 8) {
        const delta = Math.atan2(Math.sin(Math.atan2(frame.y - 192, frame.x - 256) - Math.atan2(previous.y - 192, previous.x - 256)), Math.cos(Math.atan2(frame.y - 192, frame.x - 256) - Math.atan2(previous.y - 192, previous.x - 256)));
        angle += delta;
        travel += Math.abs(delta);
      }
      previous = frame;
    }
    return { angle, rotations: travel / (2 * Math.PI), remaining: 1 - clamp01((time - start) / Math.max(1, end - start)) };
  }
  function backingStoreSize(cssWidth, cssHeight, pixelRatio) {
    const ratio = Math.max(1, Math.min(2, Number.isFinite(pixelRatio) ? pixelRatio : 1));
    return { width: Math.max(320, Math.min(4096, Math.round(cssWidth * ratio))), height: Math.max(240, Math.min(2304, Math.round(cssHeight * ratio))) };
  }
  function approachMs(ar) {
    return ar < 5 ? 1800 - 120 * ar : 1200 - 150 * (ar - 5);
  }
  function circleRadius(cs) {
    return 54.4 - 4.48 * cs;
  }
  function clamp01(value) {
    return Math.max(0, Math.min(1, value));
  }
  var SKIN_SLIDER_STYLE = { outerWidth: 2.18, borderWidth: 2.04, bodyWidth: 1.82, depthWidth: 1.28, glowWidth: 0.62, specularWidth: 0.12, comboTint: false };
  function spriteGlyphName(char) {
    return char === "\u2248" ? "approx" : char === "\u2014" ? "dash" : char === "." ? "dot" : char === "," ? "comma" : char === "%" ? "percent" : char === "\xD7" || char.toLowerCase() === "x" ? "x" : char;
  }
  function spriteTextLayout(widths, overlap, align = "right") {
    const total = Math.max(0, widths.reduce((sum, width) => sum + width, 0) - Math.max(0, widths.length - 1) * overlap);
    const start = align === "right" ? -total : align === "center" ? -total / 2 : 0;
    let cursor = start;
    const offsets = widths.map((width) => {
      const offset = cursor;
      cursor += width - overlap;
      return offset;
    });
    return { total, offsets };
  }
  function approachCircleStyle(progress, radius2) {
    return { diameter: radius2 * 2 * (1 + clamp01(progress) * 2), alpha: 0.46 + 0.24 * (1 - clamp01(progress)), lineWidth: Math.max(1.2, radius2 * 0.055) };
  }
  function rgbParts(color) {
    const values = color.match(/\d+(?:\.\d+)?/g)?.slice(0, 3).map(Number);
    return values?.length === 3 ? values : [120, 120, 120];
  }
  function darkCircleTint(color) {
    const [r, g, b] = rgbParts(color), mix = 0.13, base = [29, 30, 35];
    return `rgb(${Math.round(base[0] * (1 - mix) + r * mix)},${Math.round(base[1] * (1 - mix) + g * mix)},${Math.round(base[2] * (1 - mix) + b * mix)})`;
  }
  function followPointLayout(from, to, spacing = 32, padding = 46) {
    const dx = to.x - from.x, dy = to.y - from.y, distance = Math.hypot(dx, dy);
    if (distance <= padding * 2 + spacing) return [];
    const angle = Math.atan2(dy, dx), count = Math.floor((distance - padding * 2) / spacing), start = (distance - spacing * (count - 1)) / 2;
    return Array.from({ length: count }, (_, index) => {
      const along = start + index * spacing;
      return { x: from.x + Math.cos(angle) * along, y: from.y + Math.sin(angle) * along, angle, index };
    });
  }
  function normalVisibility(time, startTime, preempt) {
    return clamp01((time - (startTime - preempt)) / Math.max(1, preempt * 2 / 3));
  }
  function hiddenVisibility(type, time, startTime, endTime, preempt) {
    const visibleAt = startTime - preempt;
    const headFadeInDuration = preempt * 0.4, bodyFadeInDuration = type === "slider" ? Math.min(400, preempt) : headFadeInDuration;
    const headFadeIn = clamp01((time - visibleAt) / Math.max(1, headFadeInDuration));
    const bodyFadeIn = clamp01((time - visibleAt) / Math.max(1, bodyFadeInDuration));
    const headFadeStart = visibleAt + headFadeInDuration, bodyFadeStart = visibleAt + bodyFadeInDuration, fadeOutDuration = Math.max(1, preempt * 0.3);
    const head = headFadeIn * (1 - clamp01((time - headFadeStart) / fadeOutDuration));
    const bodyProgress = clamp01((time - bodyFadeStart) / Math.max(1, endTime - bodyFadeStart));
    const body = bodyFadeIn * (1 - bodyProgress) * (1 - bodyProgress);
    const spinner = headFadeIn * (1 - clamp01((time - endTime) / fadeOutDuration));
    return { head: type === "spinner" ? spinner : head, body: type === "slider" ? body : head, spinner, showApproach: false };
  }
  function frameAt(frames, time) {
    let lo = 0, hi = frames.length;
    while (lo < hi) {
      const mid = lo + hi >>> 1;
      if (frames[mid].time <= time) lo = mid + 1;
      else hi = mid;
    }
    const a = frames[Math.max(0, lo - 1)] ?? { time: 0, x: 256, y: 192, keys: 0 };
    const b = frames[Math.min(frames.length - 1, lo)] ?? a;
    if (a === b || b.time <= a.time) return a;
    const t = Math.max(0, Math.min(1, (time - a.time) / (b.time - a.time)));
    return { time, x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, keys: a.keys };
  }
  function sliderPoint(object, time) {
    const path = object.path ?? [{ x: object.x, y: object.y }];
    if (path.length === 1) return path[0];
    const length = Math.max(1, object.endTime - object.time);
    const progress = Math.max(0, Math.min(1, (time - object.time) / length)) * (object.repeats ?? 1);
    const span = Math.min((object.repeats ?? 1) - 1, Math.floor(progress));
    const p = span % 2 === 0 ? progress - span : 1 - (progress - span);
    const index = p * (path.length - 1), i = Math.floor(index), j = Math.min(path.length - 1, i + 1), frac = index - i;
    return { x: path[i].x + (path[j].x - path[i].x) * frac, y: path[i].y + (path[j].y - path[i].y) * frac };
  }
  function sprite(ctx2, image, x, y, w, h = w, alpha = 1, rotation = 0) {
    if (!image) return false;
    ctx2.save();
    ctx2.globalAlpha *= alpha;
    ctx2.translate(x, y);
    ctx2.rotate(rotation);
    ctx2.drawImage(image, -w / 2, -h / 2, w, h);
    ctx2.restore();
    return true;
  }
  var tintedSprites = /* @__PURE__ */ new WeakMap();
  function tintedSprite(image, color) {
    let colors = tintedSprites.get(image);
    if (!colors) {
      colors = /* @__PURE__ */ new Map();
      tintedSprites.set(image, colors);
    }
    const cached = colors.get(color);
    if (cached) return cached;
    const canvas2 = document.createElement("canvas");
    canvas2.width = image.naturalWidth;
    canvas2.height = image.naturalHeight;
    const context = canvas2.getContext("2d");
    context.drawImage(image, 0, 0);
    context.globalCompositeOperation = "multiply";
    context.fillStyle = color;
    context.fillRect(0, 0, canvas2.width, canvas2.height);
    context.globalCompositeOperation = "destination-in";
    context.drawImage(image, 0, 0);
    colors.set(color, canvas2);
    return canvas2;
  }
  var HUD_FONT = '"Century Gothic","Segoe UI Variable Display Light","Segoe UI Light",sans-serif';
  function preferredSprite(skin2, prefix, name) {
    return skin2?.images.get(`${prefix}${name}@2x.png`) ?? skin2?.images.get(`${prefix}${name}.png`);
  }
  function drawNumber(ctx2, skin2, text, x, y, height, align = "right", prefix = "score-", overlap = 0, alpha = 1) {
    const names = [...text].map(spriteGlyphName), images = names.map((name) => preferredSprite(skin2, prefix, name));
    const heights = names.map((name) => height * (name === "approx" ? 0.4 : name === "dash" ? 0.12 : 1));
    const widths = images.map((image, index) => image ? heights[index] * image.naturalWidth / image.naturalHeight : height * 0.58), layout = spriteTextLayout(widths, overlap, align);
    ctx2.save();
    ctx2.globalAlpha *= alpha;
    ctx2.fillStyle = "white";
    ctx2.textBaseline = "top";
    ctx2.font = `400 ${height}px ${HUD_FONT}`;
    ctx2.shadowColor = "rgba(0,0,0,.58)";
    ctx2.shadowBlur = 2;
    names.forEach((name, index) => {
      const image = images[index], cursor = x + layout.offsets[index], width = widths[index];
      if (image) {
        ctx2.drawImage(image, cursor, y + (height - heights[index]) / 2, width, heights[index]);
      } else if (name !== " ") ctx2.fillText(name, cursor, y);
    });
    ctx2.restore();
    return layout.total;
  }
  function cover(ctx2, background2, w, h) {
    const scale = Math.max(w / background2.width, h / background2.height), iw = background2.width * scale, ih = background2.height * scale;
    ctx2.drawImage(background2.image, (w - iw) / 2, (h - ih) / 2, iw, ih);
  }
  function comboColor(object, skin2) {
    return skin2?.comboColors[Math.floor((object.combo - 1) / 4) % skin2.comboColors.length] ?? ["#ff80bb", "#74d2fa", "#f9d978", "#b3ef8b"][Math.floor((object.combo - 1) / 4) % 4];
  }
  function drawHitCircle(ctx2, skin2, object, radius2, alpha, number = true) {
    ctx2.save();
    ctx2.globalAlpha = alpha;
    const base = skin2?.images.get("hitcircle.png"), overlay = skin2?.images.get("hitcircleoverlay.png");
    if (base) {
      const size = radius2 * 2.08;
      ctx2.drawImage(tintedSprite(base, darkCircleTint(comboColor(object, skin2))), object.x - size / 2, object.y - size / 2, size, size);
    } else {
      ctx2.fillStyle = "#202127";
      ctx2.beginPath();
      ctx2.arc(object.x, object.y, radius2 * 0.92, 0, Math.PI * 2);
      ctx2.fill();
    }
    if (!sprite(ctx2, overlay, object.x, object.y, radius2 * 2.08, radius2 * 2.08, 0.88)) {
      ctx2.strokeStyle = "rgba(245,248,250,.88)";
      ctx2.lineWidth = 2.2;
      ctx2.beginPath();
      ctx2.arc(object.x, object.y, radius2 * 0.92, 0, Math.PI * 2);
      ctx2.stroke();
    }
    if (number) {
      const value = String(object.combo), digitHeight = radius2 * 0.82, overlap = (skin2?.hitCircleOverlap ?? 6) * digitHeight / 60;
      drawNumber(ctx2, skin2, value, object.x, object.y - digitHeight / 2, digitHeight, "center", "default-", overlap, 0.88);
    }
    ctx2.restore();
  }
  function activeJudgements(events, time, lifetime = 500) {
    return events.filter((event) => event.time <= time && time - event.time < lifetime).sort((a, b) => a.time - b.time);
  }
  function displayedJudgementPosition(event, hardRock) {
    return { x: event.x, y: hardRock ? 384 - event.y : event.y };
  }
  function drawJudgement(ctx2, skin2, event, time, hardRock) {
    const age = time - event.time, progress = clamp01(age / 500), image = skin2?.images.get(`hit${event.judgement}${event.judgement === 300 ? "@2x" : ""}.png`) ?? skin2?.images.get(`hit${event.judgement}.png`);
    if (!image) return;
    const density = event.judgement === 300 && skin2?.images.has("hit300@2x.png") ? 2 : 1, scale = 0.72 + 0.28 * Math.min(1, age / 90), width = image.naturalWidth / density * scale, height = image.naturalHeight / density * scale;
    const position = displayedJudgementPosition(event, hardRock);
    sprite(ctx2, image, position.x, position.y, width, height, 1 - clamp01((progress - 0.55) / 0.45));
  }
  function hudText(ctx2, text, x, y, size, weight = 700, align = "left", color = "#fff") {
    ctx2.save();
    ctx2.textAlign = align;
    ctx2.textBaseline = "top";
    ctx2.fillStyle = color;
    ctx2.font = `${weight} ${size}px ${HUD_FONT}`;
    ctx2.shadowColor = "rgba(0,0,0,.9)";
    ctx2.shadowBlur = 4;
    ctx2.fillText(text, x, y);
    ctx2.restore();
  }
  function drawClassicHud(ctx2, skin2, state, replay2, time, simulation2, ppValues2, officialPp2, w, h, ui, completion) {
    const margin = 18 * ui;
    const displayedScore = (simulation2?.validated || simulation2?.estimated) && !state.final ? smoothScoreAt(simulation2.events, time) : state.score;
    drawNumber(ctx2, skin2, String(Math.round(displayedScore)).padStart(6, "0"), w - margin, 8 * ui, 31 * ui, "right", "berlin-", (skin2?.scoreOverlap ?? 0) * ui);
    const displayedAccuracy = (simulation2?.validated || simulation2?.estimated) && !state.final ? smoothAccuracyAt(simulation2.events, time) : state.accuracy;
    drawNumber(ctx2, skin2, `${(displayedAccuracy * 100).toFixed(2)}%`, w - margin, 43 * ui, 18 * ui, "right", "berlin-", (skin2?.scoreOverlap ?? 0) * ui, 0.92);
    hudText(ctx2, visibleModBadges(replay2.mods).join("  "), w - margin, 72 * ui, 13 * ui, 700, "right");
    drawNumber(ctx2, skin2, String(state.combo), margin, h - 69 * ui, 38 * ui, "left", "berlin-", (skin2?.comboOverlap ?? 5) * 38 * ui / 35, 0.94);
    const barW = Math.min(420 * ui, w * 0.42);
    ctx2.fillStyle = "rgba(215,239,242,.16)";
    ctx2.fillRect(margin, 10 * ui, barW, 2 * ui);
    ctx2.fillStyle = "#c9ffff";
    ctx2.shadowColor = "rgba(170,255,255,.55)";
    ctx2.shadowBlur = 2 * ui;
    ctx2.fillRect(margin, 10 * ui, barW * state.health, 2 * ui);
    ctx2.shadowColor = "transparent";
    const pp = displayPpAt(officialPp2 ?? null, simulation2?.events ?? [], ppValues2 ?? null, time, Boolean(simulation2?.validated || simulation2?.estimated), completion);
    const displayedPp = pp !== null && !state.final ? smoothPpAt(simulation2?.events ?? [], ppValues2 ?? null, time) ?? pp : pp;
    const ppText = displayedPp === null ? "\u2014" : String(Math.round(displayedPp));
    const ppWidth = drawGeometricText(ctx2, ppText, margin, 31 * ui, 30 * ui, "#d7fcff");
    drawGeometricText(ctx2, "PP", margin + ppWidth + 5 * ui, 44 * ui, 16 * ui, "#d7fcff");
    if (simulation2?.estimated && !state.final) hudText(ctx2, simulation2.countsValidated === false ? "\u2248 LIVE HUD" : "\u2248 COMBO", margin, h - 88 * ui, 11 * ui, 400, "left");
    const entries = [["GREAT", state.counts.great, "#6bdcff"], ["GOOD", state.counts.good, "#9ada27"], ["MEH", state.counts.meh, "#e8b91f"], ["MISS", state.counts.miss, "#f43b55"]];
    let x = w - 5 * ui;
    for (let i = entries.length - 1; i >= 0; i--) {
      const [label, count, color] = entries[i], countText = String(count);
      const countWidth = geometricTextWidth(countText, 15 * ui), labelWidth = geometricTextWidth(label, 8 * ui);
      x -= countWidth + labelWidth + 2 * ui;
      drawGeometricText(ctx2, countText, x, h - 18 * ui, 15 * ui, color);
      drawGeometricText(ctx2, label, x + countWidth + 2 * ui, h - 11 * ui, 8 * ui, color);
      x -= 15 * ui;
    }
    const offsets = (simulation2?.validated || simulation2?.estimated ? simulation2.events : []).filter((event) => event.time <= time && event.hitOffset !== null).sort((a, b) => a.time - b.time).slice(-24).map((event) => event.hitOffset);
    const cx = w / 2, barY = h - 22 * ui, half = 120 * ui;
    ctx2.fillStyle = "#e0bd18";
    ctx2.fillRect(cx - half, barY, half * 0.4, 5 * ui);
    ctx2.fillStyle = "#68a516";
    ctx2.fillRect(cx - half * 0.6, barY, half * 0.6, 5 * ui);
    ctx2.fillRect(cx, barY, half * 0.6, 5 * ui);
    ctx2.fillStyle = "#e0bd18";
    ctx2.fillRect(cx + half * 0.6, barY, half * 0.4, 5 * ui);
    ctx2.fillStyle = "#fff";
    ctx2.fillRect(cx - 2 * ui, barY - 7 * ui, 4 * ui, 19 * ui);
    for (const offset of offsets) {
      ctx2.fillStyle = "rgba(220,245,255,.7)";
      ctx2.fillRect(cx + Math.max(-half, Math.min(half, offset / 180 * half)) - 1 * ui, barY - 4 * ui, 2 * ui, 13 * ui);
    }
  }
  function roundedRect(ctx2, x, y, w, h, r) {
    const radius2 = Math.min(r, w / 2, h / 2);
    ctx2.beginPath();
    ctx2.moveTo(x + radius2, y);
    ctx2.arcTo(x + w, y, x + w, y + h, radius2);
    ctx2.arcTo(x + w, y + h, x, y + h, radius2);
    ctx2.arcTo(x, y + h, x, y, radius2);
    ctx2.arcTo(x, y, x + w, y, radius2);
    ctx2.closePath();
  }
  function drawInputOverlay(ctx2, skin2, keys, w, h, ui) {
    const x = w - 42 * ui, y = h - 106 * ui;
    for (const [index, down] of [Boolean(keys & 1 || keys & 4), Boolean(keys & 2 || keys & 8)].entries()) {
      const cy = y + index * 23 * ui;
      ctx2.save();
      roundedRect(ctx2, x - 21 * ui, cy - 9 * ui, 42 * ui, 18 * ui, 4 * ui);
      ctx2.fillStyle = down ? "#53d9ff" : "rgba(6,10,18,.68)";
      ctx2.fill();
      ctx2.strokeStyle = down ? "#d9f9ff" : "rgba(235,250,255,.72)";
      ctx2.lineWidth = 1.2 * ui;
      ctx2.stroke();
      ctx2.fillStyle = down ? "#06121a" : "#fff";
      ctx2.font = `700 ${9 * ui}px ${HUD_FONT}`;
      ctx2.textAlign = "center";
      ctx2.textBaseline = "middle";
      ctx2.fillText(`K${index + 1}`, x, cy);
      ctx2.restore();
    }
  }
  function objectRemovalTime(object, event, od) {
    if (object.type === "circle") return event?.time ?? object.time + hitWindows(od).meh;
    return object.type === "slider" ? object.endTime : object.endTime + 240;
  }
  function sliderHeadEndTime(object, event, od) {
    return event?.hitTime ?? object.time + hitWindows(od).meh;
  }
  function reverseArrowMarkers(object, time) {
    const repeats = object.repeats ?? 1, path = object.path ?? [];
    if (repeats < 2 || path.length < 2) return;
    const spanDuration = (object.endTime - object.time) / repeats, markers = /* @__PURE__ */ new Map();
    for (let repeat = 1; repeat < repeats; repeat++) {
      const repeatTime = object.time + spanDuration * repeat;
      if (time <= repeatTime) markers.set(repeat % 2 ? "end" : "start", repeatTime);
    }
    return [...markers].map(([side, repeatTime]) => {
      const atStart = side === "start", point = atStart ? path[0] : path.at(-1), inside = atStart ? path[1] : path.at(-2);
      return { side, repeatTime, point, angle: Math.atan2(inside.y - point.y, inside.x - point.x) + Math.PI / 2, spanDuration };
    });
  }
  function drawReverseArrows(ctx2, skin2, object, time, radius2, alpha) {
    const markers = reverseArrowMarkers(object, time);
    if (!markers) return;
    const image = skin2?.images.get("reversearrow.png");
    for (const { point, repeatTime, angle, spanDuration } of markers) {
      const pulse = 1 + 0.18 * (1 - clamp01((repeatTime - time) / Math.min(300, spanDuration)));
      if (!sprite(ctx2, image, point.x, point.y, radius2 * 2.15 * pulse, radius2 * 2.15 * pulse, alpha, angle)) {
        ctx2.save();
        ctx2.globalAlpha *= alpha;
        ctx2.translate(point.x, point.y);
        ctx2.rotate(angle);
        ctx2.strokeStyle = "#fff";
        ctx2.lineWidth = 4;
        ctx2.beginPath();
        ctx2.moveTo(-radius2 * 0.35, radius2 * 0.15);
        ctx2.lineTo(0, -radius2 * 0.2);
        ctx2.lineTo(radius2 * 0.35, radius2 * 0.15);
        ctx2.stroke();
        ctx2.restore();
      }
    }
  }
  function objectExitPoint(object) {
    if (object.type !== "slider" || !object.path?.length) return { x: object.x, y: object.y };
    return (object.repeats ?? 1) % 2 === 0 ? object.path[0] : object.path.at(-1);
  }
  function drawFollowPoints(ctx2, skin2, objects, time, preempt, hidden) {
    const frames = skin2?.followPointFrames ?? [];
    if (!frames.length) return;
    for (let index = 0; index < objects.length - 1; index++) {
      const previous = objects[index], next = objects[index + 1];
      if (previous.type === "spinner" || next.type === "spinner" || next.combo === 1 || next.time - previous.endTime > preempt * 1.5) continue;
      const visibleAt = next.time - preempt;
      if (time < visibleAt || time > next.time) continue;
      const fadeIn = normalVisibility(time, next.time, preempt), fadeOut = clamp01((next.time - time) / Math.min(240, preempt * 0.25));
      const alpha = Math.min(fadeIn, fadeOut) * (hidden ? 0.13 : 0.18);
      if (alpha <= 0) continue;
      const image = skin2?.images.get(frames[Math.floor(Math.max(0, time - visibleAt) / 55) % frames.length]);
      if (!image) continue;
      for (const point of followPointLayout(objectExitPoint(previous), next)) {
        const width = 48, height = width * image.naturalHeight / image.naturalWidth;
        sprite(ctx2, image, point.x, point.y, width, height, alpha, point.angle);
      }
    }
  }
  function render(ctx2, map2, replay2, time, options = {}) {
    const w = ctx2.canvas.width, h = ctx2.canvas.height, tint2 = Math.max(0, Math.min(1, options.tint ?? 0.8)), skin2 = options.skin;
    ctx2.setTransform(1, 0, 0, 1, 0, 0);
    ctx2.imageSmoothingEnabled = true;
    ctx2.imageSmoothingQuality = "high";
    ctx2.fillStyle = "#100e15";
    ctx2.fillRect(0, 0, w, h);
    if (options.background) cover(ctx2, options.background, w, h);
    ctx2.fillStyle = `rgba(0,0,0,${tint2})`;
    ctx2.fillRect(0, 0, w, h);
    const scale = Math.min(w / 640, h / 480), left = (w - 512 * scale) / 2, top = (h - 384 * scale) / 2;
    ctx2.save();
    ctx2.setTransform(scale, 0, 0, scale, left, top);
    const hardRock = Boolean(replay2.mods & MOD_HR), hidden = Boolean(replay2.mods & MOD_HD), ar = Math.min(10, map2.ar * (hardRock ? 1.4 : 1)), cs = Math.min(10, map2.cs * (hardRock ? 1.3 : 1)), od = Math.min(10, map2.od * (hardRock ? 1.4 : 1));
    const preempt = approachMs(ar), radius2 = circleRadius(cs);
    const events = options.simulation?.events ?? [], eventByObject = new Map(events.map((event) => [event.objectIndex, event]));
    const cursor = frameAt(replay2.frames, time);
    const displayObjects = hardRock ? map2.objects.map((object) => ({ ...object, y: 384 - object.y, path: object.path?.map((p) => ({ x: p.x, y: 384 - p.y })) })) : map2.objects;
    drawFollowPoints(ctx2, skin2, displayObjects, time, preempt, hidden);
    const visible = displayObjects.map((object, index) => ({ object, index })).filter(({ object, index }) => object.time - preempt <= time && (object.type === "slider" ? time < object.endTime : objectRemovalTime(object, eventByObject.get(index), od) >= time));
    for (const { object, index } of visible.reverse()) {
      const event = eventByObject.get(index), alpha = normalVisibility(time, object.time, preempt);
      const visibility = hidden ? hiddenVisibility(object.type, time, object.time, object.endTime, preempt) : { head: alpha, body: alpha, spinner: alpha, showApproach: true };
      if (object.type === "spinner") {
        ctx2.save();
        ctx2.globalAlpha *= visibility.spinner;
        const motion = spinnerMotion(replay2.frames, object.time, object.endTime, time);
        const modern = skin2?.images.has("spinner-bottom.png");
        if (modern) {
          const bottom = skin2?.images.get("spinner-bottom.png");
          if (bottom) sprite(ctx2, bottom, 256, 192, bottom.naturalWidth / 2, bottom.naturalHeight / 2, 1, motion.angle);
          const topImage = skin2?.images.get("spinner-top.png");
          if (topImage) sprite(ctx2, topImage, 256, 192, topImage.naturalWidth / 2, topImage.naturalHeight / 2, 1, -motion.angle);
          const middle = skin2?.images.get("spinner-middle2@2x.png") ?? skin2?.images.get("spinner-middle2.png");
          if (middle) sprite(ctx2, middle, 256, 192, middle.naturalWidth / (skin2?.images.has("spinner-middle2@2x.png") ? 4 : 2), middle.naturalHeight / (skin2?.images.has("spinner-middle2@2x.png") ? 4 : 2));
        } else {
          sprite(ctx2, skin2?.images.get("spinner-circle.png"), 256, 192, 344, 344, 1, motion.angle);
          sprite(ctx2, skin2?.images.get("spinner-osu.png"), 256, 192, 105, 105);
        }
        if (time <= object.endTime) {
          ctx2.strokeStyle = "#fff";
          ctx2.lineWidth = 2;
          ctx2.beginPath();
          ctx2.arc(256, 192, Math.max(1, 180 * motion.remaining), 0, Math.PI * 2);
          ctx2.stroke();
        }
        if (time >= object.time && motion.rotations < 1) sprite(ctx2, skin2?.images.get("spinner-spin.png"), 256, 320, 120, 36);
        ctx2.restore();
      } else {
        if (object.type === "slider" && object.path && object.path.length > 1) {
          ctx2.save();
          ctx2.globalAlpha *= visibility.body;
          ctx2.lineCap = "round";
          ctx2.lineJoin = "round";
          ctx2.beginPath();
          object.path.forEach((p, i) => i ? ctx2.lineTo(p.x, p.y) : ctx2.moveTo(p.x, p.y));
          ctx2.strokeStyle = "rgba(0,0,0,.62)";
          ctx2.lineWidth = radius2 * SKIN_SLIDER_STYLE.outerWidth;
          ctx2.shadowColor = "rgba(0,0,0,.65)";
          ctx2.shadowBlur = radius2 * 0.18;
          ctx2.stroke();
          ctx2.shadowBlur = 0;
          ctx2.strokeStyle = skin2?.sliderBorder ?? "#787878";
          ctx2.globalAlpha *= 0.82;
          ctx2.lineWidth = radius2 * SKIN_SLIDER_STYLE.borderWidth;
          ctx2.stroke();
          ctx2.globalAlpha /= 0.82;
          ctx2.strokeStyle = skin2?.sliderTrack ?? "rgb(3,3,12)";
          ctx2.lineWidth = radius2 * SKIN_SLIDER_STYLE.bodyWidth;
          ctx2.stroke();
          ctx2.strokeStyle = "rgba(35,38,54,.24)";
          ctx2.lineWidth = radius2 * SKIN_SLIDER_STYLE.depthWidth;
          ctx2.shadowColor = "rgba(70,76,96,.10)";
          ctx2.shadowBlur = radius2 * 0.2;
          ctx2.stroke();
          ctx2.shadowBlur = 0;
          ctx2.strokeStyle = "rgba(122,132,156,.07)";
          ctx2.lineWidth = radius2 * SKIN_SLIDER_STYLE.glowWidth;
          ctx2.shadowColor = "rgba(128,138,160,.16)";
          ctx2.shadowBlur = radius2 * 0.5;
          ctx2.stroke();
          ctx2.shadowBlur = 0;
          ctx2.strokeStyle = "rgba(224,230,242,.04)";
          ctx2.lineWidth = radius2 * SKIN_SLIDER_STYLE.specularWidth;
          ctx2.stroke();
          ctx2.restore();
          drawReverseArrows(ctx2, skin2, object, time, radius2, visibility.body);
          if (time >= object.time && time <= object.endTime) {
            const ball = sliderPoint(object, time), tracking = Boolean(cursor.keys & 15) && Math.hypot(cursor.x - ball.x, cursor.y - ball.y) <= radius2 * 2.4, engaged = event ? event.hitTime !== null : true;
            if (engaged) sprite(ctx2, skin2?.images.get("sliderfollowcircle@2x.png") ?? skin2?.images.get("sliderfollowcircle.png"), ball.x, ball.y, radius2 * 4, radius2 * 4, tracking ? 1 : 0.68);
            if (!sprite(ctx2, skin2?.images.get("sliderb0@2x.png") ?? skin2?.images.get("sliderb0.png"), ball.x, ball.y, radius2 * 1.35)) {
              ctx2.fillStyle = "#fff";
              ctx2.beginPath();
              ctx2.arc(ball.x, ball.y, radius2 * 0.5, 0, Math.PI * 2);
              ctx2.fill();
            }
          }
        }
        const headEnd = object.type === "slider" ? sliderHeadEndTime(object, event, od) : objectRemovalTime(object, event, od);
        if (time < headEnd) drawHitCircle(ctx2, skin2, object, radius2, visibility.head);
        if (visibility.showApproach && time < object.time && time < headEnd) {
          const progress = (object.time - time) / preempt, style = approachCircleStyle(progress, radius2), approach = skin2?.images.get("approachcircle.png"), color = comboColor(object, skin2);
          ctx2.save();
          ctx2.globalAlpha *= alpha * style.alpha;
          ctx2.shadowColor = color;
          ctx2.shadowBlur = radius2 * 0.12;
          if (approach) {
            const tinted = tintedSprite(approach, color);
            ctx2.drawImage(tinted, object.x - style.diameter / 2, object.y - style.diameter / 2, style.diameter, style.diameter);
          } else {
            ctx2.strokeStyle = color;
            ctx2.lineWidth = style.lineWidth;
            ctx2.beginPath();
            ctx2.arc(object.x, object.y, style.diameter / 2, 0, Math.PI * 2);
            ctx2.stroke();
          }
          ctx2.restore();
        }
      }
    }
    for (const event of activeJudgements(options.simulation?.validated || options.simulation?.estimated ? options.simulation.events : [], time)) drawJudgement(ctx2, skin2, event, time, hardRock);
    for (let age = 144; age >= 18; age -= 18) {
      const trail = frameAt(replay2.frames, time - age);
      sprite(ctx2, skin2?.images.get("cursortrail.png"), trail.x, trail.y, 20, 20, (150 - age) / 420 + 0.05);
    }
    if (!sprite(ctx2, skin2?.images.get("cursor.png"), cursor.x, cursor.y, 36, 36)) {
      ctx2.save();
      ctx2.shadowColor = "#fff";
      ctx2.shadowBlur = 14;
      ctx2.fillStyle = "#fff";
      ctx2.beginPath();
      ctx2.arc(cursor.x, cursor.y, 7, 0, Math.PI * 2);
      ctx2.fill();
      ctx2.restore();
    }
    ctx2.restore();
    const state = scoreAt(options.simulation ?? { validated: false, reason: "", events: [], finalCounts: [0, 0, 0, 0], maxCombo: 0 }, replay2, time);
    const ui = Math.max(0.7, Math.min(1.4, Math.min(w / 1280, h / 720)));
    drawClassicHud(ctx2, skin2, state, replay2, time, options.simulation, options.ppValues, options.officialPp, w, h, ui, options.performanceCompletion);
    drawInputOverlay(ctx2, skin2, cursor.keys, w, h, ui);
    return cursor.keys;
  }

  // src/skin.ts
  var files = [
    "hitcircle.png",
    "hitcircleoverlay.png",
    "approachcircle.png",
    "cursor.png",
    "cursortrail.png",
    "sliderb0@2x.png",
    "sliderb0.png",
    "sliderfollowcircle@2x.png",
    "sliderfollowcircle.png",
    "reversearrow.png",
    "spinner-background.png",
    "spinner-bottom.png",
    "spinner-circle.png",
    "spinner-glow.png",
    "spinner-middle2@2x.png",
    "spinner-middle2.png",
    "spinner-osu.png",
    "spinner-spin.png",
    "spinner-top.png",
    "spinner-warning@2x.png",
    "spinner-warning.png",
    "scorebar-bg.png",
    "scorebar-colour-0.png",
    "scorebar-ki.png",
    "scorebar-kidanger.png",
    "inputoverlay-background@2x.png",
    "inputoverlay-background.png",
    "inputoverlay-key@2x.png",
    "inputoverlay-key.png",
    "hit0.png",
    "hit50.png",
    "hit100.png",
    "hit300@2x.png",
    "hit300.png",
    ...Array.from({ length: 10 }, (_, i) => `default-${i}.png`),
    ...Array.from({ length: 10 }, (_, i) => `berlin-${i}.png`),
    "berlin-percent.png",
    "berlin-dot.png",
    "berlin-comma.png",
    ...Array.from({ length: 24 }, (_, i) => `followpoint-${i}.png`)
  ];
  function load(name) {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve([name, image]);
      image.onerror = () => resolve(null);
      image.src = chrome.runtime.getURL(`skin/vv_idke_trail/${name}`);
    });
  }
  async function loadSkin() {
    const loaded = await Promise.all(files.map(load));
    const images = new Map(loaded.filter((x) => Boolean(x)));
    return {
      images,
      sounds: new Map(["normal", "soft", "drum"].flatMap((set) => ["hitnormal", "hitwhistle", "hitfinish", "hitclap"].map((name) => [`${set}-${name}`, chrome.runtime.getURL(`skin/vv_idke_trail/${set}-${name}.wav`)]))),
      comboColors: ["rgb(26,116,242)", "rgb(164,32,240)", "rgb(37,185,239)", "rgb(23,209,116)", "rgb(255,75,255)"],
      sliderBorder: "rgb(120,120,120)",
      sliderTrack: "rgb(3,3,12)",
      hitCircleOverlap: 6,
      scoreOverlap: 0,
      comboOverlap: 5,
      followPointFrames: [...images.keys()].filter((name) => /^followpoint-\d+\.png$/.test(name) && images.get(name).naturalWidth > 1).sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]))
    };
  }

  // src/hitsounds.ts
  function sampleKey(set, name, index = 0) {
    return `${set}-${name}${index > 0 ? index : ""}`;
  }
  function requestedHitSounds(object) {
    const requests = [{ name: "hitnormal", set: object.hitSample.normalSet, index: object.hitSample.index }];
    if (object.sound & 2) requests.push({ name: "hitwhistle", set: object.hitSample.additionSet, index: object.hitSample.index });
    if (object.sound & 4) requests.push({ name: "hitfinish", set: object.hitSample.additionSet, index: object.hitSample.index });
    if (object.sound & 8) requests.push({ name: "hitclap", set: object.hitSample.additionSet, index: object.hitSample.index });
    return requests;
  }

  // src/viewer.ts
  var $ = (id) => document.getElementById(id);
  var title = $("title");
  var status = $("status");
  var canvas = $("playfield");
  var ctx = canvas.getContext("2d");
  var toggle = $("toggle");
  var seek = $("seek");
  var clock = $("clock");
  var speed = $("speed");
  var volume = $("volume");
  var tint = $("tint");
  var tintValue = $("tint-value");
  var ppOutput = $("pp-value");
  var hudState = $("hud-state");
  var song = new Audio();
  song.preload = "auto";
  song.volume = Number(volume.value);
  var pending = /* @__PURE__ */ new Map();
  var soundEvents = [];
  var nextId = 1;
  var replay = null;
  var map = null;
  var archiveBytes = null;
  var officialPp = null;
  var scoreIsLazer = null;
  var scorePerformanceStatistics = null;
  var performanceCompletion;
  var audioUrl = null;
  var playing = false;
  var startedAt = 0;
  var offsetMs = 0;
  var lastTime = 0;
  var nextHit = 0;
  var raf = 0;
  var playbackRate = 1;
  var background = null;
  var backgroundBitmap = null;
  var backgroundLoad = 0;
  var coverFallbackUrl = null;
  var skin = null;
  var simulation = null;
  var ppValues = null;
  var ppGeneration = 0;
  var hideTimer = 0;
  var TINT_KEY = "osu-browser-replay-background-tint";
  function clampTint(value) {
    return Math.max(0, Math.min(100, Number.isFinite(value) ? Math.round(value) : 80));
  }
  var backgroundTint = 80;
  try {
    backgroundTint = clampTint(Number(localStorage.getItem(TINT_KEY) ?? 80));
  } catch {
  }
  tint.value = String(backgroundTint);
  tintValue.value = `${backgroundTint}%`;
  tint.setAttribute("aria-valuetext", `${backgroundTint}%`);
  var audioContext = null;
  var mapHitSamples = /* @__PURE__ */ new Map();
  var skinHitSamples = /* @__PURE__ */ new Map();
  var hitsoundGeneration = 0;
  var worker = new Worker(chrome.runtime.getURL("parser-worker.js"));
  var performanceWorker = new Worker(chrome.runtime.getURL("performance-worker.js"));
  var workerId = 1;
  var workerPending = /* @__PURE__ */ new Map();
  worker.onmessage = (event) => {
    const task = workerPending.get(event.data.id);
    if (!task) return;
    workerPending.delete(event.data.id);
    if (event.data.ok && event.data.replay) task.resolve(event.data.replay);
    else task.reject(new Error(event.data.error ?? "Replay parser failed."));
  };
  function parse(bytes) {
    return new Promise((resolve, reject) => {
      const id = workerId++;
      workerPending.set(id, { resolve, reject });
      const copy = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
      worker.postMessage({ id, bytes: copy }, [copy]);
    });
  }
  function calculatePerformance() {
    performanceWorker.terminate();
    performanceWorker = new Worker(chrome.runtime.getURL("performance-worker.js"));
    const generation = ++ppGeneration;
    ppValues = null;
    performanceCompletion = void 0;
    draw();
    if (!map || !replay || !simulation) return;
    performanceCompletion = { time: simulation.events.length ? simulation.events.reduce((max2, event) => Math.max(max2, event.time), 0) : map.objects.reduce((max2, object) => Math.max(max2, object.endTime), 0) + 200, pp: null };
    if (replay.performanceModsInvalid) return;
    const lazer = scoreIsLazer ?? replay.version >= 3e7;
    const statistics = scorePerformanceStatistics ?? (lazer ? replay.performanceStatistics : { legacyTotalScore: replay.score });
    const request = {
      // The checksum-matched .osu is authoritative. Website difficulty metadata
      // may be rounded or stale; DA is already represented in structured mods.
      estimateNested: true,
      id: generation,
      sourceText: map.sourceText,
      mods: replay.performanceMods ?? replay.mods,
      lazer,
      difficulty: replay.performanceMods ? {} : replay.difficultyOverride ?? {},
      statistics,
      finalScore: recordedPerformanceScore(replay, statistics),
      snapshots: simulation.events.map((event) => ({ counts: event.counts, maxCombo: event.maxCombo, statistics: event.statistics }))
    };
    const timer = window.setTimeout(() => {
      if (generation === ppGeneration) {
        performanceWorker.removeEventListener("message", receive);
        performanceWorker.terminate();
        performanceWorker = new Worker(chrome.runtime.getURL("performance-worker.js"));
        ppValues = null;
        draw();
      }
    }, 15e3);
    const receive = (event) => {
      if (event.data.id !== generation) return;
      performanceWorker.removeEventListener("message", receive);
      clearTimeout(timer);
      if (generation !== ppGeneration) return;
      ppValues = event.data.ok && event.data.values?.length === simulation?.events.length ? event.data.values ?? null : null;
      if (performanceCompletion) performanceCompletion.pp = event.data.finalPp ?? null;
      if (!event.data.ok) console.warn("PP calculation failed:", event.data.error);
      draw();
    };
    performanceWorker.addEventListener("message", receive);
    performanceWorker.postMessage(request);
  }
  function setStatus(message, error = false) {
    status.textContent = message;
    status.classList.toggle("error", error);
    status.parentElement.hidden = !message;
  }
  function format(ms) {
    const s = Math.max(0, Math.floor(ms / 1e3));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }
  function post(type) {
    parent.postMessage({ source: "osu-browser-replay", type }, "https://osu.ppy.sh");
  }
  function hostFetch(url, kind, timeout = 9e4) {
    return new Promise((resolve, reject) => {
      const id = nextId++, timer = window.setTimeout(() => {
        pending.delete(id);
        reject(new Error("Download timed out."));
      }, timeout);
      pending.set(id, { resolve, reject, timer });
      parent.postMessage({ source: "osu-browser-replay", type: "fetch", id, url, kind }, "https://osu.ppy.sh");
    });
  }
  window.addEventListener("message", (event) => {
    if (event.origin !== "https://osu.ppy.sh") return;
    const msg = event.data;
    if (msg?.source !== "osu-browser-replay-host" || msg.type !== "fetch-result") return;
    const task = pending.get(msg.id);
    if (!task) return;
    pending.delete(msg.id);
    clearTimeout(task.timer);
    if (msg.ok && msg.bytes) task.resolve(msg.bytes);
    else task.reject(new Error(msg.error ?? "Download failed."));
  });
  function modRate() {
    return clockRateForMods(replay?.mods ?? 0, replay?.performanceMods);
  }
  function duration() {
    return Math.max(map?.objects.at(-1)?.endTime ?? 0, replay?.frames.at(-1)?.time ?? 0, song.duration && Number.isFinite(song.duration) ? song.duration * 1e3 : 0) + 1e3;
  }
  function timeNow() {
    if (!playing) return offsetMs;
    return audioUrl ? Math.min(duration(), song.currentTime * 1e3) : Math.min(duration(), offsetMs + (performance.now() - startedAt) * playbackRate);
  }
  function setTime(ms) {
    offsetMs = Math.max(0, Math.min(duration(), ms));
    if (audioUrl) {
      try {
        song.currentTime = offsetMs / 1e3;
      } catch {
      }
    }
    startedAt = performance.now();
    lastTime = offsetMs;
    nextHit = firstSoundAfter(soundEvents, offsetMs);
    draw();
  }
  var settingsPanel = $("settings-panel");
  var settingsButton = $("settings");
  function hideControls() {
    if (!settingsPanel.hidden || document.querySelector("header :focus-visible,.player-controls :focus-visible,.settings-panel :focus-visible")) return;
    document.body.classList.add("controls-hidden");
  }
  function revealControls() {
    document.body.classList.remove("controls-hidden");
    clearTimeout(hideTimer);
    if (settingsPanel.hidden) hideTimer = window.setTimeout(hideControls, 2200);
  }
  var settingsHome = $("settings-home");
  var speedPage = $("speed-page");
  var speedOpen = $("speed-open");
  var settingsPage = "home";
  function setSettingsPage(page, focus = false) {
    settingsPage = page;
    const isSpeed = page === "speed";
    settingsPanel.classList.toggle("speed-view", isSpeed);
    settingsHome.inert = isSpeed;
    speedPage.inert = !isSpeed;
    settingsHome.setAttribute("aria-hidden", String(isSpeed));
    speedPage.setAttribute("aria-hidden", String(!isSpeed));
    speedOpen.setAttribute("aria-expanded", String(isSpeed));
    settingsPanel.querySelector(".settings-views").style.height = `${(isSpeed ? speedPage : settingsHome).scrollHeight}px`;
    if (focus) (isSpeed ? $("speed-back") : speedOpen).focus({ preventScroll: true });
  }
  function setSettings(open) {
    settingsPanel.hidden = !open;
    if (open) setSettingsPage("home");
    settingsButton.setAttribute("aria-expanded", String(open));
    revealControls();
  }
  speedOpen.onclick = () => setSettingsPage("speed", true);
  $("speed-back").onclick = () => setSettingsPage("home", true);
  new ResizeObserver(() => {
    if (!settingsPanel.hidden) settingsPanel.querySelector(".settings-views").style.height = `${(settingsPage === "speed" ? speedPage : settingsHome).scrollHeight}px`;
  }).observe(settingsPanel);
  function setPlaybackIcon(paused) {
    toggle.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paused ? "M6 5h4v14H6zm8 0h4v14h-4z" : "M8 5v14l11-7z"}"/></svg>`;
  }
  function updateRange(input) {
    const min = Number(input.min) || 0, max2 = Number(input.max) || 1;
    input.style.setProperty("--progress", `${Math.max(0, Math.min(100, (Number(input.value) - min) / (max2 - min) * 100))}%`);
  }
  function stop() {
    offsetMs = timeNow();
    playing = false;
    song.pause();
    setPlaybackIcon(false);
    toggle.setAttribute("aria-label", "Play");
    cancelAnimationFrame(raf);
    revealControls();
  }
  async function play() {
    if (!replay || !map) return;
    if (!audioContext) audioContext = new AudioContext();
    await audioContext.resume().catch(() => {
    });
    if (offsetMs >= duration() - 100) setTime(0);
    playbackRate = Number(speed.value) * modRate();
    song.playbackRate = playbackRate;
    if (audioUrl) {
      try {
        await song.play();
      } catch {
        setStatus("Browser blocked automatic audio. Press Play again or check site sound permissions.", true);
        return;
      }
    }
    playing = true;
    startedAt = performance.now();
    setPlaybackIcon(true);
    toggle.setAttribute("aria-label", "Pause");
    revealControls();
    tick();
  }
  function playHit(object) {
    if (!audioContext || Number(volume.value) === 0) return;
    let used = false;
    for (const { name, set, index } of requestedHitSounds(object)) {
      const sample = mapHitSamples.get(sampleKey(set, name, index)) ?? skinHitSamples.get(sampleKey(set, name));
      if (!sample) continue;
      const source = audioContext.createBufferSource(), gain = audioContext.createGain();
      gain.gain.value = Number(volume.value) * 0.6 * object.hitSample.volume / 100;
      source.buffer = sample;
      source.connect(gain).connect(audioContext.destination);
      source.start();
      used = true;
    }
    void used;
  }
  function draw() {
    const time = timeNow();
    const keys = replay && map ? render(ctx, map, replay, time, { background, tint: backgroundTint / 100, skin, simulation, duration: duration(), ppValues, officialPp, performanceCompletion }) : 0;
    if (replay && simulation) {
      const state = scoreAt(simulation, replay, time);
      hudState.value = state.final ? "FINAL" : simulation.estimated ? "ESTIMATED" : "LIVE";
      $("hit-great").value = String(state.counts.great);
      $("hit-good").value = String(state.counts.good);
      $("hit-meh").value = String(state.counts.meh);
      $("hit-miss").value = String(state.counts.miss);
      const pp = displayPpAt(officialPp, simulation.events, ppValues, time, simulation.validated || Boolean(simulation.estimated), performanceCompletion);
      ppOutput.value = formatPp(pp, officialPp, simulation.events, time, performanceCompletion?.time);
    }
    void keys;
    clock.textContent = `${format(time)} / ${format(duration())}`;
    seek.max = String(Math.max(1, duration()));
    seek.value = String(time);
    updateRange(seek);
  }
  function releaseBackground() {
    backgroundBitmap?.close();
    backgroundBitmap = null;
    background = null;
  }
  function imageMime(bytes) {
    if (bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) return "image/jpeg";
    if (bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71) return "image/png";
    if (bytes[0] === 71 && bytes[1] === 73 && bytes[2] === 70) return "image/gif";
    if (bytes[0] === 82 && bytes[1] === 73 && bytes[2] === 70 && bytes[8] === 87 && bytes[9] === 69 && bytes[10] === 66 && bytes[11] === 80) return "image/webp";
    return null;
  }
  async function decodeBackground(bytes) {
    if (bytes.length > 25 * 1024 * 1024) throw new Error("Beatmap background exceeds the 25 MB limit.");
    const mime = imageMime(bytes);
    if (!mime) throw new Error("Beatmap background uses an unsupported image format.");
    const bitmap = await createImageBitmap(new Blob([new Uint8Array(bytes)], { type: mime }));
    if (bitmap.width * bitmap.height > 4e7) {
      bitmap.close();
      throw new Error("Beatmap background dimensions are too large.");
    }
    return bitmap;
  }
  function officialCover(raw) {
    if (!raw) return null;
    try {
      const url = new URL(raw, "https://osu.ppy.sh");
      return url.protocol === "https:" && url.hostname === "assets.ppy.sh" ? url.toString() : null;
    } catch {
      return null;
    }
  }
  function useScoreInfo(info) {
    coverFallbackUrl = officialCover(info.beatmapset?.covers?.["cover@2x"] ?? info.beatmapset?.covers?.cover);
    officialPp = typeof info.pp === "number" && Number.isFinite(info.pp) ? info.pp : null;
    scoreIsLazer = info.legacy_score_id !== null && info.legacy_score_id !== void 0 ? false : info.type === "solo_score" || typeof info.build_id === "number" ? true : null;
    const statistics = info.statistics;
    scorePerformanceStatistics = statistics ? {
      largeTickHits: statistics.large_tick_hit ?? 0,
      smallTickHits: statistics.small_tick_hit ?? 0,
      sliderEndHits: statistics.slider_tail_hit ?? 0,
      legacyTotalScore: typeof info.legacy_total_score === "number" && info.legacy_total_score > 0 ? info.legacy_total_score : void 0
    } : null;
    if (info.ruleset_id !== 0) throw new Error("This score uses another game mode. osu!standard is supported first.");
  }
  async function loadCover(url) {
    const response = await fetch(url, { credentials: "omit" });
    if (!response.ok) throw new Error(`Beatmap cover failed (${response.status}).`);
    const length = Number(response.headers.get("Content-Length"));
    if (length > 25 * 1024 * 1024) throw new Error("Beatmap cover exceeds the 25 MB limit.");
    return decodeBackground(new Uint8Array(await response.arrayBuffer()));
  }
  async function prepareBackground() {
    const request = ++backgroundLoad;
    releaseBackground();
    draw();
    if (!map) return;
    if (map.backgroundFilename) {
      try {
        const bytes = findArchiveFile(map, map.backgroundFilename);
        if (bytes) {
          const bitmap = await decodeBackground(bytes);
          if (request !== backgroundLoad) {
            bitmap.close();
            return;
          }
          backgroundBitmap = bitmap;
          background = { image: bitmap, width: bitmap.width, height: bitmap.height };
          draw();
          return;
        }
      } catch {
      }
    }
    if (!coverFallbackUrl) return;
    try {
      const bitmap = await loadCover(coverFallbackUrl);
      if (request !== backgroundLoad) {
        bitmap.close();
        return;
      }
      backgroundBitmap = bitmap;
      background = { image: bitmap, width: bitmap.width, height: bitmap.height };
      draw();
    } catch {
    }
  }
  function tick() {
    if (!playing) return;
    const time = timeNow();
    if (map && time >= lastTime && time - lastTime < 250) {
      while (nextHit < soundEvents.length && soundEvents[nextHit].time <= time) {
        if (soundEvents[nextHit].time > lastTime) playHit(soundEvents[nextHit].object);
        nextHit++;
      }
    }
    lastTime = time;
    draw();
    if (time >= duration() - 10) {
      stop();
      setTime(duration());
      return;
    }
    raf = requestAnimationFrame(tick);
  }
  function prepareAudio() {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      audioUrl = null;
    }
    if (!map) return;
    const bytes = findArchiveFile(map, map.audioFilename);
    if (bytes) {
      const ext = map.audioFilename.toLowerCase().split(".").at(-1);
      audioUrl = URL.createObjectURL(new Blob([new Uint8Array(bytes)], { type: ext === "ogg" ? "audio/ogg" : ext === "mp3" ? "audio/mpeg" : "audio/wav" }));
      song.src = audioUrl;
      song.load();
    } else {
      song.removeAttribute("src");
      song.load();
      setStatus("Beatmap loaded without song audio. Import a matching .osz for music and hitsounds.", true);
    }
  }
  async function prepareHitsounds() {
    const generation = ++hitsoundGeneration;
    mapHitSamples.clear();
    skinHitSamples.clear();
    if (!map) return;
    audioContext ??= new AudioContext();
    const mapSamples = /* @__PURE__ */ new Map(), skinSamples = /* @__PURE__ */ new Map();
    const requests = /* @__PURE__ */ new Map();
    for (const object of [...map.objects, ...soundEvents.map((event) => event.object)]) {
      for (const request of requestedHitSounds(object)) requests.set(sampleKey(request.set, request.name, request.index), request);
    }
    for (const [key, { set, name, index }] of requests) {
      const file = ["wav", "ogg", "mp3"].map((ext) => findArchiveFile(map, `${key}.${ext}`)).find(Boolean);
      if (file) try {
        mapSamples.set(key, await audioContext.decodeAudioData(Uint8Array.from(file).buffer));
      } catch {
      }
      const fallbackKey = sampleKey(set, name);
      if (skinSamples.has(fallbackKey)) continue;
      const url = skin?.sounds.get(fallbackKey);
      if (!url) continue;
      try {
        const response = await fetch(url);
        if (response.ok) skinSamples.set(fallbackKey, await audioContext.decodeAudioData(await response.arrayBuffer()));
      } catch {
      }
    }
    if (generation !== hitsoundGeneration) return;
    for (const entry of mapSamples) mapHitSamples.set(...entry);
    for (const entry of skinSamples) skinHitSamples.set(...entry);
  }
  function ready() {
    if (!replay || !map) return;
    if (replay.beatmapMd5.toLowerCase() !== map.md5.toLowerCase()) throw new Error("Beatmap checksum does not match replay.");
    map = mergeDifficultySettings(map, replay.difficultyOverride);
    simulation = simulateScore(map, replay);
    soundEvents = replayHitSounds(map, simulation);
    calculatePerformance();
    prepareAudio();
    toggle.disabled = false;
    void prepareHitsounds();
    void prepareBackground();
    title.textContent = `${map.artist} \u2013 ${map.title} [${map.version}] \xB7 ${replay.player}`;
    if (audioUrl) setStatus("");
    setTime(0);
  }
  async function loadReplay(bytes) {
    stop();
    simulation = null;
    soundEvents = [];
    ppValues = null;
    performanceCompletion = void 0;
    ppGeneration++;
    setStatus("Decoding replay\u2026");
    replay = await parse(bytes);
    if (replay.mode !== 0) throw new Error("Only osu!standard replays are supported.");
    ready();
  }
  async function loadArchive(bytes) {
    if (!replay) {
      archiveBytes = bytes;
      setStatus("Beatmap archive loaded. Open a replay file.");
      return;
    }
    stop();
    setStatus("Opening beatmap archive\u2026");
    map = parseBeatmapArchive(bytes, replay.beatmapMd5);
    archiveBytes = null;
    ready();
  }
  async function maybeArchive() {
    if (archiveBytes && replay) {
      const copy = archiveBytes;
      archiveBytes = null;
      await loadArchive(copy);
    }
  }
  async function mirrorDownload(beatmapsetId) {
    const reply = await chrome.runtime.sendMessage({ type: "get-archive-redirect", beatmapsetId: String(beatmapsetId) });
    if (!reply.ok || !reply.mirrorUrl || !reply.permissionOrigin) throw new Error(reply.error ?? "Beatmap mirror was unavailable.");
    const origin = reply.permissionOrigin;
    if (!await chrome.permissions.contains({ origins: [`${origin}/*`] })) {
      const button = document.createElement("button");
      button.textContent = "Allow beatmap mirror";
      status.replaceChildren("osu! redirected to a beatmap mirror. ", button);
      const granted = await new Promise((resolve) => {
        button.onclick = async () => resolve(await chrome.permissions.request({ origins: [`${origin}/*`] }));
      });
      if (!granted) throw new Error("Beatmap mirror permission was declined. Import a matching .osz file.");
    }
    const response = await fetch(reply.mirrorUrl, { credentials: "omit" });
    if (!response.ok) throw new Error(`Beatmap mirror failed (${response.status}).`);
    const length = Number(response.headers.get("Content-Length"));
    if (length > 150 * 1024 * 1024) throw new Error("Beatmap archive exceeds the 150 MB limit.");
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (bytes.length > 150 * 1024 * 1024) throw new Error("Beatmap archive exceeds the 150 MB limit.");
    if (bytes[0] !== 80 || bytes[1] !== 75) throw new Error("Beatmap mirror returned something other than an .osz archive.");
    return bytes;
  }
  async function autoLoad(scoreId) {
    try {
      setStatus("Checking score\u2026");
      const json = await hostFetch(`https://osu.ppy.sh/scores/${scoreId}`, "json");
      const info = JSON.parse(new TextDecoder().decode(json));
      useScoreInfo(info);
      if (!info.has_replay) throw new Error("This score has no downloadable replay. You can open a local .osr instead.");
      const mapset = info.beatmap?.beatmapset_id;
      if (!mapset) throw new Error("Score has no beatmapset information.");
      setStatus("Downloading replay\u2026");
      await loadReplay(new Uint8Array(await hostFetch(`https://osu.ppy.sh/scores/${scoreId}/download`, "replay")));
      setStatus("Downloading beatmap archive\u2026");
      const armed = await chrome.runtime.sendMessage({ type: "arm-archive", beatmapsetId: String(mapset) });
      if (!armed.ok) throw new Error(armed.error ?? "Could not prepare beatmap download.");
      try {
        await loadArchive(new Uint8Array(await hostFetch(`https://osu.ppy.sh/beatmapsets/${mapset}/download?noVideo=1`, "archive")));
        void chrome.runtime.sendMessage({ type: "clear-archive", beatmapsetId: String(mapset) }).catch(() => {
        });
      } catch (primaryError) {
        try {
          await loadArchive(await mirrorDownload(mapset));
        } catch (secondaryError) {
          const osu = new Uint8Array(await hostFetch(`https://osu.ppy.sh/osu/${info.beatmap_id}`, "osu"));
          const md5 = info.beatmap?.checksum ?? replay?.beatmapMd5 ?? "";
          if (md5.toLowerCase() !== replay?.beatmapMd5.toLowerCase()) throw new Error("Online beatmap checksum does not match replay.");
          map = parseVerifiedBeatmap(osu, md5);
          ready();
          setStatus(`Visual replay ready, but song download failed: ${secondaryError instanceof Error ? secondaryError.message : String(secondaryError)} Import a matching .osz for audio.`, true);
        }
      }
      if (map) void play();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : String(error), true);
    }
  }
  async function loadLocalReplayContext(scoreId) {
    if (!replay) return;
    setStatus("Recovering beatmap details from replay metadata\u2026");
    const json = await hostFetch(`https://osu.ppy.sh/scores/${scoreId}`, "json");
    const info = JSON.parse(new TextDecoder().decode(json));
    useScoreInfo(info);
    const md5 = info.beatmap?.checksum ?? replay.beatmapMd5;
    if (md5.toLowerCase() !== replay.beatmapMd5.toLowerCase()) throw new Error("Online beatmap checksum does not match replay.");
    const osu = new Uint8Array(await hostFetch(`https://osu.ppy.sh/osu/${info.beatmap_id}`, "osu"));
    map = parseVerifiedBeatmap(osu, md5);
    ready();
  }
  $("close").onclick = () => post("close");
  var fullscreen = $("fullscreen");
  fullscreen.onclick = () => {
    setSettings(false);
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen();
  };
  settingsButton.onclick = () => setSettings(settingsPanel.hidden);
  $("restart").onclick = () => {
    setTime(0);
    revealControls();
  };
  var canvasClickTimer = 0;
  canvas.onclick = (event) => {
    if (!settingsPanel.hidden) {
      clearTimeout(canvasClickTimer);
      setSettings(false);
      return;
    }
    if (event.detail > 1) return;
    clearTimeout(canvasClickTimer);
    canvasClickTimer = window.setTimeout(() => {
      setSettings(false);
      toggle.click();
    }, 220);
  };
  canvas.ondblclick = () => {
    clearTimeout(canvasClickTimer);
    fullscreen.click();
  };
  $("clear-cache").onclick = () => {
    post("clear-cache");
    setStatus("Temporary download cache cleared.");
  };
  toggle.onclick = () => {
    if (playing) stop();
    else void play();
  };
  seek.oninput = () => setTime(Number(seek.value));
  speed.oninput = () => {
    const current = timeNow();
    playbackRate = Number(speed.value) * modRate();
    song.playbackRate = playbackRate;
    if (playing && !audioUrl) {
      offsetMs = current;
      startedAt = performance.now();
    }
    const value = Number(speed.value), label = `${value.toFixed(2)}\xD7`;
    $("speed-value").value = label;
    speed.setAttribute("aria-valuetext", label);
    $("speed-summary").textContent = value === 1 ? "Normal" : label;
    for (const button of document.querySelectorAll("[data-speed]")) button.setAttribute("aria-pressed", String(Number(button.dataset.speed) === value));
    $("speed-minus").disabled = value <= Number(speed.min);
    $("speed-plus").disabled = value >= Number(speed.max);
    updateRange(speed);
  };
  updateRange(speed);
  function chooseSpeed(value) {
    speed.value = String(Math.max(Number(speed.min), Math.min(Number(speed.max), Math.round(value * 100) / 100)));
    speed.dispatchEvent(new Event("input"));
  }
  $("speed-minus").onclick = () => chooseSpeed(Number(speed.value) - 0.05);
  $("speed-plus").onclick = () => chooseSpeed(Number(speed.value) + 0.05);
  for (const button of document.querySelectorAll("[data-speed]")) button.onclick = () => chooseSpeed(Number(button.dataset.speed));
  var previousVolume = Number(volume.value);
  function updateVolume() {
    song.volume = Number(volume.value);
    updateRange(volume);
    $("mute").setAttribute("aria-label", song.volume ? "Mute" : "Unmute");
    $("mute").style.opacity = song.volume ? "1" : ".5";
  }
  volume.oninput = updateVolume;
  $("mute").onclick = () => {
    if (Number(volume.value)) {
      previousVolume = Number(volume.value);
      volume.value = "0";
    } else volume.value = String(previousVolume || 0.7);
    updateVolume();
  };
  for (const range of [seek, volume, tint]) {
    updateRange(range);
    range.addEventListener("input", () => updateRange(range));
  }
  document.querySelectorAll(".toolbar button,header button").forEach((button) => button.addEventListener("click", (event) => {
    if (event.detail > 0) button.blur();
  }));
  tint.oninput = () => {
    backgroundTint = clampTint(Number(tint.value));
    tint.value = String(backgroundTint);
    tintValue.value = `${backgroundTint}%`;
    tint.setAttribute("aria-valuetext", `${backgroundTint}%`);
    try {
      localStorage.setItem(TINT_KEY, String(backgroundTint));
    } catch {
    }
    draw();
  };
  $("replay-file").onchange = async (event) => {
    try {
      const file = event.currentTarget.files?.[0];
      if (file) {
        officialPp = null;
        scoreIsLazer = null;
        scorePerformanceStatistics = null;
        coverFallbackUrl = null;
        map = null;
        backgroundLoad++;
        releaseBackground();
        await loadReplay(new Uint8Array(await file.arrayBuffer()));
        await maybeArchive();
        if (!map && replay?.scoreId) await loadLocalReplayContext(replay.scoreId);
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : String(error), true);
    }
  };
  $("map-file").onchange = async (event) => {
    try {
      const file = event.currentTarget.files?.[0];
      if (file) await loadArchive(new Uint8Array(await file.arrayBuffer()));
    } catch (error) {
      setStatus(error instanceof Error ? error.message : String(error), true);
    }
  };
  window.addEventListener("keydown", (event) => {
    revealControls();
    if (event.key === "Escape") {
      if (!settingsPanel.hidden) {
        if (settingsPage === "speed") setSettingsPage("home", true);
        else {
          setSettings(false);
          settingsButton.focus();
        }
        event.preventDefault();
        return;
      } else if (!document.fullscreenElement) post("close");
    }
    const target = event.target;
    if (event.code === "Space" && (target === document.body || target.matches("input[type=range]"))) {
      event.preventDefault();
      if (!event.repeat) toggle.click();
      return;
    }
    if (target.matches("input,select,textarea,[contenteditable]")) return;
    if (event.code === "KeyF") fullscreen.click();
    if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
      event.preventDefault();
      setTime(timeNow() + (event.code === "ArrowRight" ? 5e3 : -5e3));
    }
  });
  var shell = document.querySelector(".shell");
  shell.addEventListener("click", (event) => {
    if (!settingsPanel.hidden && !event.composedPath().some((node) => node instanceof Element && node.matches(".settings-panel,#settings,button,input,select,label,canvas"))) setSettings(false);
  });
  shell.addEventListener("pointermove", revealControls, { passive: true });
  shell.addEventListener("touchstart", revealControls, { passive: true });
  shell.addEventListener("pointerleave", () => {
    clearTimeout(hideTimer);
    hideTimer = window.setTimeout(hideControls, 350);
  });
  shell.addEventListener("focusin", revealControls);
  shell.addEventListener("focusout", revealControls);
  document.addEventListener("fullscreenchange", () => {
    fullscreen.setAttribute("aria-label", document.fullscreenElement ? "Exit fullscreen" : "Enter fullscreen");
    document.body.classList.toggle("is-fullscreen", Boolean(document.fullscreenElement));
    if (document.activeElement === fullscreen) fullscreen.blur();
    revealControls();
    resizeCanvas();
  });
  function resizeCanvas() {
    const box = canvas.parentElement.getBoundingClientRect(), { width, height } = backingStoreSize(box.width, box.height, devicePixelRatio || 1);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      draw();
    }
  }
  new ResizeObserver(resizeCanvas).observe(canvas.parentElement);
  resizeCanvas();
  song.addEventListener("ended", () => {
    stop();
    setTime(duration());
  });
  void loadSkin().then((loaded) => {
    skin = loaded;
    void prepareHitsounds();
    draw();
  });
  draw();
  var selected = new URL(location.href).searchParams.get("score");
  if (selected && /^\d+$/.test(selected)) void autoLoad(selected);
  else setStatus("Open an .osr replay and matching .osz beatmap to begin.");
})();
