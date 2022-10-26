"use strict";
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function _classCallCheck(e, t) {
    if (!(e instanceof t)) 
        throw new TypeError("Cannot call a class as a function")
    
}
function log(e) {
    console.log(e)
}
function getInt(e) {
    return parseInt(e, 10)
}
function getColumn(e) {
    return getInt(e.charAt(1))
}
function getRow(e) {
    return getInt(e.charAt(3))
}
function getRandomIndex(e) {
    return Math.floor(Math.random() * e.length)
}
var _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    BishopMoveGenerator = function () {
        class e {
        constructor(t, s) {
          _classCallCheck(this, e),
            this.board = t,
            this.generator = s;
        }
      }
        return _createClass(e, [
            {
                key: "getBishopMoves",
                value: function (e) {
                    this.m_log("getBishopMoves", e);
                    var t = this.getTopLeftSquares(e).concat(this.getTopRightSquares(e)),
                        s = this.getBottomLeftSquares(e).concat(this.getBottomRightSquares(e));
                    return t.concat(s)
                }
            },
            {
                key: "getTopLeftSquares",
                value: function (e) {
                    for (var t = new Array, s = e; this.board.hasTopLeftSquare(s);) {
                        if (!(s = this.board.getTopLeftSquare(s)).isEmpty()) {
                            this.generator.hasDifferentColor(e, s) && t.push(s);
                            break
                        }
                        t.push(s)
                    }
                    return t
                }
            },
            {
                key: "getTopRightSquares",
                value: function (e) {
                    for (var t = new Array, s = e; this.board.hasTopRightSquare(s);) {
                        if (!(s = this.board.getTopRightSquare(s)).isEmpty()) {
                            this.generator.hasDifferentColor(e, s) && t.push(s);
                            break
                        }
                        t.push(s)
                    }
                    return t
                }
            },
            {
                key: "getBottomRightSquares",
                value: function (e) {
                    for (var t = new Array, s = e; this.board.hasBottomRightSquare(s);) {
                        if (!(s = this.board.getBottomRightSquare(s)).isEmpty()) {
                            this.generator.hasDifferentColor(e, s) && t.push(s);
                            break
                        }
                        t.push(s)
                    }
                    return t
                }
            }, {
                key: "getBottomLeftSquares",
                value: function (e) {
                    for (var t = new Array, s = e; this.board.hasBottomLeftSquare(s);) {
                        if (!(s = this.board.getBottomLeftSquare(s)).isEmpty()) {
                            this.generator.hasDifferentColor(e, s) && t.push(s);
                            break
                        }
                        t.push(s)
                    }
                    return t
                }
            }, {
                key: "m_log",
                value: function (e, t) {
                    log("[BishopMoveGenerator." + e + "] " + t)
                }
            }
        ]),
        e
    }(),
    _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    Board = function () {
        class e {
        constructor(t, s) {
          _classCallCheck(this, e),
            this.squares = new Array(8),
            this.freeSquares = new Array,
            this.clickedSquares = new Move,
            this.generator = new MoveGenerator(this),
            this.validator = new MoveValidator(this, this.clickedSquares, this.generator),
            this.mapGenerator = new MapGenerator(this, this.generator),
            this.squaresWithWhitePiece = new Array,
            this.squaresWithBlackPiece = new Array,
            this.squaresWithBlackPieceCopy = new Array,
            this.showSolutionBlocked = !1,
            this.kings = new Array,
            this.queens = new Array,
            this.rooks = new Array,
            this.bishops = new Array,
            this.knights = new Array;
          $("#nKings").val(),
            $("#nQueens").val(),
            $("#nRooks").val(),
            $("#nBishops").val(),
            $("#nKnights").val();
          for (var i = $("#nSteps").val(), r = $("#selectedPiece").val(), a = 0; a < 8; a++) {
            this.squares[a] = new Array(8);
            for (var n = 0; n < 8; n++) {
              var o = new Square(this, a, n);
              this.squares[a][n] = o,
                this.freeSquares.push(o);
            }
          }
          this.resize(t, s),
            this.generateMapForSelectedPiece(r, i),
            this.saveGameState();
        }
      }
        return _createClass(e, [
            {
                key: "showSolution",
                value: function () {
                    this.restartGame();
                    var e = this.mapGenerator.getGenerationPath();
                    this.showSolutionBlocked = !0,
                    window.setTimeout(function () {
                        this.g_board.showSolutionBlocked = !1,
                        this.g_board.doNextMove(e, 0)
                    }, 1100)
                }
            },
            {
                key: "doNextMove",
                value: function (e, t) {
                    if (t < e.length && !this.showSolutionBlocked) {
                        $("#game").css("pointer-events", "none");
                        var s = e[t];
                        this.m_log("doNextMove", "index" + t + ", move:" + s),
                        this.move(s.getFirst(), s.getSecond()),
                        this.highlightCaptureSquares(s.getSecond()),
                        window.setTimeout(function () {
                            this.g_board.doNextMove(e, t + 1)
                        }, 1e3)
                    } else 
                        $("#game").css("pointer-events", "all")
                    
                }
            },
            {
                key: "restartGame",
                value: function () {
                    this.clearAllMarkedSquares(),
                    this.reset();
                    for (var e = 0; e < this.kings.length; e++) {
                        var t = this.kings[e];
                        this.addPiece(t, "wk")
                    }
                    for (var s = 0; s < this.queens.length; s++) {
                        var i = this.queens[s];
                        this.addPiece(i, "wq")
                    }
                    for (var r = 0; r < this.rooks.length; r++) {
                        var a = this.rooks[r];
                        this.addPiece(a, "wr")
                    }
                    for (var n = 0; n < this.bishops.length; n++) {
                        var o = this.bishops[n];
                        this.addPiece(o, "wb")
                    }
                    for (var u = 0; u < this.knights.length; u++) {
                        var h = this.knights[u];
                        this.addPiece(h, "wn")
                    }
                    for (var l = 0; l < this.squaresWithBlackPieceCopy.length; l++) {
                        var c = this.squaresWithBlackPieceCopy[l];
                        this.addPiece(c, "bp")
                    }
                }
            },
            {
                key: "saveGameState",
                value: function () {
                    for (var e = 0; e < this.squaresWithWhitePiece.length; e++) {
                        var t = this.squaresWithWhitePiece[e];
                        switch (t.getPiece().getName()) {
                            case "wk":
                                this.kings.push(t);
                                break;
                            case "wq":
                                this.queens.push(t);
                                break;
                            case "wr":
                                this.rooks.push(t);
                                break;
                            case "wb":
                                this.bishops.push(t);
                                break;
                            case "wn":
                                this.knights.push(t)
                        }
                    }
                    this.squaresWithBlackPieceCopy = this.squaresWithBlackPiece.slice()
                }
            }, {
                key: "resetGameState",
                value: function () {
                    this.squaresWithBlackPieceCopy.length = 0,
                    this.kings.length = 0,
                    this.queens.length = 0,
                    this.rooks.length = 0,
                    this.bishops.length = 0,
                    this.knights.length = 0
                }
            }, {
                key: "generateMapForSelectedPiece",
                value: function (e, t) {
                    switch (e) {
                        case "king":
                            this.generate(1, 0, 0, 0, 0, t);
                            break;
                        case "queen":
                            this.generate(0, 1, 0, 0, 0, t);
                            break;
                        case "rook":
                            this.generate(0, 0, 1, 0, 0, t);
                            break;
                        case "bishop":
                            this.generate(0, 0, 0, 1, 0, t);
                            break;
                        case "knight":
                            this.generate(0, 0, 0, 0, 1, t);
                            break;
                        default:
                            this.generate(0, 1, 0, 0, 0, t)
                    }
                }
            }, {
                key: "generate",
                value: function (e, t, s, i, r, a) {
                    this.reset(),
                    this.resetGameState(),
                    this.clearAllMarkedSquares(),
                    this.mapGenerator.generate(e, t, s, i, r, a),
                    this.saveGameState()
                }
            }, {
                key: "reset",
                value: function () {
                    this.freeSquares.length = 0,
                    this.squaresWithWhitePiece.length = 0,
                    this.squaresWithBlackPiece.length = 0;
                    for (var e = 0; e < 8; e++) 
                        for (var t = 0; t < 8; t++) 
                            this.squares[e][t].remove(),
                            this.freeSquares.push(this.squares[e][t])
                        
                    
                }
            }, {
                key: "resize",
                value: function (e, t) {
                    this.m_log("resize", "height" + e + ", width:" + t),
                    parseInt(e, 10) < parseInt(t, 10) ? this.size = e : this.size = t,
                    $(".b-container").css("height", this.size),
                    this.show();
                    for (var s = 0; s < 8; s++) 
                        for (var i = 0; i < 8; i++) 
                            this.squares[s][i].resize(this.size)
                        
                    
                }
            }, {
                key: "squareClicked",
                value: function (e) {
                    if (this.clickedSquares.hasFirst()) 
                        if (e.isEmpty()) {
                          
                        }
                         else {
                            var t = e.getPiece(),
                                s = this.clickedSquares.getFirst();
                            t.isBlack() ? this.validator.validateMove(s, e) && (this.move(s, e), this.clickedSquares.reset(), this.clickedSquares.push(e), this.highlightCaptureSquares(e), 0 == this.squaresWithBlackPiece.length ? this.showSuccessMessage() : this.isGameLost() && this.showFailureMessage()) : (this.clickedSquares.reset(), this.clickedSquares.push(e), this.highlightCaptureSquares(e))
                        }
                     else 
                        e.isEmpty() || e.getPiece().isBlack() || (this.highlightCaptureSquares(e), this.clickedSquares.push(e))
                    
                }
            }, {
                key: "showFailureMessage",
                value: function () {
                    $(".alert.failure").css("display", ""),
                    $(".curtain").css("display", "");
                    var e = $("#game"),
                        t = e.css("height"),
                        s = e.css("width");
                    this.resize(t, s)
                }
            }, {
                key: "showSuccessMessage",
                value: function () {
                    $(".alert.success").css("display", ""),
                    $(".curtain").css("display", "");
                    var e = $("#game"),
                        t = e.css("height"),
                        s = e.css("width");
                    this.resize(t, s)
                }
            }, {
                key: "isGameLost",
                value: function () {
                    for (var e = 0; e < this.squaresWithWhitePiece.length; e++) {
                        var t = this.squaresWithWhitePiece[e];
                        if (this.generator.getPossibleCaptures(t).length > 0) 
                            return this.m_log("isGameLost", "i" + e + ", possibleCaptures:" + this.generator.getPossibleCaptures(t).length),
                            !1
                        
                    }
                    return this.m_log("isGameLost", "true"),
                    !0
                }
            }, {
                key: "highlightCaptureSquares",
                value: function (e) {
                    this.m_log("highlightCaptureSquares", "square=" + e),
                    this.clearAllMarkedSquares();
                    var t = this.generator.getPossibleCaptures(e);
                    this.m_log("highlightCaptureSquares", "possibleSquares=" + t);
                    for (var s = 0; s < t.length; s++) 
                        this.m_log("highlightCaptureSquares", "i=" + s + ", square=" + t[s]),
                        t[s].setMarked()
                    
                }
            }, {
                key: "move",
                value: function (e, t) {
                    var s = e.getPiece().getName();
                    this.removePiece(e),
                    this.removePiece(t),
                    this.addPiece(t, s)
                }
            }, {
                key: "addPiece",
                value: function (e, t) {
                    e.addPiece(t),
                    "w" == t.charAt(0) && this.squaresWithWhitePiece.push(e),
                    "b" == t.charAt(0) && this.squaresWithBlackPiece.push(e);
                    var s = this.freeSquares.indexOf(e);
                    s > -1 && this.freeSquares.splice(s, 1)
                }
            }, {
                key: "removePiece",
                value: function (e) {
                    this.m_log("removePiece", e + ", blackPieces=" + this.squaresWithBlackPiece),
                    e.remove();
                    var t = this.squaresWithWhitePiece.indexOf(e);
                    t > -1 && (this.m_log("removePiece", this.squaresWithWhitePiece[t] + ", isWhite"), this.squaresWithWhitePiece.splice(t, 1));
                    var s = this.squaresWithBlackPiece.indexOf(e);
                    s > -1 && (this.m_log("removePiece", this.squaresWithBlackPiece[s] + ", isBlack"), this.squaresWithBlackPiece.splice(s, 1))
                }
            }, {
                key: "getRandomSquareWithWhitePiece",
                value: function () {
                    this.m_log("getRandomSquareWithWhitePiece");
                    var e = getRandomIndex(this.squaresWithWhitePiece);
                    return this.squaresWithWhitePiece[e]
                }
            }, {
                key: "hasTopSquare",
                value: function (e) {
                    return getRow(e.getId()) > 0
                }
            }, {
                key: "getTopSquare",
                value: function (e) {
                    return this.squares[getColumn(e.getId())][getRow(e.getId()) - 1]
                }
            }, {
                key: "hasBottomSquare",
                value: function (e) {
                    return getRow(e.getId()) < 7
                }
            }, {
                key: "getBottomSquare",
                value: function (e) {
                    return this.squares[getColumn(e.getId())][getRow(e.getId()) + 1]
                }
            }, {
                key: "hasLeftSquare",
                value: function (e) {
                    return getColumn(e.getId()) > 0
                }
            }, {
                key: "getLeftSquare",
                value: function (e) {
                    return this.squares[getColumn(e.getId()) - 1][getRow(e.getId())]
                }
            }, {
                key: "hasRightSquare",
                value: function (e) {
                    return getColumn(e.getId()) < 7
                }
            }, {
                key: "getRightSquare",
                value: function (e) {
                    return this.squares[getColumn(e.getId()) + 1][getRow(e.getId())]
                }
            }, {
                key: "hasTopLeftSquare",
                value: function (e) {
                    return getRow(e.getId()) > 0 && getColumn(e.getId()) > 0
                }
            }, {
                key: "getTopLeftSquare",
                value: function (e) {
                    return this.squares[getColumn(e.getId()) - 1][getRow(e.getId()) - 1]
                }
            }, {
                key: "hasTopRightSquare",
                value: function (e) {
                    return getRow(e.getId()) > 0 && getColumn(e.getId()) < 7
                }
            }, {
                key: "getTopRightSquare",
                value: function (e) {
                    return this.squares[getColumn(e.getId()) + 1][getRow(e.getId()) - 1]
                }
            }, {
                key: "hasBottomRightSquare",
                value: function (e) {
                    return getRow(e.getId()) < 7 && getColumn(e.getId()) < 7
                }
            }, {
                key: "getBottomRightSquare",
                value: function (e) {
                    return this.squares[getColumn(e.getId()) + 1][getRow(e.getId()) + 1]
                }
            }, {
                key: "hasBottomLeftSquare",
                value: function (e) {
                    return getRow(e.getId()) < 7 && getColumn(e.getId()) > 0
                }
            }, {
                key: "getBottomLeftSquare",
                value: function (e) {
                    return this.squares[getColumn(e.getId()) - 1][getRow(e.getId()) + 1]
                }
            }, {
                key: "clearAllMarkedSquares",
                value: function () {
                    for (var e = 0; e < 8; e++) 
                        for (var t = 0; t < 8; t++) 
                            this.squares[e][t].removeMarked()
                        
                    
                }
            }, {
                key: "getNeighbors",
                value: function (e) {
                    for (var t = getColumn(e), s = getRow(e), i = new Array, r = -1; r < 2; r++) 
                        for (var a = -1; a < 2; a++) {
                            var n = t + r,
                                o = s + a,
                                u = this.isSquareOutOfBounds(n, o),
                                h = n == t && o == s;
                            this.m_log("getNeighbors", "[" + r + "," + a + "][" + n + "," + o + "] outOfBounds=" + u + ",same=" + h),
                            u || h || i.push(this.squares[n][o])
                        }
                    
                    return this.m_log("getNeighbors", "coordinate=" + e + " [" + t + "," + s + "], square=" + this.squares[t][s] + ", neighbors=" + i),
                    i
                }
            }, {
                key: "isSquareOutOfBounds",
                value: function (e, t) {
                    return e < 0 || e > 7 || t < 0 || t > 7
                }
            }, {
                key: "placePieceOnRandomSquare",
                value: function (e) {
                    this.m_log("placePieceOnRandomSquare", "pieceName=" + e);
                    var t = this.getRandomFreeSquare();
                    this.addPiece(t, e)
                }
            }, {
                key: "getRandomFreeSquare",
                value: function () {
                    var e = getRandomIndex(this.freeSquares);
                    return this.m_log("getRandomFreeSquare", "#freeSquares=" + this.freeSquares.length + ", freeSquares=" + this.freeSquares + ", index=" + e),
                    this.freeSquares[e]
                }
            }, {
                key: "getSquare",
                value: function (e, t) {
                    return this.squares[e][t]
                }
            }, {
                key: "show",
                value: function () {
                    this.m_log("show", "size=" + this.size),
                    $("#board").css("height", this.size),
                    $("#board").css("width", this.size)
                }
            }, {
                key: "m_log",
                value: function (e, t) {
                    log("[Board." + e + "] " + t)
                }
            }
        ]),
        e
    }(),
    _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    KnightMoveGenerator = function () {
        class e {
        constructor(t, s) {
          _classCallCheck(this, e),
            this.board = t,
            this.generator = s;
        }
      }
        return _createClass(e, [
            {
                key: "getKnightMoves",
                value: function (e) {
                    var t = new Array,
                        s = getColumn(e.getId()),
                        i = getRow(e.getId());
                    return this.addSquares(t, e, 2, 1),
                    this.addSquares(t, e, 1, 2),
                    this.addSquares(t, e, -2, -1),
                    this.addSquares(t, e, -1, -2),
                    this.m_log("getKnightMoves", "[" + s + "," + i + "]squares=" + t),
                    t
                }
            }, {
                key: "addSquares",
                value: function (e, t, s, i) {
                    this.m_log("addSquares", "fromSquare=" + t + ", [" + s + "," + i + "]");
                    var r = getColumn(t.getId()),
                        a = getRow(t.getId());
                    if (!this.board.isSquareOutOfBounds(r - s, a - i)) {
                        var n = this.board.getSquare(r - s, a - i);
                        this.addSquareIfPossible(e, t, n)
                    }
                    if (!this.board.isSquareOutOfBounds(r - s, a + i)) {
                        var o = this.board.getSquare(r - s, a + i);
                        this.addSquareIfPossible(e, t, o)
                    }
                }
            }, {
                key: "addSquareIfPossible",
                value: function (e, t, s) {
                    this.m_log("addSquareIfPossible", "squares=" + e + ", fromSquare=" + t + ", squareToAdd=" + s),
                    s.isEmpty() ? e.push(s) : this.generator.hasDifferentColor(t, s) && e.push(s)
                }
            }, {
                key: "m_log",
                value: function (e, t) {
                    log("[KnightMoveGenerator." + e + "] " + t)
                }
            }
        ]),
        e
    }(),
    _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    MapGenerator = function () {
        class e {
        constructor(t, s) {
          _classCallCheck(this, e),
            this.board = t,
            this.moveGenerator = s,
            this.generationPath = new Array;
        }
      }
        return _createClass(e, [
            {
                key: "generate",
                value: function (e, t, s, i, r, a) {
                    this.generationPath.length = 0,
                    this.m_log("generate", "kings=" + e + ", queens=" + t + ", rooks=" + s + ", bishops=" + i + ", knights=" + r + ", numberOfMoves=" + a),
                    this.placePieceNumberOfTimes("wk", e),
                    this.placePieceNumberOfTimes("wq", t),
                    this.placePieceNumberOfTimes("wr", s),
                    this.placePieceNumberOfTimes("wb", i),
                    this.placePieceNumberOfTimes("wn", r);
                    for (var n = 0; n < a; n++) {
                        var o = this.board.getRandomSquareWithWhitePiece(),
                            u = this.moveGenerator.getPossibleMoves(o);
                        this.m_log("generate", "possibleMoveSquares=" + u);
                        for (var h = new Array, l = 0; l < u.length; l++) {
                            var c = u[l];
                            this.m_log("generate", "nextSquare=" + c),
                            u[l].isEmpty() && (this.m_log("generate", "emptyMoveSquares.push=" + c), h.push(c))
                        }
                        this.m_log("generate", "emptyMoveSquares=" + h);
                        var g = h[getRandomIndex(h)];
                        null != g && (this.board.move(o, g), this.generationPath.push(Move.create(o, g)), this.board.addPiece(o, "bp"), this.m_log("generate", "move=" + n + ", fromSquare=" + o + ", toSquare=" + g))
                    }
                }
            }, {
                key: "getGenerationPath",
                value: function () {
                    this.m_log("getGenerationPath", "");
                    for (var e = new Array, t = this.generationPath.length - 1; t >= 0; t--) {
                        var s = this.generationPath[t],
                            i = s.getSecond(),
                            r = s.getFirst();
                        this.m_log("getGenerationPath", "i:" + t + ", toSquare:" + i + ", fromSquare:" + i),
                        e.push(Move.create(i, r))
                    }
                    return this.m_log("getGenerationPath", "returnValue:" + e),
                    e
                }
            }, {
                key: "placePieceNumberOfTimes",
                value: function (e, t) {
                    for (var s = 0; s < t; s++) 
                        this.board.placePieceOnRandomSquare(e)
                    
                }
            }, {
                key: "m_log",
                value: function (e, t) {
                    log("[MapGenerator." + e + "] " + t)
                }
            }
        ]),
        e
    }(),
    _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    Move = function () {
        class e {
        constructor() {
          _classCallCheck(this, e),
            this.squares = new Array;
        }
      }
        return _createClass(e, [
            {
                key: "push",
                value: function (e) {
                    this.squares.length < 2 ? this.squares.push(e) : (this.squares.length = 0, this.squares.push(e))
                }
            },
            {
                key: "getFirst",
                value: function () {
                    return this.squares.length > 0 ? this.squares[0] : ""
                }
            },
            {
                key: "hasFirst",
                value: function () {
                    return this.squares.length > 0
                }
            },
            {
                key: "getSecond",
                value: function () {
                    return this.squares.length > 1 ? this.squares[1] : ""
                }
            }, {
                key: "reset",
                value: function () {
                    this.squares.length = 0
                }
            }, {
                key: "hasSecond",
                value: function () {
                    return this.squares.length > 1
                }
            }, {
                key: "toString",
                value: function () {
                    return this.squares.toString()
                }
            }
        ], [{
                key: "create",
                value: function (t, s) {
                    var i = new e;
                    return i.push(t),
                    i.push(s),
                    i
                }
            }]),
        e
    }(),
    _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    MoveGenerator = function () {
        class e {
        constructor(t) {
          _classCallCheck(this, e),
            this.board = t,
            this.rookGenerator = new RookMoveGenerator(t, this),
            this.bishopGenerator = new BishopMoveGenerator(t, this),
            this.knightGenerator = new KnightMoveGenerator(t, this);
        }
      }
        return _createClass(e, [
            {
                key: "getPossibleMoves",
                value: function (e) {
                    var t = e.getPiece();
                    return this.m_log("getPossibleMoves", e + ", pieceToMove=" + e.getPiece()),
                    e.isEmpty() ? new Array : this.isKing(t) ? this.getKingMoves(e) : this.isRook(t) ? this.rookGenerator.getRookMoves(e) : this.isBishop(t) ? this.bishopGenerator.getBishopMoves(e) : this.isQueen(t) ? this.bishopGenerator.getBishopMoves(e).concat(this.rookGenerator.getRookMoves(e)) : this.isKnight(t) ? this.knightGenerator.getKnightMoves(e) : void 0
                }
            },
            {
                key: "getPossibleCaptures",
                value: function (e) {
                    this.m_log("getPossibleCaptures", e);
                    for (var t = new Array, s = this.getPossibleMoves(e), i = 0; i < s.length; i++) {
                        var r = s[i];
                        this.m_log("getPossibleCaptures", "fromSquare=" + e + ", toSquare" + r),
                        ! r.isEmpty() && this.hasDifferentColor(e, r) && t.push(r)
                    }
                    return this.m_log("getPossibleCaptures", e + ", possibleCaptures=" + t + ", possibleMoves" + s),
                    t
                }
            },
            {
                key: "isKing",
                value: function (e) {
                    var t = "wk" == e || "bk" == e;
                    return this.m_log("isKing", e + ", result=" + t),
                    t
                }
            },
            {
                key: "isQueen",
                value: function (e) {
                    var t = "wq" == e || "bq" == e;
                    return this.m_log("isQueen", e + ", result=" + t),
                    t
                }
            }, {
                key: "isRook",
                value: function (e) {
                    var t = "wr" == e || "br" == e;
                    return this.m_log("isRook", e + ", result=" + t),
                    t
                }
            }, {
                key: "isBishop",
                value: function (e) {
                    var t = "wb" == e || "bb" == e;
                    return this.m_log("isBishop", e + ", result=" + t),
                    t
                }
            }, {
                key: "isKnight",
                value: function (e) {
                    var t = "wn" == e || "bn" == e;
                    return this.m_log("isKnight", e + ", result=" + t),
                    t
                }
            }, {
                key: "getKingMoves",
                value: function (e) {
                    this.m_log("getKingMoves", e);
                    for (var t = new Array, s = this.board.getNeighbors(e.getId()), i = 0; i < s.length; i++) {
                        var r = s[i];
                        (r.isEmpty() || this.hasDifferentColor(e, r)) && t.push(r)
                    }
                    return this.m_log("getKingMoves", e + ", kingMoves=" + t),
                    t
                }
            }, {
                key: "hasDifferentColor",
                value: function (e, t) {
                    var s = e.hasWhitePiece() && ! t.hasWhitePiece() || e.hasBlackPiece() && ! t.hasBlackPiece();
                    return this.m_log("hasDifferentColor", "fromSquare=" + e + ", toSquare=" + t + ", result=" + s),
                    s
                }
            }, {
                key: "m_log",
                value: function (e, t) {
                    log("[MoveGenerator." + e + "] " + t)
                }
            }
        ]),
        e
    }(),
    _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    MoveValidator = function () {
        class e {
        constructor(t, s, i) {
          _classCallCheck(this, e),
            this.board = t,
            this.move = s,
            this.generator = i;
        }
      }
        return _createClass(e, [
            {
                key: "validateMove",
                value: function (e, t) {
                    var s = e.getSelector() != t.getSelector();
                    return this.m_log("validate", "move=" + this.move + ", result=" + !1),
                    !! s && -1 != this.generator.getPossibleMoves(e).indexOf(t)
                }
            },
            {
                key: "validate",
                value: function () {
                    var e = this.move.getFirst(),
                        t = this.move.getSecond();
                    return this.validateMove(e, t)
                }
            },
            {
                key: "isKing",
                value: function (e) {
                    return "wk" == e || "bk" == e
                }
            },
            {
                key: "validateKingMove",
                value: function () {
                    var e = this.move.getFirst(),
                        t = this.move.getSecond();
                    return this.generator.getKingMoves(e).indexOf(t) > -1
                }
            }, {
                key: "isRook",
                value: function (e) {
                    return "wr" == e || "br" == e
                }
            }, {
                key: "validateRookMove",
                value: function () {
                    var e = this.move.getFirst();
                    this.move.getSecond();
                    return this.m_log("validateRookMove", "id=" + e.getId()),
                    !1
                }
            }, {
                key: "m_log",
                value: function (e, t) {
                    log("[MoveValidator." + e + "] " + t)
                }
            }
        ]),
        e
    }(),
    _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    Piece = function () {
        class e {
        constructor(t) {
          _classCallCheck(this, e),
            this.piece = "",
            this.selector = t;
        }
      }
        return _createClass(e, [
            {
                key: "remove",
                value: function () {
                    this.m_log("remove", this.piece),
                    this.getDom().removeClass(this.piece),
                    this.piece = ""
                }
            },
            {
                key: "getName",
                value: function () {
                    return this.piece
                }
            },
            {
                key: "add",
                value: function (e) {
                    this.m_log("add", "pieceName=" + e),
                    this.remove(),
                    this.piece = e,
                    this.getDom().addClass(e)
                }
            },
            {
                key: "isWhite",
                value: function () {
                    return !this.isEmpty() && "w" == this.piece.charAt(0)
                }
            }, {
                key: "isBlack",
                value: function () {
                    return this.isEmpty() || this.m_log("isBlack", "piece.charAt(0)=" + this.piece.charAt(0)),
                    !this.isEmpty() && "b" == this.piece.charAt(0)
                }
            }, {
                key: "isEmpty",
                value: function () {
                    return this.m_log("isEmpty", "this=" + this + ", result=" + this.piece == ""),
                    "" === this.piece
                }
            }, {
                key: "toString",
                value: function () {
                    return this.getName()
                }
            }, {
                key: "getDom",
                value: function () {
                    return $(this.selector)
                }
            }, {
                key: "m_log",
                value: function (e, t) {
                    log("[Piece." + e + "] " + t)
                }
            }
        ]),
        e
    }(),
    _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    RookMoveGenerator = function () {
        class e {
        constructor(t, s) {
          _classCallCheck(this, e),
            this.board = t,
            this.generator = s;
        }
      }
        return _createClass(e, [
            {
                key: "getRookMoves",
                value: function (e) {
                    var t = new Array;
                    return this.m_log("getRookMoves", e + ", rookMoves=" + t),
                    this.getTopSquares(e).concat(this.getBottomSquares(e)).concat(this.getLeftSquares(e)).concat(this.getRightSquares(e))
                }
            },
            {
                key: "getTopSquares",
                value: function (e) {
                    for (var t = new Array, s = e; this.board.hasTopSquare(s);) {
                        if (!(s = this.board.getTopSquare(s)).isEmpty()) {
                            this.generator.hasDifferentColor(e, s) && t.push(s);
                            break
                        }
                        t.push(s)
                    }
                    return t
                }
            },
            {
                key: "getBottomSquares",
                value: function (e) {
                    for (var t = new Array, s = e; this.board.hasBottomSquare(s);) {
                        if (!(s = this.board.getBottomSquare(s)).isEmpty()) {
                            this.generator.hasDifferentColor(e, s) && t.push(s);
                            break
                        }
                        t.push(s)
                    }
                    return t
                }
            },
            {
                key: "getLeftSquares",
                value: function (e) {
                    for (var t = new Array, s = e; this.board.hasLeftSquare(s);) {
                        if (!(s = this.board.getLeftSquare(s)).isEmpty()) {
                            this.generator.hasDifferentColor(e, s) && t.push(s);
                            break
                        }
                        t.push(s)
                    }
                    return t
                }
            }, {
                key: "getRightSquares",
                value: function (e) {
                    for (var t = new Array, s = e; this.board.hasRightSquare(s);) {
                        if (!(s = this.board.getRightSquare(s)).isEmpty()) {
                            this.generator.hasDifferentColor(e, s) && t.push(s);
                            break
                        }
                        t.push(s)
                    }
                    return t
                }
            }, {
                key: "m_log",
                value: function (e, t) {
                    log("[RookMoveGenerator." + e + "] " + t)
                }
            }
        ]),
        e
    }(),
    body_height,
    body_width,
    containing_dom,
    g_board;
