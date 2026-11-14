const EXAM_DATA = {
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
      task1Text: "The pie chart below shows the worldwide distribution of private insurance policies. The table shows the private insurance policy ownership of three countries.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1Image: "w4.png",
      task2Text: "Today people are travelling more than ever before.\n\nWhy is this the case?\nWhat are the benefits of travelling for the traveller?"
    },
    {
      variantId: "Writing Variant 5",
      task1Text: "The diagram below shows the stages in the food production chain of the United States.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      task1Image: "w5.png",
      task2Text: "In many professional sports, there is an increase in the number of athletes using banned substances to improve their performance.\n\nWhat are the causes of the phenomenon and what are some of the possible solutions?"
    }
  ],

  practiceWriting: {
    variantId: "Practice Writing 1",
    task1Text: "The bar graph below shows the percentage growth in average property prices in three different countries between 2007 and 2010.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.",
    task1Image: "practice1.png",
    task2Text: "Some people think that parents should teach their children how to be good members of society. Others, however, believe that school is the best place to learn this.\n\nDiscuss both views and give your own opinion.\n\nWrite at least 250 words."
  },

  practiceListening: {
    parts: [
      {
        part: 1,
        title: "Part 1: Questions 1–10",
        audio: "audio1.mp3",
        html: `
          <p style="margin-bottom: 14px; color: #475569;">Complete the notes below. Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.</p>
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:18px; line-height:2.2; font-size:15px;">
            <h4 style="margin-bottom:8px; color:#0b1a30;">LIBRARY INFORMATION</h4>
            <div><em>Example: Minimum joining age: <strong>18 years</strong></em></div>
            <div><strong>For registration, must take:</strong></div>
            <div>• two <strong>1</strong> <input type="text" id="lis_q1" class="inline-q"> and</div>
            <div>• two forms of I.D. e.g. driving licence, <strong>2</strong> <input type="text" id="lis_q2" class="inline-q"></div>
            <div>Cost to join per year (without current student card): £ <strong>3</strong> <input type="text" id="lis_q3" class="inline-q"></div>
            <div>Number of items allowed: (members of public) <strong>4</strong> <input type="text" id="lis_q4" class="inline-q"></div>
            <div>Loan times: four weeks</div>
            <div>Fines start at £ <strong>5</strong> <input type="text" id="lis_q5" class="inline-q"></div>
            <div>Computers can be booked up to <strong>6</strong> <input type="text" id="lis_q6" class="inline-q"> hours in advance</div>
            <div>Library holds most national papers, all <strong>7</strong> <input type="text" id="lis_q7" class="inline-q">, and magazines</div>
            <div>Need <strong>8</strong> <input type="text" id="lis_q8" class="inline-q"> to use photocopier</div>
            <div style="margin-top:10px;"><strong>Creative Writing class:</strong></div>
            <div>• tutor is John <strong>9</strong> <input type="text" id="lis_q9" class="inline-q"></div>
            <div>• held on <strong>10</strong> <input type="text" id="lis_q10" class="inline-q"> evenings</div>
          </div>
        `
      },
      {
        part: 2,
        title: "Part 2: Questions 11–20",
        audio: "audio2.mp3",
        html: `
          <p style="margin-bottom:12px; font-weight:bold;">Questions 11–15: Choose the correct letter, A, B or C.</p>
          <div class="q-block">
            <p><strong>11.</strong> In 1993 Dan Pearman went to Ecuador</p>
            <label><input type="radio" name="lis_q11" value="A"> A. as a tourist guide.</label>
            <label><input type="radio" name="lis_q11" value="B"> B. as part of his studies.</label>
            <label><input type="radio" name="lis_q11" value="C"> C. as a voluntary worker.</label>
          </div>
          <div class="q-block">
            <p><strong>12.</strong> Dan's neighbour was successful in business because he</p>
            <label><input type="radio" name="lis_q12" value="A"> A. employed carpenters from the area.</label>
            <label><input type="radio" name="lis_q12" value="B"> B. was the most skilled craftsman in the town.</label>
            <label><input type="radio" name="lis_q12" value="C"> C. found it easy to reach customers.</label>
          </div>
          <div class="q-block">
            <p><strong>13.</strong> Dan says the charity relies on</p>
            <label><input type="radio" name="lis_q13" value="A"> A. getting enough bicycles to send regularly.</label>
            <label><input type="radio" name="lis_q13" value="B"> B. finding new areas which need the bicycles.</label>
            <label><input type="radio" name="lis_q13" value="C"> C. charging for the bicycles it sends abroad.</label>
          </div>
          <div class="q-block">
            <p><strong>14.</strong> What does Dan say about the town of Rivas?</p>
            <label><input type="radio" name="lis_q14" value="A"> A. It has received the greatest number of bikes.</label>
            <label><input type="radio" name="lis_q14" value="B"> B. It has almost as many bikes as Amsterdam.</label>
            <label><input type="radio" name="lis_q14" value="C"> C. Its economy has been totally transformed.</label>
          </div>
          <div class="q-block">
            <p><strong>15.</strong> What problem did the charity face in August 2000?</p>
            <label><input type="radio" name="lis_q15" value="A"> A. It couldn't meet its overheads.</label>
            <label><input type="radio" name="lis_q15" value="B"> B. It had to delay sending the bikes.</label>
            <label><input type="radio" name="lis_q15" value="C"> C. It was criticised in the British media.</label>
          </div>

          <p style="margin:18px 0 10px; font-weight:bold;">Questions 16–17: Answer the questions below. Write NO MORE THAN ONE WORD OR A NUMBER for each answer.</p>
          <div style="line-height:2.2;">
            <div><strong>16.</strong> How much money in pounds did the charity receive when it won an award? £ <input type="text" id="lis_q16" class="inline-q"></div>
            <div><strong>17.</strong> What is the charity currently hoping to buy? <input type="text" id="lis_q17" class="inline-q"></div>
          </div>

          <p style="margin:18px 0 10px; font-weight:bold;">Questions 18–20: Choose THREE letters, A–G. Which THREE things can the general public do to help the charity Pedal Power?</p>
          <div id="lis_q18_20_group" style="line-height:1.9;">
            <label style="display:block;"><input type="checkbox" name="lis_multi_18_20" value="A"> A. organise a bicycle collection</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_18_20" value="B"> B. repair the donated bikes</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_18_20" value="C"> C. donate their unwanted tools</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_18_20" value="D"> D. do voluntary work in its office</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_18_20" value="E"> E. hold an event to raise money</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_18_20" value="F"> F. identify areas that need bikes</label>
            <label style="display:block;"><input type="checkbox" name="lis_multi_18_20" value="G"> G. write to the government</label>
          </div>
        `
      },
      {
        part: 3,
        title: "Part 3: Questions 21–30",
        audio: "audio3.mp3",
        html: `
          <p style="margin-bottom: 14px; color: #475569;">Complete the table below. Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.</p>
          <table style="width:100%; border-collapse:collapse; font-size:14px;">
            <thead>
              <tr style="background:#0b1a30; color:#fff;">
                <th style="border:1px solid #cbd5e1; padding:10px; width:22%;">'Student Life' video project</th>
                <th style="border:1px solid #cbd5e1; padding:10px; width:39%;">Cristina</th>
                <th style="border:1px solid #cbd5e1; padding:10px; width:39%;">Ibrahim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:10px; font-weight:bold;">Enjoyed:</td>
                <td style="border:1px solid #cbd5e1; padding:10px; line-height:2;">
                  • using the camera<br>
                  • going to a British <strong>21</strong> <input type="text" id="lis_q21" class="inline-q">
                </td>
                <td style="border:1px solid #cbd5e1; padding:10px; line-height:2;">
                  • contact with students doing other courses (has asked some to <strong>22</strong> <input type="text" id="lis_q22" class="inline-q"> with him)
                </td>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:10px; font-weight:bold;">Most useful language practice:</td>
                <td style="border:1px solid #cbd5e1; padding:10px; line-height:2;">
                  • listening to instructions<br>
                  • learning <strong>23</strong> <input type="text" id="lis_q23" class="inline-q"> vocabulary
                </td>
                <td style="border:1px solid #cbd5e1; padding:10px; line-height:2;">
                  • listening to British students' language because of:<br>
                  &nbsp;&nbsp;- normal speed<br>
                  &nbsp;&nbsp;- large amount of <strong>24</strong> <input type="text" id="lis_q24" class="inline-q">
                </td>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:10px; font-weight:bold;">General usefulness:</td>
                <td style="border:1px solid #cbd5e1; padding:10px; line-height:2;">
                  • operating video camera<br>
                  • working with other people:<br>
                  &nbsp;&nbsp;- learning about <strong>25</strong> <input type="text" id="lis_q25" class="inline-q"><br>
                  &nbsp;&nbsp;- compromising<br>
                  &nbsp;&nbsp;- <strong>26</strong> <input type="text" id="lis_q26" class="inline-q"> people who have different views
                </td>
                <td style="border:1px solid #cbd5e1; padding:10px; line-height:2;">
                  • the importance of <strong>27</strong> <input type="text" id="lis_q27" class="inline-q">
                </td>
              </tr>
              <tr>
                <td style="border:1px solid #cbd5e1; padding:10px; font-weight:bold;">Things to do differently in future:</td>
                <td style="border:1px solid #cbd5e1; padding:10px; line-height:2;">
                  • decide when to <strong>28</strong> <input type="text" id="lis_q28" class="inline-q"> each stage at the beginning<br>
                  • make more effort to <strong>29</strong> <input type="text" id="lis_q29" class="inline-q"> with the camera
                </td>
                <td style="border:1px solid #cbd5e1; padding:10px; line-height:2;">
                  • don't make the film too <strong>30</strong> <input type="text" id="lis_q30" class="inline-q">
                </td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        part: 4,
        title: "Part 4: Questions 31–40",
        audio: "audio4.mp3",
        html: `
          <p style="margin-bottom: 14px; color: #475569;">Complete the notes below. Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.</p>
          <div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px; padding:18px; line-height:2.2; font-size:15px;">
            <h4 style="margin-bottom:8px; color:#0b1a30;">ANTARCTICA</h4>
            <div><strong>GEOGRAPHY</strong></div>
            <div>• world's highest, coldest and windiest continent</div>
            <div>• more than <strong>31</strong> <input type="text" id="lis_q31" class="inline-q"> times as big as the UK</div>
            <div>• most of the area is classified as <strong>32</strong> <input type="text" id="lis_q32" class="inline-q"></div>

            <div style="margin-top:10px;"><strong>RESEARCH STATIONS</strong></div>
            <div>• international teams work together</div>
            <div>• <strong>33</strong> <input type="text" id="lis_q33" class="inline-q"> is integrated with technical support</div>
            <div>• stations contain accommodation, work areas, a kitchen, a <strong>34</strong> <input type="text" id="lis_q34" class="inline-q"> and a gym</div>
            <div>• supplies were brought to Zero One station by sledge from a <strong>35</strong> <input type="text" id="lis_q35" class="inline-q"> at the edge of the ice 15 km away</div>
            <div>• problem of snow build-ups solved by building stations on <strong>36</strong> <input type="text" id="lis_q36" class="inline-q"> with adjustable legs</div>

            <div style="margin-top:10px;"><strong>FOOD AND DIET</strong></div>
            <div>• average daily requirement for an adult in Antarctica is approximately <strong>37</strong> <input type="text" id="lis_q37" class="inline-q"> kilocalories</div>
            <div>• rations for field work prepared by process of freeze-drying</div>

            <div style="margin-top:10px;"><strong>RESEARCH</strong></div>
            <div>The most important research focuses on climate change, including:</div>
            <div>• measuring changes in the ice-cap (because of effects on sea levels and <strong>38</strong> <input type="text" id="lis_q38" class="inline-q">)</div>
            <div>• monitoring the hole in the ozone layer</div>
            <div>• analysing air from bubbles in ice to measure <strong>39</strong> <input type="text" id="lis_q39" class="inline-q"> caused by human activity</div>

            <div style="margin-top:10px;"><strong>WORK OPPORTUNITIES</strong></div>
            <div>Many openings for <strong>40</strong> <input type="text" id="lis_q40" class="inline-q"> people including research assistants, administrative and technical positions</div>
          </div>
        `
      }
    ],
    answers: {
      1: ["passport photos", "photos", "passport photographs", "photographs"],
      2: ["bank statement", "a bank statement"],
      3: ["125", "125 per year"],
      4: ["8", "eight"],
      5: ["1.50"],
      6: ["48", "forty-eight", "forty eight"],
      7: ["local papers", "local newspapers"],
      8: ["card", "a card", "cards"],
      9: ["grantingham"],
      10: ["friday"],
      11: ["c"],
      12: ["c"],
      13: ["a"],
      14: ["c"],
      15: ["a"],
      16: ["75,000", "75000"],
      17: ["computers"],
      18: ["c", "e", "f"],
      19: ["c", "e", "f"],
      20: ["c", "e", "f"],
      21: ["home", "student's home", "students home"],
      22: ["have dinner", "dinner", "come to dinner", "go to dinner"],
      23: ["technical"],
      24: ["slang"],
      25: ["cooperating", "cooperation", "co-operating", "co-operation"],
      26: ["persuading"],
      27: ["editing"],
      28: ["complete"],
      29: ["experiment"],
      30: ["long"],
      31: ["58", "fifty-eight", "fifty eight"],
      32: ["desert", "a desert"],
      33: ["science"],
      34: ["hospital", "small hospital"],
      35: ["ship"],
      36: ["platforms"],
      37: ["3,500", "3500"],
      38: ["currents", "ocean currents"],
      39: ["pollution", "the pollution"],
      40: ["young"]
    }
  },

  practiceReading: {
    passages: [
      {
        part: 1,
        title: "Passage 1: Early Childhood Education (Questions 1–13)",
        passageHtml: `
          <h3 style="margin-bottom:6px;">Early Childhood Education</h3>
          <p style="font-style:italic; color:#475569; margin-bottom:14px;">New Zealand's National Party spokesman on education, Dr Lockwood Smith, recently visited the US and Britain. Here he reports on the findings of his trip and what they could mean for New Zealand's education policy</p>
          <p style="margin-bottom:12px;"><strong>A</strong> 'Education To Be More' was published last August. It was the report of the New Zealand Government's Early Childhood Care and Education Working Group. The report argued for enhanced equity of access and better funding for childcare and early childhood education institutions. Unquestionably, that's a real need; but since parents don't normally send children to pre-schools until the age of three, are we missing out on the most important years of all?</p>
          <p style="margin-bottom:12px;"><strong>B</strong> A 13-year study of early childhood development at Harvard University has shown that, by the age of three, most children have the potential to understand about 1000 words - most of the language they will use in ordinary conversation for the rest of their lives. Furthermore, research has shown that while every child is born with a natural curiosity, it can be suppressed dramatically during the second and third years of life. Researchers claim that the human personality is formed during the first two years of life, and during the first three years children learn the basic skills they will use in all their later learning both at home and at school. Once over the age of three, children continue to expand on existing knowledge of the world.</p>
          <p style="margin-bottom:12px;"><strong>C</strong> It is generally acknowledged that young people from poorer socio-economic backgrounds tend to do less well in our education system. That's observed not just in New Zealand, but also in Australia, Britain and America. In an attempt to overcome that educational under-achievement, a nationwide programme called 'Headstart' was launched in the United States in 1965. A lot of money was poured into it. It took children into pre-school institutions at the age of three and was supposed to help the children of poorer families succeed in school. Despite substantial funding, results have been disappointing. It is thought that there are two explanations for this. First, the programme began too late. Many children who entered it at the age of three were already behind their peers in language and measurable intelligence. Second, the parents were not involved. At the end of each day, 'Headstart' children returned to the same disadvantaged home environment.</p>
          <p style="margin-bottom:12px;"><strong>D</strong> As a result of the growing research evidence of the importance of the first three years of a child's life and the disappointing results from 'Headstart', a pilot programme was launched in Missouri in the US that focused on parents as the child's first teachers. The 'Missouri' programme was predicated on research showing that working with the family, rather than bypassing the parents, is the most effective way of helping children get off to the best possible start in life. The four-year pilot study included 380 families who were about to have their first child and who represented a cross-section of socio-economic status, age and family configurations. They included single-parent and two-parent families, families in which both parents worked, and families with either the mother or father at home.<br>The programme involved trained parent-educators visiting the parents' home and working with the parent, or parents, and the child. Information on child development, and guidance on things to look for and expect as the child grows were provided, plus guidance in fostering the child's intellectual, language, social and motor-skill development. Periodic check-ups of the child's educational and sensory development (hearing and vision) were made to detect possible handicaps that interfere with growth and development. Medical problems were referred to professionals. Parent-educators made personal visits to homes and monthly group meetings were held with other new parents to share experience and discuss topics of interest. Parent resource centres, located in school buildings, offered learning materials for families and facilitators for child care.</p>
          <p style="margin-bottom:12px;"><strong>E</strong> At the age of three, the children who had been involved in the 'Missouri' programme were evaluated alongside a cross-section of children selected from the same range of socio-economic backgrounds and family situations, and also a random sample of children that age. The results were phenomenal. By the age of three, the children in the programme were significantly more advanced in language development than their peers, had made greater strides in problem solving and other intellectual skills, and were further along in social development. In fact, the average child on the programme was performing at the level of the top 15 to 20 per cent of their peers in such things as auditory comprehension, verbal ability and language ability.<br>Most important of all, the traditional measures of 'risk', such as parents' age and education, or whether they were a single parent, bore little or no relationship to the measures of achievement and language development. Children in the programme performed equally well regardless of socio-economic disadvantages. Child abuse was virtually eliminated. The one factor that was found to affect the child's development was family stress leading to a poor quality of parent-child interaction. That interaction was not necessarily bad in poorer families.</p>
          <p style="margin-bottom:12px;"><strong>F</strong> These research findings are exciting. There is growing evidence in New Zealand that children from poorer socio-economic backgrounds are arriving at school less well developed and that our school system tends to perpetuate that disadvantage. The initiative outlined above could break that cycle of disadvantage. The concept of working with parents in their homes, or at their place of work, contrasts quite markedly with the report of the Early Childhood Care and Education Working Group. Their focus is on getting children and mothers access to childcare and institutionalised early childhood education. Education from the age of three to five is undoubtedly vital, but without a similar focus on parent education and on the vital importance of the first three years, some evidence indicates that it will not be enough to overcome educational inequity.</p>
        `,
        questionsHtml: `
          <h4 style="margin-bottom:8px;">Questions 1–4</h4>
          <p style="margin-bottom:10px; font-size:13px; color:#475569;">Reading Passage 1 has six sections, A–F. Which paragraph contains the following information?</p>
          <div class="q-row"><strong>1.</strong> details of the range of family types involved in an education programme
            <select id="rd_q1"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select>
          </div>
          <div class="q-row"><strong>2.</strong> reasons why a child's early years are so important
            <select id="rd_q2"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select>
          </div>
          <div class="q-row"><strong>3.</strong> reasons why an education programme failed
            <select id="rd_q3"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select>
          </div>
          <div class="q-row"><strong>4.</strong> a description of the positive outcomes of an education programme
            <select id="rd_q4"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option></select>
          </div>

          <h4 style="margin:16px 0 8px;">Questions 5–10</h4>
          <p style="margin-bottom:10px; font-size:13px; color:#475569;">Classify the following features as characterising:<br>
            <strong>A.</strong> the 'Headstart' programme &nbsp;|&nbsp; <strong>B.</strong> the 'Missouri' programme &nbsp;|&nbsp; <strong>C.</strong> both &nbsp;|&nbsp; <strong>D.</strong> neither
          </p>
          <div class="q-row"><strong>5.</strong> was administered to a variety of poor and wealthy families
            <select id="rd_q5"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option></select>
          </div>
          <div class="q-row"><strong>6.</strong> continued with follow-up assistance in elementary schools
            <select id="rd_q6"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option></select>
          </div>
          <div class="q-row"><strong>7.</strong> did not succeed in its aim
            <select id="rd_q7"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option></select>
          </div>
          <div class="q-row"><strong>8.</strong> supplied many forms of support and training to parents
            <select id="rd_q8"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option></select>
          </div>
          <div class="q-row"><strong>9.</strong> received insufficient funding
            <select id="rd_q9"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option></select>
          </div>
          <div class="q-row"><strong>10.</strong> was designed to improve pre-schoolers' educational development
            <select id="rd_q10"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option></select>
          </div>

          <h4 style="margin:16px 0 8px;">Questions 11–13</h4>
          <p style="margin-bottom:10px; font-size:13px; color:#475569;">Choose <strong>TRUE</strong>, <strong>FALSE</strong> or <strong>NOT GIVEN</strong>.</p>
          <div class="q-block">
            <p><strong>11.</strong> Most 'Missouri' programme three-year-olds scored highly in areas such as listening, speaking, reasoning and interacting with others.</p>
            <label><input type="radio" name="rd_q11" value="TRUE"> TRUE</label>
            <label><input type="radio" name="rd_q11" value="FALSE"> FALSE</label>
            <label><input type="radio" name="rd_q11" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>12.</strong> 'Missouri' programme children of young, uneducated, single parents scored less highly on the tests.</p>
            <label><input type="radio" name="rd_q12" value="TRUE"> TRUE</label>
            <label><input type="radio" name="rd_q12" value="FALSE"> FALSE</label>
            <label><input type="radio" name="rd_q12" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>13.</strong> The richer families in the 'Missouri' programme had higher stress levels.</p>
            <label><input type="radio" name="rd_q13" value="TRUE"> TRUE</label>
            <label><input type="radio" name="rd_q13" value="FALSE"> FALSE</label>
            <label><input type="radio" name="rd_q13" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
        `
      },
      {
        part: 2,
        title: "Passage 2: Disappearing Delta (Questions 14–26)",
        passageHtml: `
          <h3 style="margin-bottom:12px;">Disappearing Delta</h3>
          <p style="margin-bottom:12px;"><strong>A</strong> The fertile land of the Nile delta is being eroded along Egypt's Mediterranean coast at an astounding rate, in some parts estimated at 100 metres per year. In the past, land scoured away from the coastline by the currents of the Mediterranean Sea used to be replaced by sediment brought down to the delta by the River Nile, but this is no longer happening.</p>
          <p style="margin-bottom:12px;"><strong>B</strong> Up to now, people have blamed this loss of delta land on the two large dams at Aswan in the south of Egypt, which hold back virtually all of the sediment that used to flow down the river. Before the dams were built, the Nile flowed freely, carrying huge quantities of sediment north from Africa's interior to be deposited on the Nile delta. This continued for 7,000 years, eventually covering a region of over 22,000 square kilometres with layers of fertile silt. Annual flooding brought in new, nutrient-rich soil to the delta region, replacing what had been washed away by the sea, and dispensing with the need for fertilizers in Egypt's richest food-growing area. But when the Aswan dams were constructed in the 20th century to provide electricity and irrigation, and to protect the huge population centre of Cairo and its surrounding areas from annual flooding and drought, most of the sediment with its natural fertilizer accumulated up above the dam in the southern, upstream half of Lake Nasser, instead of passing down to the delta.</p>
          <p style="margin-bottom:12px;"><strong>C</strong> Now, however, there turns out to be more to the story. It appears that the sediment-free water emerging from the Aswan dams picks up silt and sand as it erodes the river bed and banks on the 800-kilometre trip to Cairo. Daniel Jean Stanley of the Smithsonian Institute noticed that water samples taken in Cairo, just before the river enters the delta, indicated that the river sometimes carries more than 850 grams of sediment per cubic metre of water - almost half of what it carried before the dams were built. 'I'm ashamed to say that the significance of this didn't strike me until after I had read 50 or 60 studies,' says Stanley in Marine Geology. 'There is still a lot of sediment coming into the delta, but virtually no sediment comes out into the Mediterranean to replenish the coastline. So this sediment must be trapped on the delta itself.'</p>
          <p style="margin-bottom:12px;"><strong>D</strong> Once north of Cairo, most of the Nile water is diverted into more than 10,000 kilometres of irrigation canals and only a small proportion reaches the sea directly through the rivers in the delta. The water in the irrigation canals is still or very slow-moving and thus cannot carry sediment, Stanley explains. The sediment sinks to the bottom of the canals and then is added to fields by farmers or pumped with the water into the four large freshwater lagoons that are located near the outer edges of the delta. So very little of it actually reaches the coastline to replace what is being washed away by the Mediterranean currents.</p>
          <p style="margin-bottom:12px;"><strong>E</strong> The farms on the delta plains and fishing and aquaculture in the lagoons account for much of Egypt's food supply. But by the time the sediment has come to rest in the fields and lagoons it is laden with municipal, industrial and agricultural waste from the Cairo region, which is home to more than 40 million people. 'Pollutants are building up faster and faster,' says Stanley. Based on his investigations of sediment from the delta lagoons, Frederic Siegel of George Washington University concurs. 'In Manzalah Lagoon, for example, the increase in mercury, lead, copper and zinc coincided with the building of the High Dam at Aswan, the availability of cheap electricity, and the development of major power-based industries,' he says. Since that time the concentration of mercury has increased significantly. Lead from engines that use leaded fuels and from other industrial sources has also increased dramatically. These poisons can easily enter the food chain, affecting the productivity of fishing and farming. Another problem is that agricultural wastes include fertilizers which stimulate increases in plant growth in the lagoons and upset the ecology of the area, with serious effects on the fishing industry.</p>
          <p style="margin-bottom:12px;"><strong>F</strong> According to Siegel, international environmental organisations are beginning to pay closer attention to the region, partly because of the problems of erosion and pollution of the Nile delta, but principally because they fear the impact this situation could have on the whole Mediterranean coastal ecosystem. But there are no easy solutions. In the immediate future, Stanley believes that one solution would be to make artificial floods to flush out the delta waterways, in the same way that natural floods did before the construction of the dams. He says, however, that in the long term an alternative process such as desalination may have to be used to increase the amount of water available. 'In my view, Egypt must devise a way to have more water running through the river and the delta,' says Stanley. Easier said than done in a desert region with a rapidly growing population.</p>
        `,
        questionsHtml: `
          <h4 style="margin-bottom:8px;">Questions 14–17</h4>
          <p style="margin-bottom:8px; font-size:13px; color:#475569;">Choose the correct heading for paragraphs B, D, E and F from the list below:</p>
          <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:10px; border-radius:4px; font-size:13px; margin-bottom:12px; line-height:1.6;">
            <strong>i.</strong> Effects of irrigation on sedimentation &nbsp;|&nbsp; <strong>ii.</strong> The danger of flooding the Cairo area<br>
            <strong>iii.</strong> Causing pollution in the Mediterranean &nbsp;|&nbsp; <strong>iv.</strong> Interrupting a natural process<br>
            <strong>v.</strong> The threat to food production &nbsp;|&nbsp; <strong>vi.</strong> Less valuable sediment than before<br>
            <strong>vii.</strong> Egypt's disappearing coastline &nbsp;|&nbsp; <strong>viii.</strong> Looking at the long-term impact
          </div>
          <div class="q-row"><strong>14.</strong> Paragraph B
            <select id="rd_q14"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option></select>
          </div>
          <div class="q-row"><strong>15.</strong> Paragraph D
            <select id="rd_q15"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option></select>
          </div>
          <div class="q-row"><strong>16.</strong> Paragraph E
            <select id="rd_q16"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option></select>
          </div>
          <div class="q-row"><strong>17.</strong> Paragraph F
            <select id="rd_q17"><option value="">--</option><option>i</option><option>ii</option><option>iii</option><option>iv</option><option>v</option><option>vi</option><option>vii</option><option>viii</option></select>
          </div>

          <h4 style="margin:16px 0 8px;">Questions 18–23</h4>
          <p style="margin-bottom:10px; font-size:13px; color:#475569;">Choose <strong>YES</strong>, <strong>NO</strong> or <strong>NOT GIVEN</strong>.</p>
          <div class="q-block">
            <p><strong>18.</strong> Coastal erosion occurred along Egypt's Mediterranean coast before the building of the Aswan dams.</p>
            <label><input type="radio" name="rd_q18" value="YES"> YES</label>
            <label><input type="radio" name="rd_q18" value="NO"> NO</label>
            <label><input type="radio" name="rd_q18" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>19.</strong> Some people predicted that the Aswan dams would cause land loss before they were built.</p>
            <label><input type="radio" name="rd_q19" value="YES"> YES</label>
            <label><input type="radio" name="rd_q19" value="NO"> NO</label>
            <label><input type="radio" name="rd_q19" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>20.</strong> The Aswan dams were built to increase the fertility of the Nile delta.</p>
            <label><input type="radio" name="rd_q20" value="YES"> YES</label>
            <label><input type="radio" name="rd_q20" value="NO"> NO</label>
            <label><input type="radio" name="rd_q20" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>21.</strong> Stanley found that the levels of sediment in the river water in Cairo were relatively high.</p>
            <label><input type="radio" name="rd_q21" value="YES"> YES</label>
            <label><input type="radio" name="rd_q21" value="NO"> NO</label>
            <label><input type="radio" name="rd_q21" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>22.</strong> Sediment in the irrigation canals on the Nile delta causes flooding.</p>
            <label><input type="radio" name="rd_q22" value="YES"> YES</label>
            <label><input type="radio" name="rd_q22" value="NO"> NO</label>
            <label><input type="radio" name="rd_q22" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>23.</strong> Water is pumped from the irrigation canals into the lagoons.</p>
            <label><input type="radio" name="rd_q23" value="YES"> YES</label>
            <label><input type="radio" name="rd_q23" value="NO"> NO</label>
            <label><input type="radio" name="rd_q23" value="NOT GIVEN"> NOT GIVEN</label>
          </div>

          <h4 style="margin:16px 0 8px;">Questions 24–26</h4>
          <p style="margin-bottom:8px; font-size:13px; color:#475569;">Complete the summary with the list of words A–H:</p>
          <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:10px; border-radius:4px; font-size:13px; margin-bottom:10px;">
            <strong>A.</strong> artificial floods &nbsp;|&nbsp; <strong>B.</strong> desalination &nbsp;|&nbsp; <strong>C.</strong> delta waterways &nbsp;|&nbsp; <strong>D.</strong> natural floods &nbsp;|&nbsp;
            <strong>E.</strong> nutrients &nbsp;|&nbsp; <strong>F.</strong> pollutants &nbsp;|&nbsp; <strong>G.</strong> population control &nbsp;|&nbsp; <strong>H.</strong> sediment
          </div>
          <div style="line-height:2.1; font-size:14px;">
            In addition to the problem of coastal erosion, there has been a marked increase in the level of <strong>24</strong>
            <select id="rd_q24"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select>
            contained in the silt deposited in the Nile delta. To deal with this, Stanley suggests the use of <strong>25</strong>
            <select id="rd_q25"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select>
            in the short term, and increasing the amount of water available through <strong>26</strong>
            <select id="rd_q26"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option></select>
            in the longer term.
          </div>
        `
      },
      {
        part: 3,
        title: "Passage 3: The Return of Artificial Intelligence (Questions 27–40)",
        passageHtml: `
          <h3 style="margin-bottom:6px;">The Return of Artificial Intelligence</h3>
          <p style="font-style:italic; color:#475569; margin-bottom:14px;">It is becoming acceptable again to talk of computers performing human tasks such as problem-solving and pattern-recognition</p>
          <p style="margin-bottom:12px;"><strong>A</strong> After years in the wilderness, the term 'artificial intelligence' (AI) seems poised to make a comeback. AI was big in the 1980s but vanished in the 1990s. It re-entered public consciousness with the release of AI, a movie about a robot boy. This has ignited public debate about AI, but the term is also being used once more within the computer industry. Researchers, executives and marketing people are now using the expression without irony or inverted commas. And it is not always hype. The term is being applied, with some justification, to products that depend on technology that was originally developed by AI researchers. Admittedly, the rehabilitation of the term has a long way to go, and some firms still prefer to avoid using it. But the fact that others are starting to use it again suggests that AI has moved on from being seen as an over-ambitious and under-achieving field of research.</p>
          <p style="margin-bottom:12px;"><strong>B</strong> The field was launched, and the term 'artificial intelligence' coined, at a conference in 1956 by a group of researchers that included Marvin Minsky, John McCarthy, Herbert Simon and Alan Newell, all of whom went on to become leading figures in the field. The expression provided an attractive but informative name for a research programme that encompassed such previously disparate fields as operations research, cybernetics, logic and computer science. The goal they shared was an attempt to capture or mimic human abilities using machines. That said, different groups of researchers attacked different problems, from speech recognition to chess playing, in different ways; AI unified the field in name only. But it was a term that captured the public imagination.</p>
          <p style="margin-bottom:12px;"><strong>C</strong> Most researchers agree that AI peaked around 1985. A public reared on science-fiction movies and excited by the growing power of computers had high expectations. For years, AI researchers had implied that a breakthrough was just around the corner. Marvin Minsky said in 1967 that within a generation the problem of creating 'artificial intelligence' would be substantially solved. Prototypes of medical-diagnosis programs and speech recognition software appeared to be making progress. It proved to be a false dawn. Thinking computers and household robots failed to materialise, and a backlash ensued. 'There was undue optimism in the early 1980s,' says David Leake, a researcher at Indiana University. 'Then when people realised these were hard problems, there was retrenchment. By the late 1980s, the term AI was being avoided by many researchers, who opted instead to align themselves with specific sub-disciplines such as neural networks, agent technology, case-based reasoning, and so on.'</p>
          <p style="margin-bottom:12px;"><strong>D</strong> Ironically, in some ways AI was a victim of its own success. Whenever an apparently mundane problem was solved, such as building a system that could land an aircraft unattended, the problem was deemed not to have been AI in the first place. 'If it works, it can't be AI,' as Dr Leake characterises it. The effect of repeatedly moving the goal-posts in this way was that AI came to refer to 'blue-sky' research that was still years away from commercialisation. Researchers joked that AI stood for 'almost implemented'. Meanwhile, the technologies that made it onto the market, such as speech recognition, language translation and decision-support software, were no longer regarded as AI. Yet all three once fell well within the umbrella of AI research.</p>
          <p style="margin-bottom:12px;"><strong>E</strong> But the tide may now be turning, according to Dr Leake. HNC Software of San Diego, backed by a government agency, reckon that their new approach to artificial intelligence is the most powerful and promising approach ever discovered. HNC claim that their system, based on a cluster of 30 processors, could be used to spot camouflaged vehicles on a battlefield or extract a voice signal from a noisy background - tasks humans can do well, but computers cannot. 'Whether or not their technology lives up to the claims made for it, the fact that HNC are emphasising the use of AI is itself an interesting development,' says Dr Leake.</p>
          <p style="margin-bottom:12px;"><strong>F</strong> Another factor that may boost the prospects for AI in the near future is that investors are now looking for firms using clever technology, rather than just a clever business model, to differentiate themselves. In particular, the problem of information overload, exacerbated by the growth of e-mail and the explosion in the number of web pages, means there are plenty of opportunities for new technologies to help filter and categorise information - classic AI problems. That may mean that more artificial intelligence companies will start to emerge to meet this challenge.</p>
          <p style="margin-bottom:12px;"><strong>G</strong> The 1969 film, 2001: A Space Odyssey, featured an intelligent computer called HAL 9000. As well as understanding and speaking English, HAL could play chess and even learned to lipread. HAL thus encapsulated the optimism of the 1960s that intelligent computers would be widespread by 2001. But 2001 has been and gone, and there is still no sign of a HAL-like computer. Individual systems can play chess or transcribe speech, but a general theory of machine intelligence still remains elusive. It may be, however, that the comparison with HAL no longer seems quite so important, and AI can now be judged by what it can do, rather than by how well it matches up to a 30-year-old science-fiction film. 'People are beginning to realise that there are impressive things that these systems can do,' says Dr Leake hopefully.</p>
        `,
        questionsHtml: `
          <h4 style="margin-bottom:8px;">Questions 27–31</h4>
          <p style="margin-bottom:10px; font-size:13px; color:#475569;">Reading Passage 3 has seven paragraphs, A–G. Which paragraph contains the following information? (You may use any letter more than once.)</p>
          <div class="q-row"><strong>27.</strong> how AI might have a military impact
            <select id="rd_q27"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select>
          </div>
          <div class="q-row"><strong>28.</strong> the fact that AI brings together a range of separate research areas
            <select id="rd_q28"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select>
          </div>
          <div class="q-row"><strong>29.</strong> the reason why AI has become a common topic of conversation again
            <select id="rd_q29"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select>
          </div>
          <div class="q-row"><strong>30.</strong> how AI could help deal with difficulties related to the amount of information available electronically
            <select id="rd_q30"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select>
          </div>
          <div class="q-row"><strong>31.</strong> where the expression AI was first used
            <select id="rd_q31"><option value="">--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option></select>
          </div>

          <h4 style="margin:16px 0 8px;">Questions 32–37</h4>
          <p style="margin-bottom:10px; font-size:13px; color:#475569;">Choose <strong>TRUE</strong>, <strong>FALSE</strong> or <strong>NOT GIVEN</strong>.</p>
          <div class="q-block">
            <p><strong>32.</strong> The researchers who launched the field of AI had worked together on other projects in the past.</p>
            <label><input type="radio" name="rd_q32" value="TRUE"> TRUE</label>
            <label><input type="radio" name="rd_q32" value="FALSE"> FALSE</label>
            <label><input type="radio" name="rd_q32" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>33.</strong> In 1985, AI was at its lowest point.</p>
            <label><input type="radio" name="rd_q33" value="TRUE"> TRUE</label>
            <label><input type="radio" name="rd_q33" value="FALSE"> FALSE</label>
            <label><input type="radio" name="rd_q33" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>34.</strong> Research into agent technology was more costly than research into neural networks.</p>
            <label><input type="radio" name="rd_q34" value="TRUE"> TRUE</label>
            <label><input type="radio" name="rd_q34" value="FALSE"> FALSE</label>
            <label><input type="radio" name="rd_q34" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>35.</strong> Applications of AI have already had a degree of success.</p>
            <label><input type="radio" name="rd_q35" value="TRUE"> TRUE</label>
            <label><input type="radio" name="rd_q35" value="FALSE"> FALSE</label>
            <label><input type="radio" name="rd_q35" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>36.</strong> The problems waiting to be solved by AI have not changed since 1967.</p>
            <label><input type="radio" name="rd_q36" value="TRUE"> TRUE</label>
            <label><input type="radio" name="rd_q36" value="FALSE"> FALSE</label>
            <label><input type="radio" name="rd_q36" value="NOT GIVEN"> NOT GIVEN</label>
          </div>
          <div class="q-block">
            <p><strong>37.</strong> The film 2001: A Space Odyssey reflected contemporary ideas about the potential of AI computers.</p>
            <label><input type="radio" name="rd_q37" value="TRUE"> TRUE</label>
            <label><input type="radio" name="rd_q37" value="FALSE"> FALSE</label>
            <label><input type="radio" name="rd_q37" value="NOT GIVEN"> NOT GIVEN</label>
          </div>

          <h4 style="margin:16px 0 8px;">Questions 38–40</h4>
          <p style="margin-bottom:10px; font-size:13px; color:#475569;">Choose the correct letter, A, B, C or D.</p>
          <div class="q-block">
            <p><strong>38.</strong> According to researchers, in the late 1980s there was a feeling that</p>
            <label><input type="radio" name="rd_q38" value="A"> A. a general theory of AI would never be developed.</label>
            <label><input type="radio" name="rd_q38" value="B"> B. original expectations of AI may not have been justified.</label>
            <label><input type="radio" name="rd_q38" value="C"> C. a wide range of applications was close to fruition.</label>
            <label><input type="radio" name="rd_q38" value="D"> D. more powerful computers were the key to further progress.</label>
          </div>
          <div class="q-block">
            <p><strong>39.</strong> In Dr Leake's opinion, the reputation of AI suffered as a result of</p>
            <label><input type="radio" name="rd_q39" value="A"> A. changing perceptions.</label>
            <label><input type="radio" name="rd_q39" value="B"> B. premature implementation.</label>
            <label><input type="radio" name="rd_q39" value="C"> C. poorly planned projects.</label>
            <label><input type="radio" name="rd_q39" value="D"> D. commercial pressures.</label>
          </div>
          <div class="q-block">
            <p><strong>40.</strong> The prospects for AI may benefit from</p>
            <label><input type="radio" name="rd_q40" value="A"> A. existing AI applications.</label>
            <label><input type="radio" name="rd_q40" value="B"> B. new business models.</label>
            <label><input type="radio" name="rd_q40" value="C"> C. orders from internet-only companies.</label>
            <label><input type="radio" name="rd_q40" value="D"> D. new investment priorities.</label>
          </div>
        `
      }
    ],
    answers: {
      1: "D", 2: "B", 3: "C", 4: "E",
      5: "B", 6: "D", 7: "A", 8: "B", 9: "D", 10: "C",
      11: "TRUE", 12: "FALSE", 13: "NOT GIVEN",
      14: "iv", 15: "i", 16: "v", 17: "viii",
      18: "YES", 19: "NOT GIVEN", 20: "NO", 21: "YES", 22: "NOT GIVEN", 23: "YES",
      24: "F", 25: "A", 26: "B",
      27: "E", 28: "B", 29: "A", 30: "F", 31: "B",
      32: "NOT GIVEN", 33: "FALSE", 34: "NOT GIVEN", 35: "TRUE", 36: "FALSE", 37: "TRUE",
      38: "B", 39: "A", 40: "D"
    }
  }
};
