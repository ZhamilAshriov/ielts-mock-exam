const EXAM_DATA = {
  // ==========================================
  // 1. WRITING VARIANTS (1–4)
  // ==========================================
  writingVariants: [
    {
      variantId: "Writing Variant 1",
      task1Text: "The bar graph below shows the stock price of four different technology companies from 2011 to 2016.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1Image: "w1.png",
      task2Text: "Some people think that all university students should study whatever they like. Others believe that they should only be allowed to study subjects that will be useful in the future, such as those related to science and technology.\n\nDiscuss both these views and give your own opinion."
    },
    {
      variantId: "Writing Variant 2",
      task1Text: "The charts below illustrate which of 3 fast food restaurants were the most preferred amongst teenagers in Vietnam and Indonesia in 2017 and predictions for 2027.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1Image: "w2.png",
      task2Text: "There is an increasing trend around the world of married couples deciding not to have children.\n\nDiscuss the advantages and disadvantages for couples who decide to do this."
    },
    {
      variantId: "Writing Variant 3",
      task1Text: "The table below shows the expenses of a used bookstore in Scotland for the first and last month of the same year.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1Image: "w3.png",
      task2Text: "Some people think that the teenage years are the happiest time of most people’s lives. Others think that adult life brings more happiness, in spite of greater responsibility.\n\nDiscuss both views and give your own opinion."
    },
    {
      variantId: "Writing Variant 4",
      task1Text: "The diagram below shows the stages in the food production chain of the United States.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1Image: "w5.png",
      task2Text: "In many professional sports, there is an increase in the number of athletes using banned substances to improve their performance.\n\nWhat are the causes of the phenomenon and what are some of the possible solutions?"
    }
  ],

  // ==========================================
  // 2. LISTENING (40 QUESTIONS — ROOM AUDIO)
  // ==========================================
  listening: {
    parts: [
      {
        part: 1,
        title: "Part 1: Questions 1–10",
        html: `
          <p style="margin-bottom: 14px; color: #475569;">Complete the notes below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.</p>
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:18px; line-height:2.2; font-size:15px;">
            <h4 style="margin-bottom:8px; color:#0b1a30;">Hinchingbrooke Country Park</h4>
            <div><strong>The park</strong></div>
            <div>• Area: <strong>1</strong> <input type="text" id="lis_q1" class="inline-q"> hectares</div>
            <div>• Habitats: wetland, grassland and woodland</div>
            <div>• Wetland: lakes, ponds and a <strong>2</strong> <input type="text" id="lis_q2" class="inline-q"></div>
            <div>• Wildlife includes birds, insects and animals</div>

            <div style="margin-top:10px;"><strong>Subjects studied in educational visits include</strong></div>
            <div>• Science: Children look at <strong>3</strong> <input type="text" id="lis_q3" class="inline-q"> about plants, etc.</div>
            <div>• Geography: includes learning to use a <strong>4</strong> <input type="text" id="lis_q4" class="inline-q"> and compass</div>
            <div>• History: changes in land use</div>
            <div>• Leisure and tourism: mostly concentrates on the park’s <strong>5</strong> <input type="text" id="lis_q5" class="inline-q"></div>
            <div>• Music: Children make <strong>6</strong> <input type="text" id="lis_q6" class="inline-q"> with natural materials, and experiment with rhythm and speed.</div>

            <div style="margin-top:10px;"><strong>Benefits of outdoor educational visits</strong></div>
            <div>• They give children a feeling of <strong>7</strong> <input type="text" id="lis_q7" class="inline-q"> that they may not have elsewhere.</div>
            <div>• Children learn new <strong>8</strong> <input type="text" id="lis_q8" class="inline-q"> and gain self-confidence.</div>

            <div style="margin-top:10px;"><strong>Practical issues</strong></div>
            <div>• Cost per child: £ <strong>9</strong> <input type="text" id="lis_q9" class="inline-q"></div>
            <div>• Adults, such as <strong>10</strong> <input type="text" id="lis_q10" class="inline-q">, free</div>
          </div>
        `
      },
      {
        part: 2,
        title: "Part 2: Questions 11–20",
        html: `
          <p style="margin-bottom:10px; font-weight:bold;">Questions 11–16: Choose the correct letter, A–I, for each volunteer activity.</p>
          <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:12px; border-radius:4px; font-size:13px; margin-bottom:14px; line-height:1.7;">
            <strong>A.</strong> providing entertainment &nbsp;|&nbsp;
            <strong>B.</strong> providing publicity about a council service &nbsp;|&nbsp;
            <strong>C.</strong> contacting local businesses<br>
            <strong>D.</strong> giving advice to visitors &nbsp;|&nbsp;
            <strong>E.</strong> collecting feedback on events &nbsp;|&nbsp;
            <strong>F.</strong> selling tickets<br>
            <strong>G.</strong> introducing guest speakers at an event &nbsp;|&nbsp;
            <strong>H.</strong> encouraging cooperation between local organisations &nbsp;|&nbsp;
            <strong>I.</strong> helping people find their seats
          </div>
          <div class="q-row"><strong>11.</strong> walking around the town centre
            <select id="lis_q11"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option><option>I</option></select>
          </div>
          <div class="q-row"><strong>12.</strong> helping at concerts
            <select id="lis_q12"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option><option>I</option></select>
          </div>
          <div class="q-row"><strong>13.</strong> getting involved with community groups
            <select id="lis_q13"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option><option>I</option></select>
          </div>
          <div class="q-row"><strong>14.</strong> helping with a magazine
            <select id="lis_q14"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option><option>I</option></select>
          </div>
          <div class="q-row"><strong>15.</strong> participating at lunches for retired people
            <select id="lis_q15"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option><option>I</option></select>
          </div>
          <div class="q-row"><strong>16.</strong> helping with the website
            <select id="lis_q16"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option><option>I</option></select>
          </div>

          <p style="margin:18px 0 10px; font-weight:bold;">Questions 17–20: Choose the correct letter, A, B or C.</p>
          <div class="q-block">
            <p><strong>17.</strong> Which event requires the largest number of volunteers?</p>
            <label><input type="radio" name="lis_q17" value="A"> A. the music festival</label>
            <label><input type="radio" name="lis_q17" value="B"> B. the science festival</label>
            <label><input type="radio" name="lis_q17" value="C"> C. the book festival</label>
          </div>
          <div class="q-block">
            <p><strong>18.</strong> What is the most important requirement for volunteers at the festivals?</p>
            <label><input type="radio" name="lis_q18" value="A"> A. interpersonal skills</label>
            <label><input type="radio" name="lis_q18" value="B"> B. personal interest in the event</label>
            <label><input type="radio" name="lis_q18" value="C"> C. flexibility</label>
          </div>
          <div class="q-block">
            <p><strong>19.</strong> New volunteers will start working in the week beginning</p>
            <label><input type="radio" name="lis_q19" value="A"> A. 2 September</label>
            <label><input type="radio" name="lis_q19" value="B"> B. 9 September</label>
            <label><input type="radio" name="lis_q19" value="C"> C. 23 September</label>
          </div>
          <div class="q-block">
            <p><strong>20.</strong> What is the next annual event for volunteers?</p>
            <label><input type="radio" name="lis_q20" value="A"> A. a boat trip</label>
            <label><input type="radio" name="lis_q20" value="B"> B. a barbecue</label>
            <label><input type="radio" name="lis_q20" value="C"> C. a party</label>
          </div>
        `
      },
      {
        part: 3,
        title: "Part 3: Questions 21–30",
        html: `
          <p style="margin-bottom:10px; font-weight:bold;">Questions 21–26: Choose the correct letter, A, B, or C.</p>
          <div class="q-block">
            <p><strong>21.</strong> What was Jack’s attitude to nutritional food labels before this project?</p>
            <label><input type="radio" name="lis_q21" value="A"> A. He didn’t read everything on them.</label>
            <label><input type="radio" name="lis_q21" value="B"> B. He didn’t think they were important.</label>
            <label><input type="radio" name="lis_q21" value="C"> C. He thought they were too complicated.</label>
          </div>
          <div class="q-block">
            <p><strong>22.</strong> Alice says that before doing this project,</p>
            <label><input type="radio" name="lis_q22" value="A"> A. she was unaware of what certain foods contained.</label>
            <label><input type="radio" name="lis_q22" value="B"> B. she was too lazy to read food labels.</label>
            <label><input type="radio" name="lis_q22" value="C"> C. she was only interested in the number of calories.</label>
          </div>
          <div class="q-block">
            <p><strong>23.</strong> When discussing supermarket brands of pizza, Jack agrees with Alice that</p>
            <label><input type="radio" name="lis_q23" value="A"> A. the list of ingredients is shocking.</label>
            <label><input type="radio" name="lis_q23" value="B"> B. he will hesitate before buying pizza again.</label>
            <label><input type="radio" name="lis_q23" value="C"> C. the nutritional label is misleading.</label>
          </div>
          <div class="q-block">
            <p><strong>24.</strong> Jack prefers the daily value system to other labelling systems because it is</p>
            <label><input type="radio" name="lis_q24" value="A"> A. more accessible.</label>
            <label><input type="radio" name="lis_q24" value="B"> B. more logical.</label>
            <label><input type="radio" name="lis_q24" value="C"> C. more comprehensive.</label>
          </div>
          <div class="q-block">
            <p><strong>25.</strong> What surprised both students about one flavour of crisps?</p>
            <label><input type="radio" name="lis_q25" value="A"> A. The percentage of artificial additives given was incorrect.</label>
            <label><input type="radio" name="lis_q25" value="B"> B. The products did not contain any meat.</label>
            <label><input type="radio" name="lis_q25" value="C"> C. The labels did not list all the ingredients.</label>
          </div>
          <div class="q-block">
            <p><strong>26.</strong> What do the students think about research into the impact of nutritional food labelling?</p>
            <label><input type="radio" name="lis_q26" value="A"> A. It did not produce clear results.</label>
            <label><input type="radio" name="lis_q26" value="B"> B. It focused on the wrong people.</label>
            <label><input type="radio" name="lis_q26" value="C"> C. It made unrealistic recommendations.</label>
          </div>

          <p style="margin:18px 0 10px; font-weight:bold;">Questions 27–28: Choose TWO letters, A–E. Which TWO things surprised the students about the traffic-light system for nutritional labels?</p>
          <div id="lis_q27_28_group" style="line-height:1.9; margin-bottom:14px;">
            <label style="display:block;"><input type="checkbox" name="lis_multi_27_28" value="A"> A. its widespread use</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_27_28" value="B"> B. the fact that it is voluntary for supermarkets</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_27_28" value="C"> C. how little research was done before its introduction</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_27_28" value="D"> D. its unpopularity with food manufacturers</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_27_28" value="E"> E. the way that certain colours are used</label>
          </div>

          <p style="margin:18px 0 10px; font-weight:bold;">Questions 29–30: Choose TWO letters, A–E. Which TWO things are true about the participants in the study on the traffic-light system?</p>
          <div id="lis_q29_30_group" style="line-height:1.9;">
            <label style="display:block;"><input type="checkbox" name="lis_multi_29_30" value="A"> A. They had low literacy levels.</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_29_30" value="B"> B. They were regular consumers of packaged food.</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_29_30" value="C"> C. They were selected randomly.</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_29_30" value="D"> D. They were from all socio-economic groups.</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_29_30" value="E"> E. They were interviewed face-to-face.</label>
          </div>
        `
      },
      {
        part: 4,
        title: "Part 4: Questions 31–40",
        html: `
          <p style="margin-bottom: 14px; color: #475569;">Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.</p>
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:18px; line-height:2.2; font-size:15px;">
            <h4 style="margin-bottom:8px; color:#0b1a30;">The history of coffee</h4>
            <div><strong>Coffee in the Arab world</strong></div>
            <div>• There was small-scale trade in wild coffee from Ethiopia.</div>
            <div>• 1522: Coffee was approved in the Ottoman court as a type of medicine.</div>
            <div>• 1623: In Constantinople, the ruler ordered the <strong>31</strong> <input type="text" id="lis_q31" class="inline-q"> of every coffee house.</div>

            <div style="margin-top:10px;"><strong>Coffee arrives in Europe (17th century)</strong></div>
            <div>• Coffee shops were compared to <strong>32</strong> <input type="text" id="lis_q32" class="inline-q">.</div>
            <div>• They played an important part in social and <strong>33</strong> <input type="text" id="lis_q33" class="inline-q"> changes.</div>

            <div style="margin-top:10px;"><strong>Coffee and European colonization</strong></div>
            <div>• European powers established coffee plantations in their colonies.</div>
            <div>• Types of coffee were often named according to the <strong>34</strong> <input type="text" id="lis_q34" class="inline-q"> they came from.</div>
            <div>• In Brazil and the Caribbean, most cultivation depended on <strong>35</strong> <input type="text" id="lis_q35" class="inline-q">.</div>
            <div>• In Java, coffee was used as a form of <strong>36</strong> <input type="text" id="lis_q36" class="inline-q">.</div>
            <div>• Coffee became almost as important as <strong>37</strong> <input type="text" id="lis_q37" class="inline-q">.</div>
            <div>• The move towards the consumption of <strong>38</strong> <input type="text" id="lis_q38" class="inline-q"> in Britain did not also take place in the USA.</div>

            <div style="margin-top:10px;"><strong>Coffee in the 19th century</strong></div>
            <div>• Prices dropped because of improvements in <strong>39</strong> <input type="text" id="lis_q39" class="inline-q">.</div>
            <div>• Industrial workers found coffee helped them to work at <strong>40</strong> <input type="text" id="lis_q40" class="inline-q">.</div>
          </div>
        `
      }
    ],
    answers: {
      1: ["69", "sixty-nine", "sixty nine"],
      2: ["stream"],
      3: ["data"],
      4: ["map"],
      5: ["visitors"],
      6: ["sounds"],
      7: ["freedom"],
      8: ["skills"],
      9: ["4.95"],
      10: ["leaders"],
      11: ["d"],
      12: ["i"],
      13: ["h"],
      14: ["e"],
      15: ["a"],
      16: ["b"],
      17: ["b"],
      18: ["a"],
      19: ["b"],
      20: ["a"],
      21: ["a"],
      22: ["a"],
      23: ["c"],
      24: ["c"],
      25: ["b"],
      26: ["a"],
      27: ["b", "c"],
      28: ["b", "c"],
      29: ["d", "e"],
      30: ["d", "e"],
      31: ["destruction"],
      32: ["university", "universities"],
      33: ["political"],
      34: ["port", "ports"],
      35: ["slaves", "slavery"],
      36: ["taxation"],
      37: ["sugar"],
      38: ["tea"],
      39: ["transportation"],
      40: ["night"]
    }
  },

  // ==========================================
  // 3. READING VARIANTS (1–2)
  // ==========================================
  readingVariants: [
    // --- READING VARIANT 1: Beatrix Potter / Waste Disposal / Movement Underwater ---
    {
      variantId: "Reading Variant 1",
      passages: [
        {
          part: 1,
          title: "Passage 1: The life of Beatrix Potter (Questions 1–13)",
          passageHtml: `
            <h3 style="margin-bottom:6px;">The life of Beatrix Potter</h3>
            <p style="font-style:italic; color:#475569; margin-bottom:14px;">The children's author and illustrator who created Peter Rabbit</p>
            <p style="margin-bottom:12px;">Beatrix Potter is one of the best-selling children's authors of all time. Her popular series of books that includes <em>The Tale of Peter Rabbit</em> was first published over one hundred years ago, and has never been out of print. Generations of children have enjoyed her many stories and illustrations, all of which celebrate the English lifestyle and rural landscape through the adventures of animals.</p>
            <p style="margin-bottom:12px;">Born to a comfortable middle-class family in London in 1866, Potter spent much of her early life in her own company. She was educated in her parents' house by a governess and rarely saw her brother Bertram, who was sent to boarding school. Having little social contact with children of her own age, Potter began to be drawn into her own world of writing. When Beatrix was 15, she began to keep a diary written in a secret code of her own invention. Even Beatrix herself, when she read back over it in later life, found it difficult to understand. It was not until 15 years after her death that the code was cracked. To the outside world Beatrix appeared a shy and reserved person, but in her diary she was able to express herself openly, and she was critical of the paintings of a number of artists of the day.</p>
            <p style="margin-bottom:12px;">Potter was a naturally gifted artist, and with the aid of some art lessons she also learnt the technical side of drawing. During her childhood, she looked after many animals, such as rabbits, frogs, and even bats. She drew these animals throughout her childhood, gradually improving the standard of her work by sketching in museums. She was also interested in natural history. She would spend many hours drawing wildlife such as fungi and flowers, and at one time she had an ambition to develop this scientific interest. An uncle tried to help her become a student at the Royal Botanic Gardens at Kew in London, but she was rejected because of her gender. Nevertheless, she achieved a measure of respect from the scientific establishment for her illustrations and contribution to mycology, the study of fungi.</p>
            <p style="margin-bottom:12px;">When Potter was in her early 20s, her parents tried to arrange a partner for her to marry. Many likely suitors were found; however, Potter turned them all down. She was a fiercely independent woman, and she disliked the idea of being tied down to a domestic life that, at that time, consisted mostly of staying at home and bringing up children. Thus, unusually for British women of those times, she remained single and lived in her parents' home.</p>
            <p style="margin-bottom:12px;">For several years, Potter tried to get her first children's book, <em>The Tale of Peter Rabbit</em>, published. Her initial attempts proved unsuccessful, but she persevered and eventually the book was accepted for publication by Frederick Warne & Company. The book finally came out in 1902, when Potter was 36, but the publishers did not expect it would sell many copies. In fact, the project was given to the youngest brother in the family company, Norman Warne, for his first project as a kind of test. Luckily, he proved to be a good choice as he warmed to both the book and Potter. He was determined to make a success of the book and developed a good working relationship with Potter as they pored over the individual details of the book. It was Norman who insisted that each drawing would be in colour. Potter insisted that the book remain small so that it would be easy for children to hold, and by the end of the year, 28,000 copies were in print.</p>
            <p style="margin-bottom:12px;">The relationship between Warne and Potter blossomed, and eventually they became engaged. However, Potter's parents were unhappy about this because of his occupation. They eventually relented, but insisted the couple live apart for six months to give Potter time to change her mind. Tragically, before the wedding could take place, Warne developed pernicious anaemia, a blood disease, and passed away. Potter was devastated and she wrote in a letter to his sister, Millie, 'He did not live long, but he fulfilled a useful, happy life. I must try to make a fresh beginning next year.'</p>
            <p style="margin-bottom:12px;">After Warne's death, Potter moved to the Lake District in northern England. In 1905 she bought a small farm there, and for the next eight years she busied herself writing more books, some of which were based in or around the area. She lived there for the remainder of her life, but due to failing eyesight she was forced to stop writing children's books. Instead, she devoted her time to the breeding of sheep and helping with the conservation of farms in the district. Using proceeds from her very successful books and later her inheritance, Potter was able to buy many working farms. On her death, she left over 4,000 acres to the National Trust, an organisation which protects historical buildings and areas of countryside in England. It has meant that her beloved countryside is now accessible to many visitors.</p>
          `,
          questionsHtml: `
            <h4 style="margin-bottom:8px;">Questions 1–6</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Complete the notes below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.</p>
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px; line-height:2.1; font-size:14px; margin-bottom:16px;">
              <div><strong>Beatrix Potter</strong></div>
              <div><em>Success as an author:</em> Her books have been in print for more than 100 years.</div>
              <div style="margin-top:6px;"><strong>Childhood</strong></div>
              <div>• She received lessons at home from a <strong>1</strong> <input type="text" id="rd_q1" class="inline-q"></div>
              <div>• She wrote in her <strong>2</strong> <input type="text" id="rd_q2" class="inline-q"> in code.</div>
              <div>• She disliked the work of some <strong>3</strong> <input type="text" id="rd_q3" class="inline-q"> of the time.</div>
              <div>• She took lessons in drawing.</div>
              <div>• She practised drawing things she saw when she visited <strong>4</strong> <input type="text" id="rd_q4" class="inline-q"></div>
              <div style="margin-top:6px;"><strong>Life as a young adult</strong></div>
              <div>• Her <strong>5</strong> <input type="text" id="rd_q5" class="inline-q"> to have a career in natural history was not realised.</div>
              <div>• Her illustrations were recognised as assisting research into <strong>6</strong> <input type="text" id="rd_q6" class="inline-q"></div>
            </div>

            <h4 style="margin-bottom:8px;">Questions 7–13</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Choose <strong>TRUE</strong>, <strong>FALSE</strong> or <strong>NOT GIVEN</strong>.</p>
            <div class="q-block">
              <p><strong>7.</strong> The life of a typical married woman at that time appealed to Potter.</p>
              <label><input type="radio" name="rd_q7" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q7" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q7" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>8.</strong> Potter's publishers insisted on changing the title of her first book.</p>
              <label><input type="radio" name="rd_q8" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q8" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q8" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>9.</strong> The publishers doubted whether Potter's first book would be successful.</p>
              <label><input type="radio" name="rd_q9" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q9" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q9" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>10.</strong> Norman Warne suggested Potter include black and white illustrations in her first book.</p>
              <label><input type="radio" name="rd_q10" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q10" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q10" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>11.</strong> At first, Potter's parents disapproved of Norman Warne as a potential husband.</p>
              <label><input type="radio" name="rd_q11" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q11" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q11" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>12.</strong> Potter continued writing children's books until her death.</p>
              <label><input type="radio" name="rd_q12" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q12" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q12" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>13.</strong> Potter's gift to the National Trust was the largest in recent times.</p>
              <label><input type="radio" name="rd_q13" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q13" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q13" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
          `
        },
        {
          part: 2,
          title: "Passage 2: Solving the problem of waste disposal (Questions 14–26)",
          passageHtml: `
            <h3 style="margin-bottom:6px;">Solving the problem of waste disposal</h3>
            <p style="font-style:italic; color:#475569; margin-bottom:14px;">With the amount of rubbish being produced around the world increasing, Mark Rowe asks whether a new generation of incineration plants can help to solve the problem.</p>
            <p style="margin-bottom:12px;"><strong>A</strong> For many years, burning rubbish has been portrayed as the lazy option when it comes to dealing with the problem of waste disposal, since it sends toxic fumes into the air and appears to support a consumerist, throwaway society. Norway, however, appears to be burning its way through a sizeable chunk of Europe's municipal waste, using the heat created by this process to warm and power homes in many of its cities. Norway isn't alone: Germany, Sweden, Belgium and the Netherlands all burn significant quantities of rubbish, and across Europe there are 420 plants burning municipal waste. With Europe dumping 150 million tonnes of rubbish into landfill every year, there would seem to be limitless supply.</p>
            <p style="margin-bottom:12px;"><strong>B</strong> Those who support burning waste say that a new generation of incinerators have made it a more attractive option. Filters and scrubbing mechanisms now capture harmful substances such as mercury, hydrochloric acid and heavy metals. According to Ted Michaels, president of the US-based Energy Recovery Centre, 'There has been constant evolution in combustion engineering and emissions-control technology, and the output from these facilities is now minuscule.' Above all, however, supporters say that incineration is the only way of preventing the long-term impacts of landfill. In ten years' time, says the World Bank, humans will be generating 2.2 billion tonnes of solid waste per year. Advocates see incineration as a practical way to deal swiftly with an immediate problem.</p>
            <p style="margin-bottom:12px;"><strong>C</strong> Levels of waste generation vary hugely around the world. 'It's a problem for the developed nations,' says Joergen Fenhann, a senior scientist working with the UN Environment Programme in Denmark. 'The more you develop, the more you produce, buy and throw away.' But the growth of incineration hasn't been universally welcomed. Lars Haltbrekken, chairman of Friends of the Earth in Norway, is concerned that incineration plants appear to generate demand for their services. 'The problem in Norway,' he explains, 'is that we have built too many waste-burning factories. So we've ended up importing waste from other countries. If you look at this in a very small perspective, it is, of course, better for the climate to burn rubbish from the UK rather than leave it in landfill there,' he continues. 'But in a broader perspective, it's a lazy way of getting rid of waste; you don't stimulate the goals of reducing, reusing and recycling.'</p>
            <p style="margin-bottom:12px;"><strong>D</strong> Incineration is also at odds with EU policy, which promotes a ‘recycling hierarchy’: ideally, we simply produce less waste in the first place; failing that, we reuse objects more; the next best option is recycling; only then should we consider incineration, while dumping in landfill is the last resort. Dealing with the problem of waste disposal involves tracing the whole process that took the material from its inception to landfill. We used to call this the ‘cradle to grave’ life cycle; now, the talk is of ‘cradle to cradle’ and an even more comprehensive concept known as ‘zero waste’. ‘The philosophy of cradle to cradle is about designing products that are actually good for the environment at the end of their life,’ says Joan Marc Simon, European spokesman for the environmental movement GAIA. ‘You design a bottle that contains no toxins, is fully recyclable and requires the minimum amount of energy to be produced.’ As Simon points out, however, without the right mechanisms in place, ‘nothing guarantees that this bottle will end up being properly collected and treated in the appropriate recycling facility.’</p>
            <p style="margin-bottom:12px;"><strong>E</strong> Tim Burns, policy manager at Keep Britain Tidy, says, ‘In the UK alone, people waste 10 billion of food every year. You can argue about composting that, or not buying it in the first place—if you do that then that’s money the retailers don’t get, so it’s not always clear cut.’ The implications of zero waste are that we’re going to have to take a good long look at those well-stocked supermarket shelves, too. ‘Supermarkets keep their shelves stocked even when demand isn’t there, which means they have to pay to dispose of a lot of food,’ says Burns. ‘But that cost is less to them than the cost in brand damage of having empty shelves.’</p>
            <p style="margin-bottom:12px;"><strong>F</strong> Recent history and changes in trends in recycling suggest that we should be prepared for unexpected developments. ‘If someone back in the 1980s had suggested what waste would be like now, they would be completely wrong,’ says Richard Fisher, a PhD researcher at Cranfield University. ‘Consumerism has developed at a pace we never expected. Nobody would have said there would be so much electronic waste. But recycling has grown, too—ten years ago nobody would have predicted today’s levels of recycling.’ But he points out that the need to reduce waste is still a difficult message to sell to consumers. He suggests that what people are really concerned about is their loved ones and the future they face. ‘Perhaps we can align the environmental message to these deep-seated values,’ he says. ‘We need to look at whether it’s business that drives consumers or the other way around. You need government to play a leadership role, whereas countries such as the UK seem to be stepping away from the environment in pursuit of short-term economic goals.’</p>
          `,
          questionsHtml: `
            <h4 style="margin-bottom:8px;">Questions 14–19</h4>
            <p style="margin-bottom:8px; font-size:13px; color:#475569;">Choose the correct heading for each paragraph from the list below:</p>
            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:10px; border-radius:4px; font-size:13px; margin-bottom:12px; line-height:1.6;">
              <strong>i.</strong> New terminology reflecting changing attitudes to waste disposal<br>
              <strong>ii.</strong> Fundamental changes in behaviour in the past and future<br>
              <strong>iii.</strong> Ways of rewarding the public for recycling<br>
              <strong>iv.</strong> A surprising approach to waste disposal by several countries<br>
              <strong>v.</strong> Difficult choices for individuals and businesses<br>
              <strong>vi.</strong> Arguments against incineration from a country that uses it<br>
              <strong>vii.</strong> A number of justifications for the use of incineration
            </div>
            <div class="q-row"><strong>14.</strong> Paragraph A <select id="rd_q14"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option></select></div>
            <div class="q-row"><strong>15.</strong> Paragraph B <select id="rd_q15"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option></select></div>
            <div class="q-row"><strong>16.</strong> Paragraph C <select id="rd_q16"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option></select></div>
            <div class="q-row"><strong>17.</strong> Paragraph D <select id="rd_q17"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option></select></div>
            <div class="q-row"><strong>18.</strong> Paragraph E <select id="rd_q18"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option></select></div>
            <div class="q-row"><strong>19.</strong> Paragraph F <select id="rd_q19"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option></select></div>

            <h4 style="margin:16px 0 8px;">Questions 20–23</h4>
            <p style="margin-bottom:8px; font-size:13px; color:#475569;">Match each person with the correct statement, A–G:</p>
            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:10px; border-radius:4px; font-size:13px; margin-bottom:12px; line-height:1.6;">
              <strong>A.</strong> Incineration does not encourage responsible attitudes to waste disposal.<br>
              <strong>B.</strong> Recycling can sometimes create serious problems for the future.<br>
              <strong>C.</strong> Greater consumerism leads to higher levels of waste.<br>
              <strong>D.</strong> Proper systems are needed for the recycling of environmentally friendly products.<br>
              <strong>E.</strong> Landfill is better for the environment than incineration.<br>
              <strong>F.</strong> Incineration of waste is now relatively harmless to the environment.<br>
              <strong>G.</strong> Efforts to reduce waste may affect profits for some types of companies.
            </div>
            <div class="q-row"><strong>20.</strong> Ted Michaels <select id="rd_q20"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></div>
            <div class="q-row"><strong>21.</strong> Joergen Fenhann <select id="rd_q21"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></div>
            <div class="q-row"><strong>22.</strong> Joan Marc Simon <select id="rd_q22"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></div>
            <div class="q-row"><strong>23.</strong> Tim Burns <select id="rd_q23"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></div>

            <h4 style="margin:16px 0 8px;">Questions 24–26</h4>
            <p style="margin-bottom:8px; font-size:13px; color:#475569;">Complete the summary below. Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.</p>
            <div style="line-height:2.1; font-size:14px;">
              <strong>What recent history tells us about recycling</strong><br>
              Richard Fisher, a researcher from Cranfield University, points out that the pace of consumerism has increased more quickly than was predicted in the 1980s. There has, for example, been unexpected growth in waste from <strong>24</strong> <input type="text" id="rd_q24" class="inline-q"> products. He suggests that the need to protect the environment should be linked to basic values, and adds that it might be better if consumers had more influence over <strong>25</strong> <input type="text" id="rd_q25" class="inline-q"> and more direction was provided by <strong>26</strong> <input type="text" id="rd_q26" class="inline-q">.
            </div>
          `
        },
        {
          part: 3,
          title: "Passage 3: Movement Underwater (Questions 27–40)",
          passageHtml: `
            <h3 style="margin-bottom:12px;">Movement Underwater</h3>
            <p style="margin-bottom:12px;"><strong>A</strong> Self-propelled motion is a fundamental ability in many organisms. From the beating flagella of tiny plankton keeping afloat near the ocean surface to the playful perfection of dolphins surfing the bow wave of a ship, marine creatures have adopted a huge variety of styles, speeds, and methods of movement. Each species has its own particular need for the evolutionary developments that have taken place, but the basic requirements are the same—finding food, avoiding predation, seeking a mate or a safe place to have young, or migrating to an area with more favorable conditions.</p>
            <p style="margin-bottom:12px;"><strong>B</strong> The particular physical properties of water that most affect movement are density, viscosity (stickiness), and buoyancy. Seawater is about 800 times denser than air and nearly 100 times as viscous. Consequently, there is much more resistance to movement than on land, as anyone will know who has ever tried to wade through waist-deep water. However, with density comes much greater buoyancy, so that organisms need spend relatively little energy to stay afloat. As they move through the ocean environment, organisms seek to make wave motion, currents, and natural turbulence work to their advantage, not detriment.</p>
            <p style="margin-bottom:12px;"><strong>C</strong> Most fishes have swim bladders to help them offset the density of their bodies and so maintain neutral buoyancy with minimal effort. These small, gas-filled chambers contain specialized networks of blood vessels that can add or remove gases such as oxygen and carbon dioxide. The ability to remain indefinitely at a constant depth without expending energy is especially important for slow-moving fishes that seek food in the shallows, or for those that hunt and scavenge in kelp forests. Active swimmers, such as mackerel, skipjacks, and sharks, do not have swim bladders because they need to change depth more rapidly than they could regulate the gas content. These fishes must swim forever or they will sink.</p>
            <p style="margin-bottom:12px;"><strong>D</strong> Many animals, especially the tiny zooplankton, have taken to a life of simply drifting near the surface, contentedly feeding on the microscopic phytoplankton and bacteria floating there. Although life among the plankton might seem easy, there is in fact a remarkable range of movement. Some tiny plankton only 1–2 mm in length actually travel long distances each day. Species that live below the level where sunlight reaches, nightly swim hundreds of meters up to the surface to feed in the relative safety of darkness. At dawn, they sink back down in an effort to escape predators—a double journey equivalent to a person swimming 700 km a day.</p>
            <p style="margin-bottom:12px;"><strong>E</strong> It has taken marine creatures millions of years of evolution to overcome the chief deterrent to motion through a dense medium such as water—that of drag resistance. Swimming efficiency has been achieved by minimizing the three types of drag created by friction, turbulence, and body form. To reduce surface friction, the body must be smooth and rounded. In addition, the scales of most fishes are coated with slime to lubricate their passage through water. To reduce the turbulent drag created as water flows around the moving shape, a rounded front end and tapered back end are required. To reduce form drag, the cross-sectional area of the body should be minimal—a pencil shape would be ideal. The combined shape, taking into account all three types of drag, is the streamlined torpedo form of a tuna, the fastest-swimming of all fishes.</p>
            <p style="margin-bottom:12px;"><strong>F</strong> Speed is only one of three important aspects of swimming ability. Tuna, swordfish, and mackerel all specialize in fast, steady cruising, but there are many other fishes for whom sustained speed is less important, such as the barracuda. This formidable predator specializes in swift acceleration, and has a far higher success rate for its attacks than its steady-cruising cousins. The freshwater pike, which lurks in the shadows until its quarry is within striking distance and then lunges with great rapidity, achieves a remarkable 70–80 percent success rate. The third specialization is maneuverability, best demonstrated by the butterfly fishes. These have disk-shaped bodies that permit abrupt changes of track. Many fishes are generalists, being at least partly proficient in all three modes of movement.</p>
            <p style="margin-bottom:12px;"><strong>G</strong> Almost all fishes swim by undulation. Strong W-shaped muscles along the side of the body progressively contract and relax in sequence, from head to tail and from side to side, creating a traveling horizontal wave. The body is thrown into a series of curves that press sideways and back against the water, producing a forward thrust. The narrow, elongated forms of eels and sea snakes allow easy undulation along their full length. In contrast, the more stubby and inflexible bodies of armor-plated trunkfish use only the swish of their short tail fins to move themselves through the water. Most other fishes combine elements of both methods, coordinating powerful strokes of the tail fins with subtle body undulations.</p>
            <p style="margin-bottom:12px;"><strong>H</strong> A fish’s fins also play a vital and versatile role. The vertically oriented dorsal and ventral fins on the back and belly control sideways motion, while up-and-down motion is controlled by the pectoral and pelvic fins on the fish's sides. Whereas the shape of the tail fin relates directly to speed—crescent-moon shaped for fast cruising, broad and flat for acceleration—the style and arrangement of the other fins are crucial for maneuverability. Puffer fishes scull with tiny, oscillating pectoral fins, while butterfly fishes undulate their broad dorsal and ventral fins, twisting and turning with great precision through intricate coral reefs.</p>
          `,
          questionsHtml: `
            <h4 style="margin-bottom:8px;">Questions 27–31</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Reading Passage 3 has eight paragraphs, A–H. Which paragraph contains the following information?</p>
            <div class="q-row"><strong>27.</strong> A strategy to avoid being attacked <select id="rd_q27"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>
            <div class="q-row"><strong>28.</strong> How fish are able to keep afloat naturally <select id="rd_q28"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>
            <div class="q-row"><strong>29.</strong> The physical process by which fish propel themselves ahead <select id="rd_q29"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>
            <div class="q-row"><strong>30.</strong> A list of reasons why different creatures move from one place to another <select id="rd_q30"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>
            <div class="q-row"><strong>31.</strong> How the medium of water both restricts and aids movement <select id="rd_q31"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>

            <h4 style="margin:16px 0 8px;">Questions 32–35</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Complete the table below. Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.</p>
            <table style="width:100%; border-collapse:collapse; font-size:13px; margin-bottom:16px;">
              <thead>
                <tr style="background:#0b1a30; color:#fff;">
                  <th style="border:1px solid #cbd5e1; padding:8px;">Specialised ability</th>
                  <th style="border:1px solid #cbd5e1; padding:8px;">Example fish species</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="border:1px solid #cbd5e1; padding:8px;">Ability to maintain the same <strong>32</strong> <input type="text" id="rd_q32" class="inline-q"> over long distances</td>
                  <td style="border:1px solid #cbd5e1; padding:8px;">Swordfish</td>
                </tr>
                <tr>
                  <td style="border:1px solid #cbd5e1; padding:8px;">Rapid <strong>33</strong> <input type="text" id="rd_q33" class="inline-q"></td>
                  <td style="border:1px solid #cbd5e1; padding:8px;">Barracuda</td>
                </tr>
                <tr>
                  <td style="border:1px solid #cbd5e1; padding:8px;">Sudden attack on prey following period of lying in wait</td>
                  <td style="border:1px solid #cbd5e1; padding:8px;"><strong>34</strong> <input type="text" id="rd_q34" class="inline-q"></td>
                </tr>
                <tr>
                  <td style="border:1px solid #cbd5e1; padding:8px;">Rapid changes of direction</td>
                  <td style="border:1px solid #cbd5e1; padding:8px;"><strong>35</strong> <input type="text" id="rd_q35" class="inline-q"></td>
                </tr>
              </tbody>
            </table>

            <h4 style="margin:16px 0 8px;">Questions 36–40</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Complete the diagram labels below. Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.</p>
            <img src="fish-diagram.png" alt="" onerror="this.style.display='none'" style="max-width:100%; margin-bottom:10px; border:1px solid #cbd5e1; border-radius:4px;">
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px; line-height:2.1; font-size:14px;">
              <div>• streamlined shape narrowing towards rear: to reduce <strong>36</strong> <input type="text" id="rd_q36" class="inline-q"> drag</div>
              <div>• fin controlling <strong>37</strong> <input type="text" id="rd_q37" class="inline-q"> movement</div>
              <div>• fins controlling <strong>38</strong> <input type="text" id="rd_q38" class="inline-q"> movement</div>
              <div>• fins which are important for <strong>39</strong> <input type="text" id="rd_q39" class="inline-q"> of fish</div>
              <div>• minimal cross-sectional body area: to decrease <strong>40</strong> <input type="text" id="rd_q40" class="inline-q"> drag</div>
            </div>
          `
        }
      ],
      answers: {
        1: ["governess"],
        2: ["diary"],
        3: ["artists"],
        4: ["museums"],
        5: ["ambition"],
        6: ["mycology"],
        7: ["false"],
        8: ["not given"],
        9: ["true"],
        10: ["false"],
        11: ["true"],
        12: ["false"],
        13: ["not given"],
        14: ["iv"],
        15: ["vii"],
        16: ["vi"],
        17: ["i"],
        18: ["v"],
        19: ["ii"],
        20: ["f"],
        21: ["c"],
        22: ["d"],
        23: ["g"],
        24: ["electronic"],
        25: ["business"],
        26: ["government"],
        27: ["d"],
        28: ["c"],
        29: ["g"],
        30: ["a"],
        31: ["b"],
        32: ["speed"],
        33: ["acceleration"],
        34: ["freshwater pike", "pike"],
        35: ["butterfly fishes", "butterfly fish"],
        36: ["turbulent"],
        37: ["up-and-down", "up and down"],
        38: ["sideways"],
        39: ["manoeuvrability", "maneuverability"],
        40: ["form"]
      }
    },

    // --- READING VARIANT 2: Louis Braille / Storytelling / Indoor Air Pollution ---
    {
      variantId: "Reading Variant 2",
      passages: [
        {
          part: 1,
          title: "Passage 1: The Life of Louis Braille (Questions 1–13)",
          passageHtml: `
            <h3 style="margin-bottom:6px;">The Life of Louis Braille</h3>
            <p style="font-style:italic; color:#475569; margin-bottom:14px;">Teacher and advocate for the blind, Louis Braille designed the coding system, based on patterns of raised dots, by which the blind can read through touch</p>
            <p style="margin-bottom:12px;">Louis Braille was born in Coupvray, France on January 4, 1809, the only child of Louis and Constance Braille. His father made leather saddles and harnesses for farmers in the area. At the age of three, while playing in his father’s shop, young Louis was struck in the eye by a tool. Within weeks of the accident, the infection that had developed in his eyes took away his sight completely. Although there were few options for blind people at that time, Braille’s parents wanted their son to be educated. He attended school in their village with sighted children and followed the lessons through listening alone. He was an excellent student, mostly because of his exceptional memory.</p>
            <p style="margin-bottom:12px;">In 1819 Braille received a scholarship that enabled him to attend the Institut National des Jeunes Aveugles (National Institute of Blind Youth) in Paris, France. He continued to excel in his studies and also began playing the piano and organ. The same year Braille entered the school, Captain Charles Barbier invented sonography, or night writing, a system of embossed symbols (standing out from the surface) that soldiers adopted to communicate silently at night on the battlefield. The fifteen-year-old Braille was inspired by a lecture Barbier gave at the Institute a few years later. Braille adapted Barbier’s system to replace the awkward embossed-word books in the Institute’s library, which were the only thing he and his classmates could use up to that point.</p>
            <p style="margin-bottom:12px;">Louis Braille was one of many people at the school who found Barbier’s system promising; but he also discovered its shortcomings. It was quite complex (soldiers had difficulty learning it) and it was based on sounds rather than letters. Braille spent three years developing a much simpler system. Braille began experimenting with shapes cut from leather as well as nails and tacks hammered into boards. He finally settled on a six-dot code, based on the twenty-six letters of the alphabet, which could be recognized with a single contact of one finger.</p>
            <p style="margin-bottom:12px;">By changing the number and placement of dots, he coded letters, punctuation, numbers, familiar words, scientific symbols, mathematical and musical notation, and capitalization. With the right hand the reader touched individual dots, and with the left hand he or she moved toward the next line, grasping the text as smoothly and rapidly as sighted readers. Using the Braille system, students were also able to take notes and write essays by punching dots into paper with a pointed instrument that was lined up with a metal guide. This writing technique devised by Braille was known as ‘decapoint’ and it was later developed by one of his colleagues into a machine that operated like a typewriter.</p>
            <p style="margin-bottom:12px;">At the age of twenty, Braille published a written account describing the use of his coded system. In 1837 he issued a second publication featuring an expanded system of coding text. King Louis Philippe (1773–1850) praised the system publicly after a demonstration at the Paris Exposition of Industry in 1834, and Braille’s fellow students loved it. However, Braille’s system proved to be controversial at the Institute. The school’s director, Alexandre Francois Pignier, supported using the Braille system, but Pierre-Armand Dufau banned it when he became director of the school in 1840. Sighted instructors and school board members worried that growing numbers of well-educated blind individuals might take away their jobs so they decided to stick with the embossed-letter system. Nonetheless, by 1850, when illness forced Louis Braille to retire from teaching, his six-dot method was well on its way to widespread acceptance.</p>
            <p style="margin-bottom:12px;">Braille’s ear for music enabled him to become an accomplished cellist and organist. Later in life, his musical talents led him to play the organ all over France, where he became famous as a musician, composer, and teacher. Unfortunately, he grew seriously ill with incurable tuberculosis (a lung infection) in 1835. Shortly before his death, a former student of his, a blind musician, gave a performance in Paris. She made a point of letting the audience know that she had learned everything she knew using the forgotten system developed by the now-dying Braille. This created renewed interest and a revival of the Braille system, although it was not fully accepted until 1854, two years after the inventor’s death. The system underwent alteration from time to time. The version employed today was first used in the United States in 1860 at the Missouri School for the Blind.</p>
          `,
          questionsHtml: `
            <h4 style="margin-bottom:8px;">Questions 1–7</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Complete the notes below. Write <strong>ONE WORD ONLY</strong> from the passage for each answer.</p>
            <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:14px; line-height:2.1; font-size:14px; margin-bottom:16px;">
              <div><strong>Louis Braille — Early life (In Coupvray)</strong></div>
              <div>• was born in 1809</div>
              <div>• became blind as the result of an <strong>1</strong> <input type="text" id="rd_q1" class="inline-q"> in the eye</div>
              <div>• excelled at the local school on account of his outstanding memory</div>
              <div style="margin-top:6px;"><strong>National Institute of Blind Youth, Paris</strong></div>
              <div>• Braille was awarded a scholarship</div>
              <div>• Captain Charles Barbier developed sonography, based on a system originally used by <strong>2</strong> <input type="text" id="rd_q2" class="inline-q"></div>
              <div>• Braille became aware of sonography after attending Barbier’s <strong>3</strong> <input type="text" id="rd_q3" class="inline-q"></div>
              <div style="margin-top:6px;"><strong>The development of the Braille system</strong></div>
              <div>• Problems with Barbier’s system: too complex; <strong>4</strong> <input type="text" id="rd_q4" class="inline-q"> were used as its basis instead of letters</div>
              <div>• Braille’s system could be recognised with the touch of an individual’s <strong>5</strong> <input type="text" id="rd_q5" class="inline-q"></div>
              <div>• the left hand takes readers to the following <strong>6</strong> <input type="text" id="rd_q6" class="inline-q"> while the right hand touches dots</div>
              <div>• blind students could write using Braille’s method called <strong>7</strong> <input type="text" id="rd_q7" class="inline-q"></div>
            </div>

            <h4 style="margin-bottom:8px;">Questions 8–13</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Choose <strong>TRUE</strong>, <strong>FALSE</strong> or <strong>NOT GIVEN</strong>.</p>
            <div class="q-block">
              <p><strong>8.</strong> Braille received financial assistance from King Louis Philippe.</p>
              <label><input type="radio" name="rd_q8" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q8" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q8" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>9.</strong> Braille’s invention was rejected by students at the National Institute of Blind Youth.</p>
              <label><input type="radio" name="rd_q9" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q9" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q9" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>10.</strong> Sighted teachers at the National Institute of Blind Youth felt threatened by Braille’s reading system.</p>
              <label><input type="radio" name="rd_q10" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q10" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q10" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>11.</strong> Braille’s students visited him after his retirement.</p>
              <label><input type="radio" name="rd_q11" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q11" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q11" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>12.</strong> Braille’s system became popular again after it was promoted by a musician.</p>
              <label><input type="radio" name="rd_q12" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q12" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q12" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>13.</strong> The Braille system that is currently used is unchanged from Braille’s original invention.</p>
              <label><input type="radio" name="rd_q13" value="TRUE"> TRUE</label>
              <label><input type="radio" name="rd_q13" value="FALSE"> FALSE</label>
              <label><input type="radio" name="rd_q13" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
          `
        },
        {
          part: 2,
          title: "Passage 2: Storytelling, from prehistoric caves to modern cinemas (Questions 14–26)",
          passageHtml: `
            <h3 style="margin-bottom:12px;">Storytelling, from prehistoric caves to modern cinemas</h3>
            <p style="margin-bottom:12px;"><strong>A</strong> It was told, we suppose, to people crouched around a fire: a tale of adventure, most likely – relating perhaps a remarkable hunt, an escape from mortal danger, or something else out of the ordinary. Whatever its thread, the weaving of this story was done with a prime purpose. The listeners must keep listening. They must not fall asleep. So, as the story went on, its audience should be sustained by one question above all: What happens next?</p>
            <p style="margin-bottom:12px;"><strong>B</strong> The first fireside stories in human history can never be known. They were kept in the heads of those who told them. This method of storage is not necessarily inefficient. From documented oral traditions in Australia and elsewhere we know that specialised storytellers and poets can recite from memory literally thousands of lines, in verse or prose, word for word. But while memory is rightly considered an art in itself, it is clear that a primary purpose of making signs is to have a system of reminders or mnemonic cues – signs that help us to recall certain information in the mind’s eye. For example, in some Polynesian communities a notched memory stick may be used to help to guide a storyteller through successive stages of recitation.</p>
            <p style="margin-bottom:12px;"><strong>C</strong> But in other parts of the world, the activity of storytelling historically resulted in the development or even the invention of writing systems. One theory about the arrival of literacy in ancient Greece, for example, argues that the epic tales traditionally attributed to Homer, a storyteller of the eighth century BC, were just so enchanting to hear that they had to be preserved. So the Greeks borrowed an alphabet from their neighbours in the eastern Mediterranean, the Phoenicians.</p>
            <p style="margin-bottom:12px;"><strong>D</strong> The custom of recording stories can be found around the world, from the archives of ancient Egypt which were written on paper derived from papyrus plants, to the scrolls made from the bark of trees on which the North American Ojibway Indians set down their creation myth. It is a well tried and universal practice: so much so that to this day storytime is probably most often associated with words on paper. Nowadays the formal practice of narrating a story aloud would seem – so we assume – to have given way to newspapers, novels and comic strips. This, however, is not the case. Statistically it is doubtful that the majority of humans currently rely upon the written word to get access to stories. So what is the alternative source?</p>
            <p style="margin-bottom:12px;"><strong>E</strong> Each year, millions of people across the world go to the cinema, now the supreme storyteller. Any account of visual storytelling must begin with the recognition that a ‘good story’ relies upon formal patterns of plot and characterisation that have been embedded in the practice of storytelling over many generations.</p>
            <p style="margin-bottom:12px;"><strong>F</strong> Aspiring screenwriters really need look no further for essential advice than the fourth century BC Greek philosopher Aristotle. He left some incomplete lecture notes on the art of telling stories in various literary and dramatic modes, a slim volume known as <em>Poetics</em>. Though he can never have imagined a modern cinema, Aristotle is very accurate about the key elements required to get the crowds flocking to such a cultural centre. He analysed the process with cool rationalism. When a story enchants us, we lose the sense of where we are; we are drawn into the story so thoroughly that we forget it is a story being told, and react as though it is real. This is, in Aristotle’s phrase, “the suspension of disbelief”. We know the feeling. If we ever have stayed in our seats, stunned with grief, as the credits roll by, or for days after seeing that vivid evocation of horror have kept looking over our shoulders, then we have suspended disbelief. We have been caught in the storyteller’s web. Did it all really happen? We really thought so – for a while.</p>
            <p style="margin-bottom:12px;"><strong>G</strong> Aristotle must have witnessed this experience often enough. He taught in Athens, the city where theatre developed as a primary form of civic ritual and recreation. Two theatrical types of storytelling, tragedy and comedy, caused Athenian audiences to lose themselves in sadness and laughter respectively. Tragedy, for Aristotle, was particularly potent in its capacity to enlist and then purge the emotions of those watching the story unfold on the stage, so he tried to identify those factors in the storyteller’s art that brought about such engagement. For analysis he had not only the masterpieces of classical Greek tragedy, but also Homer, whose <em>Iliad</em> and <em>Odyssey</em> were already considered landmarks – stories by which all other stories should be measured. So, what was the secret of Homer’s narrative art?</p>
            <p style="margin-bottom:12px;"><strong>H</strong> It was not hard to find. Homer created credible heroes. His heroes belonged to the past, they were mighty and magnificent, yet they were not fantasy figures. Homer reported the speeches of his heroes as if he had heard them himself. He made his heroes sulk, argue, cheat, and cry. They were, in short, people who seemed real, though in a story, and audiences could care about them, follow them, and want to know what happened to them next. As Aristotle saw, the hero who shows some weaknesses is intrinsically dramatic.</p>
          `,
          questionsHtml: `
            <h4 style="margin-bottom:8px;">Questions 14–18</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Reading Passage 2 has eight paragraphs, A–H. Which paragraph contains the following information?</p>
            <div class="q-row"><strong>14.</strong> reference to a mistaken view of storytelling today <select id="rd_q14"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>
            <div class="q-row"><strong>15.</strong> a categorisation of stories <select id="rd_q15"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>
            <div class="q-row"><strong>16.</strong> mention of the ability to recall complete stories without assistance <select id="rd_q16"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>
            <div class="q-row"><strong>17.</strong> a reference to the fundamental aim of storytelling <select id="rd_q17"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>
            <div class="q-row"><strong>18.</strong> how characters in a story can be made appealing to listeners <select id="rd_q18"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select></div>

            <h4 style="margin:16px 0 8px;">Questions 19–22</h4>
            <p style="margin-bottom:8px; font-size:13px; color:#475569;">Choose the correct practice, A–C, for each group:</p>
            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:10px; border-radius:4px; font-size:13px; margin-bottom:10px;">
              <strong>A.</strong> adopting a means of writing from elsewhere<br>
              <strong>B.</strong> recording stories on organic materials<br>
              <strong>C.</strong> using tools while telling stories
            </div>
            <div class="q-row"><strong>19.</strong> Ancient Egyptians <select id="rd_q19"><option value="">--</option><option>A</option><option>B</option><option>C</option></select></div>
            <div class="q-row"><strong>20.</strong> Ancient Greeks <select id="rd_q20"><option value="">--</option><option>A</option><option>B</option><option>C</option></select></div>
            <div class="q-row"><strong>21.</strong> Ojibway Indians <select id="rd_q21"><option value="">--</option><option>A</option><option>B</option><option>C</option></select></div>
            <div class="q-row"><strong>22.</strong> Polynesians <select id="rd_q22"><option value="">--</option><option>A</option><option>B</option><option>C</option></select></div>

            <h4 style="margin:16px 0 8px;">Questions 23–26</h4>
            <p style="margin-bottom:8px; font-size:13px; color:#475569;">Complete the sentences. Write <strong>ONE WORD ONLY</strong> from the text for each answer.</p>
            <div style="line-height:2.1; font-size:14px;">
              <div>• Aristotle’s work on storytelling is called <strong>23</strong> <input type="text" id="rd_q23" class="inline-q">.</div>
              <div>• Aristotle saw <strong>24</strong> <input type="text" id="rd_q24" class="inline-q"> as a very powerful type of drama.</div>
              <div>• In Aristotle’s time, Homer’s works were already regarded as <strong>25</strong> <input type="text" id="rd_q25" class="inline-q"> of literature.</div>
              <div>• Aristotle recognised the dramatic potential of a hero who has several <strong>26</strong> <input type="text" id="rd_q26" class="inline-q">.</div>
            </div>
          `
        },
        {
          part: 3,
          title: "Passage 3: Reducing exposure to indoor air pollution in developing countries (Questions 27–40)",
          passageHtml: `
            <h3 style="margin-bottom:6px;">Reducing exposure to indoor air pollution in developing countries</h3>
            <p style="font-style:italic; color:#475569; margin-bottom:14px;">In a review of ways of reducing smoke levels, interventions were considered in three areas: the source of smoke, the living environment and the user</p>
            <p style="margin-bottom:8px;"><strong>Cooking on a cleaner fuel</strong></p>
            <p style="margin-bottom:12px;">The most effective means of reducing indoor air pollution is to switch from biomass* to cleaner fuel that produces significantly lower emissions. For those who are able to switch to fuels such as kerosene or Liquified Petroleum Gas (LPG), the benefits are great. In many urban areas these fuels cost less per unit than biomass. However, there is often a larger initial investment needed to purchase the fuels and the stoves. For example, LPG must be purchased each week or month by the cylinder, but many people can only afford to get a little fuel daily. Making fuel available in smaller units would benefit poorer customers. In rural areas there is less incentive to switch fuels, as biomass is gathered at no financial cost to the user.</p>
            <p style="margin-bottom:12px;">Another alternative fuel, biogas, is extremely effective, as it converts a renewable material (dung and other organic waste materials) into a gaseous, clean fuel. While biogas is being introduced in parts of Asia very successfully – there are over 120,000 biogas plants in Nepal alone – traditional attitudes in other regions make it harder to introduce.</p>
            <p style="margin-bottom:8px;"><strong>Getting smoke out of the house</strong></p>
            <p style="margin-bottom:12px;">For those trapped into using biomass as their main domestic fuel for the foreseeable future, options for reducing exposure to indoor air pollution will entail safe ways of getting smoke out of the home. Substantial reductions to smoke exposure have been obtained with relatively simple methods. For example, one project in Kenya reduced particulate and carbon monoxide pollution in homes by nearly 80% through the use of smoke hoods. These work on the same principle as chimneys but have the advantage of being freestanding and independent of the stove. Substantial benefits were also achieved by increasing the roof spaces in traditional houses and installing better-fitting doors. However, the enlargement of windows in the same project seemed to have little impact.</p>
            <p style="margin-bottom:8px;"><strong>Cutting smoke volumes in improved biomass stoves</strong></p>
            <p style="margin-bottom:12px;">Improved stoves were primarily designed to increase energy efficiency. The Upesi stove, incorporates a chimney, one would anticipate smoke would be reduced. There are some very effective chimney stoves which, when tested in the home, show a significant reduction in smoke. Good examples are the rocket stove and Ecostove, which are increasingly being used in Central America. However, there are also potential problems with many chimney stoves: they may not perform well if they are not installed properly, or are poorly designed. Chimneys are expensive and may be ineffective if the smoke returns through doors and windows. They can also block up quickly with soot and require regular cleaning.</p>
            <p style="margin-bottom:8px;"><strong>Reducing the need for fire</strong></p>
            <p style="margin-bottom:12px;">A very simple technology can reduce the need for fuel for cooking – this is the fireless cooker, or ‘hay box’. This acts like a slow cooker, and is good for making soups, rice or stews. The food is heated to boiling, then placed in a box filled with insulating material, such as hay or crumpled newspaper. The food continues to cook slowly. The development organization – Winrock found that the hay box was in demand with women’s groups in Nairobi, where they are proving as popular as improved stoves.</p>
            <p style="margin-bottom:12px;">As much of the need for improved cooking comes from countries with abundant sunshine, it would seem a logical step to move towards solar power, and there are some passionate advocates for this technology. Solar cookers, which concentrate sunlight directly to cook food, have been seen as a clean, alternative way of cooking. Unfortunately, there has been limited success in practice. The use of solar energy means preparing a meal at midday, which does not coincide with the main family mealtime in many cultures. It also requires the cook to work outdoors.</p>
            <p style="margin-bottom:8px;"><strong>Changing patterns of behaviour</strong></p>
            <p style="margin-bottom:12px;">Simple changes in the way the cook behaves can reduce exposure to smoke. For example, making sure that fuel wood is dry cuts emissions. The use of a pot lid can reduce the fuel consumed during simmering by a factor of three, and overall emission levels by almost a half. On the other hand, keeping children away from the fire may seem an obvious way of reducing their exposure, but as many children are habitually carried on their mother’s back, this can be very difficult, especially where the mother is the only childminder. Cooking outdoors would also reduce exposure to indoor air pollution, and in some parts of the world, for example amongst the aborigines in Australia, this is standard practice. However, for most cultures, cooking indoors is standard.</p>
            <p style="margin-bottom:8px;"><strong>Identifying appropriate solutions</strong></p>
            <p style="margin-bottom:12px;">Experience has indicated that there is no point trying to dictate a solution to a community. This is a view supported by a World Health Organization and US aid-supported consultation on indoor air pollution and health: ‘A single-issue, technology-driven approach to indoor air quality is doomed to failure... Such an approach frequently demands changes of the local community that affect numerous aspects of their lives.’ The authors argue that ‘the key to success is to adopt project approaches that broaden the range of secure and sustainable choices available locally, and thus enable people to devise their own solutions’.</p>
            <p style="font-size:13px; color:#475569;"><strong>Biomass*:</strong> renewable organic material that comes from plants and animals.</p>
          `,
          questionsHtml: `
            <h4 style="margin-bottom:8px;">Questions 27–31</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Choose the correct letter, A, B, C or D.</p>
            <div class="q-block">
              <p><strong>27.</strong> For many people living in towns, one problem with switching to kerosene or LPG is that</p>
              <label><input type="radio" name="rd_q27" value="A"> A. These have to be bought in relatively large quantities.</label>
              <label><input type="radio" name="rd_q27" value="B"> B. These are usually more expensive than biomass fuel.</label>
              <label><input type="radio" name="rd_q27" value="C"> C. The fuel containers are too heavy to carry very far.</label>
              <label><input type="radio" name="rd_q27" value="D"> D. The right types of stove are often unavailable.</label>
            </div>
            <div class="q-block">
              <p><strong>28.</strong> What does the writer say about biogas?</p>
              <label><input type="radio" name="rd_q28" value="A"> A. It is a source of indoor pollution.</label>
              <label><input type="radio" name="rd_q28" value="B"> B. It hasn’t been tried on a large scale yet.</label>
              <label><input type="radio" name="rd_q28" value="C"> C. There is a reluctance to use it in some places.</label>
              <label><input type="radio" name="rd_q28" value="D"> D. A lot of energy is wasted in the production process.</label>
            </div>
            <div class="q-block">
              <p><strong>29.</strong> Which of the following was ineffective in one project in Kenya?</p>
              <label><input type="radio" name="rd_q29" value="A"> A. installation of smoke hoods</label>
              <label><input type="radio" name="rd_q29" value="B"> B. bigger windows</label>
              <label><input type="radio" name="rd_q29" value="C"> C. better door construction</label>
              <label><input type="radio" name="rd_q29" value="D"> D. enlargement of space under the roof</label>
            </div>
            <div class="q-block">
              <p><strong>30.</strong> What does the writer say about chimneys on improved biomass stoves?</p>
              <label><input type="radio" name="rd_q30" value="A"> A. They can cut smoke pollution considerably.</label>
              <label><input type="radio" name="rd_q30" value="B"> B. They generally need very little maintenance.</label>
              <label><input type="radio" name="rd_q30" value="C"> C. They do not have to be fitted by specialists.</label>
              <label><input type="radio" name="rd_q30" value="D"> D. They work best if the room is well ventilated.</label>
            </div>
            <div class="q-block">
              <p><strong>31.</strong> What point does the writer make about ‘hay boxes’?</p>
              <label><input type="radio" name="rd_q31" value="A"> A. A reliable supply of hay is essential.</label>
              <label><input type="radio" name="rd_q31" value="B"> B. Any type of food can be cooked in them.</label>
              <label><input type="radio" name="rd_q31" value="C"> C. People cannot be easily convinced of their usefulness.</label>
              <label><input type="radio" name="rd_q31" value="D"> D. Fuel is only required at the start of the cooking process.</label>
            </div>

            <h4 style="margin:16px 0 8px;">Questions 32–36</h4>
            <p style="margin-bottom:10px; font-size:13px; color:#475569;">Choose <strong>YES</strong>, <strong>NO</strong> or <strong>NOT GIVEN</strong>.</p>
            <div class="q-block">
              <p><strong>32.</strong> Certain people strongly recommend a change to solar power for cooking.</p>
              <label><input type="radio" name="rd_q32" value="YES"> YES</label>
              <label><input type="radio" name="rd_q32" value="NO"> NO</label>
              <label><input type="radio" name="rd_q32" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>33.</strong> Solar powered ovens are unavailable in many countries.</p>
              <label><input type="radio" name="rd_q33" value="YES"> YES</label>
              <label><input type="radio" name="rd_q33" value="NO"> NO</label>
              <label><input type="radio" name="rd_q33" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>34.</strong> Covering a cooking pot has little effect on smoke emissions.</p>
              <label><input type="radio" name="rd_q34" value="YES"> YES</label>
              <label><input type="radio" name="rd_q34" value="NO"> NO</label>
              <label><input type="radio" name="rd_q34" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>35.</strong> Keeping their children away from the source of heat is a practical option for most mothers.</p>
              <label><input type="radio" name="rd_q35" value="YES"> YES</label>
              <label><input type="radio" name="rd_q35" value="NO"> NO</label>
              <label><input type="radio" name="rd_q35" value="NOT GIVEN"> NOT GIVEN</label>
            </div>
            <div class="q-block">
              <p><strong>36.</strong> There are some societies where cooking is normally done in the open.</p>
              <label><input type="radio" name="rd_q36" value="YES"> YES</label>
              <label><input type="radio" name="rd_q36" value="NO"> NO</label>
              <label><input type="radio" name="rd_q36" value="NOT GIVEN"> NOT GIVEN</label>
            </div>

            <h4 style="margin:16px 0 8px;">Questions 37–40</h4>
            <p style="margin-bottom:8px; font-size:13px; color:#475569;">Complete each sentence with the correct ending, A–G:</p>
            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:10px; border-radius:4px; font-size:13px; margin-bottom:10px; line-height:1.6;">
              <strong>A.</strong> an increase in the size of windows.<br>
              <strong>B.</strong> a fuel-saving method of cooking mainly without fire.<br>
              <strong>C.</strong> the use of solid plant or animal matter as fuel.<br>
              <strong>D.</strong> a focus on the single most effective cooking method.<br>
              <strong>E.</strong> the possibility of choice for users.<br>
              <strong>F.</strong> the conversion of solid organic waste into gas.<br>
              <strong>G.</strong> the suitability of its design and construction.
            </div>
            <div class="q-row"><strong>37.</strong> The best way to cut smoke pollution is to discourage <select id="rd_q37"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></div>
            <div class="q-row"><strong>38.</strong> The effectiveness of a chimney stove depends on <select id="rd_q38"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></div>
            <div class="q-row"><strong>39.</strong> In Nairobi, a technique which proved popular was <select id="rd_q39"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></div>
            <div class="q-row"><strong>40.</strong> Successful projects to reduce indoor pollution must involve <select id="rd_q40"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select></div>
          `
        }
      ],
      answers: {
        1: ["infection"],
        2: ["soldiers"],
        3: ["lecture"],
        4: ["sounds"],
        5: ["finger"],
        6: ["line"],
        7: ["decapoint"],
        8: ["not given"],
        9: ["false"],
        10: ["true"],
        11: ["not given"],
        12: ["true"],
        13: ["false"],
        14: ["d"],
        15: ["g"],
        16: ["b"],
        17: ["a"],
        18: ["h"],
        19: ["b"],
        20: ["a"],
        21: ["b"],
        22: ["c"],
        23: ["poetics"],
        24: ["tragedy"],
        25: ["landmarks"],
        26: ["weaknesses"],
        27: ["a"],
        28: ["c"],
        29: ["b"],
        30: ["a"],
        31: ["d"],
        32: ["yes"],
        33: ["not given"],
        34: ["no"],
        35: ["no"],
        36: ["yes"],
        37: ["c"],
        38: ["g"],
        39: ["b"],
        40: ["e"]
      }
    }
  ]
};
