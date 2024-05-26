const marked=require('marked');
const sanitizeHtmlLibrary=require('sanitize-html');
const TurndownService = require('turndown')

function sanitizeMarkdownContent(markdownContent){
    console.log("markdowncontent",markdownContent)
    // 1. convert markdown to html
    const convertedHtml=marked.parse(markdownContent);
    console.log("convertedHtml",convertedHtml)

    //2. Sanitize Html
    const sanitizedHtml=sanitizeHtmlLibrary(convertedHtml,{
        allowedTags:sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });
    console.log("sanitizedHtml",sanitizedHtml);

    //3. convert Sanitize html back to markdowm
    var turndownService = new TurndownService();
    var markdown = turndownService.turndown(sanitizedHtml);
    console.log("markdown",markdown)


    return markdown;
}

// const input=`
// # Hello World

// ### this is a markdown

// - something

// <script>alert('wohoo')</script>

// [link](www.google.com)
// `;
// sanitizeMarkdownContent(input);

module.exports=sanitizeMarkdownContent;