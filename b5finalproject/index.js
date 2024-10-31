var formBtn = $(".interest-form-btn");
formBtn.on("click", goForm);

function goForm() {
  document.location.href = "interest-form.html";
}

var searchBtn = $(".search-btn");
searchBtn.on("click", goSearch);

function goSearch() {
  document.location.href = "search.html";
}
