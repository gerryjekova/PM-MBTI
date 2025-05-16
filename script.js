const archetypes = {
            "DTRF": {
                name: "The Strategist",
                description: "Bold. Tactical. Relentless. You’re the mastermind who could orchestrate a war room or a wedding with equal precision. Your plans are airtight, your vision is laser-focused, and deadlines bow to your will. You thrive on structure and strategy, making you a powerhouse planner and leader.",
                strengths: "Strategic thinking, tactical execution, structured leadership, deadline reliability.",
                gaps: "Can be overly rigid or controlling, potentially stifling creativity or team morale.",
                growthTip: "Loosen up a bit—people aren’t Gantt charts. Blend your structure with flexibility and empathy.",
                mentor: "The Facilitator (SARC)",
                mentorRationale: "Helps soften your edges and teaches you to prioritize team dynamics.",
                image: "/pm-quiz-assets/strategist.png"
            },
            "SARC": {
                name: "The Facilitator",
                description: "Chill. Kind. Chaos Whisperer. You’re the heartbeat of any team—emotionally intelligent, collaborative, and unruffled under pressure. You don’t just manage; you empower, fostering a supportive vibe even in the wildest storms.",
                strengths: "Emotional intelligence, collaboration, calmness, team empowerment.",
                gaps: "May neglect timelines or structure, risking disorganization or missed goals.",
                growthTip: "Deadlines aren’t optional. Add some structure—try a calendar, maestro!",
                mentor: "The Strategist (DTRF)",
                mentorRationale: "Brings planning rigor to ground your collaborative spirit.",
                image: "/pm-quiz-assets/the-facillitator.png"
            },
            "DARC": {
                name: "The Firefighter",
                description: "Fast. Fearless. Frenzied. You’re built for the chaos of launch week, diving into problems with a to-do list in hand. You love putting out fires and thrive in high-stakes, urgent scenarios.",
                strengths: "Crisis management, quick thinking, ruthless prioritization, urgency mastery.",
                gaps: "Weak on prevention and structure, which can lead to burnout or recurring crises.",
                growthTip: "Prevent fires, don’t just fight them. Build some proactive habits.",
                mentor: "The Guardian (STRF)",
                mentorRationale: "Teaches consistency and planning to balance your reactivity.",
                image: "/pm-quiz-assets/firefighter.png"
            },
            "STRF": {
                name: "The Guardian",
                description: "Safe. Solid. Reliable. You’re the team’s safety net—structured, risk-aware, and trusted by all. You shield the scope and anticipate every hiccup, ensuring stability and predictability.",
                strengths: "Reliability, risk management, stakeholder trust, strong planning.",
                gaps: "Over-caution can hinder innovation or adaptability; control can be hard to release.",
                growthTip: "Take a calculated risk now and then—step out of the safety zone.",
                mentor: "The Visionary (SARE)",
                mentorRationale: "Pushes you to dream bigger and embrace bold moves.",
                image: "/pm-quiz-assets/theguardian.png"
            },
            "STRE": {
                name: "The Bureaucrat",
                description: "Methodical. Traditional. Detailed. You’re the king of process—spreadsheets tremble in your presence. You thrive in stability, excelling with classic PM methods like Waterfall.",
                strengths: "Methodical planning, detail focus, process efficiency, stability.",
                gaps: "Resistance to agile methods or creativity can leave you stuck in the past.",
                growthTip: "Modernize a bit—Slack isn’t for Waterfall. Embrace adaptability.",
                mentor: "The Free Spirit (SAEC)",
                mentorRationale: "Injects creativity and spontaneity into your toolkit.",
                image: "/pm-quiz-assets/bureaucrat.png"
            },
            "SAEC": {
                name: "The Free Spirit",
                description: "Creative. Spontaneous. Team Favorite. You’re the ray of sunshine in any storm—adaptable, open, and always human-first. You spark energy and ideas but may struggle with structure.",
                strengths: "Creativity, adaptability, team morale, openness, human focus.",
                gaps: "Poor follow-through and structure can derail execution or deadlines.",
                growthTip: "Land the plane, not just take off. Add some discipline to your brilliance.",
                mentor: "The Commander (DTRC)",
                mentorRationale: "Offers execution focus and decisiveness to ground you.",
                image: "/pm-quiz-assets/free-spirit.png"
            },
            "DTRC": {
                name: "The Commander",
                description: "Decisive. Efficient. Results-Obsessed. You own time, cutting through noise with speed and authority. You’re all about results, delivered with a cool, commanding vibe.",
                strengths: "Decisiveness, efficiency, results focus, confident leadership.",
                gaps: "Lack of empathy can disconnect you from your team’s needs.",
                growthTip: "People matter too—blend empathy into your results-driven style.",
                mentor: "The Facilitator (SARC)",
                mentorRationale: "Teaches softer skills to balance your edge.",
                image: "/pm-quiz-assets/commander.png"
            },
            "SARE": {
                name: "The Visionary",
                description: "Dreamy. Inspiring. Big-Picture-Thinker. You ignite passion in others, dreaming big and pitching bold ideas. You see the forest while the trees burn, though details aren’t your forte.",
                strengths: "Inspiration, vision, storytelling, team motivation.",
                gaps: "Weak on execution and details, leaving ideas unrealized.",
                growthTip: "Turn dreams into plans—execution is your next frontier.",
                mentor: "The Firefighter (DARC)",
                mentorRationale: "Brings fast action to make your visions real.",
                image: "/pm-quiz-assets/visionary.png"
            }
        };

        // Update progress bar
        document.querySelectorAll('input[type="radio"]').forEach(input => {
            input.addEventListener('change', () => {
                const answered = document.querySelectorAll('input[type="radio"]:checked').length;
                const totalQuestions = 16;
                const progress = (answered / totalQuestions) * 100;
                document.getElementById('progress').style.width = `${progress}%`;
            });
        });

        function calculateResults() {
            const form = document.getElementById("quizForm");
            const answers = Array.from(form.querySelectorAll("input[type='radio']:checked")).map(input => input.value.split(","));

            if (answers.length < 16) {
                alert("Please answer all questions to see your PM archetype!");
                return;
            }

            // Count archetype occurrences
            const score = {};
            answers.flat().forEach(archetype => {
                score[archetype] = (score[archetype] || 0) + 1;
            });

            // Determine dominant archetype
            const dominant = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);

            // Display results in modal
            const modal = document.getElementById("resultsModal");
            modal.style.display = "flex";

            const imageDiv = document.getElementById("archetype-image");
            imageDiv.style.backgroundImage = `url(${archetypes[dominant].image})`;

            document.getElementById("archetype").textContent = `Your Archetype: ${archetypes[dominant].name}`;
            document.getElementById("description").textContent = `Description: ${archetypes[dominant].description}`;
            document.getElementById("strengths").textContent = `Strengths: ${archetypes[dominant].strengths}`;
            document.getElementById("gaps").textContent = `Gaps: ${archetypes[dominant].gaps}`;
            document.getElementById("growthTip").textContent = `Growth Tip: ${archetypes[dominant].growthTip}`;
           // document.getElementById("mentor").textContent = `Recommended Mentor: ${archetypes[dominant].mentor} - ${archetypes[dominant].mentorRationale}`;    <- please incorporate this but only to get shown in the form as a hidden field please 
            document.getElementById("userArchetype").value = archetypes[dominant].name;
        }

        // Modal close functionality
        document.querySelector(".close").addEventListener("click", () => {
            document.getElementById("resultsModal").style.display = "none";
        });

        // Close modal when clicking outside
        window.addEventListener("click", (event) => {
            if (event.target === document.getElementById("resultsModal")) {
                document.getElementById("resultsModal").style.display = "none";
            }
        });

        // Form submission (client-side placeholder)
        document.getElementById("userSubmissionForm").addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Form submitted! (Configure server-side endpoint for actual data storage)");
            // Example: Send data to Google Forms or Sheets via API (requires setup)
        });

        