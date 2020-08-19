import "alpinejs";
import CodeMirror from "codemirror";

// Styles
import "normalize.css/normalize.css";
import "codemirror/lib/codemirror.css";
import "~/main.css";

// Themes
import "codemirror/theme/nord.css";

// Addons
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/edit/trailingspace";

import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/foldgutter";

import "codemirror/addon/hint/css-hint";
import "codemirror/addon/hint/html-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/hint/xml-hint";

import "codemirror/addon/mode/simple";

import "codemirror/addon/dialog/dialog.css";
import "codemirror/addon/dialog/dialog";

import "codemirror/addon/scroll/annotatescrollbar";
import "codemirror/addon/scroll/scrollpastend";
import "codemirror/addon/scroll/simplescrollbars.css";
import "codemirror/addon/scroll/simplescrollbars";

import "codemirror/addon/search/jump-to-line";
import "codemirror/addon/search/match-highlighter";
import "codemirror/addon/search/matchesonscrollbar.css";
import "codemirror/addon/search/matchesonscrollbar";
import "codemirror/addon/search/search";
import "codemirror/addon/search/searchcursor";

// Modes
import "codemirror/mode/brainfuck/brainfuck";
import "codemirror/mode/clike/clike";
import "codemirror/mode/css/css";
import "codemirror/mode/dart/dart";
import "codemirror/mode/diff/diff";
import "codemirror/mode/dockerfile/dockerfile";
import "codemirror/mode/erlang/erlang";
import "codemirror/mode/gfm/gfm";
import "codemirror/mode/go/go";
import "codemirror/mode/handlebars/handlebars";
import "codemirror/mode/htmlembedded/htmlembedded";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/http/http";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/julia/julia";
import "codemirror/mode/lua/lua";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/nginx/nginx";
import "codemirror/mode/perl/perl";
import "codemirror/mode/php/php";
import "codemirror/mode/properties/properties";
import "codemirror/mode/protobuf/protobuf";
import "codemirror/mode/pug/pug";
import "codemirror/mode/python/python";
import "codemirror/mode/rpm/rpm";
import "codemirror/mode/ruby/ruby";
import "codemirror/mode/rust/rust";
import "codemirror/mode/sass/sass";
import "codemirror/mode/shell/shell";
import "codemirror/mode/smarty/smarty";
import "codemirror/mode/sql/sql";
import "codemirror/mode/swift/swift";
import "codemirror/mode/toml/toml";
import "codemirror/mode/twig/twig";
import "codemirror/mode/vue/vue";
import "codemirror/mode/xml/xml";
import "codemirror/mode/yaml/yaml";

// @ts-ignore
window.editor = CodeMirror.fromTextArea(<HTMLTextAreaElement> document.getElementById("editor")!, {
    mode: "text/plain",
    theme: "nord",

    indentUnit: 4,
    smartIndent: true,
    tabSize: 4,
    indentWithTabs: true,

    lineWrapping: true,
    lineNumbers: true,

    foldGutter: true,
    fixedGutter: true,

    scrollbarStyle: "overlay",
    coverGutterNextToScrollbar: false,

    readOnly: false,

    showCursorWhenSelecting: false,

    autofocus: false,

    spellcheck: true,
    autocorrect: false,
    autocapitalize: false,
    lint: false,

    autoCloseBrackets: true,
    matchBrackets: true,
});

// Make tabs indent with 4 spaces.
/*editor.setOption("extraKeys", {
    Tab: function(cm) {
        var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
        cm.replaceSelection(spaces);
    },
});*/
