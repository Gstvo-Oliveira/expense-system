import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, and, address, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, input, textarea, select {
        background:transparent;
        border:0;
        font-size:100%;
        font-family: monospace;
        margin:0;
        outline:0;
        padding:0;
        vertical-align:baseline;
    }
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display:block;
    }
    body {
        line-height:1;
    }
    abbr[title], dfn[title] {
        border-bottom:1px dotted;
        cursor:help;
    }
    /*blockquote, q {
        quotes:none;
    }
    blockquote:before, blockquote:after, q:before, q:after {
        content:none;
    }*/
    del {
        text-decoration:line-through;
    }
    hr {
        background:transparent;
        border:0;
        clear:both;
        color:transparent;
        height:1px;
        margin:0;
        padding:0;
    }
    mark {
        background-color:#ffffb3;
        font-style:italic
    }
    input, select {
        vertical-align:middle;
    }
    ins {
        background-color:red;
        color:white;
        text-decoration:none;
    }
    ol, ul {
        list-style:none;
    }
    table {
        border-collapse:collapse;
        border-spacing:0;
    }
}

`