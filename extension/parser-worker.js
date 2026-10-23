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

  // node_modules/lzma/src/lzma-d.js
  var require_lzma_d = __commonJS({
    "node_modules/lzma/src/lzma-d.js"(exports) {
      var LZMA = (function() {
        "use strict";
        var action_decompress = 2, action_progress = 3, wait = typeof setImmediate == "function" ? setImmediate : setTimeout, __4294967296 = 4294967296, N1_longLit = [4294967295, -__4294967296], P0_longLit = [0, 0], P1_longLit = [1, 0];
        function update_progress(percent, cbn) {
          postMessage({
            action: action_progress,
            cbn,
            result: percent
          });
        }
        function initDim(len) {
          var a = [];
          a[len - 1] = void 0;
          return a;
        }
        function add(a, b) {
          return create(a[0] + b[0], a[1] + b[1]);
        }
        function compare(a, b) {
          var nega, negb;
          if (a[0] == b[0] && a[1] == b[1]) {
            return 0;
          }
          nega = a[1] < 0;
          negb = b[1] < 0;
          if (nega && !negb) {
            return -1;
          }
          if (!nega && negb) {
            return 1;
          }
          if (sub(a, b)[1] < 0) {
            return -1;
          }
          return 1;
        }
        function create(valueLow, valueHigh) {
          var diffHigh, diffLow;
          valueHigh %= 18446744073709552e3;
          valueLow %= 18446744073709552e3;
          diffHigh = valueHigh % __4294967296;
          diffLow = Math.floor(valueLow / __4294967296) * __4294967296;
          valueHigh = valueHigh - diffHigh + diffLow;
          valueLow = valueLow - diffLow + diffHigh;
          while (valueLow < 0) {
            valueLow += __4294967296;
            valueHigh -= __4294967296;
          }
          while (valueLow > 4294967295) {
            valueLow -= __4294967296;
            valueHigh += __4294967296;
          }
          valueHigh = valueHigh % 18446744073709552e3;
          while (valueHigh > 9223372032559809e3) {
            valueHigh -= 18446744073709552e3;
          }
          while (valueHigh < -9223372036854776e3) {
            valueHigh += 18446744073709552e3;
          }
          return [valueLow, valueHigh];
        }
        function fromInt(value) {
          if (value >= 0) {
            return [value, 0];
          } else {
            return [value + __4294967296, -__4294967296];
          }
        }
        function lowBits_0(a) {
          if (a[0] >= 2147483648) {
            return ~~Math.max(Math.min(a[0] - __4294967296, 2147483647), -2147483648);
          } else {
            return ~~Math.max(Math.min(a[0], 2147483647), -2147483648);
          }
        }
        function sub(a, b) {
          return create(a[0] - b[0], a[1] - b[1]);
        }
        function $ByteArrayInputStream(this$static, buf) {
          this$static.buf = buf;
          this$static.pos = 0;
          this$static.count = buf.length;
          return this$static;
        }
        function $read(this$static) {
          if (this$static.pos >= this$static.count)
            return -1;
          return this$static.buf[this$static.pos++] & 255;
        }
        function $ByteArrayOutputStream(this$static) {
          this$static.buf = initDim(32);
          this$static.count = 0;
          return this$static;
        }
        function $toByteArray(this$static) {
          var data = this$static.buf;
          data.length = this$static.count;
          return data;
        }
        function $write_0(this$static, buf, off, len) {
          arraycopy(buf, off, this$static.buf, this$static.count, len);
          this$static.count += len;
        }
        function arraycopy(src, srcOfs, dest, destOfs, len) {
          for (var i = 0; i < len; ++i) {
            dest[destOfs + i] = src[srcOfs + i];
          }
        }
        function $init_0(this$static, input, output) {
          var decoder2, hex_length = "", i, properties = [], r, tmp_length;
          for (i = 0; i < 5; ++i) {
            r = $read(input);
            if (r == -1)
              throw new Error("truncated input");
            properties[i] = r << 24 >> 24;
          }
          decoder2 = $Decoder({});
          if (!$SetDecoderProperties(decoder2, properties)) {
            throw new Error("corrupted input");
          }
          for (i = 0; i < 64; i += 8) {
            r = $read(input);
            if (r == -1)
              throw new Error("truncated input");
            r = r.toString(16);
            if (r.length == 1) r = "0" + r;
            hex_length = r + "" + hex_length;
          }
          if (/^0+$|^f+$/i.test(hex_length)) {
            this$static.length_0 = N1_longLit;
          } else {
            tmp_length = parseInt(hex_length, 16);
            if (tmp_length > 4294967295) {
              this$static.length_0 = N1_longLit;
            } else {
              this$static.length_0 = fromInt(tmp_length);
            }
          }
          this$static.chunker = $CodeInChunks(decoder2, input, output, this$static.length_0);
        }
        function $LZMAByteArrayDecompressor(this$static, data) {
          this$static.output = $ByteArrayOutputStream({});
          $init_0(this$static, $ByteArrayInputStream({}, data), this$static.output);
          return this$static;
        }
        function $CopyBlock(this$static, distance, len) {
          var pos = this$static._pos - distance - 1;
          if (pos < 0) {
            pos += this$static._windowSize;
          }
          for (; len != 0; --len) {
            if (pos >= this$static._windowSize) {
              pos = 0;
            }
            this$static._buffer[this$static._pos++] = this$static._buffer[pos++];
            if (this$static._pos >= this$static._windowSize) {
              $Flush_0(this$static);
            }
          }
        }
        function $Create_5(this$static, windowSize) {
          if (this$static._buffer == null || this$static._windowSize != windowSize) {
            this$static._buffer = initDim(windowSize);
          }
          this$static._windowSize = windowSize;
          this$static._pos = 0;
          this$static._streamPos = 0;
        }
        function $Flush_0(this$static) {
          var size = this$static._pos - this$static._streamPos;
          if (!size) {
            return;
          }
          $write_0(this$static._stream, this$static._buffer, this$static._streamPos, size);
          if (this$static._pos >= this$static._windowSize) {
            this$static._pos = 0;
          }
          this$static._streamPos = this$static._pos;
        }
        function $GetByte(this$static, distance) {
          var pos = this$static._pos - distance - 1;
          if (pos < 0) {
            pos += this$static._windowSize;
          }
          return this$static._buffer[pos];
        }
        function $PutByte(this$static, b) {
          this$static._buffer[this$static._pos++] = b;
          if (this$static._pos >= this$static._windowSize) {
            $Flush_0(this$static);
          }
        }
        function $ReleaseStream(this$static) {
          $Flush_0(this$static);
          this$static._stream = null;
        }
        function GetLenToPosState(len) {
          len -= 2;
          if (len < 4) {
            return len;
          }
          return 3;
        }
        function StateUpdateChar(index) {
          if (index < 4) {
            return 0;
          }
          if (index < 10) {
            return index - 3;
          }
          return index - 6;
        }
        function $Chunker(this$static, decoder2) {
          this$static.decoder = decoder2;
          this$static.encoder = null;
          this$static.alive = 1;
          return this$static;
        }
        function $processChunk(this$static) {
          if (!this$static.alive) {
            throw new Error("bad state");
          }
          if (this$static.encoder) {
            throw new Error("No encoding");
          } else {
            $processDecoderChunk(this$static);
          }
          return this$static.alive;
        }
        function $processDecoderChunk(this$static) {
          var result = $CodeOneChunk(this$static.decoder);
          if (result == -1) {
            throw new Error("corrupted input");
          }
          this$static.inBytesProcessed = N1_longLit;
          this$static.outBytesProcessed = this$static.decoder.nowPos64;
          if (result || compare(this$static.decoder.outSize, P0_longLit) >= 0 && compare(this$static.decoder.nowPos64, this$static.decoder.outSize) >= 0) {
            $Flush_0(this$static.decoder.m_OutWindow);
            $ReleaseStream(this$static.decoder.m_OutWindow);
            this$static.decoder.m_RangeDecoder.Stream = null;
            this$static.alive = 0;
          }
        }
        function $CodeInChunks(this$static, inStream, outStream, outSize) {
          this$static.m_RangeDecoder.Stream = inStream;
          $ReleaseStream(this$static.m_OutWindow);
          this$static.m_OutWindow._stream = outStream;
          $Init_1(this$static);
          this$static.state = 0;
          this$static.rep0 = 0;
          this$static.rep1 = 0;
          this$static.rep2 = 0;
          this$static.rep3 = 0;
          this$static.outSize = outSize;
          this$static.nowPos64 = P0_longLit;
          this$static.prevByte = 0;
          return $Chunker({}, this$static);
        }
        function $CodeOneChunk(this$static) {
          var decoder2, distance, len, numDirectBits, posSlot, posState;
          posState = lowBits_0(this$static.nowPos64) & this$static.m_PosStateMask;
          if (!$DecodeBit(this$static.m_RangeDecoder, this$static.m_IsMatchDecoders, (this$static.state << 4) + posState)) {
            decoder2 = $GetDecoder(this$static.m_LiteralDecoder, lowBits_0(this$static.nowPos64), this$static.prevByte);
            if (this$static.state < 7) {
              this$static.prevByte = $DecodeNormal(decoder2, this$static.m_RangeDecoder);
            } else {
              this$static.prevByte = $DecodeWithMatchByte(decoder2, this$static.m_RangeDecoder, $GetByte(this$static.m_OutWindow, this$static.rep0));
            }
            $PutByte(this$static.m_OutWindow, this$static.prevByte);
            this$static.state = StateUpdateChar(this$static.state);
            this$static.nowPos64 = add(this$static.nowPos64, P1_longLit);
          } else {
            if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepDecoders, this$static.state)) {
              len = 0;
              if (!$DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG0Decoders, this$static.state)) {
                if (!$DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRep0LongDecoders, (this$static.state << 4) + posState)) {
                  this$static.state = this$static.state < 7 ? 9 : 11;
                  len = 1;
                }
              } else {
                if (!$DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG1Decoders, this$static.state)) {
                  distance = this$static.rep1;
                } else {
                  if (!$DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG2Decoders, this$static.state)) {
                    distance = this$static.rep2;
                  } else {
                    distance = this$static.rep3;
                    this$static.rep3 = this$static.rep2;
                  }
                  this$static.rep2 = this$static.rep1;
                }
                this$static.rep1 = this$static.rep0;
                this$static.rep0 = distance;
              }
              if (!len) {
                len = $Decode(this$static.m_RepLenDecoder, this$static.m_RangeDecoder, posState) + 2;
                this$static.state = this$static.state < 7 ? 8 : 11;
              }
            } else {
              this$static.rep3 = this$static.rep2;
              this$static.rep2 = this$static.rep1;
              this$static.rep1 = this$static.rep0;
              len = 2 + $Decode(this$static.m_LenDecoder, this$static.m_RangeDecoder, posState);
              this$static.state = this$static.state < 7 ? 7 : 10;
              posSlot = $Decode_0(this$static.m_PosSlotDecoder[GetLenToPosState(len)], this$static.m_RangeDecoder);
              if (posSlot >= 4) {
                numDirectBits = (posSlot >> 1) - 1;
                this$static.rep0 = (2 | posSlot & 1) << numDirectBits;
                if (posSlot < 14) {
                  this$static.rep0 += ReverseDecode(this$static.m_PosDecoders, this$static.rep0 - posSlot - 1, this$static.m_RangeDecoder, numDirectBits);
                } else {
                  this$static.rep0 += $DecodeDirectBits(this$static.m_RangeDecoder, numDirectBits - 4) << 4;
                  this$static.rep0 += $ReverseDecode(this$static.m_PosAlignDecoder, this$static.m_RangeDecoder);
                  if (this$static.rep0 < 0) {
                    if (this$static.rep0 == -1) {
                      return 1;
                    }
                    return -1;
                  }
                }
              } else
                this$static.rep0 = posSlot;
            }
            if (compare(fromInt(this$static.rep0), this$static.nowPos64) >= 0 || this$static.rep0 >= this$static.m_DictionarySizeCheck) {
              return -1;
            }
            $CopyBlock(this$static.m_OutWindow, this$static.rep0, len);
            this$static.nowPos64 = add(this$static.nowPos64, fromInt(len));
            this$static.prevByte = $GetByte(this$static.m_OutWindow, 0);
          }
          return 0;
        }
        function $Decoder(this$static) {
          this$static.m_OutWindow = {};
          this$static.m_RangeDecoder = {};
          this$static.m_IsMatchDecoders = initDim(192);
          this$static.m_IsRepDecoders = initDim(12);
          this$static.m_IsRepG0Decoders = initDim(12);
          this$static.m_IsRepG1Decoders = initDim(12);
          this$static.m_IsRepG2Decoders = initDim(12);
          this$static.m_IsRep0LongDecoders = initDim(192);
          this$static.m_PosSlotDecoder = initDim(4);
          this$static.m_PosDecoders = initDim(114);
          this$static.m_PosAlignDecoder = $BitTreeDecoder({}, 4);
          this$static.m_LenDecoder = $Decoder$LenDecoder({});
          this$static.m_RepLenDecoder = $Decoder$LenDecoder({});
          this$static.m_LiteralDecoder = {};
          for (var i = 0; i < 4; ++i) {
            this$static.m_PosSlotDecoder[i] = $BitTreeDecoder({}, 6);
          }
          return this$static;
        }
        function $Init_1(this$static) {
          this$static.m_OutWindow._streamPos = 0;
          this$static.m_OutWindow._pos = 0;
          InitBitModels(this$static.m_IsMatchDecoders);
          InitBitModels(this$static.m_IsRep0LongDecoders);
          InitBitModels(this$static.m_IsRepDecoders);
          InitBitModels(this$static.m_IsRepG0Decoders);
          InitBitModels(this$static.m_IsRepG1Decoders);
          InitBitModels(this$static.m_IsRepG2Decoders);
          InitBitModels(this$static.m_PosDecoders);
          $Init_0(this$static.m_LiteralDecoder);
          for (var i = 0; i < 4; ++i) {
            InitBitModels(this$static.m_PosSlotDecoder[i].Models);
          }
          $Init(this$static.m_LenDecoder);
          $Init(this$static.m_RepLenDecoder);
          InitBitModels(this$static.m_PosAlignDecoder.Models);
          $Init_8(this$static.m_RangeDecoder);
        }
        function $SetDecoderProperties(this$static, properties) {
          var dictionarySize, i, lc, lp, pb, remainder, val;
          if (properties.length < 5)
            return 0;
          val = properties[0] & 255;
          lc = val % 9;
          remainder = ~~(val / 9);
          lp = remainder % 5;
          pb = ~~(remainder / 5);
          dictionarySize = 0;
          for (i = 0; i < 4; ++i) {
            dictionarySize += (properties[1 + i] & 255) << i * 8;
          }
          if (dictionarySize > 99999999 || !$SetLcLpPb(this$static, lc, lp, pb)) {
            return 0;
          }
          return $SetDictionarySize(this$static, dictionarySize);
        }
        function $SetDictionarySize(this$static, dictionarySize) {
          if (dictionarySize < 0) {
            return 0;
          }
          if (this$static.m_DictionarySize != dictionarySize) {
            this$static.m_DictionarySize = dictionarySize;
            this$static.m_DictionarySizeCheck = Math.max(this$static.m_DictionarySize, 1);
            $Create_5(this$static.m_OutWindow, Math.max(this$static.m_DictionarySizeCheck, 4096));
          }
          return 1;
        }
        function $SetLcLpPb(this$static, lc, lp, pb) {
          if (lc > 8 || lp > 4 || pb > 4) {
            return 0;
          }
          $Create_0(this$static.m_LiteralDecoder, lp, lc);
          var numPosStates = 1 << pb;
          $Create(this$static.m_LenDecoder, numPosStates);
          $Create(this$static.m_RepLenDecoder, numPosStates);
          this$static.m_PosStateMask = numPosStates - 1;
          return 1;
        }
        function $Create(this$static, numPosStates) {
          for (; this$static.m_NumPosStates < numPosStates; ++this$static.m_NumPosStates) {
            this$static.m_LowCoder[this$static.m_NumPosStates] = $BitTreeDecoder({}, 3);
            this$static.m_MidCoder[this$static.m_NumPosStates] = $BitTreeDecoder({}, 3);
          }
        }
        function $Decode(this$static, rangeDecoder, posState) {
          if (!$DecodeBit(rangeDecoder, this$static.m_Choice, 0)) {
            return $Decode_0(this$static.m_LowCoder[posState], rangeDecoder);
          }
          var symbol = 8;
          if (!$DecodeBit(rangeDecoder, this$static.m_Choice, 1)) {
            symbol += $Decode_0(this$static.m_MidCoder[posState], rangeDecoder);
          } else {
            symbol += 8 + $Decode_0(this$static.m_HighCoder, rangeDecoder);
          }
          return symbol;
        }
        function $Decoder$LenDecoder(this$static) {
          this$static.m_Choice = initDim(2);
          this$static.m_LowCoder = initDim(16);
          this$static.m_MidCoder = initDim(16);
          this$static.m_HighCoder = $BitTreeDecoder({}, 8);
          this$static.m_NumPosStates = 0;
          return this$static;
        }
        function $Init(this$static) {
          InitBitModels(this$static.m_Choice);
          for (var posState = 0; posState < this$static.m_NumPosStates; ++posState) {
            InitBitModels(this$static.m_LowCoder[posState].Models);
            InitBitModels(this$static.m_MidCoder[posState].Models);
          }
          InitBitModels(this$static.m_HighCoder.Models);
        }
        function $Create_0(this$static, numPosBits, numPrevBits) {
          var i, numStates;
          if (this$static.m_Coders != null && this$static.m_NumPrevBits == numPrevBits && this$static.m_NumPosBits == numPosBits)
            return;
          this$static.m_NumPosBits = numPosBits;
          this$static.m_PosMask = (1 << numPosBits) - 1;
          this$static.m_NumPrevBits = numPrevBits;
          numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
          this$static.m_Coders = initDim(numStates);
          for (i = 0; i < numStates; ++i)
            this$static.m_Coders[i] = $Decoder$LiteralDecoder$Decoder2({});
        }
        function $GetDecoder(this$static, pos, prevByte) {
          return this$static.m_Coders[((pos & this$static.m_PosMask) << this$static.m_NumPrevBits) + ((prevByte & 255) >>> 8 - this$static.m_NumPrevBits)];
        }
        function $Init_0(this$static) {
          var i, numStates;
          numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
          for (i = 0; i < numStates; ++i) {
            InitBitModels(this$static.m_Coders[i].m_Decoders);
          }
        }
        function $DecodeNormal(this$static, rangeDecoder) {
          var symbol = 1;
          do {
            symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
          } while (symbol < 256);
          return symbol << 24 >> 24;
        }
        function $DecodeWithMatchByte(this$static, rangeDecoder, matchByte) {
          var bit, matchBit, symbol = 1;
          do {
            matchBit = matchByte >> 7 & 1;
            matchByte <<= 1;
            bit = $DecodeBit(rangeDecoder, this$static.m_Decoders, (1 + matchBit << 8) + symbol);
            symbol = symbol << 1 | bit;
            if (matchBit != bit) {
              while (symbol < 256) {
                symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
              }
              break;
            }
          } while (symbol < 256);
          return symbol << 24 >> 24;
        }
        function $Decoder$LiteralDecoder$Decoder2(this$static) {
          this$static.m_Decoders = initDim(768);
          return this$static;
        }
        function $BitTreeDecoder(this$static, numBitLevels) {
          this$static.NumBitLevels = numBitLevels;
          this$static.Models = initDim(1 << numBitLevels);
          return this$static;
        }
        function $Decode_0(this$static, rangeDecoder) {
          var bitIndex, m = 1;
          for (bitIndex = this$static.NumBitLevels; bitIndex != 0; --bitIndex) {
            m = (m << 1) + $DecodeBit(rangeDecoder, this$static.Models, m);
          }
          return m - (1 << this$static.NumBitLevels);
        }
        function $ReverseDecode(this$static, rangeDecoder) {
          var bit, bitIndex, m = 1, symbol = 0;
          for (bitIndex = 0; bitIndex < this$static.NumBitLevels; ++bitIndex) {
            bit = $DecodeBit(rangeDecoder, this$static.Models, m);
            m <<= 1;
            m += bit;
            symbol |= bit << bitIndex;
          }
          return symbol;
        }
        function ReverseDecode(Models, startIndex, rangeDecoder, NumBitLevels) {
          var bit, bitIndex, m = 1, symbol = 0;
          for (bitIndex = 0; bitIndex < NumBitLevels; ++bitIndex) {
            bit = $DecodeBit(rangeDecoder, Models, startIndex + m);
            m <<= 1;
            m += bit;
            symbol |= bit << bitIndex;
          }
          return symbol;
        }
        function $DecodeBit(this$static, probs, index) {
          var newBound, prob = probs[index];
          newBound = (this$static.Range >>> 11) * prob;
          if ((this$static.Code ^ -2147483648) < (newBound ^ -2147483648)) {
            this$static.Range = newBound;
            probs[index] = prob + (2048 - prob >>> 5) << 16 >> 16;
            if (!(this$static.Range & -16777216)) {
              this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
              this$static.Range <<= 8;
            }
            return 0;
          } else {
            this$static.Range -= newBound;
            this$static.Code -= newBound;
            probs[index] = prob - (prob >>> 5) << 16 >> 16;
            if (!(this$static.Range & -16777216)) {
              this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
              this$static.Range <<= 8;
            }
            return 1;
          }
        }
        function $DecodeDirectBits(this$static, numTotalBits) {
          var i, t, result = 0;
          for (i = numTotalBits; i != 0; --i) {
            this$static.Range >>>= 1;
            t = this$static.Code - this$static.Range >>> 31;
            this$static.Code -= this$static.Range & t - 1;
            result = result << 1 | 1 - t;
            if (!(this$static.Range & -16777216)) {
              this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
              this$static.Range <<= 8;
            }
          }
          return result;
        }
        function $Init_8(this$static) {
          this$static.Code = 0;
          this$static.Range = -1;
          for (var i = 0; i < 5; ++i) {
            this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
          }
        }
        function InitBitModels(probs) {
          for (var i = probs.length - 1; i >= 0; --i) {
            probs[i] = 1024;
          }
        }
        function decode(utf) {
          var i = 0, j = 0, x, y, z, l = utf.length, buf = [], charCodes = [];
          for (; i < l; ++i, ++j) {
            x = utf[i] & 255;
            if (!(x & 128)) {
              if (!x) {
                return utf;
              }
              charCodes[j] = x;
            } else if ((x & 224) == 192) {
              if (i + 1 >= l) {
                return utf;
              }
              y = utf[++i] & 255;
              if ((y & 192) != 128) {
                return utf;
              }
              charCodes[j] = (x & 31) << 6 | y & 63;
            } else if ((x & 240) == 224) {
              if (i + 2 >= l) {
                return utf;
              }
              y = utf[++i] & 255;
              if ((y & 192) != 128) {
                return utf;
              }
              z = utf[++i] & 255;
              if ((z & 192) != 128) {
                return utf;
              }
              charCodes[j] = (x & 15) << 12 | (y & 63) << 6 | z & 63;
            } else {
              return utf;
            }
            if (j == 16383) {
              buf.push(String.fromCharCode.apply(String, charCodes));
              j = -1;
            }
          }
          if (j > 0) {
            charCodes.length = j;
            buf.push(String.fromCharCode.apply(String, charCodes));
          }
          return buf.join("");
        }
        function toDouble(a) {
          return a[1] + a[0];
        }
        function decompress2(byte_arr, on_finish, on_progress) {
          var this$static = {}, percent, cbn, has_progress, len, sync = typeof on_finish == "undefined" && typeof on_progress == "undefined";
          if (typeof on_finish != "function") {
            cbn = on_finish;
            on_finish = on_progress = 0;
          }
          on_progress = on_progress || function(percent2) {
            if (typeof cbn == "undefined")
              return;
            return update_progress(has_progress ? percent2 : -1, cbn);
          };
          on_finish = on_finish || function(res, err) {
            if (typeof cbn == "undefined")
              return;
            return postMessage({
              action: action_decompress,
              cbn,
              result: res,
              error: err
            });
          };
          if (sync) {
            this$static.d = $LZMAByteArrayDecompressor({}, byte_arr);
            while ($processChunk(this$static.d.chunker)) ;
            return decode($toByteArray(this$static.d.output));
          }
          try {
            this$static.d = $LZMAByteArrayDecompressor({}, byte_arr);
            len = toDouble(this$static.d.length_0);
            has_progress = len > -1;
            on_progress(0);
          } catch (err) {
            return on_finish(null, err);
          }
          function do_action() {
            try {
              var res, i = 0, start = (/* @__PURE__ */ new Date()).getTime();
              while ($processChunk(this$static.d.chunker)) {
                if (++i % 1e3 == 0 && (/* @__PURE__ */ new Date()).getTime() - start > 200) {
                  if (has_progress) {
                    percent = toDouble(this$static.d.chunker.decoder.nowPos64) / len;
                    on_progress(percent);
                  }
                  wait(do_action, 0);
                  return 0;
                }
              }
              on_progress(1);
              res = decode($toByteArray(this$static.d.output));
              wait(on_finish.bind(null, res), 0);
            } catch (err) {
              on_finish(null, err);
            }
          }
          wait(do_action, 0);
        }
        if (typeof onmessage != "undefined" && (typeof window == "undefined" || typeof window.document == "undefined")) {
          (function() {
            onmessage = function(e) {
              if (e && e.data) {
                if (e.data.action == action_decompress) {
                  LZMA.decompress(e.data.data, e.data.cbn);
                }
              }
            };
          })();
        }
        return {
          /// co:compress:   compress
          decompress: decompress2
        };
      })();
      exports.LZMA = exports.LZMA_WORKER = LZMA;
    }
  });

  // src/replay.ts
  var import_lzma_d = __toESM(require_lzma_d(), 1);

  // src/mods.ts
  function parsePerformanceMods(value) {
    if (!Array.isArray(value) || value.length > 64) return void 0;
    const result = [];
    const seen = /* @__PURE__ */ new Set();
    for (const item of value) {
      if (!item || typeof item !== "object" || Array.isArray(item)) return void 0;
      const { acronym, settings } = item;
      if (typeof acronym !== "string" || !/^[A-Z0-9]{1,4}$/.test(acronym) || seen.has(acronym)) return void 0;
      seen.add(acronym);
      const mod = { acronym };
      if (settings !== void 0 && settings !== null) {
        if (typeof settings !== "object" || Array.isArray(settings)) return void 0;
        const entries = Object.entries(settings);
        if (entries.length > 64) return void 0;
        const safe = {};
        for (const [key, setting] of entries) {
          if (!/^[a-z][a-z0-9_]{0,63}$/.test(key) || key === "constructor" || key === "prototype") return void 0;
          if (setting !== null && typeof setting !== "number" && typeof setting !== "boolean" && typeof setting !== "string") return void 0;
          if (typeof setting === "number" && !Number.isFinite(setting)) return void 0;
          if (typeof setting === "string" && setting.length > 256) return void 0;
          if (setting !== null && key === "speed_change" && ["DT", "NC", "HT", "DC"].includes(acronym) && (typeof setting !== "number" || setting < 0.01 || setting > 100)) return void 0;
          if (setting !== null && acronym === "DA" && ["approach_rate", "circle_size", "overall_difficulty", "drain_rate"].includes(key) && (typeof setting !== "number" || setting < (key === "approach_rate" ? -10 : 0) || setting > 11)) return void 0;
          if (setting !== null && acronym === "CL" && key === "no_slider_head_accuracy" && typeof setting !== "boolean") return void 0;
          safe[key] = setting;
        }
        mod.settings = safe;
      }
      result.push(mod);
    }
    return result;
  }

  // src/replay.ts
  var MAX_REPLAY_BYTES = 20 * 1024 * 1024;
  var MAX_FRAMES = 5e5;
  var Reader = class {
    constructor(bytes) {
      this.bytes = bytes;
      this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    }
    offset = 0;
    view;
    need(n) {
      if (n < 0 || n > this.bytes.length - this.offset) throw new Error("Replay is truncated or invalid.");
    }
    u8() {
      this.need(1);
      return this.view.getUint8(this.offset++);
    }
    u16() {
      this.need(2);
      const n = this.view.getUint16(this.offset, true);
      this.offset += 2;
      return n;
    }
    u32() {
      this.need(4);
      const n = this.view.getUint32(this.offset, true);
      this.offset += 4;
      return n;
    }
    u64() {
      this.need(8);
      const n = this.view.getBigUint64(this.offset, true);
      this.offset += 8;
      return n;
    }
    block(n) {
      this.need(n);
      const b = this.bytes.subarray(this.offset, this.offset + n);
      this.offset += n;
      return b;
    }
    string() {
      const mark = this.u8();
      if (mark === 0) return "";
      if (mark !== 11) throw new Error("Invalid replay string marker.");
      let size = 0, shift = 0, part = 0;
      do {
        part = this.u8();
        size += (part & 127) * 2 ** shift;
        shift += 7;
        if (shift > 35) throw new Error("Replay string is too large.");
      } while (part & 128);
      if (size > 1e6) throw new Error("Replay string is too large.");
      return new TextDecoder("utf-8", { fatal: true }).decode(this.block(size));
    }
    remaining() {
      return this.bytes.length - this.offset;
    }
  };
  function decompress(bytes) {
    return new Promise((resolve, reject) => {
      try {
        import_lzma_d.default.LZMA.decompress(bytes, (result, error) => {
          if (error || result === null) reject(error ?? new Error("LZMA decompression failed."));
          else resolve(result);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  function finiteSetting(value, min = 0, max = 11) {
    return typeof value === "number" && Number.isFinite(value) && value >= min && value <= max ? value : void 0;
  }
  function difficultyFromMods(value) {
    if (!Array.isArray(value)) return void 0;
    const mod = value.find((item) => item && typeof item === "object" && String(item.acronym ?? "").toUpperCase() === "DA");
    const settings = mod?.settings;
    if (!settings) return void 0;
    const difficulty = {
      ar: finiteSetting(settings.approach_rate, -10),
      cs: finiteSetting(settings.circle_size),
      od: finiteSetting(settings.overall_difficulty),
      hp: finiteSetting(settings.drain_rate)
    };
    return Object.values(difficulty).some((value2) => value2 !== void 0) ? difficulty : void 0;
  }
  async function trailingMetadata(r) {
    if (r.remaining() < 4) return { scoreId: null };
    const length = r.u32();
    if (length === 0) return { scoreId: null };
    if (length > 1e6 || length > r.remaining()) throw new Error("Replay metadata is truncated or too large.");
    try {
      const value = JSON.parse(await decompress(r.block(length)));
      const onlineId = typeof value.online_id === "number" && Number.isSafeInteger(value.online_id) && value.online_id > 0 ? String(value.online_id) : null;
      const stats = value.statistics;
      const count = (key) => {
        const n = stats?.[key] ?? 0;
        return typeof n === "number" && Number.isSafeInteger(n) && n >= 0 ? n : void 0;
      };
      const largeTickHits = count("large_tick_hit"), smallTickHits = count("small_tick_hit"), sliderEndHits = count("slider_tail_hit");
      const performanceStatistics = stats && largeTickHits !== void 0 && smallTickHits !== void 0 && sliderEndHits !== void 0 ? { largeTickHits, smallTickHits, sliderEndHits } : void 0;
      const performanceMods = parsePerformanceMods(value.mods);
      return {
        scoreId: onlineId,
        difficultyOverride: difficultyFromMods(performanceMods),
        performanceStatistics,
        performanceMods,
        performanceModsInvalid: value.mods !== void 0 && performanceMods === void 0 ? true : void 0
      };
    } catch {
      return { scoreId: null, performanceModsInvalid: true };
    }
  }
  function parseReplayFrames(raw) {
    const decoded = [];
    let time = 0;
    for (const part of raw.split(",")) {
      if (!part) continue;
      if (decoded.length >= MAX_FRAMES) throw new Error("Replay has too many frames.");
      const fields = part.split("|");
      if (fields.length !== 4) throw new Error("Invalid replay frame.");
      const [rawDelta, x, y, keys] = fields.map(Number);
      if (![rawDelta, x, y, keys].every(Number.isFinite)) throw new Error("Invalid replay frame number.");
      if (rawDelta === -12345) continue;
      const delta = Math.round(rawDelta);
      if (Math.abs(delta) > 36e5) throw new Error("Invalid replay time delta.");
      time += delta;
      decoded.push({ time, x, y, keys });
    }
    if (decoded.length >= 2 && decoded[1].time < decoded[0].time) {
      decoded[1].time = decoded[0].time;
      decoded[0].time = 0;
    }
    if (decoded.length >= 3 && decoded[0].time > decoded[2].time) {
      decoded[0].time = decoded[1].time = decoded[2].time;
    }
    if (decoded.length >= 2 && decoded[1].x === 256 && decoded[1].y === -500) decoded.splice(1, 1);
    if (decoded.length && decoded[0].x === 256 && decoded[0].y === -500) decoded.shift();
    const frames = [];
    for (const frame of decoded) {
      if (frames.length && frame.time < frames[frames.length - 1].time) continue;
      frames.push(frame);
    }
    return frames;
  }
  async function parseReplay(input) {
    if (input.length > MAX_REPLAY_BYTES) throw new Error("Replay exceeds the 20 MB limit.");
    const r = new Reader(input);
    const mode = r.u8(), version = r.u32(), beatmapMd5 = r.string(), player = r.string();
    r.string();
    const counts = [r.u16(), r.u16(), r.u16(), r.u16(), r.u16(), r.u16()];
    const score = r.u32(), combo = r.u16();
    r.u8();
    const mods = r.u32();
    r.string();
    r.u64();
    const compressedLength = r.u32();
    if (compressedLength > MAX_REPLAY_BYTES) throw new Error("Compressed replay exceeds limit.");
    const compressed = r.block(compressedLength);
    const raw = await decompress(compressed);
    if (raw.length > 3e7) throw new Error("Decoded replay exceeds limit.");
    const frames = parseReplayFrames(raw);
    let scoreId = null;
    let metadata = { scoreId: null };
    if (r.remaining() >= 8) {
      const id = r.u64();
      if (id !== 0n && id !== 0xffffffffffffffffn) scoreId = id.toString();
    }
    if (version >= 30000001 && r.remaining() >= 4) {
      metadata = await trailingMetadata(r);
      scoreId ??= metadata.scoreId;
    }
    return { ...metadata, mode, version, beatmapMd5, player, score, combo, counts, mods, scoreId, frames, extraBytes: r.remaining() };
  }

  // src/parser-worker.ts
  self.onmessage = async (event) => {
    const { id, bytes } = event.data;
    try {
      self.postMessage({ id, ok: true, replay: await parseReplay(new Uint8Array(bytes)) });
    } catch (error) {
      self.postMessage({ id, ok: false, error: error instanceof Error ? error.message : String(error) });
    }
  };
})();
