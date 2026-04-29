function analyze() {
  let resumeText = document.getElementById("resume").value.toLowerCase();

  let keywords = ["html", "css", "javascript", "react", "node", "mongodb"];

  let found = [];
  let missing = [];

  for (let i = 0; i < keywords.length; i++) {
    if (resumeText.includes(keywords[i])) {
      found.push(keywords[i]);
    } else {
      missing.push(keywords[i]);
    }
  }

  document.getElementById("result").innerHTML =
    "<h3>✅ Found: " + found.join(", ") + "</h3>" +
    "<h3>❌ Missing: " + missing.join(", ") + "</h3>";
}