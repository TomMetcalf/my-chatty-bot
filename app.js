// Code snippet from https://www.youtube.com/watch?v=C3JKS3a4R5Y&t
// Javascript code from How To Create Responsive Popup Chat Window | HTML - CSS - JS

const sendButton = $(".send-button");
const chatWindow = $('.chat-window');
const inputArea = $(".text-input")


// TIMESTAMP

// Code snippet from https://codepen.io/TVBZ/pen/WmPPyR

const timeStamp = () => {
    const timestamp = new Date();
    const date = timestamp.getDate();
    const hours = timestamp.getHours();
    let minutes = timestamp.getMinutes();

    // Code snippet from https://www.w3schools.com/js/js_date_methods.asp 

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const d = new Date();
    let month = months[d.getMonth()];

    if (minutes < 10) minutes = "0" + minutes;
    const dateTime = `${date} ${month} ${hours}:${minutes}`;

    return dateTime;

};



// EVENT LISTENERS

$(".send-button").on("click", () => renderUserMessage());

$(".text-input").keypress(function (event) {
    if (event.keyCode === 13) {
        $(".send-button").click();
    }
});


// MAIN CHATBOT FUNCTIONALITY

// Code used from How to create a Messenger Style ChatBot with JavaScript Tutorial (Part 1)
// https://www.youtube.com/watch?v=C2bKXt1yuPE&t

const renderUserMessage = () => {

    // Code snippet from https://dev.to/sylviapap/make-a-simple-chatbot-with-javascript-1gc

    const userInput = $(inputArea).val().toLowerCase().replace(/[',;\.!?]/g, '');

    let userOutput = $(inputArea).val()
    if ($(inputArea).val() === "")
        userOutput = "empty msg"
    renderMessageEle(userOutput, "user");
    renderDateEle(timeStamp(), "user");
    $(inputArea).val("")


    scrollDown()
    // Code snippet from https://stackoverflow.com/questions/34648427/how-to-show-loader-with-set-timeout-function

    $("#typing").show();
    setTimeout(() => {
        renderChatbotResponse(userInput)
        scrollDown()
        $("#typing").hide();
    }, 2000);
};

// Code snippet from https://codepen.io/TVBZ/pen/WmPPyR

function scrollDown() {
    const container = $(".chat-window");
    const maxHeight = container.height();
    const scrollHeight = container[0].scrollHeight;
    if (scrollHeight > maxHeight) container.scrollTop(scrollHeight);
}

// Code used from How to create a Messenger Style ChatBot with JavaScript Tutorial (Part 1)
// https://www.youtube.com/watch?v=C2bKXt1yuPE&t

const renderChatbotResponse = (userInput) => {

    const items =
        ["What's the weather like where you are?",
            "When's your birthday?",
            "Which day of the week do you like most?",
            "Do you have any pets?",
            "Who is your most inspirational person?",
            "What's the name of your favourite band?",
            "Do you play any sports?",
            "What's your favourite colour?",
            "Do you know any code?",
            "Where do you like to go on holiday?"
        ];

    const randomChatbotResponses = items[Math.floor(Math.random() * items.length)];

    // Code used from How to create a Messenger Style ChatBot with JavaScript Tutorial (Part 1)
    // https://www.youtube.com/watch?v=C2bKXt1yuPE&t

    const randomBotResponse = () => {
        $('<div>')
            .addClass('chatbot-message')
            .append(randomChatbotResponses)
            .appendTo($(".chat-window"));
    };


    const response = getChatbotResponse(userInput);
    randomBotResponse(response);
    renderDateEle(timeStamp());
};

const renderMessageEle = (txt, type) => {
    let className = "user-message";
    if (type !== "user") {
        className = "chatbot-message";
    }
    $("<div>")
        .addClass(className)
        .append(txt)
        .appendTo($(".chat-window"));
};

const renderDateEle = (txt, type) => {
    let className = "user-time";
    if (type !== "user") {
        className = "chatbot-time";
    }
    $("<div>")
        .addClass(className)
        .append(txt)
        .appendTo($(".chat-window"));
};

const firstBotResponse = () => {
    $('<div>')
        .addClass('chatbot-message')
        .append("Hi, pleased to meet you!")
        .appendTo($(".chat-window"));
};

setTimeout(() => {
    $('<div>')
        .addClass('chatbot-message')
        .append("Are you there?")
        .appendTo($(".chat-window"));
    renderDateEle(timeStamp());
}, 1000)

firstBotResponse()
renderDateEle(timeStamp())

const randomBotResponse = () => {
    $('<div>')
        .addClass('chatbot-message')
        .append(randomChatbotResponses)
        .appendTo($(".chat-window"));
};

const getChatbotResponse = (userInput) => {
};

// SHOW / HIDE CHATBOT

// Code used from https://www.youtube.com/watch?v=R01_nw3eims&t=353s
// How To Create Chat Box Using HTML CSS & JavaScript | Chat Box Using HTML & CSS

$(document).ready(() => {
    $("#chat-icon").click(() => {
        $(".chatbox-container").fadeToggle("fast")
    })
})