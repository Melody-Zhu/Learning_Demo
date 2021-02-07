
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71dc21GJBhGDrvd35/GN3Eh', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // 这个属性引用了星星预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // Player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    // score label 的引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // 得分音效资源
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 获取地平面的 y 轴坐标
    this.groundY = this.ground.y + this.ground.height / 2; // 初始化计时器

    this.timer = 0;
    this.starDuration = 0; // 生成一个新的星星

    this.spawnNewStar(); // 初始化计分

    this.score = 0;
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition()); // 在星星脚本组件上保存 Game 对象的引用

    newStar.getComponent('Star').game = this; // 重置计时器，根据消失时间范围随机取一个值

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // 根据屏幕宽度，随机得到一个星星 x 坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // 返回星星坐标

    return cc.v2(randX, randY);
  },
  start: function start() {},
  update: function update(dt) {
    // 每帧更新计时器，超过限度还没有生成新的星星
    // 就会调用游戏失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gainScore: function gainScore() {
    this.score += 1; // 更新 scoreDisplay Label 的文字

    this.scoreDisplay.string = 'Score: ' + this.score; // 播放得分音效

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    // 停止 Player 节点的跳跃动作
    this.player.stopAllActions(); // 重新加载场景 game

    cc.director.loadScene('game');
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsIm5ld1N0YXIiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsIk1hdGgiLCJyYW5kb20iLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsInYyIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImdhbWVPdmVyIiwiZ2FpblNjb3JlIiwic3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwic3RvcEFsbEFjdGlvbnMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBQ1IsaUJBQVMsSUFERDtBQUVSQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGRCxLQUZKO0FBT1I7QUFDQUMsSUFBQUEsZUFBZSxFQUFFLENBUlQ7QUFTUkMsSUFBQUEsZUFBZSxFQUFFLENBVFQ7QUFXUjtBQUNBQyxJQUFBQSxN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QyxDQUhtQixDQUtuQjs7QUFDQXZCLElBQUFBLEVBQUUsQ0FBQzhDLFdBQUgsQ0FBZUMsVUFBZixDQUEwQixLQUFLakMsVUFBL0IsRUFBMkMsS0FBM0M7QUFDSCxHQXBHSTtBQXNHTDZCLEVBQUFBLFFBQVEsRUFBRSxvQkFBWTtBQUNsQjtBQUNBLFNBQUtoQyxNQUFMLENBQVlxQyxjQUFaLEdBRmtCLENBSWxCOztBQUNBaEQsSUFBQUEsRUFBRSxDQUFDaUQsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0g7QUE1R0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIOi/meS4quWxnuaAp+W8leeUqOS6huaYn+aYn+mihOWItui1hOa6kFxyXG4gICAgICAgIHN0YXJQcmVmYWI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5pif5pif5Lqn55Sf5ZCO5raI5aSx5pe26Ze055qE6ZqP5py66IyD5Zu0XHJcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxyXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjogMCxcclxuXHJcbiAgICAgICAgLy8g5Zyw6Z2i6IqC54K577yM55So5LqO56Gu5a6a5pif5pif55Sf5oiQ55qE6auY5bqmXHJcbiAgICAgICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBQbGF5ZXIg6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXHJcbiAgICAgICAgcGxheWVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gXHJcbiAgICAgICAgLy8gc2NvcmUgbGFiZWwg55qE5byV55SoXHJcbiAgICAgICAgc2NvcmVEaXNwbGF5OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8g5b6X5YiG6Z+z5pWI6LWE5rqQXHJcbiAgICAgICAgc2NvcmVBdWRpbzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOiOt+WPluWcsOW5s+mdoueahCB5IOi9tOWdkOagh1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQvMjtcclxuICAgICAgICAvLyDliJ3lp4vljJborqHml7blmahcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgLy8g55Sf5oiQ5LiA5Liq5paw55qE5pif5pifXHJcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcclxuICAgICAgICAvLyDliJ3lp4vljJborqHliIZcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25OZXdTdGFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDkvb/nlKjnu5nlrprnmoTmqKHmnb/lnKjlnLrmma/kuK3nlJ/miJDkuIDkuKrmlrDoioLngrlcclxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcbiAgICAgICAgLy8g5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py65L2N572uXHJcbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcclxuICAgICAgICAgLy8g5Zyo5pif5pif6ISa5pys57uE5Lu25LiK5L+d5a2YIEdhbWUg5a+56LGh55qE5byV55SoXHJcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcclxuICAgICAgICAvLyDph43nva7orqHml7blmajvvIzmoLnmja7mtojlpLHml7bpl7TojIPlm7Tpmo/mnLrlj5bkuIDkuKrlgLxcclxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TmV3U3RhclBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHJhbmRYID0gMDtcclxuICAgICAgICAvLyDmoLnmja7lnLDlubPpnaLkvY3nva7lkozkuLvop5Lot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoQgeSDlnZDmoIdcclxuICAgICAgICB2YXIgcmFuZFkgPSB0aGlzLmdyb3VuZFkgKyBNYXRoLnJhbmRvbSgpICogdGhpcy5wbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5qdW1wSGVpZ2h0ICsgNTA7XHJcbiAgICAgICAgLy8g5qC55o2u5bGP5bmV5a695bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pifIHgg5Z2Q5qCHXHJcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGgvMjtcclxuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xyXG4gICAgICAgIC8vIOi/lOWbnuaYn+aYn+WdkOagh1xyXG4gICAgICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyDmr4/luKfmm7TmlrDorqHml7blmajvvIzotoXov4fpmZDluqbov5jmsqHmnInnlJ/miJDmlrDnmoTmmJ/mmJ9cclxuICAgICAgICAvLyDlsLHkvJrosIPnlKjmuLjmiI/lpLHotKXpgLvovpFcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+IHRoaXMuc3RhckR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FpblNjb3JlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSArPSAxO1xyXG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXHJcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nID0gJ1Njb3JlOiAnICsgdGhpcy5zY29yZTtcclxuXHJcbiAgICAgICAgLy8g5pKt5pS+5b6X5YiG6Z+z5pWIXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sIGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2FtZU92ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyDlgZzmraIgUGxheWVyIOiKgueCueeahOi3s+i3g+WKqOS9nFxyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BBbGxBY3Rpb25zKCk7IFxyXG5cclxuICAgICAgICAvLyDph43mlrDliqDovb3lnLrmma8gZ2FtZVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xyXG4gICAgfVxyXG59KTtcclxuIl19