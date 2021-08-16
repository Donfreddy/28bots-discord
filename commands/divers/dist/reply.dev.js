"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _require = require('discord.js-commando'),
    Command = _require.Command;

module.exports =
/*#__PURE__*/
function (_Command) {
  _inherits(ReplyCommand, _Command);

  function ReplyCommand(client) {
    _classCallCheck(this, ReplyCommand);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReplyCommand).call(this, client, {
      name: 'reply',
      memberName: 'reply',
      group: 'divers',
      description: 'Reply.',
      clientPermissions: ['SEND_MESSAGES'],
      // le bot doit avoir la permission d'envoyer des messages
      throttling: {
        usages: 2,
        duration: 10
      },
      args: [{
        key: 'text',
        prompt: 'Quel texte voulez-vous que le bot répondre ?',
        type: 'string'
      } // Vérifier la taille de la chaîne de caractère
      // {
      //   key: "question",
      //   prompt: "Quelle est la question ?",
      //   type: "string",
      //   validate: (question) => {
      //     if (question.length < 101 && question.length > 11) return true;
      //     return "La question doit avoir au minimum 10 caractères, et maximum 100.";
      //   },
      // },
      // Valider une URL :
      // {
      //   key: "url",
      //   prompt: "Which image url do you want to share?",
      //   type: "string",
      //   validate: (url) => {
      //     return /^(?:(?:(?:https?|http):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      //       url
      //     );
      //   },
      // },
      // Valider une URL du workshop STEAM
      // {
      //   key: "url",
      //   prompt: "Quelle URL du workshop STEAM ?",
      //   type: "string",
      //   validate: (url) => {
      //     return /^https:\/\/steamcommunity.com\/sharedfiles\/filedetails\/\?id=[0-9]{2,15}(&.+)?$/i.test(
      //       url
      //     );
      //   },
      // },
      ]
    }));
  }

  _createClass(ReplyCommand, [{
    key: "run",
    value: function run(msg, _ref) {
      var text;
      return regeneratorRuntime.async(function run$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              text = _ref.text;
              msg.say("Votre texte est: ".concat(text));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return ReplyCommand;
}(Command);