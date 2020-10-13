import fs from 'fs';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV === 'development';

app.get('/', (req, res) => {
  fs.readFile('./public/index.html', function(err, data) {
    if (err) {
      res.sendStatus(404);
    } else {
      const html = (
        isDevelopment
      ) ? (
          data.toString().replace(
            '</body>',
            `<script>
            document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
            ':35729/livereload.js?snipver=1"></' + 'script>')
          </script></body>`
          )
      ) : (
        data.toString()
      );

      res.set('Content-Type', 'text/html');
      res.send(html);
    }
  });
});

app.use(express.static('public'));

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
