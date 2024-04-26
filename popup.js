document.getElementById("fetchButton").addEventListener("click", function () {
  chrome.runtime.sendMessage({ action: "fetchData", url: "http://localhost:3000/api/breachedaccount/nzulu11%40gmail.com" }, function (response) {
    if (response.success) {
      console.log(response.data);
      // Do something with the fetched data
    } else {
      console.error("Error fetching data:", response.error);
    }
  });
});
