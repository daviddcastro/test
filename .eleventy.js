module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({"src/images": "images"});

    return {
        dir: {
            input: "src/html",
            output: "dist",
            includes: "_includes",
            data: "_data",
            macros: "_macros"
        },
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    }
};