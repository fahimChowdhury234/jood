document.getElementById("toggleSwitch").addEventListener("change", function () {
    let logoGrey = document.getElementById("logoGrey");
    let logoColor = document.getElementById("logoColor");
    let popUp = document.getElementById('popUp')
    let lodgingSVG = document.getElementById("lodgingSVG");

    if (this.checked) {
        // Toggle on: Change logo color to green, show lodging SVG

        logoGrey.style.display = "none";
        logoColor.style.display = "block";

        // Wait for 5 seconds
        setTimeout(function () {

            popUp.style.opacity = '1';
            popUp.style.visibility = 'visible';

            // Wait for another 5 seconds and then redirect
            setTimeout(function () {
                window.location.href = "https://jood.om";
            }, 5000);
        }, 2000);
    } else {
        // Toggle off: Change logo color to red and reset elements

        logoGrey.style.display = "block";
        logoColor.style.display = "none";
        loading.style.display = "none";
    }
});