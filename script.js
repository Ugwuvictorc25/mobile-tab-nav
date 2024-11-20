const btnCont = document.querySelector(".btn-cont");
const allBtn = btnCont.querySelectorAll("button");
const imgCont = document.querySelector(".img-cont");

allBtn.forEach((btn, idx) => {
	btn.addEventListener("click", function () {
		const imgCont = document.querySelector(".img-cont");
		imgCont.style.backgroundImage = `url(Images/product-${idx + 1}.jpeg)`;
		allBtn.forEach((btn) => btn.classList.remove("active"));
		allBtn[idx].classList.add("active");
	});
});
