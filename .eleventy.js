module.exports = function (eleventyConfig) {
    // Pass through the images folder
    eleventyConfig.addPassthroughCopy("src/images");

    // Pass through the CSS folder
    eleventyConfig.addPassthroughCopy("src/css");

    // Format date filter for Nunjucks
    eleventyConfig.addFilter("formatDate", function (dateObj) {
        if (!dateObj) return "";
        return new Date(dateObj).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long"
        });
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_includes"
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
