var path = require( 'path' );

exports.input = __dirname;
exports.output = path.resolve(__dirname, './release');


exports.getProcessors = function () {


    return [
        new LessCompiler( {
            files: [
                'css/main.less',
                'css/preview.less'
            ],
            compileOptions: {
                relativeUrls: false
            }
        }),


        new Html2JsCompiler({
            mode: 'default',
            files: ['src/fonteditor/template/**/*.tpl'],
            extnames: ['tpl'],
            combine: true
        }),

        new ModuleCompiler( {
            files: [
                'src/fonteditor/main.js'
            ],
            configFile: './module.conf'
        }),

        new Html2JsCompiler({
            mode: 'default',
            files: ['src/fonteditor/template/**/*.tpl'],
            extnames: ['tpl']
        }),

        new JsCompressor({
            files: [
                'src/fonteditor/main.js',
                'dep/**/*.js',
            ]
        }),

        // 清除冗余文件，比如`less`
        new OutputCleaner({
            files: [
                'css/common/**',
                'src/common/**',
                'src/editor/**',
                'src/graphics/**',
                'src/math/**',
                'src/render/**',
                'src/fonteditor/*/**',
                'dep/fonteditor-core/**',
                '*.tpl'
            ]
        })
    ];
};

exports.exclude = [
    ".svn",
    "*.conf",
    "*.sh",
    "*.bat",
    "*.md",
    "demo",
    "agent",
    "mock",
    "test",
    "unittest",
    "edp-*",
    "output",
    ".DS_Store",
    ".gitignore",
    "package.json",
    "node",
    "node_modules",
    "build"
];

exports.injectProcessor = function ( processors ) {
    for ( var key in processors ) {
        global[ key ] = processors[ key ];
    }
};

