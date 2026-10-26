
const urlParams = new URLSearchParams(window.location.search);
const originalSite = urlParams.get("from");
 
if (originalSite) {
  document.getElementById("lockedSite").textContent = originalSite + " is locked";
}
 
// Question bank
const questionBank = {
  satMathHard: [
    { question: "If x^2 + bx + 49 = 0 has no real solutions, what is the maximum possible integer value of b?", choices: ["13", "14", "7", "12"], answerIndex: 0 },
    { question: "The line y = mx - 5 is tangent to the circle (x-3)^2 + (y+1)^2 = 4. If m > 0, what is m?", choices: ["1/2", "3/4", "4/3", "2"], answerIndex: 1 },    { question: "If f(x) = 3x^2 - 12x + 19, what is the minimum value of f(x)?", choices: ["5", "6", "7", "19"], answerIndex: 2 },
    { question: "A population grows 15% every 4 years. Which models population after m months with initial P0?", choices: ["P0(1.15)^(m/48)", "P0(1.15)^(4m)", "P0(1.15)^(m/4)", "P0(1.15)^(12m)"], answerIndex: 0 },
    { question: "In triangle ABC, angle C = 90 degrees. If cos(A) = 7/25, what is tan(B)?", choices: ["24/25", "7/24", "25/24", "24/7"], answerIndex: 1 },
    { question: "How many real solutions (x, y) exist for y = x^2 - 6x + 10 and y = 2x - 7?", choices: ["0", "1", "2", "4"], answerIndex: 1 },
    { question: "Class 1 (15 students) averages 80%; Class 2 (x students) averages 92%. Combined average is 85%. What is x?", choices: ["25", "60", "107", "15"], answerIndex: 2 },
    { question: "If (ax+3)(bx-4) = 10x^2 + cx - 12 for all x, and a+b=7, what is a possible value for c?", choices: ["-7", "10", "-12", "4"], answerIndex: 0 },
    { question: "The circle equation is x^2 + y^2 - 8x + 10y - 8 = 0. What is the radius?", choices: ["5", "6", "7", "8"], answerIndex: 2 },
    { question: "If 3^(x+1) - 3^x = 162, what is the value of x?", choices: ["3", "4", "5", "6"], answerIndex: 1 },
    { question: "A function g(x) = a(x-2)^2 + k passes through (0,14) and (2,2). What is a?", choices: ["2", "3", "4", "6"], answerIndex: 1 },
    { question: "If sin(theta) = 3/5 and theta is between 90 and 180 degrees, what is cos(theta)?", choices: ["4/5", "-3/5", "-4/5", "3/4"], answerIndex: 2 },
    { question: "For what value of k does 2x - 5y = 9 and kx + 10y = 4 have no solutions?", choices: ["-4", "4", "-5", "5"], answerIndex: 0 },
    { question: "The volume of a sphere is 36*pi. What is its surface area?", choices: ["18*pi", "24*pi", "36*pi", "48*pi"], answerIndex: 2 },
    { question: "If f(x) = x^3 - 4x, what is the sum of all x-intercepts?", choices: ["-4", "0", "2", "4"], answerIndex: 1 },
    { question: "A car depreciates 20% each year. What fraction of original value remains after 3 years?", choices: ["0.4", "0.488", "0.512", "0.6"], answerIndex: 2 },
    { question: "If (x^2 - 9)/(x - 3) = 2x + 1, what is the value of x?", choices: ["1", "2", "3", "4"], answerIndex: 1 },
    { question: "In right triangle XYZ, sin(X) = cos(Z - 10 degrees). If X and Z are both acute, what is Z?", choices: ["40 degrees", "50 degrees", "60 degrees", "80 degrees"], answerIndex: 1 },
    { question: "If a^(2/3) = 9, what is a?", choices: ["18", "24", "27", "81"], answerIndex: 2 },
    { question: "The system y > 2x + 1 and y < -x + 4: their overlapping region spans which quadrants?", choices: ["I and II only", "I, II, and III", "I, II, III, and IV", "II and III only"], answerIndex: 1 },
    { question: "What is the distance between the vertex of y = x^2 - 4x + 5 and the point (5, 6)?", choices: ["4", "5", "6", "7"], answerIndex: 1 },
    { question: "If P(x) = 2x^3 - kx^2 + 3x - 10 has a factor of (x-2), what is k?", choices: ["1", "2", "3", "4"], answerIndex: 2 },
    { question: "A cylinder has height 10, radius 3. If the radius increases 50%, by what percentage does the volume increase?", choices: ["50%", "75%", "100%", "125%"], answerIndex: 3 },
    { question: "If x + y = 10 and x^2 + y^2 = 58, what is xy?", choices: ["18", "21", "24", "29"], answerIndex: 1 },
    { question: "An arc of length 4*pi on a circle with radius 12 subtends what central angle in degrees?", choices: ["30", "45", "60", "90"], answerIndex: 2 },
    { question: "If log base 2 of x, plus log base 2 of (x-2), equals 3, what is x?", choices: ["2", "4", "6", "8"], answerIndex: 1 },
    { question: "If f(x) = 2x + 5, what is the inverse function f^-1(11)?", choices: ["2", "3", "8", "11"], answerIndex: 1 },
    { question: "Line L1 passes through (1,2) and (3,8). Line L2 is perpendicular to L1 and passes through (0,4). What is the x-intercept of L2?", choices: ["4", "8", "12", "16"], answerIndex: 2 },
    { question: "If x^4 - 13x^2 + 36 = 0, what is the sum of all positive real solutions?", choices: ["3", "4", "5", "6"], answerIndex: 2 },
    { question: "In a set of 10 consecutive odd integers, the sum of the first 5 is 100. What is the sum of the last 5?", choices: ["125", "140", "150", "160"], answerIndex: 2 }
  ],
 
  satEnglishHard: [
    { question: "Though public transport infrastructure projects are often lauded for their potential to alleviate urban congestion, their high initial capital costs often prove ______ to smaller municipal budgets.", choices: ["trivial", "prohibitive", "extraneous", "beneficial"], answerIndex: 1 },
    { question: "The scientist's argument was notable for its ______; she addressed every potential counterexample before her critics could even articulate them.", choices: ["prescience", "brevity", "opacity", "ambivalence"], answerIndex: 0 },
    { question: "Far from being a ______ figure, the diplomat worked tirelessly behind the scenes to reconcile the opposing factions.", choices: ["energetic", "passive", "conciliatory", "pragmatic"], answerIndex: 1 },
    { question: "The research team's conclusions were criticized as ______ because they relied on a sample size far too small to support such sweeping generalizations.", choices: ["rigorous", "tenuous", "comprehensive", "definitive"], answerIndex: 1 },
    { question: "While some urban planners favor rapid expansion, others argue that sustainable development requires a more ______ approach that prioritizes long-term environmental balance over short-term growth.", choices: ["judicious", "precipitate", "haphazard", "dogmatic"], answerIndex: 0 },
    { question: "Historical records show that the ancient settlement was not isolated; ______, artifact analysis indicates active trade routes extending across three continents.", choices: ["moreover", "rather", "similarly", "consequently"], answerIndex: 1 },
    { question: "The committee members held divergent views on the proposed policy reform. ______, they managed to reach a consensus after hours of structured debate.", choices: ["Nevertheless", "Furthermore", "Specifically", "Therefore"], answerIndex: 0 },
    { question: "Solar panels have become significantly more efficient over the last decade. ______, consumer demand for residential installations has reached an all-time high.", choices: ["In contrast", "As a result", "On the other hand", "Nevertheless"], answerIndex: 1 },
    { question: "Many migratory bird species rely on coastal wetlands for feeding during their long journeys; ______, the destruction of these habitats poses an immediate threat to their populations.", choices: ["indeed", "pattern", "conversely", "incidentally"], answerIndex: 0 },
    { question: "The author provides a detailed historical narrative in the first three chapters. ______, the final section shifts focus entirely to contemporary statistical analysis.", choices: ["In addition", "By contrast", "For example", "Accordingly"], answerIndex: 1 },
    { question: "Neither the lead investigator nor her research assistants ______ prepared for the unexpected results of the experiment.", choices: ["was", "were", "is", "being"], answerIndex: 1 },
    { question: "The collection of rare manuscripts, which ______ preserved in climate-controlled vaults, attracts scholars from around the world.", choices: ["is", "are", "have been", "were"], answerIndex: 0 },
    { question: "After reviewing the quarterly financial statements, the board of directors decided that the company should revise ______ growth strategy.", choices: ["its", "it's", "their", "there"], answerIndex: 0 },
    { question: "Having completed the exhaustive field surveys, ______ was finally ready to compile the final report.", choices: ["the project's lead researcher", "the survey findings indicated that the lead researcher", "it was time for the lead researcher", "the completion of the project allowed the researcher"], answerIndex: 0 },
    { question: "The architect designed the building with energy efficiency in mind ______ incorporating thick insulation, solar glass windows, and geothermal heating.", choices: ["mind:", "mind,", "mind;", "mind"], answerIndex: 1 },
    { question: "The museum's new exhibit features works by three prominent twentieth-century painters ______ Georgia O'Keeffe, Jackson Pollock, and Mark Rothko.", choices: ["painters:", "painters;", "painters,", "painters--"], answerIndex: 0 },
    { question: "Biologists studying deep-sea organisms discovered a new species of jellyfish ______ its bioluminescent displays serve to deter potential predators.", choices: ["jellyfish, whose", "jellyfish,", "jellyfish whose", "jellyfish; whose"], answerIndex: 2 },
    { question: "The company's innovative software solution not only streamlines workflow ______ reduces operational costs by nearly thirty percent.", choices: ["but also", "and also", "as well as", "but it"], answerIndex: 0 },
    { question: "Despite the initial skepticism surrounding the feasibility of fusion energy, recent breakthroughs in magnetic confinement ______ renewed interest among international investors.", choices: ["have spark", "has sparked", "have sparked", "sparking"], answerIndex: 2 },
    { question: "Each of the artifacts retrieved from the sunken vessel ______ meticulous restoration before being put on public display.", choices: ["require", "requires", "requiring", "have required"], answerIndex: 1 },
    { question: "Text 1 argues AI will automate routine tasks and enhance productivity. Text 2 contends AI adoption will displace workers faster than new roles are created. How does Text 2 relate to Text 1?", choices: ["Text 2 provides empirical evidence that supports Text 1.", "Text 2 presents an opposing perspective on AI's net impact on the workforce.", "Text 2 elaborates on the technical mechanisms introduced in Text 1.", "Text 2 refutes Text 1 by showing routine tasks cannot be automated."], answerIndex: 1 },
    { question: "A study found urban trees reduce surface temperatures via transpiration. Which finding would most directly support this conclusion?", choices: ["Areas with dense tree canopy register lower ground temperatures than nearby paved areas.", "Urban areas with high tree density experience higher rainfall than rural areas.", "Reflective roofing lowers indoor temperatures more than planting trees.", "Trees in urban parks grow faster than the same species in wild forests."], answerIndex: 0 },
    { question: "Coral reef recovery rates were higher in marine protected areas with strict fishing regulation. This suggests:", choices: ["Fish populations directly harm coral growth.", "Reducing local stressors enhances marine ecosystem resilience.", "Protected areas are immune to ocean warming.", "Unregulated fishing is the sole cause of reef degradation worldwide."], answerIndex: 1 },
    { question: "A student claims Jane Austen used social satire to criticize 19th-century England's class structure. Which quotation best supports this claim?", choices: ["\"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.\"", "\"The weather was fine, and the walk across the estate was pleasant.\"", "\"They sat down to dinner at five o'clock, as was their daily custom.\"", "\"She read the letter twice before placing it quietly on the table.\""], answerIndex: 0 },
    { question: "Plants under moderate drought produced more antioxidants than well-watered plants, suggesting mild stress triggers a defense mechanism. Which finding would most weaken this inference?", choices: ["Antioxidant levels stayed elevated even after watering resumed.", "The antioxidant increase was caused by higher light exposure, not water restriction.", "Other species showed similar increases under low temperatures.", "Plants in nutrient-poor soil had lower overall growth."], answerIndex: 1 },
    { question: "An economist noted luxury sales fell while staple sales stayed flat during economic uncertainty, concluding consumers prioritize essentials under financial risk. What role does this observation play in the argument?", choices: ["It provides the empirical observation the conclusion explains.", "It presents a counterargument the economist refutes.", "It serves as the primary conclusion drawn from evidence.", "It offers an alternative hypothesis needing further testing."], answerIndex: 0 },
    { question: "Notes: JWST launched Dec. 2021; observes in infrared; infrared penetrates dust clouds; captured hidden star-forming regions in Carina Nebula (2022). Which choice best explains WHY JWST reveals hidden star-forming regions?", choices: ["Launched in December 2021, JWST captured detailed images of the Carina Nebula in 2022.", "JWST observes in the infrared spectrum, allowing it to penetrate cosmic dust clouds that block visible light and obscure star-forming regions.", "The Carina Nebula contains star-forming regions imaged by JWST in 2022.", "Because it was launched recently, JWST provides better images of dust clouds than older telescopes."], answerIndex: 1 },
    { question: "Notes: Photosynthesis makes glucose from light in chloroplasts; respiration breaks down glucose for ATP in mitochondria; plants do both. Which choice best CONTRASTS the cellular locations of each process?", choices: ["Plants perform photosynthesis to produce glucose and respiration to release ATP.", "Photosynthesis converts light into glucose, later broken down during respiration.", "Photosynthesis takes place within chloroplasts, while respiration occurs in mitochondria.", "Both processes are essential metabolic functions performed by plant cells."], answerIndex: 2 },
    { question: "Notes: Maria Tallchief, first Native American prima ballerina, Osage Nation; co-founded Chicago City Ballet 1981 as artistic director; known for The Firebird. Which choice best highlights her accomplishment in dance LEADERSHIP?", choices: ["A member of the Osage Nation, she was celebrated for her precision in The Firebird.", "Maria Tallchief co-founded the Chicago City Ballet in 1981, serving as its artistic director.", "Maria Tallchief (1925-2013) achieved fame as the first Native American prima ballerina.", "Known for her dramatic expression, she led a distinguished career as dancer and artistic director."], answerIndex: 1 },
    { question: "Notes: Graphene is a single carbon layer in a honeycomb lattice; 200x stronger than steel; highly conductive; mass production is costly. Which choice best CONTRASTS its properties with its commercial availability?", choices: ["Arranged in a honeycomb lattice, graphene is a single layer of carbon with remarkable strength.", "Graphene is 200 times stronger than steel and an efficient conductor, but high production costs currently hinder mass manufacture.", "Although graphene conducts electricity efficiently, it is composed of only a single layer of carbon atoms.", "Because graphene is strong and conductive, researchers are trying to lower its manufacturing costs."], answerIndex: 1 }
  ],
 
  biology: [
    { question: "Which organelle is responsible for cellular respiration and ATP production in eukaryotic cells?", choices: ["Chloroplast", "Mitochondrion", "Endoplasmic Reticulum", "Golgi Apparatus"], answerIndex: 1 },
    { question: "What process results in four genetically diverse haploid daughter cells?", choices: ["Mitosis", "Binary Fission", "Meiosis", "Budding"], answerIndex: 2 },
    { question: "Which nitrogenous base pairs with adenine in RNA molecules?", choices: ["Thymine", "Uracil", "Guanine", "Cytosine"], answerIndex: 1 },
    { question: "What is the primary function of enzymes in biological systems?", choices: ["Store genetic information", "Provide structural support", "Lower the activation energy of reactions", "Transport oxygen"], answerIndex: 2 },
    { question: "In plant cells, which organelle converts light energy into chemical energy through photosynthesis?", choices: ["Mitochondrion", "Vacuole", "Chloroplast", "Ribosome"], answerIndex: 2 },
    { question: "Which type of blood vessel carries blood away from the heart?", choices: ["Veins", "Capillaries", "Arteries", "Venules"], answerIndex: 2 },
    { question: "Which biological macromolecule is primarily composed of amino acids linked by peptide bonds?", choices: ["Carbohydrates", "Proteins", "Lipids", "Nucleic Acids"], answerIndex: 1 },
    { question: "What term describes the movement of water molecules across a selectively permeable membrane from lower to higher solute concentration?", choices: ["Active transport", "Facilitated diffusion", "Osmosis", "Endocytosis"], answerIndex: 2 },
    { question: "Which hormone produced by the pancreas lowers blood glucose levels?", choices: ["Glucagon", "Insulin", "Cortisol", "Thyroxine"], answerIndex: 1 },
    { question: "In Mendelian genetics, what is the expected phenotypic ratio in the offspring of a monohybrid cross between two heterozygous individuals (Aa x Aa)?", choices: ["1:1", "1:2:1", "3:1", "9:3:3:1"], answerIndex: 2 }
  ],

  chemistry: [
    { question: "What is the atomic number of carbon?", choices: ["4", "6", "8", "12"], answerIndex: 1 },
    { question: "Which type of chemical bond involves the sharing of electron pairs between atoms?", choices: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"], answerIndex: 1 },
    { question: "What is the pH value of a neutral aqueous solution at 25 degrees Celsius?", choices: ["0", "5", "7", "14"], answerIndex: 2 },
    { question: "In the periodic table, elements in the same vertical column (group) share similar:", choices: ["Atomic masses", "Number of neutrons", "Chemical properties", "Atomic radii"], answerIndex: 2 },
    { question: "Which state of matter has a definite volume but no fixed shape?", choices: ["Solid", "Liquid", "Gas", "Plasma"], answerIndex: 1 },
    { question: "According to Avogadro's law, equal volumes of ideal gases at the same temperature and pressure contain equal numbers of:", choices: ["Protons", "Molecules", "Electrons", "Gram mass"], answerIndex: 1 },
    { question: "What type of reaction occurs when an acid reacts with a base to form water and a salt?", choices: ["Combustion", "Decomposition", "Neutralization", "Oxidation"], answerIndex: 2 },
    { question: "What is the molar mass of water (H2O) to the nearest whole number?", choices: ["16 g/mol", "18 g/mol", "20 g/mol", "32 g/mol"], answerIndex: 1 },
    { question: "Which principle states that electrons fill lower-energy atomic orbitals before higher-energy ones?", choices: ["Hund's rule", "Pauli exclusion principle", "Aufbau principle", "Le Chatelier's principle"], answerIndex: 2 },
    { question: "What is the oxidation state of oxygen in most covalent compounds like H2O?", choices: ["-2", "-1", "0", "+2"], answerIndex: 0 }
  ],

  satMathMedium: [
    { question: "If 3x - 5 = 16, what is the value of 6x + 2?", choices: ["37", "42", "44", "48"], answerIndex: 2 },
    { question: "A line passes through (2, 5) and (6, 13). What is the slope of this line?", choices: ["1/2", "2", "3", "4"], answerIndex: 1 },
    { question: "If f(x) = x^2 - 4x + 7, what is f(5)?", choices: ["12", "14", "18", "22"], answerIndex: 0 },
    { question: "Which of the following is equivalent to (2x + 3)(x - 4)?", choices: ["2x^2 - 12", "2x^2 - 5x - 12", "2x^2 + 5x - 12", "2x^2 - 11x - 12"], answerIndex: 1 },
    { question: "In a right triangle, one acute angle measures 35 degrees. What is the measure of the other acute angle?", choices: ["35 degrees", "45 degrees", "55 degrees", "65 degrees"], answerIndex: 2 },
    { question: "A store increases the price of an item by 20%, then discounts the new price by 20%. The final price is what percentage of the original price?", choices: ["96%", "100%", "104%", "80%"], answerIndex: 0 },
    { question: "If 2^(x+3) = 32, what is x?", choices: ["1", "2", "3", "4"], answerIndex: 1 },
    { question: "The average of five numbers is 18. If one number is removed, the average of the remaining four numbers is 20. What number was removed?", choices: ["10", "12", "15", "16"], answerIndex: 0 },
    { question: "What is the x-intercept of the line given by 4x - 3y = 24?", choices: ["(0, -8)", "(6, 0)", "(-8, 0)", "(0, 6)"], answerIndex: 1 },
    { question: "A circle in the xy-plane has equation (x-2)^2 + (y+5)^2 = 49. What are the coordinates of its center?", choices: ["(-2, 5)", "(2, -5)", "(-2, -5)", "(2, 5)"], answerIndex: 1 },
    { question: "If 4/(x - 1) = 2/3, what is x?", choices: ["5", "6", "7", "8"], answerIndex: 2 },
    { question: "What are the solutions to x^2 - 9x + 20 = 0?", choices: ["x = 4 and x = 5", "x = -4 and x = -5", "x = 2 and x = 10", "x = -2 and x = -10"], answerIndex: 0 },
    { question: "If a system of equations 2x + y = 7 and 4x + 2y = k has infinitely many solutions, what is k?", choices: ["7", "10", "14", "21"], answerIndex: 2 },
    { question: "A bag contains 4 red, 6 blue, and 5 green marbles. What is the probability of randomly drawing a marble that is NOT blue?", choices: ["2/5", "3/5", "4/15", "2/3"], answerIndex: 1 },
    { question: "If tan(A) = 3/4 in a right triangle, what is sin(A)?", choices: ["3/5", "4/5", "5/3", "4/3"], answerIndex: 0 },
    { question: "The function g(x) = 150(1.04)^t represents savings after t years. What is the annual interest rate percentage?", choices: ["0.4%", "4%", "40%", "104%"], answerIndex: 1 },
    { question: "What is the sum of the interior angles of a regular hexagon?", choices: ["360 degrees", "540 degrees", "720 degrees", "1080 degrees"], answerIndex: 2 },
    { question: "If 5x - 2y = 10, what is the value of 10x - 4y?", choices: ["10", "15", "20", "25"], answerIndex: 2 },
    { question: "The median of a set of 7 ordered values is 14. If the values are 5, 8, 10, x, 18, 22, 25, what is x?", choices: ["12", "14", "15", "16"], answerIndex: 1 },
    { question: "A rectangle has a perimeter of 36 cm. If length is twice width, what is its area in square cm?", choices: ["48", "72", "96", "108"], answerIndex: 1 }
  ],

  satMathEasy: [
    { question: "If x + 7 = 15, what is the value of x?", choices: ["6", "7", "8", "9"], answerIndex: 2 },
    { question: "What is 15% of 200?", choices: ["20", "25", "30", "35"], answerIndex: 2 },
    { question: "What is the perimeter of a square with a side length of 6 inches?", choices: ["12 inches", "18 inches", "24 inches", "36 inches"], answerIndex: 2 },
    { question: "Simplify: 4(x + 3)", choices: ["4x + 3", "4x + 7", "4x + 12", "x + 12"], answerIndex: 2 },
    { question: "What is the slope of the line y = 3x - 7?", choices: ["3", "-7", "7", "1/3"], answerIndex: 0 },
    { question: "Evaluate 3^3:", choices: ["6", "9", "27", "81"], answerIndex: 2 },
    { question: "What is the area of a rectangle with length 8 and width 5?", choices: ["13", "26", "40", "48"], answerIndex: 2 },
    { question: "Solve for y: 2y = 18", choices: ["7", "8", "9", "10"], answerIndex: 2 },
    { question: "What is the value of | -9 |?", choices: ["-9", "0", "9", "81"], answerIndex: 2 },
    { question: "In the coordinate plane, which quadrant contains the point (-3, 4)?", choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], answerIndex: 1 },
    { question: "If a car travels at 60 mph for 3 hours, how far does it travel?", choices: ["120 miles", "150 miles", "180 miles", "200 miles"], answerIndex: 2 },
    { question: "What is the average (mean) of 4, 8, and 12?", choices: ["6", "8", "10", "12"], answerIndex: 1 },
    { question: "Which of the following is a prime number?", choices: ["9", "12", "13", "15"], answerIndex: 2 },
    { question: "Convert 3/4 into a percentage:", choices: ["25%", "50%", "75%", "80%"], answerIndex: 2 },
    { question: "If y = 2x + 1 and x = 4, what is y?", choices: ["7", "8", "9", "10"], answerIndex: 2 },
    { question: "What is the square root of 144?", choices: ["10", "11", "12", "14"], answerIndex: 2 },
    { question: "Simplify the fraction 12/16 to its lowest terms:", choices: ["2/3", "3/4", "4/5", "5/6"], answerIndex: 1 },
    { question: "If a pencil costs $0.50, how many pencils can you buy with $5.00?", choices: ["5", "8", "10", "12"], answerIndex: 2 },
    { question: "What is the y-intercept of the line y = -2x + 5?", choices: ["(0, -2)", "(0, 5)", "(5, 0)", "(-2, 0)"], answerIndex: 1 },
    { question: "If x - 4 = -2, what is x?", choices: ["-6", "-2", "2", "6"], answerIndex: 2 }
  ],

  satEnglishMedium: [
    { question: "Although the historical documentary was praised for its thorough research, its pacing was described as ______ by viewers who found it slow.", choices: ["lively", "sluggish", "riveting", "innovative"], answerIndex: 1 },
    { question: "The architect ensured the design was both aesthetically pleasing and ______; every room served a distinct practical function.", choices: ["functional", "ornate", "obsolete", "redundant"], answerIndex: 0 },
    { question: "She decided to review the contract thoroughly; ______, she was reluctant to sign without fully understanding every clause.", choices: ["for example", "consequently", "however", "similarly"], answerIndex: 1 },
    { question: "The researchers analyzed the data collected during the study. ______, they organized their findings into comprehensive visual charts.", choices: ["Next", "In contrast", "Otherwise", "Nevertheless"], answerIndex: 0 },
    { question: "Neither the team captain nor the coaches ______ present at the post-game press conference.", choices: ["was", "were", "is", "being"], answerIndex: 1 },
    { question: "The set of guidelines ______ updated annually to reflect changes in regulatory standards.", choices: ["is", "are", "were", "have been"], answerIndex: 0 },
    { question: "Before submitting the application, the applicant must double-check ______ contact information.", choices: ["their", "his or her", "its", "there"], answerIndex: 0 },
    { question: "Having studied marine biology for over a decade, ______.", choices: ["the expedition was led by Dr. Carter", "Dr. Carter identified the rare coral species easily", "the rare coral species was easily identified", "it was easy to identify the rare coral"], answerIndex: 1 },
    { question: "The conference highlighted modern advancements in technology ______ artificial intelligence, quantum computing, and robotics.", choices: ["including:", "including", "including;", "including--"], answerIndex: 1 },
    { question: "The team prepared three distinct presentations ______ one for investors, one for clients, and one for internal staff.", choices: ["presentations:", "presentations;", "presentations,", "presentations--"], answerIndex: 0 },
    { question: "The author wrote several historical essays ______ examined the economic factors leading to the industrial revolution.", choices: ["essays that", "essays, that", "essays; that", "essays, which"], answerIndex: 0 },
    { question: "The new transit system not only reduces average commute times ______ decreases citywide carbon emissions.", choices: ["and also", "but also", "as well as", "or"], answerIndex: 1 },
    { question: "The lead engineer, along with her assistant technicians, ______ testing the prototype all afternoon.", choices: ["has been", "have been", "are", "were"], answerIndex: 0 },
    { question: "Each of the participants in the study ______ required to fill out a detailed health survey.", choices: ["were", "was", "are", "have been"], answerIndex: 1 },
    { question: "Which choice best completes the sentence to show cause and effect? The city installed new bike lanes; ______, commuter cycling increased by 30%.", choices: ["nevertheless", "as a result", "in contrast", "for instance"], answerIndex: 1 },
    { question: "A study showed that students who take handwritten notes retain conceptual information better than those who type. Which finding supports this claim?", choices: ["Typed notes are generally longer than handwritten notes.", "Students taking handwritten notes score higher on factual retention tests.", "Students writing by hand demonstrate stronger conceptual recall on exams.", "Laptops are becoming more common in university lecture halls."], answerIndex: 2 },
    { question: "Text 1 highlights the ecological benefits of reintroducing wolves to Yellowstone. Text 2 focuses on rancher concerns regarding livestock losses. How does Text 2 relate to Text 1?", choices: ["Text 2 refutes the scientific validity of Text 1.", "Text 2 presents a practical economic challenge arising from the situation in Text 1.", "Text 2 provides statistical proof supporting Text 1.", "Text 2 describes the historical background of wolf conservation."], answerIndex: 1 },
    { question: "Notes: Maya Lin designed the Vietnam Veterans Memorial in 1981; located in Washington, D.C.; features black granite walls; honors fallen service members. Which choice best emphasizes the MEMORIAL'S DESIGN?", choices: ["Maya Lin designed the famous memorial located in Washington, D.C., in 1981.", "The Vietnam Veterans Memorial honors fallen service members in Washington, D.C.", "Designed by Maya Lin in 1981, the memorial features distinctive black granite walls.", "Located in Washington, D.C., the memorial was created by Maya Lin."], answerIndex: 2 },
    { question: "Notes: Solar panels convert sunlight into electricity; wind turbines use wind energy; both are renewable energy sources. Which choice best CONTRASTS the two technologies?", choices: ["Both solar panels and wind turbines are clean, renewable sources of energy.", "While solar panels convert sunlight into electricity, wind turbines generate power from wind movement.", "Renewable energy can be generated using both solar power and wind turbines.", "Solar panels and wind turbines help lower reliance on fossil fuels."], answerIndex: 1 },
    { question: "The researcher's presentation was praised for being succinct; she conveyed complex ideas using concise language. What does 'succinct' mean in this context?", choices: ["Overly detailed", "Brief and clear", "Confusing", "Repetitive"], answerIndex: 1 }
  ],

  satEnglishEasy: [
    { question: "She was very ______ about the upcoming trip and could hardly sleep.", choices: ["excited", "excite", "excitement", "excitingly"], answerIndex: 0 },
    { question: "The dog wagged ______ tail when its owner returned home.", choices: ["its", "it's", "its'", "there"], answerIndex: 0 },
    { question: "I wanted to go for a walk, ______ it started raining heavily outside.", choices: ["so", "but", "or", "and"], answerIndex: 1 },
    { question: "The students ______ studying in the library for their final exams.", choices: ["is", "are", "was", "be"], answerIndex: 1 },
    { question: "Choose the sentence with correct punctuation:", choices: ["We bought apples, oranges, and bananas.", "We bought apples oranges, and bananas.", "We bought, apples, oranges, and bananas.", "We bought apples, oranges and, bananas."], answerIndex: 0 },
    { question: "The book was so interesting that I couldn't put ______ down.", choices: ["him", "them", "it", "its"], answerIndex: 2 },
    { question: "He runs ______ than his brother.", choices: ["fast", "faster", "fastest", "more fast"], answerIndex: 1 },
    { question: "Choose the correct spelling:", choices: ["Recieve", "Receive", "Receeve", "Recive"], answerIndex: 1 },
    { question: "The cat slept peacefully ______ the comfortable armchair.", choices: ["on", "underneath of", "at", "into"], answerIndex: 0 },
    { question: "Neither of the options ______ appealing to me.", choices: ["seem", "seems", "are", "were"], answerIndex: 1 },
    { question: "She spoke ______ during the presentation so everyone could hear her clearly.", choices: ["loud", "loudly", "loudness", "louder"], answerIndex: 1 },
    { question: "Which transition word shows addition?", choices: ["However", "Furthermore", "Therefore", "Otherwise"], answerIndex: 1 },
    { question: "Every student should bring ______ own lunch to the field trip.", choices: ["their", "there", "they're", "its"], answerIndex: 0 },
    { question: "Which word is a synonym for 'happy'?", choices: ["Joyful", "Gloomy", "Anxious", "Sullen"], answerIndex: 0 },
    { question: "Identify the complete sentence:", choices: ["Running through the park on a sunny afternoon.", "Because the weather was warm and pleasant.", "The athlete trained hard for the upcoming race.", "After finishing the difficult assignment."], answerIndex: 2 },
    { question: "The team won ______ first match of the season.", choices: ["its", "it's", "their", "there"], answerIndex: 0 },
    { question: "What is the main purpose of an introduction paragraph in an essay?", choices: ["To state the main argument and engage the reader.", "To present detailed statistical evidence.", "To summarize all final arguments.", "To list all cited sources."], answerIndex: 0 },
    { question: "Choose the sentence with correct capitalization:", choices: ["We visited new york city last Summer.", "We visited New York City last summer.", "We visited New York city last Summer.", "we visited New York City last summer."], answerIndex: 1 },
    { question: "Which choice represents the opposite (antonym) of 'ancient'?", choices: ["Old", "Modern", "Historic", "Traditional"], answerIndex: 1 },
    { question: "She has lived in California ______ five years.", choices: ["since", "for", "during", "from"], answerIndex: 1 }
  ]
};

