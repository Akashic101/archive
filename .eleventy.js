const fileList = require('eleventy-plugin-file-list');

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('files/');
	eleventyConfig.addPassthroughCopy("src/bundle.css");

    eleventyConfig.addPlugin(fileList, { targetFolder: 'files', doRecurse: true });

    eleventyConfig.addFilter("localDate", (dateObj) => {
        return dateObj.toLocaleDateString('en-EN');
      });

    eleventyConfig.addFilter("localDate", (dateObj) => {
        return dateObj.toLocaleDateString('en-EN');
      });

    eleventyConfig.addFilter('filterByYear', function(files, year) {
        return files.filter(file => file.name.includes(year));
    });

    eleventyConfig.addFilter("filterByDecade", (files, decade) => {
        // Calculate the start and end years of the decade
        const startYear = decade - (decade % 10);
        const endYear = startYear + 9;
        
        // Filter files by decade
        return files.filter(file => {
          const year = parseInt(file.name.match(/\d{4}/)[0]); // Extract year from file name
          return year >= startYear && year <= endYear;
        });
      });

    return {
        dir: {
            input: 'src',
        },
    };
};
