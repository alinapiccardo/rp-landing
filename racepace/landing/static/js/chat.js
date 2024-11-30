document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const chatMessages = document.getElementById("chat-messages");
    const raceList = document.getElementById("race-list");
    const recommendationsSection = document.getElementById("recommendations-section"); 
    const quickAnswerButtons = document.querySelectorAll(".quick-answer-btn");

    chatMessages.innerHTML = "";

    // Predefined responses
    const recommendations = [
        { name: "Desafío Pilancones 34K", location: "San Bartolomé de Tirajana, ESP", distance: "34km", date: "20/01/24", elevation: "500m" },
        { name: "The Goat Adventure Run", location: "Tongariro National Park, NZL", distance: "42km", date: "20/01/24", elevation: "200m" },
        { name: "Pilancones Tunte Trail - Media 25K", location: "San Bartolomé de Tirajana, ESP", distance: "25km", date: "20/01/24", elevation: "230m" },
        { name: "Jumbo-Holdsworth Trail Race", location: "Mt Holdsworth, NZL", distance: "20km", date: "27/01/24", elevation: "300m" },
        { name: "Mount Ugo Marathon", location: "Kayapa Central School, PHI", distance: "34km", date: "04/02/24", elevation: "777m" },
        { name: "FOURmidable 50k", location: "Auburn, USA", distance: "50km", date: "17/02/24", elevation: "221m" },
        { name: "Tarawera Ultramarathon 21k", location: "Lake Tikitapu, NZL", distance: "21km", date: "17/02/24", elevation: "256m" },
        { name: "Transgrancanaria - KV El Gigante", location: "Valle de Agaete – Tamadaba, ESP", distance: "21km", date: "21/02/24", elevation: "500m" },
        { name: "Transgrancanaria - Starter", location: "Tunte – Tejeda, ESP", distance: "50km", date: "22/02/24", elevation: "126m" },
        // { name: "Buffalo Stampede", location: "Bright, AUS", distance: "12km", date: "23/03/24", elevation: "700m" },
        // { name: "British National Trail Running Championship", location: "Askham, GBR", distance: "44km", date: "24/03/24", elevation: "500m" },
    ];
    

    quickAnswerButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const message = button.getAttribute("data-message");
            // console.log(`Button clicked: ${message}`); 
            userInput.value = message; 
            chatForm.dispatchEvent(new Event("submit")); 
        });
    });

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Chat form submitted"); 
        const userMessage = userInput.value.trim();

        if (userMessage) {
            console.log(`User Message: ${userMessage}`); 
            addMessage("user", userMessage);
            setTimeout(() => {
                if (userMessage.toLowerCase().includes("recommend")) {
                    displayRecommendations();
                } else if (userMessage.toLowerCase().includes("popular")) {
                    addMessage("bot", "Desafío Pilancones 34K,	San Bartolomé de Tirajana, ESP");
                    addMessage("bot", "Tongariro National Park, NZL");
                    addMessage("bot", "Mount Ugo Marathon, Kayapa Central School, PHI");
                } else if (userMessage.toLowerCase().includes("prepare")) {
                    addMessage("bot", "To prepare for a trail run, focus on strength training, hill workouts, and proper trail running shoes. At RacePace, we offer training plans tailored to your needs! Check them out on our website");
                } else if (userMessage.toLowerCase().includes("50k")) {
                    addMessage("bot", "Next 50km or more races are:");
                    addMessage("bot", "FOURmidable 50k, Auburn, USA");
                    addMessage("bot", "Transgrancanaria - KV El Gigante, Valle de Agaete – Tamadaba, ESP");
                    addMessage("bot", "Transgrancanaria - Starter, Tunte – Tejeda, ESP");
                    displayRecommendations();
                } else if (userMessage.toLowerCase().includes("next trail races")) {
                    addMessage("bot", " Next trail races are:");
                    displayRecommendations();
                } else {
                    addMessage("bot", "I'm not sure about that. Try choosing a question from the options above!");
                }
            }, 600);
        }
        userInput.value = "";
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className =
            sender === "user"
                ? "self-end bg-[#053c5e] text-white rounded-2xl px-4 py-2 max-w-[70%]"
                : "self-start bg-gray-200 text-[#053c5e] rounded-2xl px-4 py-2 max-w-[70%]";
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function displayRecommendations() {
        raceList.innerHTML = "";
    
        recommendations.forEach((race) => {
            const li = document.createElement("li");
            li.textContent = `Race: ${race.name}, ${race.location}  - Distance: ${race.distance} - Date:  ${race.date} - Elevation: ${race.elevation}`;
            li.className = "text-[#053c5e] text-sm rounded-lg shadow-md py-2 px-4";
            raceList.appendChild(li);
        });
    
        recommendationsSection.classList.remove("hidden");
        recommendationsSection.classList.add("block");
    
        addMessage("bot", "Here are some races you might like!");
    }
  
});



