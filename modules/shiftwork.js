(function(){
    var modules={
        "panel-main-shiftwork":    			{url:"$A/modules/p/panel-shiftwork/panel-main.html",router:1},
        "panel-child-shiftwork":    		{url:"$A/modules/p/panel-shiftwork/panel-child.html"},    
        
        "participant-data-shiftwork":   	{url:"$A/modules/p/participant-data-shiftwork.html",Table:"91000410",form_module:"participant-form-shiftwork",router:1,
                                                child_panel:"panel-child-shiftwork",
                                                questionnaire_setup:"online-questionnaire-setup-shiftwork",
                                                online_questionnaire:"online-questionnaire-app-shiftwork"
                                            },
        "participant-form-shiftwork":   	{url:"$A/modules/p/participant-form-shiftwork.html",Table:"91000410"},
		"edc-notes-data":	  		        {url:"$A/modules/e/edc-notes-data.html",Table:"20007822",form_module:"edc-notes-form"},
		"edc-notes-form":	  		        {url:"$A/modules/e/edc-notes-form.html",Table:"20007822",},

        "online-questionnaire-setup-shiftwork": {url:"$A/modules/o/online-questionnaire-setup-shiftwork.html",Table:"91000410"},
        "online-questionnaire-app-shiftwork":   {url:"$B/index.html"},
                                            

		
		"screening_day_visitdate-data-shiftwork":   {url: "$A/modules/s/shiftwork-tasks/visit-date-data.html",	Table: "91000196",	form_module:"screening_day_visitdate_form-shiftwork"},
		"screening_day_visitdate_form-shiftwork":   {url: "$A/modules/s/shiftwork-tasks/visit-date-form.html",	Table: "91000196"},
        "screening_medical_history-data-shiftwork": {url: "$A/modules/s/shiftwork-tasks/medical-history-data.html",	Table: "91000197",	form_module: "screening_medical_history-form-shiftwork",	task: "Medical History"},
		"screening_medical_history-form-shiftwork": {url: "$A/modules/s/shiftwork-tasks/medical-history-form.html",	Table: "91000197"	},
		
		"Screening_anthropometry": {
			Table: "91000198",
			url: "$A/modules/s/shiftwork-tasks/anthro.html",
			task: "Anthropometry",
			form_module: "screening_anthro-form"
		},
		"screening_anthro-form": {
			Table:"91000198",
			url:"$A/modules/s/shiftwork-tasks/anthro-form.html"
		},
		"Screening_conmeds": {
			Table: "91000199",
			url: "$A/modules/s/shiftwork-tasks/concom_meds.html",
			task: "Concomitant Medication"
		},
		"Screening_Glucose_Triglycerides": {
			Table: "91000200",
			url: "$A/modules/s/shiftwork-tasks/gluctri.html",
			task: "Glucose and Triglycerides",
			form_module:"screening_gluctri_form"
		},
		"screening_gluctri_form": {
			Table: "91000200",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html",
			task: "Glucose and Triglycerides"
		},
		"screening_MAPI": {
			Table: "91000201",
			url: "$A/modules/s/shiftwork-tasks/mapi.html",
			task: "Multivariate Apnea Prediction Index",
			form_module: "screening_MAPI_form"
		},
		"screening_MAPI_form": {
			Table: "91000201",
			url: "$A/modules/s/shiftwork-tasks/mapi-form.html"
		},
		"Screening_POMS": {
			Table: "91000202",
			url: "$A/modules/s/shiftwork-tasks/pom.html",
			task: "Profile of Mood States questionnaire",
			form_module: "Screening_POMS_form"
		},
		"Screening_POMS_form": {
			Table: "91000202",
			url: "$A/modules/s/shiftwork-tasks/pom.form.html"
		},
		"day_visitdate": {
			Table: "91000203",
			url: "$A/modules/s/shiftwork-tasks/visit-date-data.html",
			task: "Visit Date",
			form_module:"day_visitdate_form"
		},
		"day_visitdate_form": {
			Table: "91000203",
			url: "$A/modules/s/shiftwork-tasks/visit-date-form.html",
			task: "Visit Date"
		},
		"night1_visitdate": {
			Table: "91000204",
			url: "$A/modules/s/shiftwork-tasks/visit-date-data.html",
			task: "Visit Date",
			"form":"night1_visitdate_form"
		},
		"night1_visitdate_form": {
			Table: "91000204",
			url: "$A/modules/s/shiftwork-tasks/visit-date-form.html",
			task: "Visit Date"
		},
		"night2_visitdate": {
			Table: "91000205",
			url: "$A/modules/s/shiftwork-tasks/visit-date-data.html",
			task: "Visit Date",
			"form":"night2_visitdate_form"
		},
		"night2_visitdate_form": {
			Table: "91000205",
			url: "$A/modules/s/shiftwork-tasks/visit-date-form.html",
			task: "Visit Date"
		},
		"night3_visitdate": {
			Table: "91000206",
			url: "$A/modules/s/shiftwork-tasks/visit-date-data.html",
			task: "Visit Date",
			"form":"night3_visitdate_form"
		},
		"night3_visitdate_form": {
			Table: "91000206",
			url: "$A/modules/s/shiftwork-tasks/visit-date-form.html",
			task: "Visit Date"
		},
		"day_actiwatch": {
			Table: "91000207",
			url: "$A/modules/s/shiftwork-tasks/Actiwatch.html",
			task: "Actiwatch Upload Day Shift",
			form_module:"day_actiwatch_form"
		},
		"day_actiwatch_form": {
			Table: "91000207",
			url: "$A/modules/s/shiftwork-tasks/Actiwatch-form.html",
			task: "Actiwatch Upload Day Shift"
		},
		"night_actiwatch": {
			Table: "91000208",
			url: "$A/modules/s/shiftwork-tasks/Actiwatch.html",
			task: "Actiwatch Upload Night Shift",
			form_module:"night_actiwatch_form"
		},
		"night_actiwatch_form": {
			Table: "91000208",
			url: "$A/modules/s/shiftwork-tasks/Actiwatch.html",
			task: "Actiwatch Upload Night Shift"
		},
		"day_sleepdiary": {
			Table: "91000209",
			url: "tasks/ethnicity.html",
			task: "Sleep Diary Day Shift"
		},
		"night_sleepdiary": {
			Table: "91000210",
			url: "tasks/ethnicity.html",
			task: "Sleep Diary Night Shift"
		},
		"day_ausedupload": {
			Table: "91000211",
			url: "tasks/ethnicity.html",
			task: "AusEd Upload Day Shift"
		},
		"night1_ausedupload": {
			Table: "91000212",
			url: "tasks/ethnicity.html",
			task: "AusEd Upload Night Shift 1"
		},
		"night2_ausedupload": {
			Table: "91000213",
			url: "tasks/ethnicity.html",
			task: "Aused Upload Night Shift 2"
		},
		"night3_ausedupload": {
			Table: "91000214",
				url: "tasks/ethnicity.html",
			task: "AusEd Upload Night Shift 3"
		},

		"day_kdtupload": {
			Table: "91000215",
			url: "tasks/ethnicity.html",
			task: "KDT Upload Day Shift"
		},
		"night1_kdtupload": {
			Table: "91000216",
			url: "tasks/ethnicity.html",
			task: "KDT Upload Night Shift 1"
		},
		"night3_kdtupload": {
			Table: "91000217",
			url: "tasks/ethnicity.html",
			task: "KDT Upload Night Shift 3"
		},
		"day_PSGupload": {
			Table: "91000218",
			url: "$A/modules/s/shiftwork-tasks/PSG2018.html",
			task: "PSG Upload Day Shift"
		},
		"night1_psgupload": {
			Table: "91000219",
			url: "$A/modules/s/shiftwork-tasks/PSG2018.html",
			task: "PSG Upload Night Shift 1"
		},
		"7am_day_hungerappetite": {
			Table: "91000220",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "7am Hunger and Appetite",
			form_module: "7am_day_hungerappetite_form"
		},
		"7am_day_hungerappetite_form": {
			Table: "91000220",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"8am_day_hungerappetite": {
			Table: "91000221",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "8am Hunger and Appetite",
			form_module: "8am_day_hungerappetite_form"
		},
		"8am_day_hungerappetite_form": {
			Table: "91000221",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"9am_day_hungerappetite": {
			Table: "91000222",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "9am Hunger and Appetite",
			form_module: "9am_day_hungerappetite_form"
		},
		"9am_day_hungerappetite_form": {
			Table: "91000222",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"10am_day_hungerappetite": {
			Table: "91000223",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "10am Hunger and Appetite",
			form_module: "10am_day_hungerappetite_form"
		},
		"10am_day_hungerappetite_form": {
			Table: "91000223",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"11am_day_hungerappetite": {
			Table: "91000224",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "11am Hunger and Appetite",
			form_module: "11am_day_hungerappetite_form"
		},
		"11am_day_hungerappetite_form": {
			Table: "91000224",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"12noon_day_hungerappetite": {
			Table: "91000225",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "7pm Hunger and Appetite",
			form_module: "12noon_day_hungerappetite_form"
		},
		"12noon_day_hungerappetite_form": {
			Table: "91000225",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"1pm_day_hungerappetite": {
			Table: "91000226",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "1pm Hunger and Appetite",
			form_module: "1pm_day_hungerappetite_form"
		},
		"1pm_day_hungerappetite_form": {
			Table: "91000226",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"2pm_day_hungerappetite": {
			Table: "91000227",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "2pm Hunger and Appetite",
			form_module: "2pm_day_hungerappetite_form"
		},
		"2pm_day_hungerappetite_form": {
			Table: "91000227",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"3pm_day_hungerappetite": {
			Table: "91000228",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "3pm Hunger and Appetite",
			form_module: "3pm_day_hungerappetite_form"
		},
		"3pm_day_hungerappetite_form": {
			Table: "91000228",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"4pm_day_hungerappetite": {
			Table: "91000229",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "4pm Hunger and Appetite",
			form_module: "4pm_day_hungerappetite_form"
		},
		"4pm_day_hungerappetite_form": {
			Table: "91000229",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"5pm_day_hungerappetite": {
			Table: "91000230",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "5pm Hunger and Appetite",
			form_module: "5pm_day_hungerappetite_form"
		},
		"5pm_day_hungerappetite_form": {
			Table: "91000230",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"6pm_day_hungerappetite": {
			Table: "91000231",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "6pm Hunger and Appetite",
			form_module: "6pm_day_hungerappetite_form"
		},
		"6pm_day_hungerappetite_form": {
			Table: "91000231",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"7pm_day_hungerappetite": {
			Table: "91000232",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "7pm Hunger and Appetite",
			form_module: "7pm_day_hungerappetite_form"
		},
		"7pm_day_hungerappetite_form": {
			Table: "91000232",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"8pm_day_hungerappetite": {
			Table: "91000233",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "8pm Hunger and Appetite",
			form_module: "8pm_day_hungerappetite_form"
		},
		"8pm_day_hungerappetite_form": {
			Table: "91000233",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"7pm_night1_hungerappetite": {
			Table: "91000234",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "7pm Hunger and Appetite",
			form_module: "7pm_night1_hungerappetite_form"
		},
		"7pm_night1_hungerappetite_form": {
			Table: "91000234",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"8pm_night1_hungerappetite": {
			Table: "91000235",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "8pm Hunger and Appetite",
			form_module: "8pm_night1_hungerappetite_form"
		},
		"8pm_night1_hungerappetite_form": {
			Table: "91000235",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"9pm_night1_hungerappetite": {
			Table: "91000236",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "9pm Hunger and Appetite",
			form_module: "9pm_night1_hungerappetite_form"
		},
		"9pm_night1_hungerappetite_form": {
			Table: "91000236",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"10pm_night1_hungerappetite": {
			Table: "91000237",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "10pm Hunger and Appetite",
			form_module: "10pm_night1_hungerappetite_form"
		},
		"10pm_night1_hungerappetite_form": {
			Table: "91000237",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"11pm_night1_hungerappetite": {
			Table: "91000238",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "11pm Hunger and Appetite",
			form_module: "11pm_night1_hungerappetite_form"
		},
		"11pm_night1_hungerappetite_form": {
			Table: "91000238",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"12noon_night1_hungerappetite": {
			Table: "91000239",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "12pm Hunger and Appetite",
			form_module: "12noon_night1_hungerappetite_form"
		},
		"12noon_night1_hungerappetite_form": {
			Table: "91000239",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"1am_night1_hungerappetite": {
			Table: "91000240",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "1am Hunger and Appetite",
			form_module: "1am_night1_hungerappetite_form"
		},
		"1am_night1_hungerappetite_form": {
			Table: "91000240",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"2am_night1_hungerappetite": {
			Table: "91000241",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "2am Hunger and Appetite",
			form_module: "2am_night1_hungerappetite_form"
		},
		"2am_night1_hungerappetite_form": {
			Table: "91000241",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"3am_night1_hungerappetite": {
			Table: "91000242",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "3am Hunger and Appetite",
			form_module: "3am_night1_hungerappetite_form"
		},
		"3am_night1_hungerappetite_form": {
			Table: "91000242",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"4am_night1_hungerappetite": {
			Table: "91000243",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "4am Hunger and Appetite",
			form_module: "4am_night1_hungerappetite_form"
		},
		"4am_night1_hungerappetite_form": {
			Table: "91000243",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"5am_night1_hungerappetite": {
			Table: "91000244",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "5am Hunger and Appetite",
			form_module: "5am_night1_hungerappetite_form"
		},
		"5am_night1_hungerappetite_form": {
			Table: "91000244",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"6am_night1_hungerappetite": {
			Table: "91000245",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "6am Hunger and Appetite",
			form_module: "6am_night1_hungerappetite_form"
		},
		"6am_night1_hungerappetite_form": {
			Table: "91000245",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"7am_night1_hungerappetite": {
			Table: "91000246",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "7am Hunger and Appetite",
			form_module: "7am_night1_day_hungerappetite_form"
		},
		"7am_night_day_hungerappetite_form": {
			Table: "91000246",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"8am_night1_hungerappetite": {
			Table: "91000247",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "8am Hunger and Appetite",
			form_module: "8am_night1_hungerappetite_form"
		},
		"8am_night1_hungerappetite_form": {
			Table: "91000247",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"7pm_night2_hungerappetite": {
			Table: "91000248",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "7pm Hunger and Appetite",
			form_module: "7pm_night2_hungerappetite_form"
		},
		"7pm_night2_hungerappetite_form": {
			Table: "91000248",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"8pm_night2_hungerappetite": {
			Table: "91000249",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "8pm Hunger and Appetite",
			form_module: "8pm_night2_hungerappetite_form"
		},
		"8pm_night2_hungerappetite_form": {
			Table: "91000249",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"9pm_night2_hungerappetite": {
			Table: "91000250",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "9pm Hunger and Appetite",
			form_module: "9pm_night2_hungerappetite_form"
		},
		"9pm_night2_hungerappetite_form": {
			Table: "91000250",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"10pm_night2_hungerappetite": {
			Table: "91000251",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "10pm Hunger and Appetite",
			form_module: "10pm_night2_hungerappetite_form"
		},
		"10pm_night2_hungerappetite_form": {
			Table: "91000251",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"11pm_night2_hungerappetite": {
			Table: "91000252",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "11pm Hunger and Appetite",
			form_module: "11pm_night2_hungerappetite_form"
		},
		"11pm_night2_hungerappetite_form": {
			Table: "91000252",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"12midnight_night2_hungerappetite": {
			Table: "91000253",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "12pm Hunger and Appetite",
			form_module: "12midnight_night2_hungerappetite_form"
		},
		"12midnight_night2_hungerappetite_form": {
			Table: "91000253",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"1am_night2_hungerappetite": {
			Table: "91000254",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "1am Hunger and Appetite",
			form_module: "1am_night2_hungerappetite_form"
		},
		"1am_night2_hungerappetite_form": {
			Table: "91000254",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"2am_night2_hungerappetite": {
			Table: "91000255",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "2am Hunger and Appetite",
			form_module: "2am_night2_hungerappetite_form"
		},
		"2am_night2_hungerappetite_form": {
			Table: "91000255",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"3am_night2_hungerappetite": {
			Table: "91000256",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "3am Hunger and Appetite",
			form_module: "3am_night2_hungerappetite_form"
		},
		"3am_night2_hungerappetite_form": {
			Table: "91000256",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"4am_night2_hungerappetite": {
			Table: "91000257",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "4am Hunger and Appetite",
			form_module: "4am_night2_hungerappetite_form"
		},
		"4am_night2_hungerappetite_form": {
			Table: "91000257",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"5am_night2_hungerappetite": {
			Table: "91000258",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "5am Hunger and Appetite",
			form_module: "5am_night2_hungerappetite_form"
		},
		"5am_night2_hungerappetite_form": {
			Table: "91000258",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"6am_night2_hungerappetite": {
			Table: "91000259",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "6am Hunger and Appetite",
			form_module: "6am_night2_hungerappetite_form"
		},
		"6am_night2_hungerappetite_form": {
			Table: "91000259",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"7am_night2_hungerappetite": {
			Table: "91000260",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "7am Hunger and Appetite",
			form_module: "7am_night2_hungerappetite_form"
		},
		"7am_night2_hungerappetite_form": {
			Table: "91000260",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"8am_night2_hungerappetite": {
			Table: "91000261",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "8am Hunger and Appetite",
			form_module: "8am_night2_hungerappetite_form"
		},
		"8am_night2_hungerappetite_form": {
			Table: "91000261",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"7pm_night3_hungerappetite": {
			Table: "91000262",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "7pm Hunger and Appetite",
			form_module: "7pm_night3_hungerappetite_form"
		},
		"7pm_night3_hungerappetite_form": {
			Table: "91000262",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"8pm_night3_hungerappetite": {
			Table: "91000263",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "8pm Hunger and Appetite",
			form_module: "8pm_night3_hungerappetite_form"
		},
		"8pm_night3_hungerappetite_form": {
			Table: "91000263",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"9pm_night3_hungerappetite": {
			Table: "91000264",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "9pm Hunger and Appetite",
			form_module: "9pm_night3_hungerappetite_form"
		},
		"9pm_night3_hungerappetite_form": {
			Table: "91000264",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"10pm_night3_hungerappetite": {
			Table: "91000265",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "10pm Hunger and Appetite",
			form_module: "10pm_night3_hungerappetite_form"
		},
		"10pm_night3_hungerappetite_form": {
			Table: "91000265",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"11pm_night3_hungerappetite": {
			Table: "91000266",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "11pm Hunger and Appetite",
			form_module: "11pm_night3_hungerappetite_form"
		},
		"11pm_night3_hungerappetite_form": {
			Table: "91000266",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"12midnight_night3_hungerappetite": {
			Table: "91000267",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "12pm Hunger and Appetite",
			form_module: "12midnight_night3_hungerappetite_form"
		},
		"12midnight_night3_hungerappetite_form": {
			Table: "91000267",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"1am_night3_hungerappetite": {
			Table: "91000268",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "1am Hunger and Appetite",
			form_module: "1am_night3_hungerappetite_form"
		},
		"1am_night3_hungerappetite_form": {
			Table: "91000268",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"2am_night3_hungerappetite": {
			Table: "91000269",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "2am Hunger and Appetite",
			form_module: "2am_night3_hungerappetite_form"
		},
		"2am_night3_hungerappetite_form": {
			Table: "91000269",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"3am_night3_hungerappetite": {
			Table: "91000270",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "3am Hunger and Appetite",
			form_module: "3am_night3_hungerappetite_form"
		},
		"3am_night3_hungerappetite_form": {
			Table: "91000270",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"4am_night3_hungerappetite": {
			Table: "91000271",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "4am Hunger and Appetite",
			form_module: "4am_night3_hungerappetite_form"
		},
		"4am_night3_hungerappetite_form": {
			Table: "91000271",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"5am_night3_hungerappetite": {
			Table: "91000272",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "5am Hunger and Appetite",
			form_module: "5am_night3_hungerappetite_form"
		},
		"5am_night3_hungerappetite_form": {
			Table: "91000272",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"6am_night3_hungerappetite": {
			Table: "91000273",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "6am Hunger and Appetite",
			form_module: "6am_night3_hungerappetite_form"
		},
		"6am_night3_hungerappetite_form": {
			Table: "91000273",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"7am_night3_hungerappetite": {
			Table: "91000274",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "7am Hunger and Appetite",
			form_module: "7am_night3_hungerappetite_form"
		},
		"7am_night3_hungerappetite_form": {
			Table: "91000274",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},
		"8am_night3_hungerappetite": {
			Table: "91000275",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite.html",
			task: "8am Hunger and Appetite",
			form_module: "8am_night3_hungerappetite_form"
		},
		"8am_night3_hungerappetite_form": {
			Table: "91000275",
			url: "$A/modules/s/shiftwork-tasks/hungerappeptite-form.html"
		},

		"7am_day_kss": {
			Table: "91000276",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "7am Sleepiness ",
			form_module: "7am_day_kss_form"
		},
		"7am_day_kss_form": {
			Table: "91000276",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"8am_day_kss": {
			Table: "91000277",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "8am Sleepiness",
			form_module: "8am_day_kss_form"
		},
		"8am_day_kss_form": {
			Table: "91000277",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"9am_day_kss": {
			Table: "91000278",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "9am Sleepiness",
			form_module: "9am_day_kss_form"
		},
		"9am_day_kss_form": {
			Table: "91000278",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"10am_day_kss": {
			Table: "91000279",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "10am Sleepiness",
			form_module: "10am_day_kss_form"
		},
		"10am_day_kss_form": {
			Table: "91000279",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"11am_day_kss": {
			Table: "91000280",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "11am Sleepiness",
			form_module: "11am_day_kss_form"
		},
		"11am_day_kss_form": {
			Table: "91000280",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"12noon_day_kss": {
			Table: "91000281",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "12noon Sleepiness",
			form_module: "12noon_day_kss_form"
		},
		"12noon_day_kss_form": {
			Table: "91000281",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"1pm_day_kss": {
			Table: "91000282",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "1pm Sleepiness",
			form_module: "1pm_day_kss_form"
		},
		"1pm_day_kss_form": {
			Table: "91000282",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"2pm_day_kss": {
			Table: "91000283",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "2pm Sleepiness",
			form_module: "2pm_day_kss_form"
		},
		"2pm_day_kss_form": {
			Table: "91000283",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"day_prekdt_kss": {
			Table: "91000284",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "Sleepiness Pre KDT",
			form_module: "day_prekdt_kss_form"
		},
		"day_prekdtkss_form": {
			Table: "91000284",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"day_postkdt_kss": {
			Table: "91000285",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "Sleepiness Post KDT",
			form_module: "day_postkdt_kss_form"
		},
		"day_postkdt_kss_form": {
			Table: "91000285",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"3pm_day_kss": {
			Table: "91000286",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "3pm Sleepiness",
			form_module: "3pm_day_kss_form"
		},
		"3pm_day_kss_form": {
			Table: "91000286",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"4pm_day_kss": {
			Table: "91000287",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "4pm Sleepiness",
			form_module: "4pm_day_kss_form"
		},
		"4pm_day_kss_form": {
			Table: "91000287",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"5pm_day_kss": {
			Table: "91000288",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "5pm Sleepiness",
			form_module: "5pm_day_kss_form"
		},
		"5pm_day_kss_form": {
			Table: "91000288",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"6pm_day_kss": {
			Table: "91000289",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "6pm Sleepiness",
			form_module: "6pm_day_kss_form"
		},
		"6pm_day_kss_form": {
			Table: "91000289",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"7pm_day_kss": {
			Table: "91000290",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "7pm Sleepiness",
			form_module: "7pm_day_kss_form"
		},
		"7pm_day_kss_form": {
			Table: "91000290",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"8pm_day_kss": {
			Table: "91000291",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "8pm Sleepiness",
			form_module: "8pm_day_kss_form"
		},
		"8pm_day_kss_form": {
			Table: "91000291",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"9pm_night1_kss": {
			Table: "91000292",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "9pm Sleepiness",
			form_module: "9pm_night1_kss_form"
		},
		"9pm_night1_kss_form": {
			Table: "91000292",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"10pm_night1_kss": {
			Table: "91000293",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "10pm Sleepiness",
			form_module: "10pm_night1_kss_form"
		},
		"10pm_night1_kss_form": {
			Table: "91000293",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"11pm_night1_kss": {
			Table: "91000294",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "11pm Sleepiness",
			form_module: "11pm_night1_kss_form"
		},
		"11pm_night1_kss_form": {
			Table: "91000294",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"12midnight_night1_kss": {
			Table: "91000295",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "12midnight Sleepiness",
			form_module: "12midnight_night1_kss_form"
		},
		"12midnight_night1_kss_form": {
			Table: "91000295",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"1am_night1_kss": {
			Table: "91000296",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "1am Sleepiness",
			form_module: "1am_night1_kss_form"
		},
		"1am_night1_kss_form": {
			Table: "1809051427",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"2am_night1_kss": {
			Table: "91000297",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "2am Sleepiness",
			form_module: "2am_night1_kss_form"
		},
		"2am_night1_kss_form": {
			Table: "91000297",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"night1_prekdt_kss": {
			Table: "91000298",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "Sleepiness Pre KDT",
			form_module: "night1_prekdt_kss_form"
		},
		"night1_prekdt_kss_form": {
			Table: "91000298",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"night1_postkdt_kss": {
			Table: "91000299",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "Sleepiness Post KDT",
			form_module: "night1_postkdt_kss_form"
		},
		"night1_postkdt_kss_form": {
			Table: "91000299",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"3am_night1_kss": {
			Table: "91000300",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "3am Sleepiness",
			form_module: "3am_night1_kss_form"
		},
		"3am_night1_kss_form": {
			Table: "91000300",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"4am_night1_kss": {
			Table: "91000301",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "4am Sleepiness",
			form_module: "4am_night1_kss_form"
		},
		"4am_night1_kss_form": {
			Table: "91000301",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"5am_night1_kss": {
			Table: "91000302",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "5am Sleepiness",
			form_module: "5am_night1_kss_form"
		},
		"5am_night1_kss_form": {
			Table: "91000302",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"6am_night1_kss": {
			Table: "91000303",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "6am Sleepiness",
			form_module: "6am_night1_kss_form"
		},
		"6am_night1_kss_form": {
			Table: "91000303",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"7am_night1_kss": {
			Table: "91000304",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "7am Sleepiness",
			form_module: "7am_night1_kss_form"
		},
		"7am_night1_kss_form": {
			Table: "91000304",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"8am_night1_kss": {
			Table: "91000305",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "8am Sleepiness",
			form_module: "8am_night1_kss_form"
		},
		"8am_night1_kss_form": {
			Table: "91000305",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"7pm_night2_kss": {
			Table: "91000306",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "7pm Sleepiness",
			form_module: "7pm_night2_kss_form"
		},
		"7pm_night2_kss_form": {
			Table: "91000306",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"8pm_night2_kss": {
			Table: "91000307",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "8pm Sleepiness",
			form_module: "8pm_night2_kss_form"
		},
		"8pm_night2_kss_form": {
			Table: "91000307",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"9pm_night2_kss": {
			Table: "91000308",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "9pm Sleepiness",
			form_module: "9pm_night2_kss_form"
		},
		"9pm_night2_kss_form": {
			Table: "91000308",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"10pm_night2_kss": {
			Table: "91000309",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "10pm Sleepiness",
			form_module: "10pm_night2_kss_form"
		},
		"10pm_night2_kss_form": {
			Table: "91000309",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"11pm_night2_kss": {
			Table: "91000310",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "11pm Sleepiness",
			form_module: "11pm_night2_kss_form"
		},
		"11pm_night2_kss_form": {
			Table: "91000310",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"12midnight_night2_kss": {
			Table: "91000311",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "12midnight Sleepiness",
			form_module: "12midnight_night2_kss_form"
		},
		"12midnight_night2_kss_form": {
			Table: "91000311",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"1am_night2_kss": {
			Table: "91000312",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "1am Sleepiness",
			form_module: "1am_night2_kss_form"
		},
		"1am_night2_kss_form": {
			Table: "91000312",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"2am_night2_kss": {
			Table: "91000313",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "2am Sleepiness",
			form_module: "2am_night2_kss_form"
		},
		"2am_night2_kss_form": {
			Table: "91000313",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"night2_prekdt_kss": {
			Table: "91000314",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "Sleepiness Pre KDT",
			form_module: "night2_prekdt_kss_form"
		},
		"night2_prekdt_kss_form": {
			Table: "91000314",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"night2_postkdt_kss": {
			Table: "91000315",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "Sleepiness Post KDT",
			form_module: "night2_postkdt_kss_form"
		},
		"night2_postkdt_kss_form": {
			Table: "91000315",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"3am_night2_kss": {
			Table: "91000316",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "3am Sleepiness",
			form_module: "3am_night2_kss_form"
		},
		"3am_night2_kss_form": {
			Table: "91000316",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"4am_night2_kss": {
			Table: "91000317",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "4am Sleepiness",
			form_module: "4am_night2_kss_form"
		},
		"4am_night2_kss_form": {
			Table: "91000317",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"5am_night2_kss": {
			Table: "91000318",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "5am Sleepiness",
			form_module: "5am_night2_kss_form"
		},
		"5am_night2_kss_form": {
			Table: "91000318",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"6am_night2_kss": {
			Table: "91000319",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "6am Sleepiness",
			form_module: "6am_night2_kss_form"
		},
		"6am_night2_kss_form": {
			Table: "91000319",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"7am_night2_kss": {
			Table: "91000320",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "7am Sleepiness",
			form_module: "7am_night2_kss_form"
		},
		"7am_night2_kss_form": {
			Table: "91000320",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"8am_night2_kss": {
			Table: "91000321",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "8am Sleepiness",
			form_module: "8am_night2_kss_form"
		},
		"8am_night2_kss_form": {
			Table: "91000321",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"7pm_night3_kss": {
			Table: "91000322",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "7pm Sleepiness",
			form_module: "7pm_night3_kss_form"
		},
		"7pm_night3_kss_form": {
			Table: "91000322",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"8pm_night3_kss": {
			Table: "91000323",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "8pm Sleepiness",
			form_module: "8pm_night3_kss_form"
		},
		"8pm_night3_kss_form": {
			Table: "91000323",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"9pm_night3_kss": {
			Table: "91000324",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "9pm Sleepiness",
			form_module: "9pm_night3_kss_form"
		},
		"9pm_night3_kss_form": {
			Table: "91000324",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"10pm_night3_kss": {
			Table: "91000325",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "10pm Sleepiness",
			form_module: "10pm_night3_kss_form"
		},
		"10pm_night3_kss_form": {
			Table: "91000325",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"11pm_night3_kss": {
			Table: "91000326",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "11pm Sleepiness",
			form_module: "11pm_night3_kss_form"
		},
		"11pm_night3_kss_form": {
			Table: "91000326",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"12midnight_night3_kss": {
			Table: "91000327",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "12midnight Sleepiness",
			form_module: "12midnight_night3_kss_form"
		},
		"12midnight_night3_kss_form": {
			Table: "91000327",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"1am_night3_kss": {
			Table: "91000328",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "1am Sleepiness",
			form_module: "1am_night3_kss_form"
		},
		"1am_night3_kss_form": {
			Table: "91000328",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"2am_night3_kss": {
			Table: "91000329",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "2am Sleepiness",
			form_module: "2am_night3_kss_form"
		},
		"2am_night3_kss_form": {
			Table: "91000329",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"night3_prekdt_kss": {
			Table: "91000330",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "Sleepiness Pre KDT",
			form_module: "night3_prekdt_kss_form"
		},
		"night3_prekdt_kss_form": {
			Table: "91000330",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"night3_postkdt_kss": {
			Table: "91000331",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "Sleepiness Post KDT",
			form_module: "night3_postkdt_kss_form"
		},
		"night3_postkdt_kss_form": {
			Table: "91000331",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"3am_night3_kss": {
			Table: "91000332",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "3am Sleepiness",
			form_module: "3am_night3_kss_form"
		},
		"3am_night3_kss_form": {
			Table: "91000332",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"4am_night3_kss": {
			Table: "91000333",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "4am Sleepiness",
			form_module: "4am_night3_kss_form"
		},
		"4am_night3_kss_form": {
			Table: "91000333",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"5am_night3_kss": {
			Table: "91000334",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "5am Sleepiness",
			form_module: "5am_night3_kss_form"
		},
		"5am_night3_kss_form": {
			Table: "91000334",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"6am_night3_kss": {
			Table: "91000335",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "6am Sleepiness",
			form_module: "6am_night3_kss_form"
		},
		"6am_night3_kss_form": {
			Table: "91000335",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"7am_night3_kss": {
			Table: "91000336",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "7am Sleepiness",
			form_module: "7am_night3_kss_form"
		},
		"7am_night3_kss_form": {
			Table: "91000336",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},
		"8am_night3_kss": {
			Table: "91000337",
			url: "$A/modules/s/shiftwork-tasks/kss.html",
			task: "8am Sleepiness",
			form_module: "8am_night3_kss_form"
		},
		"8am_night3_kss_form": {
			Table: "91000337",
			url: "$A/modules/s/shiftwork-tasks/kss-form.html"
		},

		"9am_day_crt": {
			Table: "91000338",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "9am Choice Reaction Time",
			form_module: "9am_day_crt_form"
		},
		"9am_day_crt_form": {
			Table: "91000338",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"11am_day_crt": {
			Table: "91000339",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "11am Choice Reaction Time",
			form_module: "11am_day_crt_form"
		},
		"11am_day_crt_form": {
			Table: "91000339",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"1pm_day_crt": {
			Table: "91000340",
			url: "$A/modules/s/shiftwork-tasks/crt-data.htmll",
			task: "1pm Choice Reaction Time",
			form_module: "1pm_day_crt_form"
		},
		"1pm_day_crt_form": {
			Table: "91000340",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"5pm_day_crt": {
			Table: "91000341",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "5pm Choice Reaction Time",
			form_module: "5pm_day_crt_form"
		},
		"5pm_day_crt_form": {
			Table: "91000341",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"7pm_day_crt": {
			Table: "91000342",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "7pm Choice Reaction Time",
			form_module: "7pm_day_crt_form"
		},
		"7pm_day_crt_form": {
			Table: "91000342",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"9pm_night1_crt": {
			Table: "91000343",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "9pm Choice Reaction Time",
			form_module: "9pm_night1_crt_form"
		},
		"9pm_night1_crt_form": {
			Table: "91000343",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"11pm_night1_crt": {
			Table: "91000344",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "11pm Choice Reaction Time",
			form_module: "11pm_night1_crt_form"
		},
		"11pm_night1_crt_form": {
			Table: "91000344",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"1am_night1_crt": {
			Table: "91000345",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "1am Choice Reaction Time",
			form_module: "1am_night1_crt_form"
		},
		"1am_night1_crt_form": {
			Table: "91000345",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"5am_night1_crt": {
			Table: "91000346",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "5am Choice Reaction Time",
			form_module: "5am_night1_crt_form"
		},
		"5am_night1_crt_form": {
			Table: "91000346",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"7am_night1_crt": {
			Table: "91000347",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "7am Choice Reaction Time",
			form_module: "7am_night1_crt_form"
		},
		"7am_night1_crt_form": {
			Table: "91000347",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"9pm_night2_crt": {
			Table: "91000348",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "9pm Choice Reaction Time",
			form_module: "9pm_night2_crt_form"
		},
		"9pm_night2_crt_form": {
			Table: "91000348",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"11pm_night2_crt": {
			Table: "91000349",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "11pm Choice Reaction Time",
			form_module: "11pm_night2_crt_form"
		},
		"11pm_night2_crt_form": {
			Table: "91000349",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"1am_night2_crt": {
			Table: "91000350",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "1am Choice Reaction Time",
			form_module: "1am_night2_crt_form"
		},
		"1am_night2_crt_form": {
			Table: "91000350",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"5am_night2_crt": {
			Table: "91000351",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "5am Choice Reaction Time",
			form_module: "5am_night2_crt_form"
		},
		"5am_night2_crt_form": {
			Table: "91000351",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"7am_night2_crt": {
			Table: "91000352",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "7am Choice Reaction Time",
			form_module: "7am_night2_crt_form"
		},
		"7am_night2_crt_form": {
			Table: "91000352",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"9pm_night3_crt": {
			Table: "91000353",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "9pm Choice Reaction Time",
			form_module: "9pm_night3_crt_form"
		},
		"9pm_night3_crt_form": {
			Table: "91000353",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"11pm_night3_crt": {
			Table: "91000354",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "11pm Choice Reaction Time",
			form_module: "11pm_night3_crt_form"
		},
		"11pm_night3_crt_form": {
			Table: "91000354",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"1am_night3_crt": {
			Table: "91000355",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "1am Choice Reaction Time",
			form_module: "1am_night3_crt_form"
		},
		"1am_night3_crt_form": {
			Table: "91000355",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"5am_night3_crt": {
			Table: "91000356",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "5am Choice Reaction Time",
			form_module: "5am_night3_crt_form"
		},
		"5am_night3_crt_form": {
			Table: "91000356",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},
		"7am_night3_crt": {
			Table: "91000357",
			url: "$A/modules/s/shiftwork-tasks/crt-data.html",
			task: "7am Choice Reaction Time",
			form_module: "7am_night3_crt_form"
		},
		"7am_night3_crt_form": {
			Table: "91000357",
			url: "$A/modules/s/shiftwork-tasks/crt-form.html"
		},


		"8am_day_pvt": {
			Table: "91000358",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			form_module: "8am_day_pvt_form",
			task: "8am PVT Upload"
		},
		"8am_day_pvt_form": {
			Table: "91000358",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},

		"10am_day_pvt": {
			Table: "91000359",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "10am PVT Upload",
			form_module:"10am_day_pvt_form"
		},
		"10am_day_pvt_form": {
			Table: "91000359",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"12noon_day_pvt": {
			Table: "91000360",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "12noon PVT Upload",
			form_module:"12noon_day_pvt_form"
		},
		"12noon_day_pvt_form": {
			Table: "91000360",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"2pm_day_pvt": {
			Table: "91000361",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "2pm PVT Upload",
			form_module:"2pm_day_pvt_form"
		},
		"2pm_day_pvt_form": {
			Table: "91000361",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"4pm_day_pvt": {
			Table: "91000362",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "4pm PVT Upload",
			form_module:"44pm_day_pvt_form"
		},
		"4pm_day_pvt_form": {
			Table: "91000362",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"6pm_day_pvt": {
			Table: "91000363",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "6pm PVT Upload",
			form_module:"6pm_day_pvt_form"
		},
		"6pm_day_pvt_form": {
			Table: "91000363",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"8pm_day_pvt": {
			Table: "91000364",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "8pm PVT Upload",
			form_module:"8pm_day_pvt_form"
		},
		"8pm_day_pvt_form": {
			Table: "91000364",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"8pm_night1_pvt": {
			Table: "91000365",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "8pm PVT Upload",
			form_module:"8pm_night1_pvt_form"
		},
		"8pm_night1_pvt_form": {
			Table: "91000365",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"10pm_night1_pvt": {
			Table: "91000366",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "10pm PVT Upload",
			form_module:"10pm_night1_pvt_form"
		},
		"10pm_night1_pvt_form": {
			Table: "91000366",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"12midnight_night1_pvt": {
			Table: "91000367",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "12midnight PVT Upload",
			form_module:"12midnight_night1_pvt_form"
		},
		"12midnight_night1_pvt_form": {
			Table: "91000367",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"2am_night1_pvt": {
			Table: "91000368",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "2am PVT Upload",
			form_module:"2am_night_pvt_form"
		},
		"2am_night1_pvt_form": {
			Table: "91000368",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"4am_night1_pvt": {
			Table: "91000369",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "4am PVT Upload",
			form_module:"4am_night1_pvt_form"
		},
		"4am_night1_pvt_form": {
			Table: "91000369",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"6am_night1_pvt": {
			Table: "91000370",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "6am PVT Upload",
			form_module:"6am_night1_pvt_form"
		},
		"6am_night1_pvt_form": {
			Table: "91000370",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"8am_night1_pvt": {
			Table: "91000371",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "8am PVT Upload",
			form_module:"8am_night_pvt_form"
		},
		"8am_night1_pvt_form": {
			Table: "91000371",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"8pm_night2_pvt": {
			Table: "91000372",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "8pm PVT Upload",
			form_module:"8pm_night2_pvt"
		},
		"8pm_night2_pvt_form": {
			Table: "91000372",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"10pm_night2_pvt": {
			Table: "91000373",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "10pm PVT Upload",
			form_module:"10pm_night2_pvt_form"
		},
		"10pm_night2_pvt_form": {
			Table: "91000373",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"12midnight_night2_pvt": {
			Table: "91000374",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "12midnight PVT Upload",
			form_module:"1212midnight_night2_pvt_form"
		},
		"12midnight_night2_pvt_form": {
			Table: "91000374",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"2am_night2_pvt": {
			Table: "91000375",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "2am PVT Upload",
			form_module:"2am_night2_pvt_form"
		},
		"2am_night2_pvt_form": {
			Table: "91000375",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"4am_night2_pvt": {
			Table: "91000376",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "4am PVT Upload",
			form_module:"4am_night2_pvt_form"
		},
		"4am_night2_pvt_form": {
			Table: "91000376",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"6am_night2_pvt": {
			Table: "91000377",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "6am PVT Upload",
			form_module:"6am_night2_pvt_form"
		},
		"6am_night2_pvt_form": {
			Table: "91000377",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"8am_night2_pvt": {
			Table: "91000378",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "8am PVT Upload",
			form_module:"8am_night2_pvt_form"
		},
		"8am_night2_pvt_form": {
			Table: "91000378",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"8pm_night3_pvt": {
			Table: "91000379",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "8pm PVT Upload",
			form_module:"8pm_night3_pvt_form"
		},
		"8pm_night3_pvt_form": {
			Table: "91000379",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"10pm_night3_pvt": {
			Table: "91000380",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "10pm PVT Upload",
			form_module:"10pm_night3_pvt_form"
		},
		"10pm_night3_pvt_form": {
			Table: "91000380",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"12midnight_night3_pvt": {
			Table: "91000381",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "12midnight PVT Upload",
			form_module:"12midnight_night3_pvt_form"
		},
		"12midnight_night3_pvt_form": {
			Table: "91000381",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"2am_night3_pvt": {
			Table: "91000382",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "2am PVT Upload",
			form_module:"2am_night3_pvt_form"
		},
		"2am_night3_pvt_form": {
			Table: "91000382",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"4am_night3_pvt": {
			Table: "91000383",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "4am PVT Upload",
			form_module:"4am_night3_pvt_form"
		},
		"4am_night3_pvt_form": {
			Table: "91000383",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"6am_night3_pvt": {
			Table: "91000384",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "6am PVT Upload",
			"form-module":"6am_night3_pvt_form"
		},
		"6am_night3_pvt_form": {
			Table: "91000384",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"8am_night3_pvt": {
			Table: "91000385",
			url: "$A/modules/s/shiftwork-tasks/pvt-data.html",
			task: "8am PVT Upload",
			form_module:"8am_night3_pvt_form"
		},
		"8am_night3_pvt_form": {
			Table: "91000385",
			url: "$A/modules/s/shiftwork-tasks/pvt-form.html"
		},
		"Screening_Glucose_Triglycerides": {
			Table: "91000386",
			url: "$A/modules/s/shiftwork-tasks/gluctri.html",
			task: "Screening Glucose and Triglycerides",
			form_module: "Screening_Glucose_Triglycerides_form"
		},
		"Screening_Glucose_Triglycerides_form": {
			Table: "91000386",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"830am_day_glucosetriglycerides": {
			Table: "91000387",
			url: "$A/modules/s/shiftwork-tasks/gluctri.html",
			task: "8:30am Glucose and Triglycerides",
			form_module:"830830am_day_Glucose_Triglycerides_form"
		},
		"830am_day_Glucose_Triglycerides_form": {
			Table: "91000387",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"10am_day_glucosetriglycerides": {
			Table: "91000388",
			url: "$A/modules/s/shiftwork-tasks/gluctri.html",
			task: "10am Glucose and Triglycerides",
			form_module:"10am_day_Glucose_Triglycerides_form"
			},
			"10am_day_Glucose_Triglycerides_form": {
				Table: "91000388",
				url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
			},
		"11am_day_glucosetriglycerides": {
		Table: "91000389",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "11am Glucose and Triglycerides",
		form_module:"11am_day_Glucose_Triglycerides_form"
		},
		"11am_day_Glucose_Triglycerides_form": {
		Table: "91000389",
		url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"1pm_day_glucosetriglycerides": {
		Table: "91000390",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "1pm Glucose and Triglycerides",
		form_module:"11pm_day_Glucose_Triglycerides_form"
		},
		"1pm_day_Glucose_Triglycerides_form": {
			Table: "91000390",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"230pm_day_glucosetriglycerides": {
		Table: "91000391",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "230pm Glucose and Triglycerides",
		form_module:"230pm_day_Glucose_Triglycerides_form"
		},
		"230pm_day_Glucose_Triglycerides_form": {
			Table: "91000391",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"4pm_day_glucosetriglycerides": {
		Table: "91000392",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "4pm Glucose and Triglycerides",
		form_module:"4pm_day_Glucose_Triglycerides_form"
		},
		"4pm_day_Glucose_Triglycerides_form": {
			Table: "91000392",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"5pm_day_glucosetriglycerides": {
		Table: "91000393",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "5pm Glucose and Triglycerides",
		form_module:"5pm_day_Glucose_Triglycerides_form"
		},
		"5pm_day_Glucose_Triglycerides_form": {
			Table: "91000393",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"7pm_day_glucosetriglycerides": {
		Table: "91000394",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "7pm Glucose and Triglycerides",
		form_module:"77pm_day_Glucose_Triglycerides_form"
		},
		"7pm_day_Glucose_Triglycerides_form": {
			Table: "91000394",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"830pm_day_glucosetriglycerides": {
		Table: "91000395",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "830pm Glucose and Triglycerides",
		form_module:"830pm_day_Glucose_Triglycerides_form"
		},
		"830pm_day_Glucose_Triglycerides_form": {
			Table: "91000395",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"10pm_day_glucosetriglycerides": {
		Table: "91000396",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "10pm Glucose and Triglycerides",
		form_module:"10pm_day_Glucose_Triglycerides_form"
		},
		"10pm_day_Glucose_Triglycerides_form": {
			Table: "91000396",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"11pm_day_glucosetriglycerides": {
		Table: "91000397",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "11pm Glucose and Triglycerides",
		form_module:"11pm_day_Glucose_Triglycerides_form"
		},

		"11pm_day_Glucose_Triglycerides_form": {
			Table: "91000397",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"7pm_night3_glucosetriglycerides": {
		Table: "91000398",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "7pm Glucose and Triglycerides",
		form_module:"7pm_night3_Glucose_Triglycerides_form"
		},

		"7pm_night3_Glucose_Triglycerides_form": {
			Table: "91000398",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"830pm_night3_glucosetriglycerides": {
		Table: "91000399",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "830pm Glucose and Triglycerides",
		form_module:"830pm_night3_Glucose_Triglycerides_form"
		},
		"830pm_night3_Glucose_Triglycerides_form": {
			Table: "91000399",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"10pm_night3_glucosetriglycerides": {
		Table: "91000400",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "10pm Glucose and Triglycerides",
		form_module:"10pm_night3_Glucose_Triglycerides_form"
		},
		"10pm_night3_Glucose_Triglycerides_form": {
			Table: "91000400",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"11pm_night3_glucosetriglycerides": {
		Table: "91000401",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "11pm Glucose and Triglycerides",
		form_module:"11pm_night3_Glucose_Triglycerides_form"
		},
		"11pm_night3_Glucose_Triglycerides_form": {
			Table: "91000401",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"1am_night3_glucosetriglycerides": {
		Table: "91000402",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "1am Glucose and Triglycerides",
		form_module:"1am_night3_Glucose_Triglycerides_form"
		},
		"1am_night3_Glucose_Triglycerides_form": {
			Table: "91000402",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"230am_night3_glucosetriglycerides": {
		Table: "91000403",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "230am Glucose and Triglycerides",
		form_module:"230am_night3_Glucose_Triglycerides_form"
		},
		"230am_night3_Glucose_Triglycerides_form": {
			Table: "91000403",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"4am_night3_glucosetriglycerides": {
		Table: "91000404",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "4am Glucose and Triglycerides",
		form_module:"4am_night3_Glucose_Triglycerides_form"
		},
		"4am_night3_Glucose_Triglycerides_form": {
			Table: "91000404",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"5am_night3_glucosetriglycerides": {
		Table: "91000405",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "5am Glucose and Triglycerides",
		form_module:"5am_night3_Glucose_Triglycerides_form"
		},
		"5am_night3_Glucose_Triglycerides_form": {
			Table: "91000405",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"7am_night3_glucosetriglycerides": {
		Table: "91000406",
		url: "$A/modules/s/shiftwork-tasks/gluctri.html",
		task: "7am Glucose and Triglycerides",
		form_module:"7am_night3_Glucose_Triglycerides_form"
		},
		"7am_night3_Glucose_Triglycerides_form": {
			Table: "91000406",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"830am_night3_glucosetriglycerides": {
			Table: "91000407",
			url: "$A/modules/s/shiftwork-tasks/gluctri.html",
			task: "8am Glucose and Triglycerides",
			form_module:"830am_night3_GLucose_Triglycerides_form"
		},
		"830am_night3_Glucose_Triglycerides_form": {
			Table: "91000407",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"10am_night3_glucosetriglycerides": {
			Table: "91000408",
			url: "$A/modules/s/shiftwork-tasks/gluctri.html",
			task: "10am Glucose and Triglycerides",
			form_module:"10am_night3_Glucose_Triglycerides_form"
		},
		"10am_night3_Glucose_Triglycerides_form": {
			Table: "91000408",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},
		"11am_night3_glucosetriglycerides": {
			Table: "91000409",
			url: "$A/modules/s/shiftwork-tasks/gluctri.html",
			task: "11am Glucose and Triglycerides",
			form_module:"11am_night3_Glucose_Triglycerides_form"
		},
		"11am_night3_Glucose_Triglycerides_form": {
			Table: "91000409",
			url: "$A/modules/s/shiftwork-tasks/gluctri-form.html"
		},

    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
