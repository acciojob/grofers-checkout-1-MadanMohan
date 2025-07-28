const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const totalDiv = document.createElement("div");
document.body.appendChild(totalDiv);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(p => {
    total += Number(p.textContent);
  });

  totalDiv.textContent =  total;
  
};

getSumBtn.addEventListener("click", getSum);

