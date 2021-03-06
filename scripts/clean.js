const fs = require('fs-extra');
const path = require('path');

const subjects = ['node_modules','__DOCS__','__DEV__'];

function cleanDirectory(dir='.') { 
    fs.readdirSync(dir).forEach(file => {
        if(file === 'docs_src') return;
        const filepath = path.join(dir,file);
        if(subjects.includes(file)) {
            console.log(filepath, 'removed');
            fs.removeSync(filepath)
        }else if(fs.statSync(filepath).isDirectory()){
            cleanDirectory(filepath)
        }
    })
}

fs.removeSync('./template/src/theme');
cleanDirectory();
