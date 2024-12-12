const membersData = [
    { name: "Ujjwal Sharma", photo: "assets/Ujjwal.jpeg", position: "B.Tech '26 | Full Stack Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "Krupa Kaklotar", photo: "assets/Krupa.jpg", position: "BCA '24 | Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "John Doe", photo: "assets/member1.jpg", position: "BCA '25 | Software Developer", github: "https://github.com/john", linkedin: "https://linkedin.com/in/john" },
    { name: "Jane Smith", photo: "assets/member2.jpg", position: "MCA '24 | Backend Developer", github: "https://github.com/jane", linkedin: "https://linkedin.com/in/jane" },
    { name: "Ujjwal Sharma", photo: "assets/Ujjwal.jpeg", position: "B.Tech '26 | Full Stack Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "Krupa Kaklotar", photo: "assets/Krupa.jpg", position: "BCA '24 | Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "John Doe", photo: "assets/member1.jpg", position: "BCA '25 | Software Developer", github: "https://github.com/john", linkedin: "https://linkedin.com/in/john" },
    { name: "Jane Smith", photo: "assets/member2.jpg", position: "MCA '24 | Backend Developer", github: "https://github.com/jane", linkedin: "https://linkedin.com/in/jane" },
    { name: "Ujjwal Sharma", photo: "assets/Ujjwal.jpeg", position: "B.Tech '26 | Full Stack Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "Krupa Kaklotar", photo: "assets/Krupa.jpg", position: "BCA '24 | Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "John Doe", photo: "assets/member1.jpg", position: "BCA '25 | Software Developer", github: "https://github.com/john", linkedin: "https://linkedin.com/in/john" },
    { name: "Jane Smith", photo: "assets/member2.jpg", position: "MCA '24 | Backend Developer", github: "https://github.com/jane", linkedin: "https://linkedin.com/in/jane" },
    { name: "Ujjwal Sharma", photo: "assets/Ujjwal.jpeg", position: "B.Tech '26 | Full Stack Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "Krupa Kaklotar", photo: "assets/Krupa.jpg", position: "BCA '24 | Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "John Doe", photo: "assets/member1.jpg", position: "BCA '25 | Software Developer", github: "https://github.com/john", linkedin: "https://linkedin.com/in/john" },
    { name: "Jane Smith", photo: "assets/member2.jpg", position: "MCA '24 | Backend Developer", github: "https://github.com/jane", linkedin: "https://linkedin.com/in/jane" },
    { name: "Ujjwal Sharma", photo: "assets/Ujjwal.jpeg", position: "B.Tech '26 | Full Stack Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "Krupa Kaklotar", photo: "assets/Krupa.jpg", position: "BCA '24 | Web Developer", github: "https://github.com/krupa", linkedin: "https://linkedin.com/in/krupa" },
    { name: "John Doe", photo: "assets/member1.jpg", position: "BCA '25 | Software Developer", github: "https://github.com/john", linkedin: "https://linkedin.com/in/john" },
    { name: "Jane Smith", photo: "assets/member2.jpg", position: "MCA '24 | Backend Developer", github: "https://github.com/jane", linkedin: "https://linkedin.com/in/jane" },
    // Add more members up to 51...
];

let currentIndex = 0;
const membersPerLoad = 9;

function createMemberCard(member) {
    return `
        <div class="bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div class="p-6">
                <div class="relative w-24 h-24 mx-auto">
                    <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-lg"></div>
                    <img src="${member.photo}" alt="Member Photo" class="relative z-10 w-24 h-24 rounded-full border-4 border-white">
                </div>
                <h3 class="text-xl font-bold text-gray-800 text-center mt-4">${member.name}</h3>
                <p class="text-gray-600 text-center">${member.position}</p>
                <div class="flex justify-center mt-4 space-x-4">
                    <a href="${member.github}" target="_blank" class="text-gray-500 hover:text-gray-800 transition-colors">
                        <i class="fab fa-github text-2xl"></i>
                    </a>
                    <a href="${member.linkedin}" target="_blank" class="text-blue-500 hover:text-blue-700 transition-colors">
                        <i class="fab fa-linkedin text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function loadMembers() {
    const membersContainer = document.getElementById('members');
    for (let i = currentIndex; i < currentIndex + membersPerLoad && i < membersData.length; i++) {
        membersContainer.innerHTML += createMemberCard(membersData[i]);
    }
    currentIndex += membersPerLoad;
    
    if (currentIndex >= membersData.length) {
        document.getElementById('loadMoreBtn').disabled = true;
        document.getElementById('loadMoreBtn').textContent = 'No More Members';
    }
}

document.getElementById('loadMoreBtn').addEventListener('click', loadMembers);

// Initially load the first set of members
loadMembers();


// Get the scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.classList.remove('hidden'); // Show the button
    } else {
        scrollTopBtn.classList.add('hidden'); // Hide the button
    }
};

// Scroll smoothly to the top when the button is clicked
scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

