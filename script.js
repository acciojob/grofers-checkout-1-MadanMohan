const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => { 
  // 1. Get all price elements
  const priceElements = document.querySelectorAll(".price");

  // 2. Calculate total
  let total = 0;
  priceElements.forEach((el) => {
    total += Number(el.textContent.trim());
  });

  // 3. Create a new row
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.id = "ans"; // Optional: for testing
  totalCell.textContent = "Total: " + total;

  newRow.appendChild(totalCell);

  // 4. Append to table
  const table = document.querySelector("table");
  table.appendChild(newRow);
};
 
getSumBtn.addEventListener("click", getSum);
