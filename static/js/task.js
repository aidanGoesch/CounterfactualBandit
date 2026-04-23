'use strict';
var debug_mode = 0;
var data_save_method = 'csv_server_py';
////////// PAVLOVIA ////////////
// var pavlovia_init = {
// 	type: "pavlovia",
// 	command: "init"
// };

// var pavlovia_finish = {
// 	type: "pavlovia",
// 	command: "finish"
// 	};
///////////////////////////////


// Initialize canvas
var canvas = $('#canvasdiv');

// // get subj id from url
// var participant_id = jsPsych.data.getURLVariable('participant_ID');
// var subject_id = jsPsych.data.getURLVariable('subject_ID');
// var age = jsPsych.data.getURLVariable('age');
// var gender = jsPsych.data.getURLVariable('gender');
var subject_id = jsPsych.randomization.randomID(8);

var psiturk = new PsiTurk(uniqueId, adServerLoc, mode);
var condition = psiturk.taskdata.get('condition') + 1; // they do zero-indexing


function makeObject(img_path,id) {
  // create the image
	let image = $('<img>', {
	    src: img_path,
			width:"1000px",
	      // width: SIZE,
	   })
	  .appendTo(canvas)
		.css("position","absolute") // always string
		.css("padding-top","100px") // always string
		.css("left","0") // always string
		.css("right","0") // always string
		.css("margin-left","auto") // always string
		.css("margin-right","auto") // always string

  window.image = image;

  return {
    hide() {
      image.hide();
    },
    show () {
      image.show();
    },
    image: image,
    id: id,
  }
};

