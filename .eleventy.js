module.exports = function (eleventyConfig) {
    // Pass through the images folder
    eleventyConfig.addPassthroughCopy("src/images");

    // Pass through the CSS folder
    eleventyConfig.addPassthroughCopy("src/css");

    // Pass through PWA and Push files
    eleventyConfig.addPassthroughCopy("src/manifest.json");
    eleventyConfig.addPassthroughCopy("src/sw.js");
    eleventyConfig.addPassthroughCopy("src/OneSignalSDKWorker.js");

    // Format date filter for Nunjucks
    eleventyConfig.addFilter("formatDate", function (dateObj) {
        if (!dateObj) return "";
        return new Date(dateObj).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long"
        });
    });

    // Convert Date object to milliseconds timestamp
    eleventyConfig.addFilter("timestamp", function (dateObj) {
        if (!dateObj) return 0;
        return new Date(dateObj).getTime();
    });

    // Custom collection: Read all images from src/images/events
    const fs = require("fs");
    const path = require("path");

    eleventyConfig.addCollection("galleryImages", function () {
        const eventsImagesDir = path.join(__dirname, "src/images/events");
        let images = [];
        
        if (fs.existsSync(eventsImagesDir)) {
            // Function to recursively read directories
            function readImages(dir) {
                const files = fs.readdirSync(dir);
                for (const file of files) {
                    const fullPath = path.join(dir, file);
                    const stat = fs.statSync(fullPath);
                    if (stat.isDirectory()) {
                        readImages(fullPath);
                    } else if (file.match(/\.(webp|gif)$/i)) {
                        // Keep the original path relative to the site root for output
                        // e.g. src/images/events/2026/march/event/image.jpg -> /images/events/2026/march/event/image.jpg
                        const sitePath = fullPath.replace(path.join(__dirname, "src"), "");
                        
                        images.push({
                            url: sitePath,
                            alt: file.split(".")[0].replace(/[-_]/g, " "),
                            mtime: stat.mtime // Use modified time for sorting
                        });
                    }
                }
            }
            readImages(eventsImagesDir);
        }

        // Sort by most recent modified time (newest first)
        return images.sort((a, b) => b.mtime - a.mtime);
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
