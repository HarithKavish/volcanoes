// Animation for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const cards = document.querySelectorAll('.volcano-card');

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Card hover effects with animation
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotate(2deg)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add floating animation to cards
    function animateCards() {
        cards.forEach((card, index) => {
            const delay = index * 0.2;
            card.style.animationDelay = `${delay}s`;
        });
    }

    // Initial animation
    animateCards();

    // Update animation on resize
    window.addEventListener('resize', animateCards);
});

// Interactive volcano information popup
function setupPopup() {
    const volcanoCards = document.querySelectorAll('.famous-card');

    volcanoCards.forEach(card => {
        const title = card.querySelector('h3');
        const description = card.querySelector('p');

        title.addEventListener('click', function() {
            const popup = document.createElement('div');
            popup.className = 'volcano-popup';
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="close-popup">&times;</span>
                    <h3>${title.textContent}</h3>
                    <p>${description.textContent}</p>
                </div>
            `;
            document.body.appendChild(popup);

            const popupContent = popup.querySelector('.popup-content');
            popupContent.style.display = 'block';
            popupContent.style.left = `${event.clientX}px`;
            popupContent.style.top = `${event.clientY}px`;

            const closeButton = popup.querySelector('.close-popup');
            closeButton.addEventListener('click', function() {
                popup.style.display = 'none';
            });

            // Close popup if clicked outside
            popup.addEventListener('click', function(e) {
                if (e.target === popup) {
                    popup.style.display = 'none';
                }
            });
        });
    });
}

setupPopup();

// Add interactive volcano map
function setupMap() {
    const mapContainer = document.createElement('div');
    mapContainer.id = 'volcano-map';
    mapContainer.className = 'map-container';
    mapContainer.style.display = 'none';
    mapContainer.style.backgroundColor = 'var(--light-color)';
    mapContainer.style.borderRadius = '8px';
    mapContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    mapContainer.style.padding = '1rem';
    mapContainer.innerHTML = `
        <h3>Volcano Locations</h3>
        <p>Explore the global distribution of major volcanoes.</p>
        <div class="map-visualization">
            <div class="map-placeholder">
                <p>Interactive volcano map would appear here with markers for major volcanoes.</p>
            </div>
        </div>
    `;
    document.querySelector('.protection-section').appendChild(mapContainer);

    const protectionSection = document.querySelector('.protection-section');
    protectionSection.addEventListener('click', function(e) {
        if (e.target.classList.contains('map-container')) return;
        if (mapContainer.style.display === 'none') {
            mapContainer.style.display = 'block';
        } else {
            mapContainer.style.display = 'none';
        }
    });
}

setupMap();

// Add interactive volcano facts
function setupFacts() {
    const factsContainer = document.createElement('div');
    factsContainer.id = 'volcano-facts';
    factsContainer.className = 'facts-container';
    factsContainer.style.display = 'none';
    factsContainer.style.backgroundColor = 'var(--light-color)';
    factsContainer.style.borderRadius = '8px';
    factsContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    factsContainer.style.padding = '1.5rem';
    factsContainer.innerHTML = `
        <h3>Fun Facts About Volcanoes</h3>
        <div class="facts-list">
            <div class="fact-item">
                <h4>Volcanoes can form new islands</h4>
                <p>Eruptions can create new landforms, such as the formation of the Hawaiian Islands.</p>
            </div>
            <div class="fact-item">
                <h4>Volcanic ash can be useful</h4>
                <p>Volcanic ash is rich in minerals and can be used to improve soil fertility.</p>
            </div>
            <div class="fact-item">
                <h4>Some volcanoes are still active</h4>
                <p>There are over 500 potentially active volcanoes worldwide.</p>
            </div>
            <div class="fact-item">
                <h4>Volcanoes can affect climate</h4>
                <p>Large eruptions can release sulfur dioxide into the atmosphere, leading to temporary cooling effects.</p>
            </div>
        </div>
    `;
    document.querySelector('.glossary-section').appendChild(factsContainer);

    const glossarySection = document.querySelector('.glossary-section');
    glossarySection.addEventListener('click', function(e) {
        if (e.target.classList.contains('facts-container')) return;
        if (factsContainer.style.display === 'none') {
            factsContainer.style.display = 'block';
        } else {
            factsContainer.style.display = 'none';
        }
    });
}

setupFacts();

// Add interactive eruption types visualization
function setupVisualization() {
    const visualizationContainer = document.createElement('div');
    visualizationContainer.id = 'eruption-visualization';
    visualizationContainer.className = 'visualization-container';
    visualizationContainer.style.display = 'none';
    visualizationContainer.style.backgroundColor = 'var(--light-color)';
    visualizationContainer.style.borderRadius = '8px';
    visualizationContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    visualizationContainer.style.padding = '1.5rem';
    visualizationContainer.innerHTML = `
        <h3>Types of Volcanic Eruptions</h3>
        <div class="visualization-content">
            <div class="eruption-visual">
                <div class="eruption-type-visual hawaiian">
                    <h4>Hawaiian Eruption</h4>
                    <p>Low-viscosity lava flows gently.</p>
                </div>
                <div class="eruption-type-visual strombolian">
                    <h4>Strombolian Eruption</h4>
                    <p>Explosive bursts of lava and gas.</p>
                </div>
                <div class="eruption-type-visual vulcanian">
                    <h4>Vulcanian Eruption</h4>
                    <p>Highly explosive with dense ash clouds.</p>
                </div>
                <div class="eruption-type-visual plinian">
                    <h4>Plinian Eruption</h4>
                    <p>Massive ash and gas columns.</p>
                </div>
            </div>
        </div>
    `;
    document.querySelector('.eruptions-section').appendChild(visualizationContainer);

    const eruptionsSection = document.querySelector('.eruptions-section');
    eruptionsSection.addEventListener('click', function(e) {
        if (e.target.classList.contains('visualization-container')) return;
        if (visualizationContainer.style.display === 'none') {
            visualizationContainer.style.display = 'block';
        } else {
            visualizationContainer.style.display = 'none';
        }
    });
}

setupVisualization();