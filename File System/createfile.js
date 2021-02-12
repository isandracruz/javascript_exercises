// This Javascript program create a file and permit that the user can add new content to file.
const fs = require('fs');

function CreateFile(){
    fs.writeFile('C:/Users/familia/Desktop/JSfirstFile.txt', 'This is my first file create with Javascript', (err) => {
        if(err){
            console.log(err);
            process.exit(); 
        }    
        console.log('Archivo creado\n');
        AskAddText();                                  
    });
};

function AskAddText(){ 
    console.log("Do you want write in my first file? (Y/N):");        
    let stdin = process.openStdin();  

    stdin.once('data', (chunk) => {   
        let value = chunk.toString('utf8');
        let lines = value.split("\n"); 

        if(lines[0] == 'Y\r' || lines[0] == 'y\r'){ 
            AddText();
        } 
        else {
            process.exit(); 
        }                          
    }); 
}

function AddText(){
    console.log("\nPlease enter the content:") 
    let stdin = process.openStdin();

    stdin.once('data', (key) => {        
        let data = `\r\n ${key.toString('utf8')}`;
        fs.writeFile('C:/Users/familia/Desktop/JSfirstFile.txt', data,{ encoding:'utf8', flag:'a'}, (err) => {
            if(err){
                console.log(err);
                process.exit();                       
            }
            console.log('\nArchivo texto agregado');
            ReadFile();
        });
    });
}

function ReadFile(){
    fs.readFile('C:/Users/familia/Desktop/JSfirstFile.txt', {encoding:'utf8'},(err, data) => {
        if(err){
            console.log(err);
            process.exit();
        }
        console.log("\nThe content of file is:");
        console.log(data);
        AskAddText()
    });
}

CreateFile();



