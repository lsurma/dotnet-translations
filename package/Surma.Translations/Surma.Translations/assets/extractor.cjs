const fs = require('fs');
const readline = require('readline');

function readFileLineByLine(filePath) {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const names = [];
    rl.on('line', (line) => {
        const isDefinitionLine = line.includes('Definition:');
        
        if(isDefinitionLine) {
            let definitionName = line.replace("export declare const ", "");
            definitionName = definitionName.substring(0, definitionName.indexOf(":"));
            names.push(definitionName);
        }
    });

    rl.on('close', () => {
        console.log('File reading completed.');
        
       const str = names.map(n => {
            return n + ", ";
        }).join('');
        console.log(str)
    });
}

// Replace 'path/to/your/file.txt' with the actual file path
readFileLineByLine('node_modules/@fluentui/web-components/dist/web-components.d.ts');