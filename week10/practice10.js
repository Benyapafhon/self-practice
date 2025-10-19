document.addEventListener("DOMContentLoaded", () => {
      const bgColor = document.getElementById("bgColor");
      const fontColor = document.getElementById("fontColor");
      const fontSize = document.getElementById("fontSize");

      const savedBg = localStorage.getItem("bgColor") || "#ffffff";
      const savedFont = localStorage.getItem("fontColor") || "#000000";
      const savedSize = localStorage.getItem("fontSize") || "medium";

      bgColor.value = savedBg;
      fontColor.value = savedFont;
      fontSize.value = savedSize;

      applySettings(savedBg, savedFont, savedSize);

      document.getElementById("saveBtn").addEventListener("click", () => {
        localStorage.setItem("bgColor", bgColor.value);
        localStorage.setItem("fontColor", fontColor.value);
        localStorage.setItem("fontSize", fontSize.value);
        applySettings(bgColor.value, fontColor.value, fontSize.value);
        alert("บันทึกสำเร็จแล้วจ้า");
      });

      document.getElementById("resetBtn").addEventListener("click", () => {
        localStorage.clear();
        bgColor.value = "#ffffff";
        fontColor.value = "#000000";
        fontSize.value = "medium";
        applySettings("#ffffff", "#000000", "medium");
        alert("รีเซ็ตค่าทั้งหมดแล้วจ้า");
      });

      function applySettings(bg, font, size) {
        document.body.style.backgroundColor = bg;
        document.body.style.color = font;
        switch (size) {
          case "small":
            document.body.style.fontSize = "12px";
            break;
          case "medium":
            document.body.style.fontSize = "16px";
            break;
          case "large":
            document.body.style.fontSize = "22px";
            break;
        }
      }});