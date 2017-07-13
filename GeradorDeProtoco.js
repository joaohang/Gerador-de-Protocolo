var formResponses = FormApp.getActiveForm().getResponses();
var formResponse = formResponses[formResponses.length-1];
var respostas = formResponse.getItemResponses();

var emailSolicitante = respostas[0];

var planilha =  SpreadsheetApp.openById('1lyjNBbnlH3vmI5uCcoQJZUhyx_yFfQsXfyOXT7_sqqw');
var sheet = planilha.getActiveSheet();

function myFunction() {
  // retorna a última linha com dados e escreve texto na coluna 1
  var row = sheet.getLastRow();
  var soRow = sheet.getLastRow()-1;
  sheet.getRange(row, 3).setValue(sheet.getRange(soRow, 3).getValue() + 1);  
  MailApp.sendEmail(emailSolicitante.getResponse(), "Protocolo", "Seu número de protocolo é " + sheet.getRange(row,3).getValue() + ". Obrigado!!");
}
