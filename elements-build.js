const fs = require('fs-extra');  
const concat = require('concat');

(async function build() {
    const files = [
        './dist/beachhouseapp/runtime-es5.js',
        './dist/beachhouseapp/polyfills-es5.js',
        './dist/beachhouseapp/scripts.js',
        './dist/beachhouseapp/main-es5.js'
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/components.js');
    await fs.copyFile(
        './dist/beachhouseapp/styles.css',
        './node_modules/@angular/material/prebuilt-themes/indigo-pink.css',
        'elements/styles.css'
    );
})();
