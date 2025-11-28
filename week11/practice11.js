async function fetchData() {
  const dialog = document.querySelector(".ecors-dialog");
  dialog.setAttribute("closedby","none")
  if (dialog.open) {
    dialog.close();
 }
  try {
    const response = await fetch(
      "https://bscit.sit.kmutt.ac.th/intproj25/nw1/itb-ecors/api/v1/study-plans"    );
    const data = await response.json();

    const tbody = document.querySelector(".career-table");

    console.log(data);

    data.forEach((item) => {
      const row = document.createElement("tr");
      row.setAttribute("class", "ecors-row");
      row.innerHTML = `
    <td class="ecors-id">${item.id}</td>
    <td class="ecors-planCode">${item.planCode}</td>
    <td class="ecors-nameEng">${item.nameEng}</td>
    <td class="ecors-nameTh">${item.nameTh}</td>
  `;
      tbody.appendChild(row);
    });

    console.log(data);
  } catch (error) {
    console.error("Fetch error:", error);
    showModal();
    return [];
  }
}