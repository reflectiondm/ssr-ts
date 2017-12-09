import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/app';
import * as path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, '../public/')));

app.get('*', (req, res) => {
    res.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
    res.write("<div id='content'>");  
    res.write(renderToString(<App />));
    res.write("</div>");
    res.write("<script src='/bundle.js'></script>");
    res.write("</body></html>");
    res.end();
});

app.listen(3000, () => console.log('app is listening on port 3000'));