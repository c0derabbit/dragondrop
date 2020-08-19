module.exports = function({
  content,
  title = '',
  description = '',
}) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="${description}">
        <meta name="theme-color" content="#fafafa">
        <meta property="og:image" content="/favicon.png">
        <link rel="shortcut icon" href="/favicon.ico">
        <link rel="apple-touch-icon" href="/favicon.png">
        <link rel="manifest" href="/nf.webmanifest">
        <title>${title}</title>
        <link rel="stylesheet" href="/main.bundle.css" />
      </head>
      <body>
        <div class="container mx-auto">
          ${content}
        </div>
        <script type="text/javascript">
          (function() {
            if('serviceWorker' in navigator)
              navigator.serviceWorker.register('/sw.js');
          })()
        </script>
        <script src="/lazyload.js"></script>
      </body>
    </html>
  `
}
