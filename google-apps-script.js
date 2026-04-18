var ANALYTICS_SHEET_ID = "13j2v4oyU48czarSRjBcZxW513ZYKPpbt7C8m1ue6RgU";

function doPost(e) {
  try {
    // Works with both application/json and text/plain (sendBeacon)
    var raw = e.postData.contents;
    var data = JSON.parse(raw);

    if (data.type === "pageview") {
      writeAnalytics(data);
    } else {
      writeWaitlist(data);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ success: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: err.toString() }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function writeWaitlist(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("Waitlist");
  if (!sheet) {
    sheet = ss.insertSheet("Waitlist");
    sheet.appendRow(["Timestamp", "Name", "Mobile", "Source"]);
    sheet
      .getRange(1, 1, 1, 4)
      .setFontWeight("bold")
      .setBackground("#1A3320")
      .setFontColor("#ffffff");
    [200, 160, 140, 180].forEach((w, i) => sheet.setColumnWidth(i + 1, w));
  }
  sheet.appendRow([
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    data.name || "",
    data.mobile || "",
    data.source || "Yeni Landing Page",
  ]);
}

function writeAnalytics(data) {
  if (data.event === "exit") return;
  const ss = SpreadsheetApp.openById(ANALYTICS_SHEET_ID);
  let sheet = ss.getSheetByName("Analytics");
  if (!sheet) {
    sheet = ss.insertSheet("Analytics");
    sheet.appendRow([
      "Timestamp",
      "Session ID",
      "IP Address",
      "Device",
      "Browser",
      "Screen",
      "Referrer",
      "Page",
    ]);
    sheet
      .getRange(1, 1, 1, 8)
      .setFontWeight("bold")
      .setBackground("#0F1D8A")
      .setFontColor("#ffffff");
    [200, 160, 130, 100, 110, 110, 200, 100].forEach((w, i) =>
      sheet.setColumnWidth(i + 1, w),
    );
  }
  sheet.appendRow([
    new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    data.sessionId || "",
    data.ip || "",
    data.device || "",
    data.browser || "",
    data.screen || "",
    data.referrer || "direct",
    data.page || "/",
  ]);
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "Yeni webhook live 🌿" }),
  ).setMimeType(ContentService.MimeType.JSON);
}
