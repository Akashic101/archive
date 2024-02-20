const fileList = require('eleventy-plugin-file-list');

function extractAndParseDate(str) {
  // Regular expression to match the date pattern
  const dateRegex = /(\d{2})_(\d{2})_(\d{4})/;

  // Extracting the date parts using match
  const matches = str.match(dateRegex);

  if (matches && matches.length === 4) {
    // Extracting day, month, and year from the matched groups
    const day = parseInt(matches[1], 10);
    const month = parseInt(matches[2], 10);
    const year = parseInt(matches[3], 10);

    return {
      day: day,
      month: month,
      year: year
    };

  } else {
    return null; // Return null if date pattern is not found
  }
}

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('files/');
  eleventyConfig.addPassthroughCopy("src/bundle.css");
  eleventyConfig.addPassthroughCopy("src/assets/");

  eleventyConfig.addPlugin(fileList, { targetFolder: 'files', doRecurse: true });

  eleventyConfig.addFilter("localDate", (dateObj) => {
    return dateObj.toLocaleDateString('en-EN');
  });

  eleventyConfig.addFilter("localDate", (dateObj) => {
    return dateObj.toLocaleDateString('en-EN');
  });

  eleventyConfig.addFilter("filterByName", function (files, name) {
    return files.filter(file => file.name.includes(name));
  });

  eleventyConfig.addFilter("filterByDay", function (fileList, day) {
    // Filter fileList based on the month extracted from the filename
    return fileList.filter(item => {
      const itemDate = extractAndParseDate(item.name); // Assuming 'name' contains the filename
      return itemDate && itemDate.day === day;
    });
  });

  eleventyConfig.addFilter("filterByMonth", function (fileList, month) {
    // Filter fileList based on the month extracted from the filename
    return fileList.filter(item => {
      const itemDate = extractAndParseDate(item.name); // Assuming 'name' contains the filename
      return itemDate && itemDate.month === month;
    });
  });

  eleventyConfig.addFilter("filterByYear", function (fileList, month) {
    // Filter fileList based on the month extracted from the filename
    return fileList.filter(item => {
      const itemDate = extractAndParseDate(item.name); // Assuming 'name' contains the filename
      return itemDate && itemDate.year === year;
    });
  });

  eleventyConfig.addFilter("filterByDecade", function (fileList, decade) {
    // Filter fileList based on the decade extracted from the filename
    return fileList.filter(item => {
      const itemDate = extractAndParseDate(item.name); // Assuming 'name' contains the filename
      if (itemDate) {
        // Extract decade from the year
        const itemDecade = Math.floor(itemDate.year / 10) * 10;
        return itemDecade === decade;
      }
      return false;
    });
  });

  return {
    dir: {
      input: 'src',
    },
  };
};
