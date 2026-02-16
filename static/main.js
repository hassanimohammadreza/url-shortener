function shortenUrl(event) {
    event.preventDefault();

    const url = document.getElementById("urlInput").value;
    if (!url) {
        alert("Please enter a URL");
        return;
    }

    fetch(`/shorten?url=${encodeURIComponent(url)}`)
        .then(response => response.text())
        .then(data => {
            const errorElement = document.getElementById("error");
            const resultElement = document.getElementById("result");
            const shortUrlElement = document.getElementById("shortUrl");

            if (data.startsWith('Error')) {
                errorElement.innerText = "Failed to shorten the URL. Please try again!";
                errorElement.style.display = "block";
                resultElement.style.display = "none";
            } else {
                errorElement.style.display = "none";
                resultElement.style.display = "block";
                shortUrlElement.href = data;
                shortUrlElement.innerText = data;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const errorElement = document.getElementById("error");
            const resultElement = document.getElementById("result");

            errorElement.innerText = "An error occurred. Please try again later.";
            errorElement.style.display = "block";
            resultElement.style.display = "none";
        });
}
