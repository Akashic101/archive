# Blog

<img src="./src/assets/cover.png" alt="Archive's logo" align="right" width="80" height="80">

This is the repo of my personal archive powered by 11ty. You can access it under ~~https://archive.davidmoll.net~~ (WIP)

## How It Works

1. During build eleventy recursively scans the folder `files`
2. All files get grouped by decade and displayed on the website

## Patch Notes

**Version 1.0.0**
- Updated layout
- Created day, month, year and decade-filters
- Created seperate pages for content
- Added Paderborner Volksblatt (01.1849-04.1849)
<details>
  <summary>Previous versions</summary>

**Version 0.0.1**
- Added index
- Added ikea-catalog (1950-2000)
</details> 

## Roadmap

- More files
- Better design (pagination & search)

## Installation

- Clone this repo with `git clone https://github.com/akashic101/archive`
- Navigate into this repo with `cd archive`
- Install all dependencies with `npm install`
- Build the site with `npx @11ty/eleventy` or serve it with `npx @11ty/eleventy --serve`
- Navigate to http://localhost:8080 to see the website
