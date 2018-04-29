var formResponses = FormApp.getActiveForm().getResponses();
var formResponse = formResponses[formResponses.length-1];
var respostas = formResponse.getItemResponses();

var emailSolicitante = respostas[0];

var planilha =  SpreadsheetApp.openById('Token from your spreadsheet');
var sheet = planilha.getActiveSheet();

function myFunction() {
  var row = sheet.getLastRow();
  var lastRow = sheet.getLastRow()-1;
  sheet.getRange(row, 3).setValue(sheet.getRange(lastRow, 3).getValue() + 1);  
  MailApp.sendEmail(emailSolicitante.getResponse(), "Protocolo", "Seu número de protocolo é " + sheet.getRange(row,3).getValue() + ". Obrigado!!");
}
