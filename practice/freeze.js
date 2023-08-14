const project = {
  name: "CODEPREP v1.0"
}
console.log(project.name);

// オブジェクトのプロジェクトは変更できる
project.name = "CODEPREP v2.0";
console.log(project.name);

// オブジェクト自体の参照は変更できない
project = {
  name: "CODEPREP v3.0"
}
console.log(project.name);