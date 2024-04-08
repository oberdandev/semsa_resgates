import * as ExcelJS   from 'exceljs';

const workbook = new ExcelJS.Workbook();

const sheet = workbook.addWorksheet("aba 1");

sheet.columns = [
  {header: 'nome', key: 'nome'},
  {header: 'email', key: 'email'},
  {header: 'telefone', key: 'telefone'},
  {header: 'genero', key: 'genero'},
  {header: 'funcao', key: 'funcao'}
];

for(let i)