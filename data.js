const questionsDatabase = [
    // --- MAIN CHAPTER MCQS ---
    {
        id: "ent_mosad_300",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Ototoxicity & Aging",
        source: "Dr mosad's MCQs",
        question: "Hearing loss resulting from degenerative changes of aging is known as:",
        options: ["Otosclerosis", "Presbyacusis", "Diplacusis", "Paracusis"],
        correct: 1,
        explanation: "Educational Objective: Presbyacusis is the age-related progressive, bilateral sensorineural hearing loss caused by degenerative changes in the inner ear."
    },
    {
        id: "ent_mosad_301",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Ototoxicity & Aging",
        source: "Dr mosad's MCQs",
        question: "The best treatment for presbyacusis is:",
        options: ["Cochlear implant", "Hearing aid", "Stapedectomy", "Vestibular neurectomy"],
        correct: 1,
        explanation: "Educational Objective: Amplification with hearing aids is the primary management for presbyacusis."
    },
    {
        id: "ent_mosad_302",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Ototoxicity & Aging",
        source: "Dr mosad's MCQs",
        question: "The following drugs are ototoxic except one:",
        options: ["Garamycin", "Frusemide", "Quinine", "Cephalosporin"],
        correct: 3,
        explanation: "Educational Objective: Cephalosporins are non-ototoxic antibiotics. Aminoglycosides (Garamycin), loop diuretics (Frusemide), and Quinine are well-known ototoxic agents."
    },
    {
        id: "ent_mosad_303",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Inner Ear Pathology",
        source: "Dr mosad's MCQs",
        question: "Vestibular neuritis causes:",
        options: ["Sensorineural hearing loss", "Tinnitus", "Vertigo", "All the above"],
        correct: 2,
        explanation: "Educational Objective: Vestibular neuritis selectively affects the vestibular division of CN VIII, causing acute vertigo without auditory symptoms (no SNHL or tinnitus)."
    },
    {
        id: "ent_mosad_304",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "The commonest type of hearing loss in Meniere's disease is:",
        options: ["Fluctuant low-tone sensorineural hearing loss", "Fluctuant high-tone sensorineural hearing loss", "Persistent low-tone sensorineural hearing loss", "Persistent high-tone sensorineural hearing loss"],
        correct: 0,
        explanation: "Educational Objective: Early Meniere's disease characteristically presents with fluctuating low-frequency (low-tone) sensorineural hearing loss."
    },
    {
        id: "ent_mosad_305",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "BPPV",
        source: "Dr mosad's MCQs",
        question: "Benign paroxysmal positional vertigo is caused by debris in:",
        options: ["Lateral semicircular canal", "Posterior semicircular canal", "Superior semicircular canal", "The utricle of the inner ear"],
        correct: 1,
        explanation: "Educational Objective: BPPV is most commonly caused by canalithiasis (dislodged otoconia) within the posterior semicircular canal."
    },
    {
        id: "ent_mosad_306",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "BPPV",
        source: "Dr mosad's MCQs",
        question: "Dix-Hallpike test is diagnostic for:",
        options: ["Vestibular neuritis", "Labyrinthitis", "Benign paroxysmal positional vertigo", "Acoustic neuroma"],
        correct: 2,
        explanation: "Educational Objective: The Dix-Hallpike maneuver triggers positional nystagmus and vertigo, confirming the diagnosis of BPPV."
    },
    {
        id: "ent_mosad_307",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "A triad of SNHL, tinnitus, and vertigo is suspicious of:",
        options: ["Cholesteatoma", "Otitic barotraumas", "Vestibular neuritis", "Meniere's disease"],
        correct: 3,
        explanation: "Educational Objective: The classic clinical triad of Meniere's disease comprises episodic vertigo, sensorineural hearing loss, and tinnitus (often accompanied by a feeling of aural fullness)."
    },
    {
        id: "ent_mosad_308",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "The following are symptoms of Meniere's disease except:",
        options: ["Fainting attacks", "Acute recurrent attacks of vertigo", "SNHL", "Tinnitus"],
        correct: 0,
        explanation: "Educational Objective: Meniere's disease causes true rotational vertigo without loss of consciousness or syncope (fainting)."
    },
    {
        id: "ent_mosad_309",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "Meniere's disease is characterized by:",
        options: ["Conductive deafness, otorrhoea, and vertigo", "Sensorineural deafness, pain, and tinnitus", "Sensorineural deafness, tinnitus, and vertigo", "Conductive deafness, facial paralysis, and vertigo"],
        correct: 2,
        explanation: "Educational Objective: Meniere's disease features episodic vertigo, fluctuating sensorineural deafness, and low-pitched tinnitus."
    },
    {
        id: "ent_mosad_310",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "Meniere's disease is characterized by:",
        options: ["Attacks of vertigo, tinnitus, and conductive hearing loss", "Diuretics are part of the medications prescribed for its management", "Tympanogram shows type B curve", "The condition is strictly unilateral"],
        correct: 1,
        explanation: "Educational Objective: Medical management of Meniere's disease aims to decrease endolymphatic pressure using dietary salt restriction and diuretics (e.g., hydrochlorothiazide)."
    },
    {
        id: "ent_mosad_311",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Acoustic Neuroma",
        source: "Dr mosad's MCQs",
        question: "The commonest presenting symptom of acoustic neuroma is:",
        options: ["Unilateral tinnitus with progressive SNHL", "Vertigo and loss of balance", "Facial and trigeminal paralysis", "Sudden SNHL with tinnitus"],
        correct: 0,
        explanation: "Educational Objective: Acoustic neuroma (Vestibular Schwannoma) typically presents with insidious, asymmetric/unilateral sensorineural hearing loss and ipsilateral tinnitus."
    },
    {
        id: "ent_mosad_312",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "Endolymphatic hydrops is a feature of:",
        options: ["Mumps", "Otosclerosis", "Meniere's disease", "Presbyacusis"],
        correct: 2,
        explanation: "Educational Objective: Idiopathic endolymphatic hydrops (distension of the endolymphatic system) is the underlying pathological hallmark of Meniere's disease."
    },
    {
        id: "ent_mosad_313",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "The following are manifestations of Meniere's disease except:",
        options: ["Vertigo", "Positive reservoir sign", "SNHL", "Tinnitus"],
        correct: 1,
        explanation: "Educational Objective: Positive reservoir sign is associated with mastoid/middle ear pathology (like mastoiditis), not Meniere's disease."
    },
    {
        id: "ent_mosad_314",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "Surgical treatment of Meniere's disease with serviceable (fair) hearing is:",
        options: ["Intratympanic injection of gentamycin", "Labyrinthectomy", "Endolymphatic sac decompression", "Singular nerve neurectomy"],
        correct: 2,
        explanation: "Educational Objective: Conservative hearing-sparing surgical procedures, such as endolymphatic sac decompression, are reserved for patients with intractable vertigo who maintain serviceable hearing."
    },
    {
        id: "ent_mosad_315",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "BPPV",
        source: "Dr mosad's MCQs",
        question: "Epley maneuver is used in treatment of:",
        options: ["Vestibular neuritis", "Benign paroxysmal positional vertigo", "Meniere's disease", "Labyrinthine fistula"],
        correct: 1,
        explanation: "Educational Objective: The Epley particle repositioning maneuver is the definitive treatment for posterior canal BPPV."
    },
    {
        id: "ent_mosad_316",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "Meniere's disease is a disease of:",
        options: ["Bony labyrinth of the inner ear", "Membranous labyrinth of the inner ear", "Endolymphatic sac of the inner ear", "Endolymphatic duct and sac of the inner ear"],
        correct: 1,
        explanation: "Educational Objective: Meniere's disease is caused by an excess accumulation of endolymph expanding the membranous labyrinth."
    },
    {
        id: "ent_mosad_317",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "Recruitment which is a hypersensitivity to loud sound is characteristic for:",
        options: ["Otosclerosis", "Meniere's disease", "Vestibular neuritis", "Benign paroxysmal positional vertigo"],
        correct: 1,
        explanation: "Educational Objective: Loudness recruitment is pathognomonic for sensory (cochlear) hearing loss, classically demonstrated in Meniere's disease."
    },
    {
        id: "ent_mosad_318",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "Deafness in Meniere's disease is more for low tone sound because:",
        options: ["The apex of the cochlea is more affected", "The base of the cochlea is more affected", "The saccule is more affected", "The utricle is more affected"],
        correct: 0,
        explanation: "Educational Objective: Low frequencies are detected at the apex of the cochlea, which is most vulnerable to apical endolymphatic distension early in Meniere's disease."
    },
    {
        id: "ent_mosad_319",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Acoustic Neuroma",
        source: "Dr mosad's MCQs",
        question: "Acoustic neuroma is arising from:",
        options: ["Cochlear nerve", "Vestibular nerve", "Facial nerve", "Inner ear itself"],
        correct: 1,
        explanation: "Educational Objective: Despite its name, acoustic neuroma is a Schwannoma arising from the Schwann cell sheath of the vestibular nerve."
    },
    {
        id: "ent_mosad_320",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Acoustic Neuroma",
        source: "Dr mosad's MCQs",
        question: "The most diagnostic investigation for acoustic neuroma is:",
        options: ["Computerized tomography (CT)", "Magnetic resonance imaging (MRI)", "Pure tone audiometry", "Angiography"],
        correct: 1,
        explanation: "Educational Objective: Contrast-enhanced MRI of the internal auditory canal (IAC) is the gold standard diagnostic tool for acoustic neuroma."
    },
    {
        id: "ent_mosad_321",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "BPPV",
        source: "Dr mosad's MCQs",
        question: "Vertigo usually occurs for seconds in:",
        options: ["Acoustic neuroma", "Benign paroxysmal positional vertigo", "Vestibular neuritis", "Meniere's disease"],
        correct: 1,
        explanation: "Educational Objective: BPPV produces brief episodes of severe rotational vertigo lasting under one minute (< 60 seconds) triggered by head motion."
    },
    {
        id: "ent_mosad_322",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "All are correct about Meniere's disease except:",
        options: ["It is an endolymphatic hydrops.", "Males are more affected than females.", "The type of deafness is conductive.", "Decompression of the labyrinth is indicated if the vertiginous attack is crippling."],
        correct: 2,
        explanation: "Educational Objective: Meniere's disease causes Sensorineural Hearing Loss (SNHL), not conductive deafness."
    },
    {
        id: "ent_mosad_323",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "BPPV",
        source: "Dr mosad's MCQs",
        question: "The most common vertigo is:",
        options: ["Acoustic neuroma.", "Ototoxicity.", "Meniere's disease.", "Benign paroxysmal positional vertigo."],
        correct: 3,
        explanation: "Educational Objective: BPPV is the most common cause of peripheral vestibular vertigo."
    },
    {
        id: "ent_mosad_324",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "In case of Meniere's disease with mild SNHL, the treatment may be the following except:",
        options: ["Medical treatment.", "Labyrinthectomy.", "Endolymphatic sac decompression.", "Vestibular nerve section."],
        correct: 1,
        explanation: "Educational Objective: Surgical labyrinthectomy is a destructive procedure reserved only for severe cases with non-serviceable (complete) hearing loss."
    },
    {
        id: "ent_mosad_325",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "Fluctuant SNHL usually occurs in:",
        options: ["Presbyacusis.", "Meniere's disease.", "Otosclerosis.", "Ototoxicity."],
        correct: 1,
        explanation: "Educational Objective: Fluctuating SNHL is a trademark hallmark of Meniere's disease."
    },
    {
        id: "ent_mosad_326",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "All of the following statements regarding Meniere's disease are true except:",
        options: ["Pain", "Tinnitus", "Deafness", "Vertigo"],
        correct: 0,
        explanation: "Educational Objective: Meniere's disease is typically painless. The presence of otalgia suggests middle/external ear pathology."
    },
    {
        id: "ent_mosad_327",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "Which of the following is not typical feature of Menieres disease?",
        options: ["Sensorineural deafness", "Pulsatile tinnitus", "Vertigo", "Fluctuating deafness"],
        correct: 1,
        explanation: "Educational Objective: Tinnitus in Meniere's disease is non-pulsatile (roaring/ocean-like). Pulsatile tinnitus indicates vascular causes (e.g., Glomus tumor)."
    },
    {
        id: "ent_mosad_328",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Acoustic Neuroma",
        source: "Dr mosad's MCQs",
        question: "Acoustic neuroma, first nerve to get involved is?",
        options: ["5th", "7th", "10th", "9th"],
        correct: 0,
        explanation: "Educational Objective: As an acoustic neuroma grows out of the internal auditory canal into the cerebellopontine angle, CN V (trigeminal nerve) is typically involved first (causing decreased corneal reflex), followed by CN VII."
    },
    {
        id: "ent_mosad_329",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "All of the following are characteristic clinical features of Meniere's disease except?",
        options: ["Unconsciousness", "Vertigo", "Deafness", "Tinnitus"],
        correct: 0,
        explanation: "Educational Objective: Unconsciousness does not occur in uncomplicated Meniere's disease."
    },
    {
        id: "ent_mosad_330",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Acoustic Neuroma",
        source: "Dr mosad's MCQs",
        question: "Loss of sensation in posterior wall of external auditory canal is seen in?",
        options: ["Vestibular schwannoma", "Facial nerve palsy", "Cholesteatoma", "Bell's palsy"],
        correct: 0,
        explanation: "Educational Objective: Hitselberger sign (hypesthesia of the posterior external auditory canal) is an early physical sign of acoustic neuroma due to CN VII sensory branch compression."
    },
    {
        id: "ent_mosad_331",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Acoustic Neuroma",
        source: "Dr mosad's MCQs",
        question: "Acoustic neuroma arises from?",
        options: ["Inferior division of vestibular nerve", "Superior division of vestibular nerve", "Cochlear nerve", "Facial nerve"],
        correct: 1,
        explanation: "Educational Objective: Vestibular Schwannomas most commonly arise from the schwann cells of the superior division of the vestibular nerve."
    },
    {
        id: "ent_mosad_332",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Ototoxicity & Aging",
        source: "Dr mosad's MCQs",
        question: "The following drug is not ototoxic:",
        options: ["Neomycin.", "Penicillin.", "Salicylates.", "Kanamycin."],
        correct: 1,
        explanation: "Educational Objective: Penicillin is a safe, non-ototoxic beta-lactam antibiotic."
    },
    {
        id: "ent_mosad_333",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Meniere's Disease",
        source: "Dr mosad's MCQs",
        question: "The following disease may cause fluctuant sensorineural hearing due to endolymphatic hydrops:",
        options: ["Tuberculosis", "Syphilis", "Acoustic neuroma", "Salicylates ototoxicity"],
        correct: 1,
        explanation: "Educational Objective: Otosyoilis (late congenital or acquired syphilis) can closely mimic Meniere's disease by producing endolymphatic hydrops."
    },

    // --- ADDITIONAL MCQS ACROSS BOOK ---
    {
        id: "ent_mosad_045",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Anatomy & Mixed SNHL",
        source: "Dr mosad's MCQs",
        question: "The following structure of the inner ear is situated in the medial wall of the mastoid antrum:",
        options: ["Lateral semicircular canal", "Superior semicircular canal", "Posterior semicircular canal", "Promontory of the cochlea"],
        correct: 0,
        explanation: "Educational Objective: The lateral (horizontal) semicircular canal forms a prominent bulge on the medial wall of the aditus and mastoid antrum."
    },
    {
        id: "ent_mosad_046",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Anatomy & Mixed SNHL",
        source: "Dr mosad's MCQs",
        question: "The bony cochlea of the inner ear opens in:",
        options: ["Superior semicircular canal", "Posterior semicircular canal", "The vestibule", "The three semicircular canals by 5 openings"],
        correct: 2,
        explanation: "Educational Objective: The bony cochlea opens directly into the anterior part of the vestibule."
    },
    {
        id: "ent_mosad_048",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Anatomy & Mixed SNHL",
        source: "Dr mosad's MCQs",
        question: "Mixed hearing loss can result from lesions in:",
        options: ["Middle ear and Eustachian tube", "Middle ear and Mastoid", "Middle ear and cochlea", "Cochlear and vestibular parts of the inner ear"],
        correct: 3,
        explanation: "Educational Objective: Mixed hearing loss combines conductive pathology (middle ear) with sensorineural inner ear dysfunction."
    },
    {
        id: "ent_mosad_298",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Anatomy & Mixed SNHL",
        source: "Dr mosad's MCQs",
        question: "The following disease affects the inner ear but it is commonly present with conductive hearing loss:",
        options: ["Adhesive otitis media", "Secretory otitis media", "Meniere's disease", "Otosclerosis"],
        correct: 3,
        explanation: "Educational Objective: Otosclerosis is a primary osseous dyscrasia of the bony labyrinth (inner ear) that typically presents with conductive hearing loss due to stapedial fixation."
    },

    // --- CLINICAL PROBLEM-SOLVING CASES ---
    {
        id: "ent_mosad_case_25",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Clinical Cases",
        source: "Dr mosad's MCQs",
        question: "Case 25: A 45 year old patient presented with recurrent attacks of vertigo. He also complained of diminution of hearing and tinnitus in right ear. Both ears were normal on otoscopy. Rinne test was positive on both ears, and Weber test was lateralized to left side. What is the diagnosis?",
        options: ["Meniere's disease (right side)", "BPPV (left side)", "Vestibular neuritis", "Acoustic neuroma (left side)"],
        correct: 0,
        explanation: "Educational Objective: Meniere's disease on the right side. Rinne positive bilaterally indicates sensorineural loss, and Weber lateralizes to the contralateral (normal/left) ear."
    },
    {
        id: "ent_mosad_case_36",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Clinical Cases",
        source: "Dr mosad's MCQs",
        question: "Case 36: A 50 year old man complained of recurrent attacks of vertigo that lasts seconds especially on lying on his right side and disappears on lying on his left side. No tinnitus or hearing affection. Otoscopy showed normal TM with fistula sign -ve bilaterally. What is the diagnosis?",
        options: ["Meniere's disease", "BPPV (right side)", "Vestibular neuritis", "Labyrinthine fistula"],
        correct: 1,
        explanation: "Educational Objective: Benign Paroxysmal Positional Vertigo (BPPV) involving the right posterior semicircular canal."
    },
    {
        id: "ent_mosad_case_37",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Clinical Cases",
        source: "Dr mosad's MCQs",
        question: "Case 37: A 45 year old woman presented with severe attack of vertigo, nausea and vomiting. No tinnitus or diminution of hearing. Otoscopy showed normal TM with fistula sign -ve bilaterally. She gave a history of running nose and fever one week before. What is the diagnosis?",
        options: ["Acute Labyrinthitis", "Meniere's disease", "Vestibular neuritis", "BPPV"],
        correct: 2,
        explanation: "Educational Objective: Vestibular neuritis often follows a viral upper respiratory tract infection and manifests as acute, severe, isolated vertigo without hearing loss."
    },
    {
        id: "ent_mosad_case_38",
        subject: "ENT",
        branch: "otology-drmosad MCQs",
        subtype: "Clinical Cases",
        source: "Dr mosad's MCQs",
        question: "Case 38: A 70 year old man is complaining of decreased hearing acuity in both ears. Otoscopy showed normal intact TM with air conduction better than bone conduction bilaterally, the Weber was central. He gave no history of trauma, operation, ototoxic medication or vascular disease. What is the diagnosis?",
        options: ["Otosclerosis", "Bilateral Ototoxicity", "Presbyacusis", "Acoustic neuroma"],
        correct: 2,
        explanation: "Educational Objective: Presbyacusis presents in elderly individuals as bilateral symmetric sensorineural hearing loss (AC > BC bilaterally, Weber central)."
            },
    // --- UROLOGY: ANDROLOGY ---
    {
        id: "uro_andro_001",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "A 25-year-old man complained of secondary infertility. His doctor ordered semen analysis. Which of the following parameters is considered ABNORMAL in his semen analysis?",
        options: [
            "Sperm concentration 10 million/ml", 
            "Progressive motility 50%", 
            "Volume 2.5 ml", 
            "Morphology 20% is normal"
        ],
        correct: 0,
        explanation: "General Overview: Normal semen analysis parameters are defined by the WHO guidelines. Correct Answer (A): A sperm concentration of 10 million/mL is below the normal threshold of 15 million/mL, indicating oligospermia. Incorrect Options: Progressive motility >= 32%, Volume >= 1.5 mL, and normal morphology >= 4% are all considered normal parameters. Educational Objective: Recognize the WHO lower reference limits for a normal semen analysis."
    },
    {
        id: "uro_andro_002",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "A sub fertile 28 years old patient underwent left varicocele ligation one year ago. Now he developed a cystic scrotal swelling which is painless and gradually increasing in size. The probable diagnosis of this scrotal swelling is:",
        options: [
            "left secondary vaginal hydrocele.", 
            "left infantile hydrocele.", 
            "left congenital hydrocele.", 
            "left encysted hydrocele of the cord."
        ],
        correct: 0,
        explanation: "General Overview: Varicocelectomy involves ligation of dilated veins in the spermatic cord. Correct Answer (A): Disruption of lymphatic drainage during the ligation of the spermatic cord veins is a known complication that leads to the accumulation of fluid in the tunica vaginalis, causing a secondary vaginal hydrocele. Incorrect Options: Infantile and congenital hydroceles present in early childhood due to a patent processus vaginalis. Encysted hydrocele of the cord does not typically present as a delayed complication of varicocelectomy. Educational Objective: Identify secondary vaginal hydrocele as a potential complication of varicocelectomy due to lymphatic disruption."
    },
    {
        id: "uro_andro_003",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "Which of the following is NOT an inguinoscrotal swelling?",
        options: [
            "secondary varicocele.", 
            "communicating hydrocele.", 
            "congenital inguinal hernia.", 
            "vaginal hydrocele."
        ],
        correct: 3,
        explanation: "General Overview: Scrotal swellings can be confined to the scrotum or extend into the inguinal canal. Correct Answer (D): A primary vaginal hydrocele is confined entirely to the scrotum because the processus vaginalis is obliterated above it, making it a purely scrotal swelling. Incorrect Options: A communicating hydrocele, congenital inguinal hernia, and secondary varicocele all have continuous extensions along the inguinal canal, defining them as inguinoscrotal. Educational Objective: Differentiate purely scrotal swellings from inguinoscrotal swellings based on their anatomical extension."
    },
    {
        id: "uro_andro_004",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "For a 6-month-old child with infantile hydrocele, all the following sentences are true EXCEPT:",
        options: [
            "His hydrocele is constant with no size variation.", 
            "He has an inguino-scrotal swelling.", 
            "Treatment should be deferred to the age of one year.", 
            "Treatment is by needle aspiration of the hydrocele."
        ],
        correct: 3,
        explanation: "General Overview: Infantile hydroceles occur when fluid fills the tunica vaginalis but the processus vaginalis is closed at the deep ring. Correct Answer (D): Needle aspiration is strictly contraindicated in pediatric hydroceles due to a high risk of infection, recurrence, and potential injury to surrounding structures. Incorrect Options: Infantile hydroceles do not vary in size (unlike communicating ones), they present as inguinoscrotal swellings, and observation until age 1-2 years is standard since most resolve spontaneously. Educational Objective: Understand that infantile hydroceles are managed conservatively with observation, and needle aspiration is contraindicated."
    },
    {
        id: "uro_andro_005",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "Clinical picture of penile fracture include all of the followings EXCEPT:",
        options: [
            "History of cracking followed by persistent erection.", 
            "penile swelling, pain, and discoloration.", 
            "bleeding per urethra.", 
            "a palpable tunical defect (or tunical defect on penile ultrasound & MRI)."
        ],
        correct: 0,
        explanation: "General Overview: Penile fracture is a traumatic rupture of the tunica albuginea of the corpora cavernosa during an erection. Correct Answer (A): Patients classicially experience a cracking sound followed by immediate detumescence (loss of erection), not a persistent erection. Incorrect Options: It typically presents with rapid swelling, severe pain, and ecchymosis (eggplant deformity). A palpable defect is common, and bleeding per urethra occurs if there is concomitant urethral injury. Educational Objective: Recognize the classic presentation of penile fracture: popping sound, immediate loss of erection, pain, and swelling."
    },
    {
        id: "uro_andro_006",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "Obesity is associated with increased rates of:",
        options: [
            "Erectile dysfunction", 
            "Kidney cancer", 
            "Uric acid nephrolithiasis", 
            "All of the above"
        ],
        correct: 3,
        explanation: "General Overview: Obesity leads to metabolic syndrome, which has systemic and urologic manifestations. Correct Answer (D): Obesity increases the risk of erectile dysfunction (via vascular disease and endothelial dysfunction), renal cell carcinoma (due to hormonal and metabolic alterations), and uric acid stones (due to insulin resistance resulting in highly acidic urine). Educational Objective: Identify the urological complications of obesity, including erectile dysfunction, renal cell carcinoma, and uric acid nephrolithiasis."
    },
    {
        id: "uro_andro_007",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "The parents of a one year-old boy noticed the absence of his left testis. On clinical examination, the right testis is found normally in the scrotum but the left one cannot be found in the scrotum, inguinal region or other ectopic sites. Otherwise, his external genitalia were normal. Which of the following investigations is indicated in this case?",
        options: [
            "Karyotyping.", 
            "Pre and post contrast abdominal CT.", 
            "Abdominal ultrasonography.", 
            "Diagnostic laparoscopy."
        ],
        correct: 3,
        explanation: "General Overview: A non-palpable testis can be intra-abdominal, absent, or extremely atrophic. Correct Answer (D): Diagnostic laparoscopy is the gold standard investigation for a unilateral non-palpable testis, allowing direct visualization and concurrent therapeutic intervention (orchiopexy or orchiectomy). Incorrect Options: Ultrasound and CT lack the sensitivity required to reliably locate intra-abdominal testes. Karyotyping is indicated for bilateral non-palpable testes or if associated with disorders of sex development like hypospadias. Educational Objective: Identify diagnostic laparoscopy as the most appropriate next step in the management of a unilateral non-palpable testis."
    },
    {
        id: "uro_andro_008",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "A retractile testis:",
        options: [
            "is caused by exaggerated cremasteric reflex.", 
            "cannot be pulled down to the bottom of scrotum.", 
            "need surgical treatment between 6-12 months.", 
            "indicates laparoscopy."
        ],
        correct: 0,
        explanation: "General Overview: Retractile testes are normal variants where the testis is temporarily pulled out of the scrotum. Correct Answer (A): This condition is caused by an overactive or exaggerated cremasteric reflex. Incorrect Options: Unlike true undescended testes, retractile testes can be manually brought down to the bottom of the scrotum and will stay there temporarily without tension. They do not require surgical treatment or laparoscopy. Educational Objective: Differentiate retractile testis (caused by a hyperactive cremasteric reflex and managed conservatively) from true cryptorchidism."
    },
    {
        id: "uro_andro_009",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "For bilateral impalpable testes:",
        options: [
            "Optimum age of treatment is 6-12 months.", 
            "Karyotyping is not indicated.", 
            "Open surgery orchiolysis and orchiopexy is the suitable treatment.", 
            "Pelvi-abdominal CT is the preferred diagnostic tool."
        ],
        correct: 0,
        explanation: "General Overview: Management of undescended testes aims to preserve fertility and facilitate cancer screening. Correct Answer (A): The optimal age for surgical correction (orchiopexy) is between 6 and 12 months to maximize fertility potential. Incorrect Options: Karyotyping IS indicated for bilateral impalpable testes to rule out congenital adrenal hyperplasia or chromosomal abnormalities. Laparoscopy is the diagnostic and therapeutic modality of choice, not open surgery or CT. Educational Objective: Recall that orchiopexy for cryptorchidism should be performed between 6 and 12 months of age."
    },
    {
        id: "uro_andro_010",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "A 21 year-old patient presented by acute agonizing right scrotal pain of three hours duration. There was no history of any scrotal trauma. The pain did not respond to analgesics. On examination, the right testis was found to be enlarged, tender and high riding with absent cremasteric reflex. Which of the following investigations is indicated in this case?",
        options: [
            "Semen culture and sensitivity.", 
            "Semen analysis.", 
            "Scrotal color duplex ultrasonography.", 
            "Testicular biopsy."
        ],
        correct: 2,
        explanation: "General Overview: The clinical presentation (acute pain, high-riding testis, absent cremasteric reflex) is highly suspicious for testicular torsion. Correct Answer (C): Scrotal color duplex ultrasonography is the standard diagnostic imaging study to evaluate testicular blood flow. Absent or decreased blood flow confirms torsion. Incorrect Options: Semen cultures and analysis play no role in an acute surgical emergency. Biopsy is not indicated. Educational Objective: Recognize the presentation of testicular torsion and identify scrotal color Doppler ultrasound as the definitive diagnostic imaging modality."
    },
    {
        id: "uro_andro_011",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "A teenage boy presents with left testicular pain. Which of the following options need to be excluded first?",
        options: [
            "Orchitis", 
            "Epididymitis", 
            "Torsion of epididymal appendage", 
            "Testicular torsion"
        ],
        correct: 3,
        explanation: "General Overview: Acute scrotum in a young male requires rapid assessment to rule out conditions that threaten organ viability. Correct Answer (D): Testicular torsion is a true urologic emergency that must be excluded first, as irreversible ischemic damage to the testicle can occur within 4 to 8 hours. Incorrect Options: While epididymitis and appendage torsion cause pain, they do not result in acute organ loss and thus are secondary diagnoses of exclusion. Educational Objective: Prioritize ruling out testicular torsion in the differential diagnosis of the acute scrotum due to its time-sensitive and limb-threatening nature."
    },
    {
        id: "uro_andro_012",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "The corner stone to differentiate between acute Epididymo-orchitis and acute torsion:",
        options: [
            "History", 
            "Examination", 
            "Urine analysis", 
            "Scrotal US and duplex"
        ],
        correct: 3,
        explanation: "General Overview: Differentiating acute scrotum etiologies dictates management (emergency surgery vs. antibiotics). Correct Answer (D): Scrotal Doppler ultrasound is the cornerstone investigation because it definitively assesses arterial perfusion—demonstrating absent blood flow in torsion versus hyperemia (increased flow) in epididymo-orchitis. Incorrect Options: History and physical exam are crucial but lack the definitive diagnostic accuracy of Doppler ultrasound in ambiguous cases. Educational Objective: Identify scrotal Doppler ultrasound as the primary objective modality to differentiate testicular torsion from epididymo-orchitis."
    },
    {
        id: "uro_andro_013",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "A 63-year diabetic man presents with fever and scrotal pain of 2 days duration. He has history of marked obstructive lower urinary tract symptoms. On local examination, there are areas of blackish discoloration and crepitus sensation in the scrotum. Abdominal ultrasonography revealed markedly distended urinary bladder and bilateral mild hydronephrosis. Standard management includes:",
        options: [
            "oral broad-spectrum antibiotic, scrotal debridement and urethral catheter fixation.", 
            "oral broad-spectrum antibiotic, scrotal debridement and suprapubic tube fixation.", 
            "parenteral broad-spectrum antibiotic, scrotal debridement and suprapubic tube fixation (or suprapubic cystotomy catheter).", 
            "parenteral broad-spectrum antibiotic, scrotal debridement and urethral catheter fixation."
        ],
        correct: 2,
        explanation: "General Overview: Fournier gangrene is a polymicrobial necrotizing fasciitis of the perineal and scrotal tissues. Correct Answer (C): It is a surgical emergency requiring immediate parenteral (IV) broad-spectrum antibiotics and aggressive surgical debridement. Because this patient has significant lower urinary tract obstruction, suprapubic cystostomy is preferred over urethral catheterization to divert urine away from the infected field and prevent further urethral trauma. Educational Objective: Outline the standard management of Fournier gangrene: hemodynamic support, broad-spectrum IV antibiotics, urgent aggressive surgical debridement, and suprapubic urinary diversion if outlet obstruction exists."
    },
    {
        id: "uro_andro_014",
        subject: "Urology",
        branch: "Andrology",
        subtype: "Andrology",
        source: "PYEs and formatives",
        question: "The primary site of lymphatic spread of testicular tumors is:",
        options: [
            "Superficial inguinal lymph nodes", 
            "Deep inguinal lymph nodes", 
            "Para-aortic lymph nodes", 
            "Femoral lymph node"
        ],
        correct: 2,
        explanation: "General Overview: The lymphatic drainage pathways dictate the initial spread of urologic malignancies. Correct Answer (C): Because the testes originate embryologically in the posterior abdominal wall before descending, their lymphatic and venous drainage ascends alongside the gonadal vessels directly to the para-aortic (retroperitoneal) lymph nodes. Incorrect Options: The superficial and deep inguinal nodes drain the scrotal skin and penis, not the testicles (unless the scrotal skin is invaded or there is a history of scrotal surgery). Educational Objective: Trace the lymphatic drainage of the testes directly to the para-aortic lymph nodes based on their embryologic descent."
    }
questionsDatabase.push(
    {
        id: "ent_phar_anat_mosad_01",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "At the level of 6th cervical vertebra, the following are true except:",
        options: [
            "Larynx ends; trachea begins",
            "Pharynx ends; esophagus begins",
            "Inferior thyroid artery crosses posterior to carotid sheath",
            "Arytenoids cartilage are present"
        ],
        correct: 3,
        explanation: "<b>Overview:</b> The level of the 6th cervical vertebra (C6) is a critical anatomical landmark in the neck.<br><br><b>Correct Answer (d):</b> The arytenoid cartilages articulate with the superior border of the cricoid cartilage lamina, which is located higher up (around the C4-C5 level). Therefore, they are not present at the C6 level.<br><br><b>Incorrect Options:</b><br>- <b>a & b:</b> C6 marks the lower border of the cricoid cartilage, which is exactly where the larynx transitions into the trachea, and the pharynx transitions into the esophagus.<br>- <b>c:</b> The inferior thyroid artery consistently crosses posterior to the carotid sheath near this level to supply the thyroid gland.<br><br><b>Educational Objective:</b> The C6 vertebra (cricoid cartilage lower border) marks the junction of the larynx with the trachea and the pharynx with the esophagus."
    },
    {
        id: "ent_phar_anat_mosad_02",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "Regarding the nasopharynx, all the following statements are correct except:",
        options: [
            "It is the post-nasal space",
            "It contains the Eustachian tube in its lateral wall",
            "Its roof contains nasopharyngeal lymphoid tissues",
            "It is not related to the skull base"
        ],
        correct: 3,
        explanation: "<b>Overview:</b> The nasopharynx is the uppermost part of the pharynx, extending from the skull base to the upper surface of the soft palate.<br><br><b>Correct Answer (d):</b> The statement 'It is not related to the skull base' is false. The roof and posterior wall of the nasopharynx are formed by the sloping inferior surfaces of the body of the sphenoid bone and the basilar part of the occipital bone (the skull base).<br><br><b>Incorrect Options:</b><br>- <b>a:</b> It is synonymous with the post-nasal space.<br>- <b>b:</b> The lateral wall houses the pharyngeal opening of the Eustachian tube.<br>- <b>c:</b> The roof contains the adenoids (pharyngeal tonsils).<br><br><b>Educational Objective:</b> The nasopharynx is intimately related to the central skull base, making it a critical pathway for the superior spread of nasopharyngeal carcinoma."
    },
    {
        id: "ent_phar_anat_mosad_03",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "Fossa of Rosen-Muller is characterized by the following:",
        options: [
            "Present in the posterior wall of the nasopharynx",
            "It is in front of the Eustachian tube",
            "It is the commonest site for nasopharyngeal carcinoma",
            "It can be seen by anterior rhinoscopy"
        ],
        correct: 2,
        explanation: "<b>Overview:</b> The pharyngeal recess, or Fossa of Rosen-Müller, is a slit-like depression in the lateral wall of the nasopharynx.<br><br><b>Correct Answer (c):</b> It is clinically highly significant as it is the most common site of origin for nasopharyngeal carcinoma (NPC).<br><br><b>Incorrect Options:</b><br>- <b>a:</b> It is located on the <i>lateral</i> wall of the nasopharynx, not the posterior wall.<br>- <b>b:</b> It is located <i>behind</i> (posterior to) the Eustachian tube elevation (torus tubarius), not in front of it.<br>- <b>d:</b> It cannot be adequately visualized via anterior rhinoscopy; it requires posterior rhinoscopy or nasal endoscopy.<br><br><b>Educational Objective:</b> The Fossa of Rosen-Müller is located posterior to the torus tubarius in the nasopharynx and is the classic origin site for nasopharyngeal carcinoma."
    },
    {
        id: "ent_phar_anat_mosad_04",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "Pyriform fossa is characterized by the following except:",
        options: [
            "Present behind and lateral to the larynx",
            "It is bounded by thyroid cartilage laterally and ary-epiglottic fold medially",
            "It is supplied by the internal branch of superior laryngeal nerve",
            "It is a part of the oropharynx"
        ],
        correct: 3,
        explanation: "<b>Overview:</b> The pyriform fossa (sinus) is a mucosal pouch reflecting laterally around the larynx.<br><br><b>Correct Answer (d):</b> The pyriform fossa is a subsite of the <b>hypopharynx</b> (laryngopharynx), not the oropharynx. <br><br><b>Incorrect Options:</b><br>- <b>a & b:</b> It lies on either side of the laryngeal orifice, bounded medially by the aryepiglottic fold and laterally by the thyroid cartilage and thyrohyoid membrane.<br>- <b>c:</b> The internal branch of the superior laryngeal nerve runs under its mucosa, making it vulnerable during removal of foreign bodies lodged here.<br><br><b>Educational Objective:</b> The pyriform fossa is a critical space in the hypopharynx where swallowed foreign bodies (e.g., fish bones) commonly lodge, risking injury to the underlying internal laryngeal nerve."
    },
    {
        id: "ent_phar_anat_mosad_05",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The superior constrictor muscle is related to:",
        options: [
            "The mandible",
            "The hyoid bone",
            "The thyroid cartilage",
            "The cricoids cartilage"
        ],
        correct: 0,
        explanation: "<b>Overview:</b> The pharyngeal constrictors overlap each other from below upwards. Their anterior attachments differentiate them.<br><br><b>Correct Answer (a):</b> The superior constrictor attaches anteriorly to the pterygomandibular raphe, which connects to the <b>mandible</b> (mylohyoid line) and the pterygoid hamulus.<br><br><b>Incorrect Options:</b><br>- <b>b:</b> The middle constrictor attaches to the hyoid bone.<br>- <b>c & d:</b> The inferior constrictor attaches to the thyroid and cricoid cartilages.<br><br><b>Educational Objective:</b> The superior constrictor muscle attaches anteriorly to the pterygomandibular raphe and mandible, forming the lateral wall of the oropharynx and the bed of the palatine tonsil."
    },
    {
        id: "ent_phar_anat_mosad_06",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The tonsil is supplied from the following arteries except:",
        options: [
            "Ascending pharyngeal",
            "Facial",
            "Lingual",
            "Superior thyroid"
        ],
        correct: 3,
        explanation: "<b>Overview:</b> The palatine tonsil has a rich blood supply derived primarily from branches of the external carotid artery.<br><br><b>Correct Answer (d):</b> The superior thyroid artery supplies the thyroid gland and larynx, but does NOT supply the palatine tonsil.<br><br><b>Incorrect Options:</b><br>The tonsil's arterial supply includes:<br>- <b>b:</b> Tonsillar branch of the Facial artery (main supply) and ascending palatine artery.<br>- <b>a:</b> Ascending pharyngeal artery (branch of ECA).<br>- <b>c:</b> Dorsal lingual branches of the Lingual artery.<br>- Descending palatine branch of the Maxillary artery.<br><br><b>Educational Objective:</b> The main arterial supply to the palatine tonsil is the tonsillar branch of the facial artery, with contributions from the lingual, ascending pharyngeal, and maxillary arteries, but not the superior thyroid artery."
    },
    {
        id: "ent_phar_anat_mosad_07",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "Most pharyngeal muscles are supplied by:",
        options: [
            "Trigeminal nerve",
            "Glossopharyngeal nerve",
            "Vagus nerve",
            "Hypoglossal nerve"
        ],
        correct: 2,
        explanation: "<b>Overview:</b> Motor innervation of the pharynx is predominantly via the pharyngeal plexus.<br><br><b>Correct Answer (c):</b> All muscles of the pharynx are supplied by the cranial root of the accessory nerve via the <b>Vagus nerve (CN X)</b> through the pharyngeal plexus, with the sole exception of the stylopharyngeus muscle.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> Supplies muscles of mastication, mylohyoid, and anterior belly of digastric.<br>- <b>b:</b> Supplies only ONE muscle of the pharynx: the stylopharyngeus.<br>- <b>d:</b> Supplies intrinsic and extrinsic muscles of the tongue (except palatoglossus).<br><br><b>Educational Objective:</b> The Vagus nerve (CN X) provides motor innervation to all pharyngeal muscles except the stylopharyngeus (supplied by CN IX)."
    },
    {
        id: "ent_phar_anat_mosad_08",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "Waldeyer's ring is characterized by the following except:",
        options: [
            "It has efferent lymphatics",
            "It is more active in adults than in children",
            "It protects both the respiratory and the digestive tracts",
            "The palatine tonsils are its largest part"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> Waldeyer's ring is a circular arrangement of mucosa-associated lymphoid tissue (MALT) located at the gateway of the respiratory and digestive tracts.<br><br><b>Correct Answer (b):</b> Waldeyer's ring is maximally active during early childhood (producing IgA against environmental pathogens) and typically undergoes physiological involution (atrophy) after puberty. It is NOT more active in adults.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> True. Unlike lymph nodes, MALT structures in Waldeyer's ring have efferent lymphatics but NO afferent lymphatics.<br>- <b>c:</b> True. It sits at the aero-digestive crossroad.<br>- <b>d:</b> True. The palatine tonsils represent the largest aggregate of lymphoid tissue in the ring.<br><br><b>Educational Objective:</b> Lymphoid tissue in Waldeyer's ring hypertrophies in early childhood for immune processing and atrophies in adulthood; it features efferent lymphatics but lacks afferent lymphatic vessels."
    },
    {
        id: "ent_phar_anat_mosad_09",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The palatine tonsil is characterized by the following except:",
        options: [
            "It lies in the oropharynx between the palatoglossal and palatopharyngeal arches",
            "It is supplied by the glossopharyngeal nerve",
            "It is related to the superior constrictor muscle",
            "Its medial surface is covered by fibrous capsule"
        ],
        correct: 3,
        explanation: "<b>Overview:</b> The palatine tonsils are paired lymphoid organs situated in the tonsillar sinus of the oropharynx.<br><br><b>Correct Answer (d):</b> The <i>medial</i> (free) surface of the tonsil is covered by non-keratinizing stratified squamous epithelium containing tonsillar crypts. The fibrous capsule covers its <i>lateral</i> (deep) surface, separating it from the tonsillar bed.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> True. It sits in the tonsillar fossa bordered anteriorly by the palatoglossal arch and posteriorly by the palatopharyngeal arch.<br>- <b>b:</b> True. Sensory supply is via the tonsillar branch of the glossopharyngeal nerve (CN IX).<br>- <b>c:</b> True. The superior constrictor forms the floor/bed of the tonsillar fossa.<br><br><b>Educational Objective:</b> The palatine tonsil is encapsulated on its lateral (deep) surface, while its medial surface is exposed to the oropharynx and covered by stratified squamous epithelium."
    },
    {
        id: "ent_phar_anat_mosad_10",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The nasopharynx can be seen by the following methods except:",
        options: [
            "Nasal endoscopy",
            "Anterior rhinoscopy",
            "Posterior rhinoscopy",
            "Flexible nasopharyngoscopy"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> The nasopharynx is a deep space located behind the nasal choanae, making direct line-of-sight examination difficult.<br><br><b>Correct Answer (b):</b> Anterior rhinoscopy utilizes a nasal speculum to view the anterior nasal cavity. It cannot provide a view deep enough to inspect the nasopharynx due to the intervening nasal turbinates and septum.<br><br><b>Incorrect Options:</b><br>- <b>a & d:</b> Rigid nasal endoscopy and flexible nasopharyngoscopy are the gold standards for directly visualizing the nasopharyngeal mucosa.<br>- <b>c:</b> Posterior rhinoscopy involves placing a small angled mirror through the mouth behind the soft palate to view the nasopharynx from below.<br><br><b>Educational Objective:</b> Visualizing the nasopharynx requires specialized tools (endoscopes or angled mirrors) as routine anterior rhinoscopy only visualizes the anterior and middle nasal cavity."
    },
    {
        id: "ent_phar_anat_mosad_11",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The muscle which forms the bed of the tonsil is:",
        options: [
            "Superior constrictor",
            "Middle constrictor",
            "Inferior constrictor",
            "Posterior belly of diagastric"
        ],
        correct: 0,
        explanation: "<b>Overview:</b> The tonsillar bed (fossa) is the muscular recess housing the palatine tonsil.<br><br><b>Correct Answer (a):</b> The primary muscle forming the floor (bed) of the tonsillar fossa is the superior pharyngeal constrictor. The palatopharyngeus also contributes to the bed.<br><br><b>Incorrect Options:</b><br>- <b>b & c:</b> Located lower down in the oropharynx and hypopharynx.<br>- <b>d:</b> The posterior belly of the digastric is situated deeper in the neck and is not a part of the mucosal bed of the tonsil.<br><br><b>Educational Objective:</b> The lateral wall (bed) of the palatine tonsil is formed primarily by the superior pharyngeal constrictor muscle, separated from the tonsil by the fibrous tonsillar capsule."
    },
    {
        id: "ent_phar_anat_mosad_12",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The anterior belly of diagastric muscle is supplied by:",
        options: [
            "Facial nerve",
            "Trigeminal nerve",
            "Glossopharyngeal nerve",
            "Vagus nerve"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> The digastric muscle has two bellies with different embryological origins, and thus different nerve supplies.<br><br><b>Correct Answer (b):</b> The anterior belly arises from the 1st branchial arch and is therefore innervated by the nerve to the mylohyoid, a branch of the mandibular division of the <b>Trigeminal nerve (V3)</b>.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> Supplies the posterior belly.<br>- <b>c & d:</b> Do not supply the digastric muscle.<br><br><b>Educational Objective:</b> Due to its 1st branchial arch origin, the anterior belly of the digastric muscle is innervated by the mandibular division of the trigeminal nerve (V3)."
    },
    {
        id: "ent_phar_anat_mosad_13",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The posterior belly of diagastric muscle is supplied by:",
        options: [
            "Facial nerve",
            "Trigeminal nerve",
            "Glossopharyngeal nerve",
            "Vagus nerve"
        ],
        correct: 0,
        explanation: "<b>Overview:</b> The posterior belly of the digastric muscle elevates the hyoid bone and opens the mouth.<br><br><b>Correct Answer (a):</b> It develops from the 2nd branchial arch and is therefore innervated by the <b>Facial nerve (CN VII)</b>.<br><br><b>Incorrect Options:</b><br>- <b>b:</b> Innervates the anterior belly (1st arch derivative).<br>- <b>c & d:</b> Unrelated to the digastric muscle.<br><br><b>Educational Objective:</b> The posterior belly of the digastric muscle originates from the 2nd branchial arch and is innervated by the facial nerve (CN VII)."
    },
    {
        id: "ent_phar_anat_mosad_14",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "Not a part of Waldeyer's ring:",
        options: [
            "Nasopharyngeal lymphoid tissues",
            "Buccal Lymphoid tissues",
            "Palatine tonsils",
            "Lingual tonsils"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> Waldeyer's tonsillar ring constitutes the MALT surrounding the opening of the aero-digestive tract.<br><br><b>Correct Answer (b):</b> There are no distinct 'buccal' tonsils or organized buccal lymphoid tissues forming a part of this ring.<br><br><b>Incorrect Options:</b><br>The 4 main components of Waldeyer's ring are:<br>- <b>a:</b> Pharyngeal tonsils (adenoids) located postero-superiorly.<br>- <b>c:</b> Palatine tonsils located laterally.<br>- <b>d:</b> Lingual tonsils located anteriorly at the tongue base.<br>- Tubal tonsils (around the Eustachian tube opening).<br><br><b>Educational Objective:</b> Waldeyer's ring is composed of the pharyngeal (adenoid), tubal, palatine, and lingual tonsils."
    },
    {
        id: "ent_phar_anat_mosad_15",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The mucosa of the palate received sensory innervations from:",
        options: [
            "Trigeminal nerve",
            "Vagus nerve",
            "Glossopharyngeal nerve",
            "Hypoglossal nerve"
        ],
        correct: 0,
        explanation: "<b>Overview:</b> Sensory innervation of the palate is required for the gag reflex and general sensation.<br><br><b>Correct Answer (a):</b> The sensory innervation of both the hard and soft palate is supplied by branches of the maxillary division of the <b>Trigeminal nerve (V2)</b>, specifically the greater and lesser palatine nerves.<br><br><b>Incorrect Options:</b><br>- <b>b:</b> Vagus supplies motor fibers to the palate (except tensor veli palatini), not primary sensory.<br>- <b>c:</b> Glossopharyngeal supplies sensation to the posterior third of the tongue and oropharynx.<br>- <b>d:</b> Hypoglossal is a pure motor nerve to the tongue.<br><br><b>Educational Objective:</b> General sensory innervation to the mucosa of the palate is provided by the maxillary division of the trigeminal nerve (V2)."
    },
    {
        id: "ent_phar_anat_mosad_16",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The only muscle which is supplied by the glossopharyngeal nerve is:",
        options: [
            "Stylohyoid",
            "Stylopharyngeus",
            "Salpingopharyngeus",
            "Cricopharyngeus"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> The glossopharyngeal nerve (CN IX) provides extensive sensory innervation but very limited motor innervation.<br><br><b>Correct Answer (b):</b> The <b>stylopharyngeus</b> is derived from the 3rd branchial arch and is the ONLY muscle innervated by the glossopharyngeal nerve.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> Stylohyoid is supplied by the facial nerve (CN VII).<br>- <b>c:</b> Salpingopharyngeus is supplied by the vagus nerve (CN X) via the pharyngeal plexus.<br>- <b>d:</b> Cricopharyngeus is supplied by the vagus nerve (CN X).<br><br><b>Educational Objective:</b> The stylopharyngeus muscle is unique as it is the sole motor target of the glossopharyngeal nerve (CN IX)."
    },
    {
        id: "ent_phar_anat_mosad_17",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The mucosa of the nasopharynx is:",
        options: [
            "Stratified squamous epithelium",
            "Columnar ciliated epithelium",
            "Transitional epithelium",
            "Flat cuboidal epithelium"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> The histological lining of the pharynx changes based on its function (respiratory vs. digestive).<br><br><b>Correct Answer (b):</b> The nasopharynx is a continuation of the respiratory tract. Therefore, it is lined primarily by respiratory epithelium: pseudostratified <b>columnar ciliated epithelium</b> with goblet cells.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> Non-keratinized stratified squamous epithelium lines the oro- and hypopharynx to protect against abrasive food boluses.<br>- <b>c & d:</b> Not typical linings for the upper airway.<br><br><b>Educational Objective:</b> The nasopharynx is lined by ciliated columnar epithelium (respiratory mucosa), while the oropharynx and hypopharynx are lined by stratified squamous epithelium."
    },
    {
        id: "ent_phar_anat_mosad_18",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The sensory innervation of the nasaopharynx is Mainly via:",
        options: [
            "Maxillary of trigeminal nerve",
            "Glossopharyngeal nerve",
            "Auriculotemporal of mandibular nerve",
            "Vagus nerve"
        ],
        correct: 0,
        explanation: "<b>Overview:</b> Sensory innervation of the pharynx is segmented cranio-caudally.<br><br><b>Correct Answer (a):</b> The upper portion of the pharynx (nasopharynx) receives its sensory innervation primarily from the <b>Maxillary nerve (V2)</b>, mainly via the pharyngeal branch of the pterygopalatine ganglion.<br><br><b>Incorrect Options:</b><br>- <b>b:</b> Supplies the oropharynx.<br>- <b>c:</b> Auriculotemporal supplies the TMJ and skin of the temporal region.<br>- <b>d:</b> Vagus supplies the hypopharynx and larynx.<br><br><b>Educational Objective:</b> Sensory innervation of the pharynx is divided: Nasopharynx (CN V2), Oropharynx (CN IX), and Hypopharynx (CN X)."
    },
    {
        id: "ent_phar_anat_mosad_19",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The sensory innervation of the oropharynx is Mainly via:",
        options: [
            "Maxillary of trigeminal nerve",
            "Glossopharyngeal nerve",
            "Auriculotemporal of mandibular nerve",
            "Vagus nerve"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> The oropharynx contains the palatine tonsils, base of tongue, and soft palate.<br><br><b>Correct Answer (b):</b> The <b>Glossopharyngeal nerve (CN IX)</b> provides the main sensory innervation to the mucosa of the oropharynx (including the afferent limb of the gag reflex).<br><br><b>Incorrect Options:</b><br>- <b>a:</b> Supplies the nasopharynx.<br>- <b>c:</b> Unrelated to the pharynx.<br>- <b>d:</b> Supplies the hypopharynx and provides the efferent (motor) limb of the gag reflex.<br><br><b>Educational Objective:</b> The glossopharyngeal nerve (CN IX) provides sensory innervation to the oropharynx and acts as the afferent limb of the gag reflex."
    },
    {
        id: "ent_phar_anat_mosad_20",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The sensory innervation of the hypopharynx is Mainly via:",
        options: [
            "Maxillary of trigeminal nerve",
            "Glossopharyngeal nerve",
            "Auriculotemporal of mandibular nerve",
            "Vagus nerve"
        ],
        correct: 3,
        explanation: "<b>Overview:</b> The hypopharynx (laryngopharynx) is the lowest segment of the pharynx.<br><br><b>Correct Answer (d):</b> Sensory innervation to the hypopharynx is provided by the <b>Vagus nerve (CN X)</b>, specifically via the internal branch of the superior laryngeal nerve.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> Sensory to nasopharynx.<br>- <b>b:</b> Sensory to oropharynx.<br>- <b>c:</b> Sensory to TMJ and lateral scalp.<br><br><b>Educational Objective:</b> The Vagus nerve (CN X), via the internal laryngeal nerve, provides critical sensory innervation to the hypopharynx, protecting the airway during swallowing."
    },
    {
        id: "ent_phar_anat_mosad_21",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The anterior tonsillar pillar is formed of the following muscle with overlying mucosa:",
        options: [
            "Palatopharyngeus",
            "Palatoglossus",
            "Stylopharyngeus",
            "Salpingopharyngeus"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> The palatine tonsil sits in a fossa bounded by two mucosal pillars (arches).<br><br><b>Correct Answer (b):</b> The anterior tonsillar pillar is formed by the <b>palatoglossus</b> muscle covered by mucous membrane.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> The palatopharyngeus muscle forms the <i>posterior</i> tonsillar pillar.<br>- <b>c & d:</b> These are longitudinal muscles of the pharynx that elevate it during swallowing but do not form the tonsillar pillars.<br><br><b>Educational Objective:</b> The tonsillar fossa is bounded anteriorly by the palatoglossal arch (palatoglossus muscle) and posteriorly by the palatopharyngeal arch (palatopharyngeus muscle)."
    },
    {
        id: "ent_phar_anat_mosad_22",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The cricoid cartilage is situated at the following level:",
        options: [
            "The 4th cervical vertebra",
            "The 5th cervical vertebra",
            "The 6th cervical vertebra",
            "The 7th cervical vertebra"
        ],
        correct: 2,
        explanation: "<b>Overview:</b> Vertebral levels are essential surgical and clinical landmarks in the neck.<br><br><b>Correct Answer (c):</b> The lower border of the cricoid cartilage aligns with the level of the <b>6th cervical vertebra (C6)</b>.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> C4 corresponds to the bifurcation of the common carotid artery and the upper border of the thyroid cartilage.<br>- <b>b & d:</b> Incorrect anatomical correlations for the cricoid.<br><br><b>Educational Objective:</b> The C6 vertebral level corresponds to the cricoid cartilage, representing the narrowest part of the pediatric airway and the junction between the pharynx/larynx and esophagus/trachea."
    },
    {
        id: "ent_phar_anat_mosad_23",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The specific lymph nodes of the palatine tonsil are:",
        options: [
            "Submandibular lymph nodes",
            "Jugulodiagastric lymph nodes",
            "Occipital lymph nodes",
            "Supraclavicular lymph nodes"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> Lymphatic drainage dictates the pattern of lymphadenopathy seen in regional infections or malignancies.<br><br><b>Correct Answer (b):</b> The palatine tonsils drain primarily to the upper deep cervical nodes, specifically the <b>jugulodigastric node</b> (often called the 'tonsillar node'), located just below the angle of the mandible.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> Submandibular nodes drain the oral cavity and floor of mouth.<br>- <b>c:</b> Occipital nodes drain the posterior scalp.<br>- <b>d:</b> Supraclavicular nodes drain thoracic/abdominal viscera (Virchow's node) or lower neck structures.<br><br><b>Educational Objective:</b> Acute tonsillitis typically presents with tender cervical lymphadenopathy prominently involving the jugulodigastric (tonsillar) lymph node."
    },
    {
        id: "ent_phar_anat_mosad_24",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The mucosa of the medial surface of the palatine tonsil is:",
        options: [
            "Columnar ciliated with invaginations called crypts",
            "Stratified squamous with invaginations called crypts",
            "Mixture of Columnar ciliated and stratified with invagination called crypts",
            "Covered by a fibrous capsule"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> The histological surface of tonsils dictates their susceptibility to certain pathologies, like debris accumulation.<br><br><b>Correct Answer (b):</b> Because it lies in the oropharynx, the medial (free) surface of the palatine tonsil is covered by <b>non-keratinized stratified squamous epithelium</b>. This epithelium invaginates deeply to form 15-20 tonsillar crypts.<br><br><b>Incorrect Options:</b><br>- <b>a:</b> Ciliated columnar epithelium (respiratory) covers the pharyngeal tonsils (adenoids).<br>- <b>d:</b> The fibrous capsule is located on the <i>lateral</i> (deep) surface, not the medial surface.<br><br><b>Educational Objective:</b> Palatine tonsils are lined by stratified squamous epithelium that forms deep crypts, which can collect food debris and bacteria, forming tonsilloliths (tonsil stones)."
    },
    {
        id: "ent_phar_anat_mosad_25",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The palatine tonsil receives its arterial supply from all of the following except:",
        options: [
            "Facial",
            "Ascending palatine",
            "Sphenopalatine",
            "Dorsal lingual"
        ],
        correct: 2,
        explanation: "<b>Overview:</b> The tonsil is highly vascular, supplied by 5 main branches from the external carotid system.<br><br><b>Correct Answer (c):</b> The <b>Sphenopalatine artery</b> is the artery of epistaxis, supplying the posterior nasal cavity. It does NOT supply the palatine tonsil.<br><br><b>Incorrect Options:</b><br>The tonsil is supplied by:<br>- Tonsillar branch of Facial artery (main supply).<br>- Ascending palatine artery (branch of Facial).<br>- Dorsal lingual branches (from Lingual).<br>- Ascending pharyngeal artery.<br>- Descending palatine artery (from Maxillary).<br><br><b>Educational Objective:</b> The arterial supply of the tonsil includes branches of the facial, lingual, ascending pharyngeal, and maxillary arteries, but strictly excludes the sphenopalatine artery."
    },
    {
        id: "ent_phar_anat_mosad_26",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The vallecula is:",
        options: [
            "Part of tongue base",
            "Lower pole of the palatine tonsil",
            "Part of pyriform fossa",
            "Part of soft palate above the uvula"
        ],
        correct: 0,
        explanation: "<b>Overview:</b> The valleculae (meaning 'little valleys') are important landmarks in airway management and endoscopy.<br><br><b>Correct Answer (a):</b> The valleculae are mucosal depressions located between the <b>base of the tongue</b> (anteriorly) and the lingual surface of the epiglottis (posteriorly). They are classified anatomically as part of the oropharynx (tongue base).<br><br><b>Incorrect Options:</b><br>- <b>b, c, & d:</b> The vallecula is structurally unrelated to the palatine tonsils, soft palate, or pyriform fossa.<br><br><b>Educational Objective:</b> During endotracheal intubation using a Macintosh (curved) blade, the tip of the blade is placed into the vallecula to elevate the epiglottis and expose the vocal cords."
    },
    {
        id: "ent_phar_anat_mosad_27",
        subject: "ENT",
        branch: "pharynx",
        subtype: "anatomy",
        source: "Dr mosad's MCQs",
        question: "The lower end of Eustachian tube opens in:",
        options: [
            "Lateral wall of nasal cavity",
            "Lateral wall of nasopharynx",
            "Posterior wall of nasopharynx",
            "Roof of nasal cavity"
        ],
        correct: 1,
        explanation: "<b>Overview:</b> The Eustachian (pharyngotympanic) tube connects the middle ear to the upper respiratory tract.<br><br><b>Correct Answer (b):</b> The lower (pharyngeal) opening of the Eustachian tube is located on the <b>lateral wall of the nasopharynx</b>, just posterior to the inferior nasal concha.<br><br><b>Incorrect Options:</b><br>- <b>a & d:</b> It opens into the pharynx, not directly into the nasal cavity.<br>- <b>c:</b> It opens laterally, while the posterior wall houses the adenoids and skull base.<br><br><b>Educational Objective:</b> The Eustachian tube drains into the lateral wall of the nasopharynx, which explains why nasopharyngeal masses (like enlarged adenoids or carcinoma) can obstruct the tube, leading to middle ear effusion."
    }
);

