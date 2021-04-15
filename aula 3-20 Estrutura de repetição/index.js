const google = ['Luiz', 'Otávio', 'Henrique  '];
for (let i in google){
    console.log(i); 
}
const gitExtension = vscode.extensions.getExtension<GitExtension>('vscode.git').exports;
const git = gitExtension.getAPI(1);