let questions = [];      
let currentIndex = 0;     
let correctCount = 0;      
const CORRECT_NEEDED = 5; 

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById("questionText").textContent = q.question;
 
  const list = document.getElementById("choicesList");
  list.innerHTML = ""; 
 
  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => checkAnswer(index));
    list.appendChild(button);
  });
}
 
function checkAnswer(selectedIndex) {
  const q = questions[currentIndex];
  const buttons = document.querySelectorAll("#choicesList button");
 
  if (selectedIndex === q.answerIndex) {
    correctCount++;
    buttons[selectedIndex].classList.add("correct-answer");
  } else {
    buttons[selectedIndex].classList.add("wrong-answer");
    buttons[q.answerIndex].classList.add("correct-answer");
  }
 
  buttons.forEach(btn => btn.disabled = true); 
  document.getElementById("counter").textContent = `${correctCount} / ${CORRECT_NEEDED} correct`;
  document.getElementById("progressFill").style.width = (correctCount / CORRECT_NEEDED * 100) + "%";
 
  setTimeout(() => {
    if (correctCount >= CORRECT_NEEDED) {
      unlockSite();
    } else {
      currentIndex++;
      if (currentIndex < questions.length) {
        showQuestion();
      } else {
        document.getElementById("questionText").textContent = "Out of questions. Refresh to try again.";
        document.getElementById("choicesList").innerHTML = "";
      }
    }
  }, 900);
}
 
function unlockSite() {
  chrome.runtime.sendMessage({ type: "UNLOCK" });
  document.getElementById("lockIcon").classList.add("unlocked");
  document.getElementById("choicesList").innerHTML = "";

  if (originalSite) {
    document.getElementById("questionText").textContent = "Unlocked! Redirecting...";
    setTimeout(() => {
      window.location.href = `https://${originalSite}`;
    }, 2200);
  } else {
    document.getElementById("questionText").textContent = "Unlocked! Open your site in a new tab.";
  }
}
 
document.getElementById("startButton").addEventListener("click", () => {
  const subject = document.getElementById("subjectSelect").value;
questions = [...questionBank[subject]].sort(() => Math.random() - 0.5);  currentIndex = 0;
  correctCount = 0;
 
  document.getElementById("subjectPicker").style.display = "none";
  document.getElementById("quizArea").style.display = "block";
 
  document.getElementById("counter").textContent = `0 / ${CORRECT_NEEDED} correct`;
  document.getElementById("progressFill").style.width = "0%";
  showQuestion();
});
 
