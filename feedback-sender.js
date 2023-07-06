const telegram_bot_id = "6204435262:AAFKXOBKBlc_3uYDtOcTOYLZUPGNd3EyyfE";
//chat id
const chat_id = 902438310;
let u_name, phone, message;

const getFormData = function () {
    u_name = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    message = "Имя: " + u_name + "\nТелефон: " + phone;
};

const sendForm = async (e) => {
    e.preventDefault();
    getFormData();
    if (!u_name.length || !phone.length) return;

    const url = "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage";
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache",
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message,
        }),
    };

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    return false;
};

const feedbackForm = document.getElementById("feedback-form");
feedbackForm.addEventListener("submit", sendForm);