$(document).ready(function () {
    var e = void 0,
        t = void 0;
    containing_dom = $("#game"),
    e = containing_dom.css("height"),
    t = containing_dom.css("width"),
    g_board = new Board(e, t),
    $("#generateButton").click(function () {
        var e = $("#nSteps").val(),
            t = $("#selectedPiece").val();
        g_board.reset(),
        g_board.generateMapForSelectedPiece(t, e)
    }),
    $("#repeatGame").click(function () {
        g_board.restartGame()
    }),
    $("#showSolution").click(function () {
        g_board.showSolution()
    }),
    $(window).resize(function () {
        e = containing_dom.css("height"),
        t = containing_dom.css("width"),
        g_board.resize(e, t)
    }),
    $(".closebtn").click(function () {
        e = containing_dom.css("height"),
        t = containing_dom.css("width"),
        $(".curtain").css("display", "none"),
        g_board.resize(e, t)
    }),
    $(".alert").click(function () {
        e = containing_dom.css("height"),
        t = containing_dom.css("width"),
        $(".curtain").css("display", "none"),
        $(".alert.success").css("display", "none"),
        $(".alert.failure").css("display", "none"),
        g_board.resize(e, t)
    }),
    $("input[type=button]").click(function () {
        $(".alert.success").css("display", "none"),
        $(".alert.failure").css("display", "none"),
        e = containing_dom.css("height"),
        t = containing_dom.css("width"),
        g_board.resize(e, t)
    })
});
var _createClass = function () {
        function e(e, t) {
            for (var s = 0; s < t.length; s++) {
                var i = t[s];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable =! 0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function (t, s, i) {
            return s && e(t.prototype, s),
            i && e(t, i),
            t
        }
    }(),
    Square = function () {
        class e {
        constructor(t, s, i) {
          _classCallCheck(this, e);
          var r = this;
          this.column = s,
            this.row = i,
            this.piece = new Piece(this.getSelector()),
            this.board = t,
            (s + i) % 2 == 1 ? this.getParentDom().append("<div id=" + this.getId() + ' class="square black"></div>') : this.getParentDom().append("<div id=" + this.getId() + ' class="square white"></div>'),
            this.getDom().click(function () {
              r.setClicked();
            });
        }
      }
        return _createClass(e, [
            {
                key: "setMarked",
                value: function () {
                    this.m_log("setMarked", this),
                    this.getDom().addClass("marked")
                }
            },
            {
                key: "removeMarked",
                value: function () {
                    this.getDom().removeClass("marked")
                }
            },
            {
                key: "hasWhitePiece",
                value: function () {
                    var e = this.piece.isWhite();
                    return this.m_log("hasWhitePiece", this + ", result=" + this.piece.isWhite()),
                    e
                }
            },
            {
                key: "hasBlackPiece",
                value: function () {
                    var e = this.piece.isBlack();
                    return this.m_log("hasBlackPiece", this + ", result=" + this.piece.isBlack()),
                    e
                }
            }, {
                key: "resize",
                value: function (e) {
                    this.size = getInt(e) / 8,
                    this.show()
                }
            }, {
                key: "show",
                value: function () {
                    var e = this.getParentDom().position();
                    this.m_log("show", "size=" + this.size);
                    this.m_log("show", "parent.top=" + e.top + "parent.left=" + e.left + ",parentMargin=10"),
                    this.getDom().css("top", e.top + 10 + this.size * this.row),
                    this.getDom().css("left", e.left + 10 + this.size * this.column),
                    this.getDom().css("height", this.size),
                    this.getDom().css("width", this.size)
                }
            }, {
                key: "getParentDom",
                value: function () {
                    return $("#board")
                }
            }, {
                key: "getDom",
                value: function () {
                    return $(this.getSelector())
                }
            }, {
                key: "isEqualTo",
                value: function (e) {
                    return this.m_log("isEmpty", "this:" + this + ", other:" + e),
                    this.column == getColumn(e.getId()) && this.row == getRow(e.getId())
                }
            }, {
                key: "getSelector",
                value: function () {
                    return "#" + this.getId()
                }
            }, {
                key: "getId",
                value: function () {
                    return "c" + this.column + "r" + this.row
                }
            }, {
                key: "toString",
                value: function () {
                    return this.getSelector()
                }
            }, {
                key: "isEmpty",
                value: function () {
                    var e = "" == this.piece.getName();
                    return this.m_log("isEmpty", "square:" + this + ", result:" + e + ", piece:" + this.piece),
                    e
                }
            }, {
                key: "addPiece",
                value: function (e) {
                    this.piece.add(e)
                }
            }, {
                key: "getPiece",
                value: function () {
                    return this.piece
                }
            }, {
                key: "remove",
                value: function () {
                    this.piece.remove()
                }
            }, {
                key: "setClicked",
                value: function () {
                    this.m_log("clicked", this.getSelector()),
                    this.board.squareClicked(this)
                }
            }, {
                key: "m_log",
                value: function (e, t) {
                    log("[Square." + e + "] " + t)
                }
            }
        ]),
        e
    }();
/*
     FILE ARCHIVED ON 07:31:05 Nov 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:07:24 Feb 09, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.189
  exclusion.robots.policy: 0.175
  RedisCDXSource: 2.694
  CDXLines.iter: 20.999 (3)
  LoadShardBlock: 103.854 (3)
  PetaboxLoader3.datanode: 140.528 (4)
  esindex: 0.018
  PetaboxLoader3.resolve: 136.809
  captures_list: 132.384
  load_resource: 224.411
*/
