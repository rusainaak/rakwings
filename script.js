console.log("JS is connected!");

const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});

document.addEventListener("submit", function (e) {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const msg = document.getElementById("message");

    if (!name.value || !email.value || !msg.value) {
        alert("Please fill all fields");
        e.preventDefault();
    }
});

const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const product = btn.getAttribute("data-product");
        localStorage.setItem("selectedProduct", product);
        alert(product + " added to checkout!");
    });
});

// ---------------- PDF DOWNLOAD SYSTEM ---------------- //

const files = {
    ebook1: "pdfs/ebook1.pdf",
    ebook2: "pdfs/ebook2.pdf",
    ebook3: "pdfs/ebook3.pdf",
    ebook4: "pdfs/ebook4.pdf",
    ebook5: "pdfs/ebook5.pdf",
    ebook6: "pdfs/ebook6.pdf",
    ebook7: "pdfs/ebook7.pdf",
    ebook8: "pdfs/ebook8.pdf",
    ebook9: "pdfs/ebook9.pdf",
    ebook10: "pdfs/ebook10.pdf",
    ebook11: "pdfs/ebook11.pdf",
    ebook12: "pdfs/ebook12.pdf",
    ebook13: "pdfs/ebook13.pdf",
    ebook14: "pdfs/ebook14.pdf",
    ebook15: "pdfs/ebook15.pdf",
    ebook16: "pdfs/ebook16.pdf",
    ebook17: "pdfs/ebook17.pdf",
    ebook18: "pdfs/ebook18.pdf",
    ebook19: "pdfs/ebook19.pdf",
    ebook20: "pdfs/ebook20.pdf"
};

function getFileFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("file");
}

function showDownloadPage() {
    const ebook = getFileFromURL();

    const messageBox = document.getElementById("downloadMessage");
    const downloadBtn = document.getElementById("downloadBtn");

    if (!ebook || !files[ebook]) {
        messageBox.innerHTML = "⚠️ Invalid download link.";
        if (downloadBtn) downloadBtn.style.display = "none";
        return;
    }

    messageBox.innerHTML = "Your ebook is ready to download!";
    downloadBtn.style.display = "block";

    downloadBtn.addEventListener("click", () => {
        window.location.href = files[ebook];
    });
}

if (window.location.pathname.includes("download.html")) {
    showDownloadPage();
}