function randomize(array) {
  array = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    return array;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var deck = makeObject('../static/images/miscellaneous/deck.png','deck') // stays constant thru out exp

let contextArray_true = [makeObject('../static/images/contexts/context_coast.png','coast'),
makeObject('../static/images/contexts/context_countryside.png','countryside'),
makeObject('../static/images/contexts/context_mountain.png','mountain'),
makeObject('../static/images/contexts/context_forest.png','forest'),
makeObject('../static/images/contexts/context_highway.png','highway'),
makeObject('../static/images/contexts/context_city.png','city')]
let contextArray_ind = [0,1,2,3,4,5]
contextArray_ind = randomize(contextArray_ind);
let contextArray = []
for (let i = 0; i < 6; i++) {
  contextArray.push(contextArray_true[contextArray_ind[i]])
}

contextArray.push(makeObject('../static/images/contexts/context_blank.png','blank'))
contextArray.push(makeObject('../static/images/contexts/context_desert.png','desert'))
contextArray.push(makeObject('../static/images/contexts/context_cavern.png','cavern'))

contextArray.forEach(context => context.hide())


var cargo_ship = makeObject('../static/images/miscellaneous/cargo_ship.png','cargo_ship');

let shipArray = [makeObject('../static/images/travel/ship_up.png','ship_up'), // ship up
makeObject('../static/images/travel/ship_down.png','ship_down')] // ship down] // map for welcome
shipArray.forEach(item => item.hide())

let pirateArray = [makeObject('../static/images/pirates/pirates_all.png','all'), // all pirates
makeObject('../static/images/pirates/red_beard.png','red'), // red beard
makeObject('../static/images/pirates/white_beard.png','white'), // white beard
makeObject('../static/images/pirates/black_beard.png','black')] // black beard
pirateArray.forEach(pirate => pirate.hide())

let rewardArray = [makeObject('../static/images/rewards/reward_no.png','noReward'), // nothing
makeObject('../static/images/rewards/reward.png','reward'),
makeObject('../static/images/rewards/reward_small.png','small_reward'),
makeObject('../static/images/rewards/money_bag.png','money_bag')] // money bag
rewardArray.forEach(reward => reward.hide())


let bestArray = [makeObject('../static/images/pick_best/best_question.png','best_question'),
makeObject('../static/images/pick_best/second_best_question.png','second_best_question'),
makeObject('../static/images/pick_best/red_best.png','red_best'),
makeObject('../static/images/pick_best/white_best.png','white_best'),
makeObject('../static/images/pick_best/black_best.png','black_best'),
makeObject('../static/images/pick_best/red_second_best.png','red_second_best'),
makeObject('../static/images/pick_best/white_second_best.png','white_second_best'),
makeObject('../static/images/pick_best/black_second_best.png','black_second_best')]

bestArray.forEach(item => item.hide())


// intialize array for saving context image # on each learn phase (contexts 1-6)
var contexts = [];

var current_trial = 0;
var current_context = -1;
var context_pick_n = 0;
var current_prac_trial = 0;
var corr_old_new_judge = 0;


let miscellArray = [makeObject('../static/images/probes/gas.png','probe'), // probe
makeObject('../static/images/miscellaneous/remember.png','remember'), // remember
makeObject('../static/images/miscellaneous/hurry_up.png','hurryUp'), // hurry up
makeObject('../static/images/miscellaneous/probe_recog.png','confidence_rate'),//confidence ratings
deck,
contextArray[7],
makeObject('../static/images/rewards/feedback_correct.png','correct'),
makeObject('../static/images/rewards/feedback_incorrect.png','incorrect'),
makeObject('../static/images/travel/ahoy.png','ahoy'),
makeObject('../static/images/travel/bye.png','bye'),cargo_ship,
makeObject('../static/images/miscellaneous/best_pirate.png','best_pirate')]
miscellArray.forEach(item => item.hide())

let welcomeArray_true = [makeObject('../static/images/travel/welcome_coast.png','welcome_coast'),
makeObject('../static/images/travel/welcome_meadow.png','welcome_meadow'),
makeObject('../static/images/travel/welcome_mountain.png','welcome_mountain'),
makeObject('../static/images/travel/welcome_forest.png','welcome_forest'),
makeObject('../static/images/travel/welcome_road.png','welcome_road'),
makeObject('../static/images/travel/welcome_city.png','welcome_city')]
let welcomeArray = []
for (let i = 0; i < 6; i++) {
  welcomeArray.push(welcomeArray_true[contextArray_ind[i]])
}
welcomeArray.push(makeObject('../static/images/travel/welcome_final.png','welcome_final'))
welcomeArray.push(makeObject('../static/images/travel/welcome_desert.png','welcome_desert'))
welcomeArray.push(makeObject('../static/images/travel/welcome_cavern.png','welcome_cavern'))

welcomeArray.forEach(item => item.hide())

let islandTrackerArray = [
makeObject('../static/images/contexts/island_1.png','island_1'),
makeObject('../static/images/contexts/island_2.png','island_2'),
makeObject('../static/images/contexts/island_3.png','island_3'),
makeObject('../static/images/contexts/island_4.png','island_4'),
makeObject('../static/images/contexts/island_5.png','island_5'),
makeObject('../static/images/contexts/island_6.png','island_6')];

islandTrackerArray.forEach(item => item.hide())

// new vars
var num_contexts = 6;
var judgement_trial_block_size = 5;
var current_test_context = 0;

var probabilities = { 1: payout[0].map(x=>x*0.01),
  2: payout[1].map(x=>x*0.01),
  3: payout[2].map(x=>x*0.01)
}

var pRew_Red = probabilities[1];
var pRew_White = probabilities[2];
var pRew_Black = probabilities[3];

var prac_prob = { 1: [1,1,1,0,1,1,1,1,0,1],
  2: [0,1,0,1,0,0,0,1,0,0,],
  3: [0,0,1,0,0,0,1,0,1,1]
}


var response_key_dict = {
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8'
}

var welcome_prac = {
  type: 'do_welcome',
  stimuli: miscellArray,
  trial_duration:4000,
	on_start: function (welcome) {
		if (current_prac_trial == 0) {
			miscellArray[5] = contextArray[7];
			welcome.text = welcomeArray[7];
		} else {
			miscellArray[5] = contextArray[8];
			welcome.text = welcomeArray[8];
		}
		welcome.stimuli = miscellArray;
	}
}

var intertrial = {
	type: 'html-keyboard-response',
  stimulus:"<p></p>",
  choices: jsPsych.NO_KEYS,
	trial_duration: 1000
}

var get_id = {
  type: 'survey-html-form',
  html: "<label for='worker_id'>Enter your Prolific Worker ID. Please make sure this is correct! </label><br><input type='text' id='worker_id' name='worker_id' required><br><br>",
  on_finish: function (data) {
    window.useridtouse=data.responses
    window.useridtouse = useridtouse.split('"')[3];
    subject_id=useridtouse
    data.subject_id = useridtouse
  }
}

var welcome = {
  type: 'do_welcome',
  stimuli: miscellArray,
  trial_duration:4000,
	on_start: function (welcome) {
		current_context += 1; // next this in welcome
		miscellArray[5] = contextArray[current_context];
		welcome.stimuli = miscellArray;
		welcome.text = welcomeArray[current_context];
		welcome.island_num = islandTrackerArray[current_context];
    save_data()
	}
}

var bye = {
  type: 'do_bye',
  stimuli: miscellArray,
  trial_duration:1500
}

var travel = {
  type: 'do_travel',
  stimuli: shipArray,
  choices:jsPsych.NO_KEYS,
  frame_time: 1500
}

var pick_best = {
  type: 'do_pick_best_pirate',
  choices: ['1','2','3'],
  pirates: pirateArray,
  context: null,
  miscell: miscellArray,
  on_start: function(pick_best) {
    let context_im = contextArray[context_pick_n];
    pick_best.context = context_im;
    pick_best.context_n = context_pick_n;
    pick_best.context_id = context_im.id;
},
on_finish: function(data) {
  let last_trial_data = jsPsych.data.get().last(1).values()[0];
  data.context_n = last_trial_data.context_n;
  data.context_id = last_trial_data.context_id;
  context_pick_n += 1;
}};

var prac_choice_trial = {
  type: 'do_trial',
  show_reward: true,
  choices: ['1','2','3'],
  prompt:'<p>which pirate do you want to rob the next ship?</p>',
  trial_duration: DEBUG ? 1000 : 3000,  // shorten choice trials during debugging
  pirates: pirateArray,
  rewards: rewardArray,
  miscell: null,
  on_start: function(choice_trial) {
		let potential_outcomes = [];
    for (let i = 1; i < 4; i++) {
      var outcome = Sampling.Bernoulli(prac_prob[i][current_prac_trial]).draw()
      potential_outcomes.push(outcome)
    }

    choice_trial.choice_outcomes = potential_outcomes;
    choice_trial.miscell = miscellArray;
    choice_trial.data = {choice_outcomes : potential_outcomes};
  },
  on_finish: function (data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed =response_key_dict[data.response];

		if (key_pressed != null ) {
			current_prac_trial += 1;
		}
		if (current_prac_trial == 5) {
			jsPsych.addNodeToEndOfTimeline({timeline: [
				bye,travel,welcome_prac,prac_choice_trial],}, jsPsych.resumeExperiment);
		} else if (current_prac_trial == 9) {
			jsPsych.addNodeToEndOfTimeline({timeline: [intertrial,prac_choice_trial_2],}, jsPsych.resumeExperiment);
		} else if (current_prac_trial > 9) {
			jsPsych.addNodeToEndOfTimeline({timeline: [prac_best_pirate],}, jsPsych.resumeExperiment);
		} else {
			jsPsych.addNodeToEndOfTimeline({timeline: [intertrial,prac_choice_trial],}, jsPsych.resumeExperiment);
		}
  }
}

var prac_choice_trial_2 = {
  type: 'do_trial',
  show_reward: true,
  choices: ['1','2','3'],
  prompt:'<p>which pirate do you want to rob the next ship?</p>',
  trial_duration: DEBUG ? 1000 : 3000,  // shorten choice trials during debugging
  pirates: pirateArray,
  rewards: rewardArray,
  miscell: null,
	after_blank: true,
  on_start: function(choice_trial) {
	let potential_outcomes = [];
    for (let i = 1; i < 4; i++) {
      var outcome = Sampling.Bernoulli(prac_prob[i][current_prac_trial]).draw()
      potential_outcomes.push(outcome)
    }

    choice_trial.choice_outcomes = potential_outcomes;
    choice_trial.miscell = miscellArray;
    choice_trial.data = {choice_outcomes : potential_outcomes};
  },
  on_finish: function (data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let key_pressed =response_key_dict[data.response];

		if (key_pressed != null ) {
			current_prac_trial += 1;
		}
		if (current_prac_trial == 5) {
			jsPsych.addNodeToEndOfTimeline({timeline: [
				bye,travel,welcome_prac,prac_choice_trial],}, jsPsych.resumeExperiment);
		} else if (current_prac_trial == 9) {
			jsPsych.addNodeToEndOfTimeline({timeline: [intertrial,prac_choice_trial_2],}, jsPsych.resumeExperiment);
		} else if (current_prac_trial > 9) {
			jsPsych.addNodeToEndOfTimeline({timeline: [prac_best_pirate],}, jsPsych.resumeExperiment);
		} else {
			jsPsych.addNodeToEndOfTimeline({timeline: [intertrial,prac_choice_trial],}, jsPsych.resumeExperiment);
		}
  }
}

var choice_trial = {
  type: 'do_trial',
  show_reward: true,
  choices: ['1','2','3'],
  prompt:'<p>which pirate do you want to rob the next ship?</p>',
  trial_duration: DEBUG ? 1000 : 3000,  // shorten choice trials during debugging
  pirates: pirateArray,
  rewards: rewardArray,
  miscell: null,
  on_start: function(choice_trial) {
    let potential_outcomes = [];
    for (let i = 1; i < 4; i++) {
      var outcome = Sampling.Bernoulli(probabilities[i][0]).draw()
      potential_outcomes.push(outcome)
    }

    choice_trial.choice_outcomes = potential_outcomes;
    choice_trial.miscell = miscellArray;
    choice_trial.data = {choice_outcomes : potential_outcomes};
  },
  on_finish: function (data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let choice_outcomes = last_trial_data.choice_outcomes;
    let key_pressed =response_key_dict[data.response];

    data.context_n = current_context;
    contexts[current_trial] = current_context;
    data.context_img_id = contextArray[current_context].id;
    data.trial_n = current_trial;
    current_trial += 1;

    data.pR_red = probabilities[1].shift();
    data.pR_white = probabilities[2].shift();
    data.pR_black = probabilities[3].shift();
    data.outcome = choice_outcomes[key_pressed-1];
	data.phase = 'learn';
  }
}

var test_phase_welcome = {
  type: 'html-keyboard-response',
  stimulus: '<div class="center"><p>We have to sail past the islands again to get back to pirate HQ. We\'ve just got wind that there is a huge storm approaching, so while we are going to stop at each island, we won\'t have time to see if our plunders are successful or not.</p><p>Press <b>space</b> to continue.</p></div>',
  choices: ['space']
};

// A single "gate" trial that, when reached, schedules the test phase TODO: change instructions here
var start_test_phase = {
  type: 'html-keyboard-response',
  stimulus: '<div class="center"><p>Nice job plundering!</p><p>Press <b>space</b> to head back to pirate HQ.</p></div>',
  choices: ['space'],
  on_finish: function() {
    make_test_phase();
  }
};

var test_choice_trial = {
  type: 'do_trial',
  show_reward: false,
  choices: ['1','2','3'],
  prompt: '<p>which pirate do you want to rob the next ship?</p>',
  trial_duration: DEBUG ? 1000 : 3000,  // shorten choice trials during debugging
  pirates: pirateArray,
  rewards: rewardArray,
  miscell: null,
  on_start: function(trial) {
    miscellArray[5] = contextArray[6]; // blank context for test phase

    let potential_outcomes = [];
    for (let i = 1; i < 4; i++) {
      var outcome = Sampling.Bernoulli(0.33).draw();
      potential_outcomes.push(outcome);
    }

    trial.choice_outcomes = potential_outcomes;
    trial.miscell = miscellArray;
    trial.data = { choice_outcomes: potential_outcomes };
  },
  on_finish: function(data) {
    let last_trial_data = jsPsych.data.get().last(1).values()[0];
    let choice_outcomes = last_trial_data.choice_outcomes;
    let key_pressed = response_key_dict[data.response];

    data.context_n = current_test_context;
    data.context_img_id = contextArray[current_test_context].id;
    data.trial_n = current_trial;
    data.phase = 'judgement';

    current_trial += 1;
    data.outcome = choice_outcomes[key_pressed - 1];
  }
};

// for picking the best pirate after the judgement phase
var pick_best_trial = {
	type: 'do_pick_best_pirate',
	choices: ['1','2','3'],
	pirates: pirateArray,
	context: contextArray[0],
	best_array: bestArray,
	miscell: miscellArray,
	on_start: function(pick_best_trial) {
		pick_best_trial.context = contextArray[pick_ind];
	},
	on_finish: function(data) {
		data.context_n = pick_ind;
		data.context_im = contextArray[pick_ind].id;
	}
};

var pick_secondBest_trial = {
	type: 'do_pick_secondBest_pirate',
	choices: ['1','2','3'],
	pirates: pirateArray,
	context: contextArray[0],
	best_array: bestArray,
	miscell: miscellArray,
	on_start: function(pick_secondBest_trial) {
		pick_secondBest_trial.context = contextArray[pick_ind];
	},
	on_finish: function(data) {
		data.context_n = pick_ind;
		data.context_im = contextArray[pick_ind].id;
		pick_ind += 1; // only after second best do we move on to the next context
	}
}

var start_rank_phase = {
  type: 'html-keyboard-response',
  stimulus: "<div style='position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: white; display: flex; align-items: center; justify-content: center;'><div><h2>We've made it to Pirate HQ!</h2><p>Press <b>space</b> to proceed.</p></div></div>",
  choices: ['space'],
  on_finish: function() {
    make_rank_pirate();
  }
};

// ---------------------------------------------------------------------------------------------------------------- //
// Helper functions
var attention_check_failures = 0;

var attention_check = {
  type: 'html-keyboard-response',
  stimulus: "<div style='position:relative; margin-top: 600px;'><p>Before we set sail — press the <b>Z</b> key to continue!</p></div>",
  choices: jsPsych.ALL_KEYS,
  trial_duration: 5000,
  on_finish: function(data) {
    data.trial_type = 'attention_check';
    data.passed = (data.key_press === 90);
    if (!data.passed) attention_check_failures += 1;
  }
};


// basically same thing but for judgement phase 
var judgement_attention_failures = 0;
var pick_ind = 0;

function make_judgement_attention_check(island_index) {
  var keypress_slide = {
    type: 'html-keyboard-response',
    stimulus: "<div class='center'><p>Press <b>Z</b> to use the telescope to see what island is coming next!</p></div>",
    choices: ['z'],
    trial_duration: 5000,
    on_finish: function(data) {
      data.trial_type = 'judgement_attention_check';
      data.island_num = island_index;
      data.passed = (data.key_press === 90);
      if (!data.passed) {
        judgement_attention_failures += 1;
      }
    }
  };

  var image_slide = {
    type: 'do_welcome',
    stimuli: miscellArray,
    trial_duration: 5000,
    on_start: function(trial) {
      miscellArray[5] = contextArray[island_index];
      trial.stimuli = miscellArray;
      trial.text = welcomeArray[island_index];
      trial.island_num = islandTrackerArray[island_index];
    }
  };

  return [keypress_slide, image_slide];
}

function make_increment_context() {
  return {
    type: 'html-keyboard-response',
    stimulus: '',
    choices: jsPsych.NO_KEYS,
    trial_duration: 0,
    on_finish: function() {
      current_test_context += 1;
    }
  };
}

// Learn phase function
function  make_learn_phase() {
	console.log('learn phase')
	timeline.push(choice_trial)

	// learn phase, contexts
	// context 1
	// welcome
	jsPsych.addNodeToEndOfTimeline({timeline: [welcome],}, jsPsych.resumeExperiment);
	for (let i = 0; i < first_block_len; i++) {
		jsPsych.addNodeToEndOfTimeline({timeline: [choice_trial,intertrial],}, jsPsych.resumeExperiment);
	}
	jsPsych.addNodeToEndOfTimeline({timeline: [bye],}, jsPsych.resumeExperiment);


	//travel
	//welcome
	jsPsych.addNodeToEndOfTimeline({timeline: [travel,welcome],}, jsPsych.resumeExperiment);

	// context 2
	for (let i = 0; i < block_len; i++) {
		jsPsych.addNodeToEndOfTimeline({timeline: [choice_trial,intertrial],}, jsPsych.resumeExperiment);
	}
	jsPsych.addNodeToEndOfTimeline({timeline: [bye],}, jsPsych.resumeExperiment);

	//travel
	//welcome
	jsPsych.addNodeToEndOfTimeline({timeline: [travel, welcome],}, jsPsych.resumeExperiment);

	// context 3
	for (let i = 0; i < block_len; i++) {
		jsPsych.addNodeToEndOfTimeline({timeline: [choice_trial,intertrial],}, jsPsych.resumeExperiment);
	}
	jsPsych.addNodeToEndOfTimeline({timeline: [bye],}, jsPsych.resumeExperiment);

	// travel
	// welcome
	jsPsych.addNodeToEndOfTimeline({timeline: [travel,welcome],}, jsPsych.resumeExperiment);

	// context 4
	for (let i = 0; i < block_len; i++) {
		jsPsych.addNodeToEndOfTimeline({timeline: [choice_trial,intertrial],}, jsPsych.resumeExperiment);
	}
	jsPsych.addNodeToEndOfTimeline({timeline: [bye],}, jsPsych.resumeExperiment);


	// travel
	// welcome
	jsPsych.addNodeToEndOfTimeline({timeline: [travel, welcome],}, jsPsych.resumeExperiment);

	//context 5
	for (let i = 0; i < block_len; i++) {
		jsPsych.addNodeToEndOfTimeline({timeline: [choice_trial,intertrial],}, jsPsych.resumeExperiment);
	}
	jsPsych.addNodeToEndOfTimeline({timeline: [bye],}, jsPsych.resumeExperiment);

	// travel
	// welcome

	jsPsych.addNodeToEndOfTimeline({timeline: [travel, welcome],}, jsPsych.resumeExperiment);

	//context 6
	for (let i = 0; i < block_len; i++) {
		jsPsych.addNodeToEndOfTimeline({timeline: [choice_trial,intertrial],}, jsPsych.resumeExperiment);
	}

  jsPsych.addNodeToEndOfTimeline({timeline: [bye,start_test_phase],}, jsPsych.resumeExperiment);
}


// Test phase function
function make_test_phase() {
  jsPsych.addNodeToEndOfTimeline(
    { timeline: [test_phase_welcome] },
    jsPsych.resumeExperiment
  );

  for (let i = 0; i < num_contexts; i++) {
    // jsPsych.addNodeToEndOfTimeline(
    //   { timeline: make_judgement_attention_check(i) },
    //   jsPsych.resumeExperiment
    // );
    for (let j = 0; j < judgement_trial_block_size; j++) {
      jsPsych.addNodeToEndOfTimeline(
        { timeline: [test_choice_trial, intertrial] },
        jsPsych.resumeExperiment
      );
    }

    if (i < num_contexts - 1) {
      jsPsych.addNodeToEndOfTimeline(
        { timeline: [make_increment_context()] },
        jsPsych.resumeExperiment
      );
    }
  }

  // launch rank phase after all islands complete
  jsPsych.addNodeToEndOfTimeline(
    { timeline: [start_rank_phase] },
    jsPsych.resumeExperiment
  );
}


// Rank phase function
function make_rank_pirate() {
  for (let i = 0; i < 6; i++) {
    jsPsych.addNodeToEndOfTimeline(
      { timeline: [pick_best_trial, pick_secondBest_trial] },
      jsPsych.resumeExperiment
    );
  }
  make_end();
}


function make_end() {
    // jsPsych.addNodeToEndOfTimeline({timeline: [all_done,pavlovia_finish],}, jsPsych.resumeExperiment);
    jsPsych.addNodeToEndOfTimeline({timeline: [all_done],}, jsPsych.resumeExperiment);

}


// ---------------------------------------------------------------------------------------------------------------- //
// Build timeline
var timeline = []

timeline.push({
	type: 'fullscreen',
	fullscreen_mode: true
});
timeline.push(get_id);
if (!DEBUG) {
  timeline.push(instruc1);
  timeline.push(move_forward);
  timeline.push(instruc2);
  timeline.push(move_forward);
  timeline.push(instruc4);
  timeline.push(move_forward);
  timeline.push(instruc5);
  timeline.push(blue_win);
  timeline.push(blue_alone);
  timeline.push(blue_win);
  timeline.push(blue_alone);
  timeline.push(blue_win);
  timeline.push(blue_alone);
  timeline.push(blue_no_win);
  timeline.push(blue_alone);
  timeline.push(blue_win);
  timeline.push(blue_alone);
  timeline.push(blue_win);
  timeline.push(blue_alone);
  timeline.push(blue_win);
  timeline.push(blue_alone);
  timeline.push(blue_no_win);
  timeline.push(blue_alone);
  timeline.push(blue_win);
  timeline.push(blue_alone);
  timeline.push(blue_win);
  timeline.push(instruc6);
  timeline.push(move_forward);
}
// timeline.push(instruc7);

// for testing purposes, can just launch the test phase right away - comment out instruc 7 tho
var launch_test = {
  type: 'html-keyboard-response',
  stimulus: '',
  choices: jsPsych.NO_KEYS,
  trial_duration: 0,
  on_finish: function() {
    make_test_phase();
  }
};

timeline.push(launch_test);

jsPsych.init({
  timeline: timeline,
  display_element: 'jspsych-target',
	preload_images: all_images,
	preload_audio: all_audio,
	use_webaudio: false,
	max_load_time: 600000,
  on_finish: function() {
    save_final_deter = 'final';
    psiturk.recordUnstructuredData("subject_id", subject_id);
    save_data(true)
    document.body.innerHTML = '<p><center>Thank you for participating in this study! Please wait while your data saves. You will see a smiley face when it is safe to close this tab.</center></p>';
	setTimeout(function () {
		document.body.innerHTML = '<p><center style="font-size:80px">😊</center><p><center>Your data has been saved! You may now close this tab.</center></p>';
	}, 10000);

}
})


