const StyleDictionary = require("style-dictionary");

module.exports = {
    source: ['tokens/**/*.json'],
    transformer: {
        myTransform: {
            type: 'name',
            transformer: (token) => token.path.join('_').toUpperCase()
        }
    },
    format: {
        myFormat: ({ dictionary }) => {
            return dictionary.allTokens.map((token) => `${token.name}: ${token.value}`).join('\n');
        }
    },
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'build/css/',
            files: [
                {
                    destination: '_variables.css',
                    format: 'css/variables'
                }
            ]

        }
    }
}

StyleDictionary.registerTransform({
    name: 'typography/shorthand',
    type: 'value',
    transitive: true,
    matcher: token => token.type === 'typography',
    transformer: (token) => {
        const { value } = token
        return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`
    }
})